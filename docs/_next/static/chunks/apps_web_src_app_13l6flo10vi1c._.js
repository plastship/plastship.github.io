(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Atom/EditableField/EditableField.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButton",
    ()=>ActionButton,
    "AddressField",
    ()=>AddressField,
    "AddressFullWidth",
    ()=>AddressFullWidth,
    "AddressGrid",
    ()=>AddressGrid,
    "AddressInput",
    ()=>AddressInput,
    "AddressLabel",
    ()=>AddressLabel,
    "ButtonCheckmark",
    ()=>ButtonCheckmark,
    "ButtonSpinner",
    ()=>ButtonSpinner,
    "CardBrandName",
    ()=>CardBrandName,
    "CardNumberInput",
    ()=>CardNumberInput,
    "ColorPickerInput",
    ()=>ColorPickerInput,
    "ColorSwatch",
    ()=>ColorSwatch,
    "ColorTextInput",
    ()=>ColorTextInput,
    "ColorWrapper",
    ()=>ColorWrapper,
    "CurrencyInput",
    ()=>CurrencyInput,
    "CurrencySymbol",
    ()=>CurrencySymbol,
    "CurrencyWrapper",
    ()=>CurrencyWrapper,
    "DurationField",
    ()=>DurationField,
    "DurationInput",
    ()=>DurationInput,
    "DurationLabel",
    ()=>DurationLabel,
    "DurationWrapper",
    ()=>DurationWrapper,
    "EditActions",
    ()=>EditActions,
    "EditContainer",
    ()=>EditContainer,
    "EditInputColumn",
    ()=>EditInputColumn,
    "FieldLabel",
    ()=>FieldLabel,
    "FieldLabelLink",
    ()=>FieldLabelLink,
    "FileFieldPlaceholder",
    ()=>FileFieldPlaceholder,
    "FormattedInputWrapper",
    ()=>FormattedInputWrapper,
    "HelperText",
    ()=>HelperText,
    "IbanInput",
    ()=>IbanInput,
    "InputWrapper",
    ()=>InputWrapper,
    "LocationField",
    ()=>LocationField,
    "LocationInput",
    ()=>LocationInput,
    "LocationLabel",
    ()=>LocationLabel,
    "LocationWrapper",
    ()=>LocationWrapper,
    "PercentInput",
    ()=>PercentInput,
    "PercentSymbol",
    ()=>PercentSymbol,
    "PercentWrapper",
    ()=>PercentWrapper,
    "PlacesList",
    ()=>PlacesList,
    "PlacesWrapper",
    ()=>PlacesWrapper,
    "RatingDisplayRow",
    ()=>RatingDisplayRow,
    "RatingDisplayStar",
    ()=>RatingDisplayStar,
    "RatingGroup",
    ()=>RatingGroup,
    "RatingStarButton",
    ()=>RatingStarButton,
    "Root",
    ()=>Root,
    "SliderInput",
    ()=>SliderInput,
    "SliderReadout",
    ()=>SliderReadout,
    "SliderWrapper",
    ()=>SliderWrapper,
    "StyledCheckbox",
    ()=>StyledCheckbox,
    "StyledInput",
    ()=>StyledInput,
    "StyledTextarea",
    ()=>StyledTextarea,
    "SwitchShell",
    ()=>SwitchShell,
    "ValidityAdornment",
    ()=>ValidityAdornment,
    "ValidityMark",
    ()=>ValidityMark,
    "ValueDisplay",
    ()=>ValueDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/adornment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
'use client';
;
;
/**
 * #1891: gesperrte Eingaben im Bearbeitungsmodus. readOnly (Text bleibt
 * markierbar) → Cursor default, disabled → not-allowed; beide gedämpft aus
 * den Theme-Farben (dunkel: darkTheme tauscht greyLight/greyDark).
 */ const lockedTextCss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &[readonly],
  &:disabled {
    color: ${({ theme })=>theme.palette.default.greyDark};
    background-color: ${({ theme })=>theme.palette.default.greyLight};
  }

  &[readonly] {
    cursor: default;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
/** #1891: gesperrte Steuerelemente ohne natives readOnly (Regler, Farbwähler, Sterne) */ const lockedControlCss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:disabled[data-readonly='true'] {
    cursor: default;
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__Root",
    componentId: "sc-d667ae15-0"
})`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: ${({ $compact, theme })=>$compact ? '0.25rem 0' : theme.padding.extrasmall};
  background-color: ${({ theme })=>theme.palette.default.white};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  width: 100%;
  box-sizing: border-box;
`;
const FieldLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "EditableField.styles__FieldLabel",
    componentId: "sc-d667ae15-1"
})`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin-bottom: ${({ theme })=>theme.margin.extrasmall};
`;
const FieldLabelLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EditableField.styles__FieldLabelLink",
    componentId: "sc-d667ae15-2"
})`
  display: block;
  border: none;
  background: transparent;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.primary};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin-bottom: ${({ theme })=>theme.margin.extrasmall};

  &:hover {
    text-decoration: underline;
  }
`;
const ValueDisplay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__ValueDisplay",
    componentId: "sc-d667ae15-3"
})`
  font-size: 0.9rem;
  color: ${({ $isEmpty, theme })=>$isEmpty ? theme.palette.default.greyDark : theme.palette.default.black};
  font-style: ${({ $isEmpty })=>$isEmpty ? 'italic' : 'normal'};
  padding: 0.25rem ${({ theme })=>theme.padding.extrasmall};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
  box-sizing: border-box;
  min-height: 38px;
  display: flex;
  align-items: center;
  width: 100%;

  ${({ $isEditable, $isEditing, theme })=>$isEditable && !$isEditing && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      cursor: pointer;
      border-bottom: 1px solid ${theme.palette.default.grey};
      border-top: 1px solid transparent;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;

      &:hover {
        background-color: ${theme.palette.default.greyLight};
        border-color: ${theme.palette.default.greyDark};
      }
    `}

  ${({ $isEditable, $isEditing, theme })=>!$isEditable && !$isEditing && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      color: ${theme.palette.default.greyDark};
      background-color: ${theme.palette.default.greyLight};
      cursor: not-allowed;
    `}

  ${({ $isDirty, theme })=>$isDirty && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      background-color: ${theme.palette.default.warning}33;
      border-color: ${theme.palette.default.warning};
    `}
`;
const EditContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__EditContainer",
    componentId: "sc-d667ae15-4"
})`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  width: 100%;
`;
const EditInputColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__EditInputColumn",
    componentId: "sc-d667ae15-5"
})`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
`;
const InputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__InputWrapper",
    componentId: "sc-d667ae15-6"
})`
  display: flex;
  gap: ${({ theme })=>theme.margin.extrasmall};
  align-items: center;
  width: 100%;
`;
// #1891: gemeinsame Basis — Ableitungen unten sind styled.input (nicht
// styled(StyledInput)), damit sie im jsdom ein echtes <input> bleiben.
const textInputCss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  ${lockedTextCss}
  /* layout: inputBase's width: 100% is inert inside flex rows (flex-basis 0% wins) */
  flex: 1;
  min-width: 0;
`;
const StyledInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__StyledInput",
    componentId: "sc-d667ae15-7"
})`
  ${textInputCss}
`;
const PlacesWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(InputWrapper).withConfig({
    displayName: "EditableField.styles__PlacesWrapper",
    componentId: "sc-d667ae15-8"
})`
  position: relative;
`;
const PlacesList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "EditableField.styles__PlacesList",
    componentId: "sc-d667ae15-9"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropdownListStyles"]}
`;
const StyledTextarea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "EditableField.styles__StyledTextarea",
    componentId: "sc-d667ae15-10"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  ${lockedTextCss}
  flex: 1;
  min-width: 0;
  min-height: 80px;
  resize: vertical;
`;
const SwitchShell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__SwitchShell",
    componentId: "sc-d667ae15-11"
})`
  position: relative;
  display: inline-flex;
  align-items: center;
`;
const StyledCheckbox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__StyledCheckbox",
    componentId: "sc-d667ae15-12"
})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 20;

  /* #1891: gesperrt — Schalter-Optik dämpft das Switch-$disabled */
  &:disabled {
    cursor: not-allowed;
  }

  &:disabled[data-readonly='true'] {
    cursor: default;
  }

  /* Sibling-based focus ring on the pill (the input itself is invisible) */
  &:focus-visible + * {
    border-radius: 0.75rem;
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusRing"])()}
  }
`;
const EditActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__EditActions",
    componentId: "sc-d667ae15-13"
})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
const ActionButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EditableField.styles__ActionButton",
    componentId: "sc-d667ae15-14"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.25rem ${({ theme })=>theme.padding.extrasmall};
  font-size: 0.75rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  min-width: 50px;

  ${({ $variant, $isSuccess, theme })=>$variant === 'confirm' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${$isSuccess ? theme.palette.default.success : theme.palette.default.success};
          color: ${theme.palette.default.white};

          &:hover:not(:disabled) {
            background-color: ${theme.palette.default.success};
            filter: brightness(0.9);
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${theme.palette.default.greyDark};
          color: ${theme.palette.default.white};

          &:hover:not(:disabled) {
            background-color: ${theme.palette.default.greyDark};
            filter: brightness(0.85);
          }
        `}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
const ButtonSpinner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__ButtonSpinner",
    componentId: "sc-d667ae15-15"
})`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
const ButtonCheckmark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__ButtonCheckmark",
    componentId: "sc-d667ae15-16"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;

  &::after {
    content: '';
    display: block;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
const HelperText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__HelperText",
    componentId: "sc-d667ae15-17"
})`
  font-size: 0.75rem;
  color: ${({ $hasError, theme })=>$hasError ? theme.palette.default.error : theme.palette.default.greyDark};
  margin-top: 0.125rem;
  font-weight: ${({ $hasError })=>$hasError ? '500' : 'normal'};
`;
const CurrencyWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdornedInputWrapper"]).withConfig({
    displayName: "EditableField.styles__CurrencyWrapper",
    componentId: "sc-d667ae15-18"
})``;
const CurrencySymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAdornment"]).attrs({
    $position: 'end'
}).withConfig({
    displayName: "EditableField.styles__CurrencySymbol",
    componentId: "sc-d667ae15-19"
})``;
const CurrencyInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__CurrencyInput",
    componentId: "sc-d667ae15-20"
})`
  ${textInputCss}
  text-align: right;
  padding-right: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adornedInputPadding"]};
`;
const PercentWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdornedInputWrapper"]).withConfig({
    displayName: "EditableField.styles__PercentWrapper",
    componentId: "sc-d667ae15-21"
})``;
const PercentSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAdornment"]).attrs({
    $position: 'end'
}).withConfig({
    displayName: "EditableField.styles__PercentSymbol",
    componentId: "sc-d667ae15-22"
})``;
const PercentInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__PercentInput",
    componentId: "sc-d667ae15-23"
})`
  ${textInputCss}
  text-align: right;
  padding-right: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adornedInputPadding"]};
`;
const FormattedInputWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdornedInputWrapper"]).withConfig({
    displayName: "EditableField.styles__FormattedInputWrapper",
    componentId: "sc-d667ae15-24"
})``;
const CardNumberInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__CardNumberInput",
    componentId: "sc-d667ae15-25"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  ${lockedTextCss}
  flex: 1;
  min-width: 0;
  /* room for the brand name + validity badge */
  padding-right: 6.5rem;
  font-variant-numeric: tabular-nums;
`;
const IbanInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__IbanInput",
    componentId: "sc-d667ae15-26"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  ${lockedTextCss}
  flex: 1;
  min-width: 0;
  padding-right: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adornedInputPadding"]};
  font-variant-numeric: tabular-nums;
`;
const ValidityAdornment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAdornment"]).attrs({
    $position: 'end'
}).withConfig({
    displayName: "EditableField.styles__ValidityAdornment",
    componentId: "sc-d667ae15-27"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  pointer-events: none;
`;
const CardBrandName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__CardBrandName",
    componentId: "sc-d667ae15-28"
})`
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const ValidityMark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__ValidityMark",
    componentId: "sc-d667ae15-29"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0.9rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ $valid, theme })=>$valid ? theme.palette.default.success : theme.palette.default.error};

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`;
const DurationWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__DurationWrapper",
    componentId: "sc-d667ae15-30"
})`
  display: flex;
  gap: ${({ theme })=>theme.margin.extrasmall};
  width: 100%;
  align-items: center;
`;
const DurationField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__DurationField",
    componentId: "sc-d667ae15-31"
})`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
`;
const DurationLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "EditableField.styles__DurationLabel",
    componentId: "sc-d667ae15-32"
})`
  font-size: 0.7rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  text-transform: uppercase;
`;
const DurationInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__DurationInput",
    componentId: "sc-d667ae15-33"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  ${lockedTextCss}
  width: 100%;
`;
const ColorWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__ColorWrapper",
    componentId: "sc-d667ae15-34"
})`
  display: flex;
  gap: ${({ theme })=>theme.margin.extrasmall};
  align-items: center;
  width: 100%;
`;
const ColorPickerInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__ColorPickerInput",
    componentId: "sc-d667ae15-35"
})`
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  min-height: 38px;
  padding: 0.125rem;
  flex-shrink: 0;
  background-color: ${({ theme })=>theme.palette.default.white};
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  cursor: pointer;
  outline: none;

  &:focus-visible {
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusRing"])()}
  }

  ${lockedControlCss}
`;
const ColorTextInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__ColorTextInput",
    componentId: "sc-d667ae15-36"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  ${lockedTextCss}
  flex: 1;
  min-width: 0;

  ${({ $invalid, theme })=>$invalid && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      border-color: ${theme.palette.default.error};

      &:focus {
        ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusRing"])(true)}
      }
    `}
`;
const ColorSwatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__ColorSwatch",
    componentId: "sc-d667ae15-37"
})`
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  flex-shrink: 0;
  margin-right: 0.375rem;
  background-color: ${({ $color })=>$color};
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: 3px;
`;
const SliderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__SliderWrapper",
    componentId: "sc-d667ae15-38"
})`
  display: flex;
  gap: ${({ theme })=>theme.margin.extrasmall};
  align-items: center;
  width: 100%;
  min-height: 38px;
`;
const SliderInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__SliderInput",
    componentId: "sc-d667ae15-39"
})`
  -webkit-appearance: none;
  appearance: none;
  flex: 1;
  min-width: 0;
  height: 0.375rem;
  margin: 0;
  border-radius: 999px;
  background: ${({ $percent, theme })=>`linear-gradient(to right, ${theme.palette.default.primary} ${$percent}%, ${theme.palette.default.grey} ${$percent}%)`};
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    background: ${({ theme })=>theme.palette.default.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    background: ${({ theme })=>theme.palette.default.primary};
    cursor: pointer;
  }

  &:focus-visible {
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusRing"])()}
  }

  ${lockedControlCss}

  &:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  &:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
`;
const SliderReadout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__SliderReadout",
    componentId: "sc-d667ae15-40"
})`
  font-size: 0.9rem;
  color: ${({ theme })=>theme.palette.default.black};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  min-width: 2.5rem;
  text-align: right;
`;
// ---------------------------------------------------------------------------
// Rating field — star radiogroup (edit) + read-only star row (display)
// ---------------------------------------------------------------------------
/**
 * Shared star coloring: IconStar's polygon ships fill="none" +
 * stroke="currentColor" as presentation attributes, so CSS wins — filled
 * stars get `fill: currentColor` (theme warning), empty stars stay
 * outline-only in grey.
 */ const ratingStarCss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $filled, theme })=>$filled ? theme.palette.default.warning : theme.palette.default.grey};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  ${({ $filled })=>$filled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      svg polygon {
        fill: currentColor;
      }
    `}
`;
const RatingGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__RatingGroup",
    componentId: "sc-d667ae15-41"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  min-height: 38px;
`;
const RatingStarButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EditableField.styles__RatingStarButton",
    componentId: "sc-d667ae15-42"
})`
  ${ratingStarCss}
  background: none;
  border: none;
  margin: 0;
  padding: 0.125rem;
  border-radius: 4px;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusRing"])()}
  }

  ${lockedControlCss}
`;
const RatingDisplayRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__RatingDisplayRow",
    componentId: "sc-d667ae15-43"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  margin-right: 0.375rem;
`;
const RatingDisplayStar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EditableField.styles__RatingDisplayStar",
    componentId: "sc-d667ae15-44"
})`
  ${ratingStarCss}

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
const AddressGrid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__AddressGrid",
    componentId: "sc-d667ae15-45"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme })=>theme.margin.extrasmall};
  width: 100%;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
const AddressField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__AddressField",
    componentId: "sc-d667ae15-46"
})`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;
const AddressLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "EditableField.styles__AddressLabel",
    componentId: "sc-d667ae15-47"
})`
  font-size: 0.7rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  text-transform: uppercase;
`;
const AddressInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__AddressInput",
    componentId: "sc-d667ae15-48"
})`
  ${textInputCss}
  width: 100%;
`;
const AddressFullWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__AddressFullWidth",
    componentId: "sc-d667ae15-49"
})`
  grid-column: 1 / -1;
`;
const LocationWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__LocationWrapper",
    componentId: "sc-d667ae15-50"
})`
  display: flex;
  gap: ${({ theme })=>theme.margin.extrasmall};
  width: 100%;
  align-items: center;
`;
const LocationField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__LocationField",
    componentId: "sc-d667ae15-51"
})`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
`;
const LocationLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "EditableField.styles__LocationLabel",
    componentId: "sc-d667ae15-52"
})`
  font-size: 0.7rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  text-transform: uppercase;
`;
const LocationInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "EditableField.styles__LocationInput",
    componentId: "sc-d667ae15-53"
})`
  ${textInputCss}
  width: 100%;
`;
const FileFieldPlaceholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EditableField.styles__FileFieldPlaceholder",
    componentId: "sc-d667ae15-54"
})`
  box-sizing: border-box;
  width: 100%;
  min-height: calc(
    2 * ${({ theme })=>theme.padding.large} + 4px + 48px + 2 * ${({ theme })=>theme.margin.small} +
      1.3125rem
  );
  border: 2px dashed ${({ theme })=>theme.palette.default.greyDark};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  background-color: ${({ theme })=>theme.palette.default.white};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditableField",
    ()=>EditableField,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$dependsOn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/dependsOn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDebouncedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useDebouncedCallback.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMarkdown$2f$InputMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSelect/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputOtp/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$InputOtp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputTags/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx [app-client] (ecmascript)");
// Switch visual only — the boolean renderer keeps its own real checkbox.
// Precedent: AccessManagementUsersContent imports the same styled parts.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSwitch$2f$InputSwitch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSwitch/InputSwitch.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCheck/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStar$2f$IconStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconStar/IconStar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$useAddressSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/useAddressSearch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/valueFormats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$roleLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/usage/roleLabel.ts [app-client] (ecmascript)");
// #1428/#1478: nur das Context-Objekt — der Provider zöge App-Shell-JavaScript auf öffentliche Seiten
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)");
;
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
/*
 * #1531: Zwei selten gebrauchte Feldarten mit schweren Abhängigkeiten als
 * eigene Chunks. EditableField kennt alle Feldarten und hängt damit auch an
 * den Formularen von /login und /password-reset — dort luden react-markdown
 * (37 KB) und react-dropzone (17 KB) mit, obwohl es nur ein E-Mail- und ein
 * Passwortfeld gibt. next/dynamic lädt sie erst, wenn ein Markdown-Wert
 * angezeigt bzw. ein Datei-Feld gerendert wird; Markup und Testids sind danach
 * dieselben. Bewusst NICHT nachgeladen: Auswahl, Autocomplete, Mehrfachauswahl
 * — die stehen in fast jedem Formular der App.
 */ const MarkdownRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.MarkdownRenderer), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = MarkdownRenderer;
const InputFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Atom/Form/InputFile/InputFile.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.InputFile), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Atom/Form/InputFile/InputFile.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileFieldPlaceholder"], {
            "aria-hidden": "true",
            "data-testid": "editable-field-file-loading"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
            lineNumber: 127,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = InputFile;
/**
 * Field types rendered as a single primary control. For these the outer
 * FieldLabel is associated (htmlFor) with the control's element id.
 * Compound types (address/location/multipicklist/audience) keep their own
 * micro-labels; markdown wires its own label association.
 */ /** #1547: Zahlenfelder mit Text-Draft (Komma und Punkt als Dezimaltrenner). */ const NUMERIC_DRAFT_FIELD_TYPES = new Set([
    'number',
    'currency',
    'percent'
]);
const SINGLE_CONTROL_FIELD_TYPES = new Set([
    'text',
    'number',
    'email',
    'url',
    'phone',
    'password',
    'date',
    'datetime',
    'time',
    'textarea',
    'currency',
    'percent',
    'places',
    'file',
    'boolean',
    'picklist',
    'lookup',
    'creditcard',
    'iban',
    // color renders two inputs, but the hex TEXT input is the primary control
    'color',
    // otp: InputOtp assigns its `id` prop to box 0 (boxes i>0 get `${id}-${i}`)
    'otp',
    // tags: InputTags assigns its `id` prop to the inner text input
    'tags',
    'slider'
]);
/**
 * #511 F1: fieldTypes deren `value` ein Skalar ist — nur für diese rendert
 * `String(value)` einen sinnvollen `data-value` auf dem Display-Element, das
 * E2E-Tests string-frei prüfen können.
 *
 * Bewusst AUSGENOMMEN:
 *  - Objekt-/Array-wertig: address/location (Objekt → '[object Object]'),
 *    audience (Array), file (File) — würden Müll erzeugen. Multi-Picklist
 *    bekommt ihren Wert gesondert als `a;b` (siehe displayDataValue).
 *  - Sensibel: password/otp/creditcard/iban — der Rohwert darf nie als
 *    DOM-Attribut auslesbar sein (das Display maskiert bewusst).
 *  - Groß/verrauscht: textarea/markdown/places.
 */ const DATA_VALUE_FIELD_TYPES = new Set([
    'text',
    'number',
    'date',
    'datetime',
    'time',
    'boolean',
    'picklist',
    'email',
    'url',
    'phone',
    'currency',
    'percent',
    'lookup',
    'color',
    'slider',
    'rating',
    'duration',
    'tags'
]);
const EditableField = ({ fieldName, label, hideLabel = false, value, fieldType = 'text', isEditing = false, isEditable = false, isDirty = false, onChange, onConfirm, onCancel, onStartEdit, readOnly = false, disabled = false, options = [], listMaxHeight, lookupObjectType, lookupFilter, initialLookupDisplay, lookupStaticOptions, onLabelClick, placeholder, helperText, hasError = false, hideEditActions = false, onEnterKey, autoComplete, maxLength, ariaInvalid, ariaDescribedBy, dataAutofocus, dataTestId, currencySymbol = '€', currencyCode = 'EUR', compact = false, multipicklistSeparator = ';', accept, maxFiles, multiple = false, maxSize, otpLength, sliderMin, sliderMax, sliderStep, sliderUnit, ratingMax, tagsSeparator })=>{
    _s();
    const { tr, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const { revision: trRevision } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    // #1640: Anzeige (nicht das Eingabefeld) in der Sprache des Nutzers
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    // #1239 (M-18): nie eine rohe Id als Lookup-/Audience-Namen anzeigen — fehlt
    // der aufgelöste Name, greift der Platzhalter aus useRecordLabel. Renamed
    // to avoid shadowing the `label` prop (the field's own display label).
    const { label: recordLabelOf } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"])();
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const [lookupOptions, setLookupOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lookupLoading, setLookupLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lookupDisplayValue, setLookupDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLookupDisplay ?? '');
    // M14: solange der Name einer Lookup-Id noch geladen wird, zeigt das Feld
    // einen neutralen Ladezustand — nicht den „Unbenannt"-Platzhalter.
    const [lookupResolving, setLookupResolving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Bumped on cancel to remount the lookup InputAutocomplete: its internal
    // input state must reset even when the displayValue prop reverts to the
    // SAME string it had before typing (prop-sync effect would not re-fire).
    const [lookupCancelEpoch, setLookupCancelEpoch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveSuccess, setSaveSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audience field state — #1428: ohne Wert „team", nie „all" (nur admin darf an alle senden)
    const [audienceType, setAudienceType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('team');
    // #1428: „Alle Benutzer" (auch Kunden) bietet die Auswahl nur admin an; ohne
    // Provider (öffentliche Formulare, Tests) ist userContext null → keine Option.
    const { userContext: audienceUserContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSharedUserContext"])();
    const audienceAllowsAll = audienceUserContext?.role === 'admin';
    const [audienceRoleValue, setAudienceRoleValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [audienceUserOptions, setAudienceUserOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [audienceUserLoading, setAudienceUserLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audienceUserDisplay, setAudienceUserDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Star buttons of the rating radiogroup — arrow-key navigation moves focus
    // along with the selection (roving tabindex).
    const ratingStarRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const successTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalLookupDisplayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const testId = dataTestId || `editable-field-${fieldName}`;
    // Element id of the primary edit control — lets the FieldLabel point at it
    // via htmlFor for single-control field types (a11y label association).
    const inputElId = `${testId}-input-el`;
    // #1661: Fehlerbezug und Anfangsfokus für die Einzel-Eingabefelder
    const inputA11yProps = {
        'aria-invalid': ariaInvalid || undefined,
        'aria-describedby': ariaDescribedBy,
        'data-autofocus': dataAutofocus ? '' : undefined
    };
    const labelHtmlFor = isEditing && SINGLE_CONTROL_FIELD_TYPES.has(fieldType) ? inputElId : undefined;
    const effectiveEditable = isEditable && !readOnly && !disabled;
    // #1891: Sperre im Bearbeitungsmodus. disabled schlägt readOnly. Nur die
    // ausdrücklichen Props sperren — isEditable=false allein nicht, viele
    // Aufrufer setzen isEditing ohne isEditable (Formulare, Filter).
    const lockState = disabled ? 'disabled' : readOnly ? 'readonly' : 'editable';
    const isLocked = lockState !== 'editable';
    const isReadOnlyLock = lockState === 'readonly';
    // Textartige Eingaben: readOnly bleibt fokussier- und markierbar, disabled nicht
    const textLockProps = {
        disabled: disabled || undefined,
        readOnly: isReadOnlyLock || undefined,
        'aria-disabled': disabled || undefined,
        'aria-readonly': isReadOnlyLock || undefined,
        'data-disabled': disabled ? 'true' : undefined,
        'data-readonly': isReadOnlyLock ? 'true' : undefined
    };
    // Steuerelemente ohne natives readOnly (Schalter, Regler, Farbwähler, Sterne):
    // beide Sperren sind natives disabled; aria-readonly sagt die Art an.
    const controlLockProps = {
        disabled: isLocked || undefined,
        'aria-disabled': isLocked || undefined,
        'aria-readonly': isReadOnlyLock || undefined,
        'data-disabled': isLocked ? 'true' : undefined,
        'data-readonly': isReadOnlyLock ? 'true' : undefined
    };
    // #511 F1: string-frei prüfbarer Display-Wert (nur skalare, nicht-sensible
    // fieldTypes — siehe DATA_VALUE_FIELD_TYPES).
    // #1640: Multi-Picklist zusätzlich im Salesforce-Format `a;b` — das Display
    // zeigt übersetzte Labels, ein E2E-Test braucht die gespeicherten Werte.
    const displayDataValue = fieldType === 'multipicklist' ? Array.isArray(value) ? value.join(';') : typeof value === 'string' && value !== '' ? value : undefined : DATA_VALUE_FIELD_TYPES.has(fieldType) && value !== null && value !== undefined ? String(value) : undefined;
    const prevValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    // Only reset local value when external value ACTUALLY changes (not just on re-render)
    // This preserves edited values when clicking elsewhere
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            // Only reset if the external value has actually changed (e.g., after save or data reload)
            // Don't reset just because we stopped editing
            if (prevValueRef.current !== value) {
                setLocalValue(value);
                prevValueRef.current = value;
            }
        }
    }["EditableField.useEffect"], [
        value
    ]);
    // ── Duration field: local hh/mm draft (kept as strings so "both cleared"
    // is distinguishable from 0 h 0 min → emits null) ──
    const [durationDraft, setDurationDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        h: '',
        m: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            if (fieldType !== 'duration') return;
            const total = typeof value === 'number' && Number.isFinite(value) ? Math.max(0, Math.round(value)) : null;
            setDurationDraft(total === null ? {
                h: '',
                m: ''
            } : {
                h: String(Math.floor(total / 60)),
                m: String(total % 60)
            });
        }
    }["EditableField.useEffect"], [
        fieldType,
        value,
        isEditing
    ]);
    // ── Color field: local hex text draft — emits via handleChange only when
    // normalizeHexColor accepts it; invalid drafts surface an error on blur ──
    const [colorDraft, setColorDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [colorDraftInvalid, setColorDraftInvalid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            if (fieldType !== 'color') return;
            setColorDraft(typeof value === 'string' ? value : '');
            setColorDraftInvalid(false);
        }
    }["EditableField.useEffect"], [
        fieldType,
        value,
        isEditing
    ]);
    // ── Zahlenfelder (number/currency/percent): Text-Draft (#1547). Vorher war
    // das Input direkt an String(Zahl) gebunden — „0,0" wurde zu 0 → „0", React
    // setzte das Feld zurück und das Komma war weg (0,01 nicht eingebbar). Das
    // Input zeigt jetzt den getippten Text; geparst wird für onChange/onConfirm.
    // Der Draft folgt localValue nur, wenn er eine ANDERE Zahl meint — so setzt
    // ein Elternteil, das den geparsten Wert zurückreicht (FormEditableField),
    // den Text nicht zurück, Abbrechen/Neuladen aber schon. ──
    const isNumericDraftField = NUMERIC_DRAFT_FIELD_TYPES.has(fieldType);
    const [numericDraft, setNumericDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EditableField.useState": ()=>isNumericDraftField ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimalDraft"])(localValue, fmt.locale) : ''
    }["EditableField.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            if (!isNumericDraftField) return;
            const incoming = typeof localValue === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDecimalInput"])(localValue) ?? null : localValue;
            setNumericDraft({
                "EditableField.useEffect": (prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDecimalInput"])(prev) === (typeof incoming === 'number' ? incoming : null) ? prev : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDecimalDraft"])(incoming, fmt.locale)
            }["EditableField.useEffect"]);
        }
    }["EditableField.useEffect"], [
        isNumericDraftField,
        localValue,
        fmt.locale
    ]);
    // ── Creditcard/IBAN caret restore: format-on-change reflows the input text,
    // so the change handler records "significant chars before the caret" here
    // and this layout effect maps that count back into the reformatted string. ──
    const formattedCaretRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "EditableField.useLayoutEffect": ()=>{
            if (!isEditing || fieldType !== 'creditcard' && fieldType !== 'iban') return;
            const pending = formattedCaretRef.current;
            formattedCaretRef.current = null;
            const el = inputRef.current;
            if (pending === null || !(el instanceof HTMLInputElement)) return;
            const caret = fieldType === 'creditcard' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caretIndexForDigitCount"])(el.value, pending) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanCaretIndexForCharCount"])(el.value, pending);
            el.setSelectionRange(caret, caret);
        }
    }["EditableField.useLayoutEffect"], [
        localValue,
        fieldType,
        isEditing
    ]);
    // Focus input when entering edit mode (lookup focuses itself via the
    // InputAutocomplete autoFocus prop — inputRef is not attached there)
    //
    // #1081: nur beim Übergang „nicht editierend → editierend" fokussieren, nicht
    // beim Mount. Filter- und Pagination-Felder sind dauerhaft editierend; das
    // zuletzt gemountete (die untere Pagination) zog sonst bei jedem Seitenaufruf
    // den Fokus an sich und scrollte die Liste ans Ende.
    const wasEditingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isEditing);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            const wasEditing = wasEditingRef.current;
            wasEditingRef.current = isEditing;
            if (wasEditing || !isEditing) return;
            // otp/tags manage focus internally (auto-advance boxes / chip input) and
            // rating is a button radiogroup — none of them attach inputRef. Slider
            // DOES keep the inputRef focus (a range input is focusable).
            if (fieldType === 'otp' || fieldType === 'tags' || fieldType === 'rating') return;
            if (inputRef.current) {
                inputRef.current.focus();
                // Select all text for text inputs (range/checkbox don't support select())
                if (inputRef.current instanceof HTMLInputElement && fieldType !== 'boolean' && fieldType !== 'slider') {
                    inputRef.current.select();
                }
            }
        }
    }["EditableField.useEffect"], [
        isEditing,
        fieldType
    ]);
    // Seed the lookup display name (and the cancel-baseline) from a pre-resolved
    // name passed by the parent (record's `X__r.Name`). Lets routeless/uninteg-
    // rated lookup targets render a name without hitting the lookup API.
    // Der Name gehört nur zu dem Wert, mit dem er kam (#1820): gesetzt → leer →
    // derselbe Wert zeigt ihn wieder (#1808), eine neue Inline-Auswahl (B statt
    // des gespeicherten A) wird aber nicht auf den alten Namen zurückgesetzt.
    const seedValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            seedValueRef.current = value;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- bewusst nur bei neuem Seed
        }
    }["EditableField.useEffect"], [
        initialLookupDisplay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            if (fieldType === 'lookup' && initialLookupDisplay && value && value === seedValueRef.current) {
                setLookupDisplayValue(initialLookupDisplay);
                originalLookupDisplayRef.current = initialLookupDisplay;
            }
        }
    }["EditableField.useEffect"], [
        fieldType,
        initialLookupDisplay,
        value
    ]);
    // #1808: Wird ein gesetzter Lookup von außen geleert (z. B. dependsOn leert
    // den Vertrag beim Account-Wechsel), muss auch der angezeigte Name weg —
    // sonst stünde der alte Name im Feld, obwohl der Wert leer ist. Nur beim
    // Übergang gesetzt → leer, damit eine laufende Suche nicht gelöscht wird.
    const prevLookupValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            const previous = prevLookupValueRef.current;
            prevLookupValueRef.current = value;
            if (fieldType !== 'lookup') return;
            const nowEmpty = value === '' || value === null || value === undefined;
            if (nowEmpty && typeof previous === 'string' && previous !== '') {
                setLookupDisplayValue('');
                originalLookupDisplayRef.current = '';
            }
        }
    }["EditableField.useEffect"], [
        fieldType,
        value
    ]);
    // Fetch lookup display value when we have an ID and no pre-resolved name.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            if (fieldType === 'lookup' && lookupObjectType && value && typeof value === 'string' && !initialLookupDisplay) {
                // Statische Optionen (Sentinel-Werte wie "(LEER)") nie per API aufloesen
                const staticMatch = lookupStaticOptions?.find({
                    "EditableField.useEffect": (opt)=>opt.value === value
                }["EditableField.useEffect"]);
                if (staticMatch) {
                    setLookupDisplayValue(staticMatch.label);
                    originalLookupDisplayRef.current = staticMatch.label;
                    return;
                }
                const fetchDisplayValue = {
                    "EditableField.useEffect.fetchDisplayValue": async ()=>{
                        setLookupResolving(true);
                        try {
                            // #1478: HTTP-Client erst mit der Lookup-Anfrage laden (Formulare auf öffentlichen Seiten)
                            const { api } = await __turbopack_context__.A("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript, async loader)");
                            const response = await api.get(`/salesforce/lookup?objectType=${lookupObjectType}&q=${value}&limit=1`);
                            const data = response.data;
                            if (data.records && data.records.length > 0) {
                                const resolved = data.records[0].label ?? '';
                                setLookupDisplayValue(resolved);
                                originalLookupDisplayRef.current = resolved;
                            }
                        } catch (err) {
                            console.error('Error fetching lookup display value:', err);
                        } finally{
                            setLookupResolving(false);
                        }
                    }
                }["EditableField.useEffect.fetchDisplayValue"];
                void fetchDisplayValue();
            }
        }
    }["EditableField.useEffect"], [
        fieldType,
        lookupObjectType,
        value,
        initialLookupDisplay,
        lookupStaticOptions
    ]);
    // Debounced lookup search
    const searchLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDebouncedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "EditableField.useDebouncedCallback[searchLookup]": async (searchTerm)=>{
            if (!lookupObjectType) return;
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            // #205: statische Optionen matchen ohne Mindest-Zeichenzahl (Label-includes),
            // damit sie schon bei Fokus mit leerem Input angeboten werden
            const staticMatches = (lookupStaticOptions ?? []).filter({
                "EditableField.useDebouncedCallback[searchLookup].staticMatches": (opt)=>opt.label.toLowerCase().includes(searchTerm.toLowerCase())
            }["EditableField.useDebouncedCallback[searchLookup].staticMatches"]);
            // #917: mit abhängigem Filter liefert auch der leere Begriff die passenden
            // Werte (Dropdown bei Fokus), sonst gilt die Mindestlänge.
            if (searchTerm.length < 2 && !lookupFilter) {
                setLookupOptions(staticMatches);
                setLookupLoading(false);
                return;
            }
            setLookupLoading(true);
            abortControllerRef.current = new AbortController();
            try {
                // #1478: HTTP-Client erst mit der Lookup-Anfrage laden (Formulare auf öffentlichen Seiten)
                const { api } = await __turbopack_context__.A("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript, async loader)");
                const response = await api.get(`/salesforce/lookup?objectType=${lookupObjectType}&q=${encodeURIComponent(searchTerm)}&limit=10${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$dependsOn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupFilterQuery"])(lookupFilter)}`, {
                    signal: abortControllerRef.current.signal
                });
                const apiOptions = (response.data.records || []).map({
                    "EditableField.useDebouncedCallback[searchLookup].apiOptions": (record)=>({
                            ...record,
                            label: record.label ?? ''
                        })
                }["EditableField.useDebouncedCallback[searchLookup].apiOptions"]);
                setLookupOptions([
                    ...staticMatches,
                    ...apiOptions
                ]);
            } catch (err) {
                // wie axios.isCancel (#1478: ohne axios im ersten JavaScript)
                if (err?.__CANCEL__ !== true) {
                    console.error('Error searching lookup:', err);
                }
            } finally{
                setLookupLoading(false);
            }
        }
    }["EditableField.useDebouncedCallback[searchLookup]"], 300);
    // Audience base-type options — translation-aware picklist options live
    // inside the component, built with useMemo keyed on the translator
    // (components CLAUDE.md §2).
    const audienceTypeOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditableField.useMemo[audienceTypeOptions]": ()=>[
                // #1428: „Team" = admin + staff; „Alle" erreicht auch Kunden und ist nur für admin
                {
                    value: 'team',
                    label: tr('editableField.audience.typeTeam', {
                        defaultValue: 'Team (Staff und Admin)'
                    })
                },
                ...audienceAllowsAll ? [
                    {
                        value: 'all',
                        label: tr('editableField.audience.typeAllAdminOnly', {
                            defaultValue: 'Alle Benutzer (auch Kunden, nur Admin)'
                        })
                    }
                ] : [],
                {
                    value: 'role',
                    label: tr('editableField.audience.typeRole', {
                        defaultValue: 'Nach Rolle'
                    })
                },
                {
                    value: 'user',
                    label: tr('editableField.audience.typeUser', {
                        defaultValue: 'Einzelner Benutzer'
                    })
                }
            ]
    }["EditableField.useMemo[audienceTypeOptions]"], // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        tr,
        trRevision,
        audienceAllowsAll
    ]);
    // ── Audience field: parse current value into base type + sub-value ──
    // #1626: Rollennamen in der Sprache des Nutzers (Wert bleibt der Rollen-Schlüssel)
    // #1869: alle Rollen aus ROLES (notify.ts nimmt jede Rolle an), zentrale Benennung
    const AUDIENCE_ROLES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditableField.useMemo[AUDIENCE_ROLES]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$roleLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rollenOptionen"])(tr)
    }["EditableField.useMemo[AUDIENCE_ROLES]"], // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        tr,
        trRevision
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            if (fieldType !== 'audience') return;
            const val = String(value || 'team');
            if (val === 'all') {
                setAudienceType('all');
            } else if (val.startsWith('role:')) {
                setAudienceType('role');
                setAudienceRoleValue(val.replace('role:', ''));
            } else if (val.startsWith('user:')) {
                setAudienceType('user');
                // Resolve user display name
                const userId = val.replace('user:', '');
                if (userId) {
                    void ({
                        "EditableField.useEffect": async ()=>{
                            try {
                                // #1478: HTTP-Client erst mit der Lookup-Anfrage laden (Formulare auf öffentlichen Seiten)
                                const { api } = await __turbopack_context__.A("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript, async loader)");
                                const res = await api.get(`/users/search?q=${encodeURIComponent(userId)}&limit=1`);
                                const found = res.data.data.find({
                                    "EditableField.useEffect.found": (u)=>u.id === userId
                                }["EditableField.useEffect.found"]);
                                if (found) {
                                    setAudienceUserDisplay(found.name || found.email);
                                }
                            } catch  {
                            /* ignore */ }
                        }
                    })["EditableField.useEffect"]();
                }
            } else {
                setAudienceType('team');
            }
        }
    }["EditableField.useEffect"], [
        fieldType,
        value
    ]);
    // Audience: debounced user search
    const searchAudienceUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDebouncedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "EditableField.useDebouncedCallback[searchAudienceUsers]": async (term)=>{
            if (term.length < 2) {
                setAudienceUserOptions([]);
                return;
            }
            setAudienceUserLoading(true);
            try {
                // #1478: HTTP-Client erst mit der Lookup-Anfrage laden (Formulare auf öffentlichen Seiten)
                const { api } = await __turbopack_context__.A("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript, async loader)");
                const res = await api.get(`/users/search?q=${encodeURIComponent(term)}&limit=10`);
                setAudienceUserOptions(res.data.data.map({
                    "EditableField.useDebouncedCallback[searchAudienceUsers]": (u)=>({
                            value: u.id,
                            label: u.name || u.email,
                            secondaryLabel: u.email
                        })
                }["EditableField.useDebouncedCallback[searchAudienceUsers]"]));
            } catch (err) {
                console.error('Error searching users:', err);
            } finally{
                setAudienceUserLoading(false);
            }
        }
    }["EditableField.useDebouncedCallback[searchAudienceUsers]"], 300);
    // Handle clicking on display value to start editing
    const handleDisplayClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleDisplayClick]": ()=>{
            if (effectiveEditable && !isEditing && onStartEdit) {
                onStartEdit(fieldName);
            }
        }
    }["EditableField.useCallback[handleDisplayClick]"], [
        effectiveEditable,
        isEditing,
        onStartEdit,
        fieldName
    ]);
    // Handle value change
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleChange]": (newValue)=>{
            // #1891: gesperrt → kein Wert, kein onChange (auch nicht über Wege, die
            // am nativen Attribut vorbeigehen: Places-Auswahl, synthetische Events)
            if (isLocked) return;
            setLocalValue(newValue);
            onChange?.(fieldName, newValue);
        }
    }["EditableField.useCallback[handleChange]"], [
        fieldName,
        onChange,
        isLocked
    ]);
    // #1547: Zahlenfeld-Eingabe — Text behalten, geparste Zahl weitergeben.
    // Ungültige Zeichen verwerfen den Tastendruck (Draft bleibt, React stellt
    // den alten Text wieder her).
    const handleNumericDraftChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleNumericDraftChange]": (text)=>{
            if (isLocked) return;
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDecimalInput"])(text);
            if (parsed === undefined) return;
            setNumericDraft(text);
            handleChange(parsed);
        }
    }["EditableField.useCallback[handleNumericDraftChange]"], [
        handleChange,
        isLocked
    ]);
    // Duration: emit total minutes from the hh/mm draft (both empty → null)
    const emitDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[emitDuration]": (h, m)=>{
            if (h.trim() === '' && m.trim() === '') {
                handleChange(null);
                return;
            }
            const hours = parseInt(h, 10);
            const minutes = parseInt(m, 10);
            const hh = Number.isFinite(hours) ? Math.max(0, hours) : 0;
            const mm = Number.isFinite(minutes) ? Math.max(0, minutes) : 0;
            handleChange(hh * 60 + mm);
        }
    }["EditableField.useCallback[emitDuration]"], [
        handleChange
    ]);
    // Audience: handle base type change
    const handleAudienceTypeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleAudienceTypeChange]": (newType)=>{
            if (isLocked) return;
            setAudienceType(newType);
            setAudienceUserDisplay('');
            setAudienceUserOptions([]);
            if (newType === 'team' || newType === 'all') {
                handleChange(newType);
            } else if (newType === 'role') {
                const defaultRole = audienceRoleValue || 'admin';
                setAudienceRoleValue(defaultRole);
                handleChange(`role:${defaultRole}`);
            } else {
                // user — don't emit until user is selected
                handleChange('user:');
            }
        }
    }["EditableField.useCallback[handleAudienceTypeChange]"], [
        handleChange,
        audienceRoleValue,
        isLocked
    ]);
    // Handle confirm with visual feedback
    const handleConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleConfirm]": async ()=>{
            if (isSaving) return;
            // Clear any existing success timeout
            if (successTimeoutRef.current) {
                clearTimeout(successTimeoutRef.current);
            }
            setIsSaving(true);
            setSaveSuccess(false);
            try {
                // Call onConfirm - it may be async
                await onConfirm?.(fieldName, localValue);
                // Show success state briefly
                setSaveSuccess(true);
                successTimeoutRef.current = setTimeout({
                    "EditableField.useCallback[handleConfirm]": ()=>{
                        setSaveSuccess(false);
                    }
                }["EditableField.useCallback[handleConfirm]"], 1500);
            } finally{
                setIsSaving(false);
            }
        }
    }["EditableField.useCallback[handleConfirm]"], [
        fieldName,
        localValue,
        onConfirm,
        isSaving
    ]);
    // Handle cancel - explicitly reset to original value
    const handleCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleCancel]": ()=>{
            if (isSaving) return;
            setLocalValue(value); // Reset to original value
            prevValueRef.current = value; // Update ref so useEffect doesn't re-trigger
            setSaveSuccess(false);
            if (fieldType === 'lookup') {
                setLookupDisplayValue(originalLookupDisplayRef.current);
                // Remount the autocomplete so its internal input text resets even when
                // the restored display value is identical to the pre-edit one.
                setLookupCancelEpoch({
                    "EditableField.useCallback[handleCancel]": (epoch)=>epoch + 1
                }["EditableField.useCallback[handleCancel]"]);
            }
            onCancel?.(fieldName);
        }
    }["EditableField.useCallback[handleCancel]"], [
        fieldName,
        value,
        onCancel,
        isSaving,
        fieldType
    ]);
    // Cleanup timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>{
            return ({
                "EditableField.useEffect": ()=>{
                    if (successTimeoutRef.current) {
                        clearTimeout(successTimeoutRef.current);
                    }
                }
            })["EditableField.useEffect"];
        }
    }["EditableField.useEffect"], []);
    // Handle keyboard shortcuts
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleKeyDown]": (event)=>{
            if (event.key === 'Escape') {
                event.preventDefault();
                handleCancel();
            } else if (event.key === 'Enter' && fieldType !== 'textarea') {
                event.preventDefault();
                if (onEnterKey) {
                    onEnterKey();
                } else {
                    handleConfirm();
                }
            }
        }
    }["EditableField.useCallback[handleKeyDown]"], [
        handleCancel,
        handleConfirm,
        fieldType,
        onEnterKey
    ]);
    // #2135: Ortsfeld — Adresssuche über die eigene Route /api/geo/search/
    // (Photon, selbst gehostet). Treffer als Liste unter dem Feld; freie
    // Eingabe bleibt möglich (dann ohne Koordinaten).
    const placesSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$useAddressSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddressSearch"])({
        enabled: fieldType === 'places' && isEditing && !isLocked,
        lang: i18n?.language
    });
    const [placesOpen, setPlacesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [placesActive, setPlacesActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const placesBlurTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditableField.useEffect": ()=>({
                "EditableField.useEffect": ()=>{
                    if (placesBlurTimer.current) clearTimeout(placesBlurTimer.current);
                }
            })["EditableField.useEffect"]
    }["EditableField.useEffect"], []);
    const placesListVisible = placesOpen && placesSearch.results.length > 0;
    const selectPlace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[selectPlace]": (index)=>{
            const place = placesSearch.results[index];
            if (!place) return;
            handleChange({
                address: place.label,
                lat: place.lat,
                lng: place.lng
            });
            setPlacesOpen(false);
            setPlacesActive(-1);
            placesSearch.clear();
        }
    }["EditableField.useCallback[selectPlace]"], [
        placesSearch,
        handleChange
    ]);
    const handlePlacesKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handlePlacesKeyDown]": (e)=>{
            if (!placesListVisible) {
                handleKeyDown(e);
                return;
            }
            // Liste offen: Pfeile/Enter/Escape gehören der Liste, nicht dem Feld
            const anzahl = placesSearch.results.length;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setPlacesActive({
                    "EditableField.useCallback[handlePlacesKeyDown]": (i)=>Math.min(i + 1, anzahl - 1)
                }["EditableField.useCallback[handlePlacesKeyDown]"]);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setPlacesActive({
                    "EditableField.useCallback[handlePlacesKeyDown]": (i)=>Math.max(i - 1, 0)
                }["EditableField.useCallback[handlePlacesKeyDown]"]);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                if (placesActive >= 0) selectPlace(placesActive);
                else setPlacesOpen(false);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                setPlacesOpen(false);
            } else {
                handleKeyDown(e);
            }
        }
    }["EditableField.useCallback[handlePlacesKeyDown]"], [
        placesListVisible,
        placesSearch.results.length,
        placesActive,
        selectPlace,
        handleKeyDown
    ]);
    // Handle lookup search
    const handleLookupSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleLookupSearch]": (searchTerm)=>{
            setLookupDisplayValue(searchTerm);
            void searchLookup(searchTerm);
        }
    }["EditableField.useCallback[handleLookupSearch]"], [
        searchLookup
    ]);
    // Handle lookup selection (option comes from InputAutocomplete)
    // Gespeichert wird der ROHE Name des Treffers (leer bei namenlosen), nicht
    // der angezeigte Platzhalter — sonst ginge die data-unnamed-Markierung von
    // `recordLabelOf(lookupDisplayValue)` verloren.
    const handleLookupSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[handleLookupSelect]": (option)=>{
            handleChange(option.value);
            setLookupDisplayValue(lookupOptions.find({
                "EditableField.useCallback[handleLookupSelect]": (opt)=>opt.value === option.value
            }["EditableField.useCallback[handleLookupSelect]"])?.label ?? '');
        }
    }["EditableField.useCallback[handleLookupSelect]"], [
        handleChange,
        lookupOptions
    ]);
    // Lookup options in the InputAutocomplete shape (details → secondaryLabel;
    // die Lookup-API selbst liefert das Feld bereits als `secondaryLabel`)
    // Namenlose Treffer (label '') zeigen den Platzhalter, nie die Id (I4).
    // Gemerkt (nur an Optionen + Platzhaltertext, `tr` ist nicht referenz-
    // stabil), weil InputAutocomplete bei jeder neuen Options-Referenz das
    // Dropdown wieder oeffnet (Tastaturauswahl bestaetigte sonst nie); der
    // Platzhaltertext ist Abhaengigkeit, damit nachgeladene Uebersetzungen
    // durchschlagen (M12).
    const unnamedPlaceholder = recordLabelOf(null).text;
    const lookupAutocompleteOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditableField.useMemo[lookupAutocompleteOptions]": ()=>lookupOptions.map({
                "EditableField.useMemo[lookupAutocompleteOptions]": (opt)=>({
                        value: opt.value,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLabel"])(opt.label) ?? unnamedPlaceholder,
                        secondaryLabel: opt.details ?? opt.secondaryLabel ?? undefined
                    })
            }["EditableField.useMemo[lookupAutocompleteOptions]"])
    }["EditableField.useMemo[lookupAutocompleteOptions]"], [
        lookupOptions,
        unnamedPlaceholder
    ]);
    // #1239 (M-18): der Anzeige-Name für Lookup-/Audience-Werte — nie die rohe
    // Id/UUID. Ohne aufgelösten Namen liefert `label()` den Platzhalter und
    // markiert das Ergebnis als `unnamed`, damit die ValueDisplay data-unnamed setzt.
    // Nicht gemerkt (M12, siehe oben).
    const lookupLabel = lookupResolving ? {
        text: tr('editableField.lookup.resolving', {
            defaultValue: '…'
        }),
        unnamed: false
    } : recordLabelOf(lookupDisplayValue);
    const audienceUserLabel = recordLabelOf(audienceUserDisplay);
    const hasValue = value !== null && value !== undefined && value !== '';
    const displayUnnamed = hasValue && (fieldType === 'lookup' && lookupLabel.unnamed || fieldType === 'audience' && typeof value === 'string' && value.startsWith('user:') && audienceUserLabel.unnamed);
    // Format value for display
    const formatDisplayValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableField.useCallback[formatDisplayValue]": ()=>{
            if (value === null || value === undefined || value === '') {
                return tr('editableField.display.empty', {
                    defaultValue: '(leer)'
                });
            }
            switch(fieldType){
                case 'boolean':
                    return value ? tr('editableField.boolean.yes', {
                        defaultValue: 'Ja'
                    }) : tr('editableField.boolean.no', {
                        defaultValue: 'Nein'
                    });
                case 'password':
                    // Never reveal length or content in display mode.
                    return '••••••••';
                case 'file':
                    {
                        if (Array.isArray(value)) {
                            const files = value;
                            if (files.length === 0) return tr('editableField.file.none', {
                                defaultValue: '(keine Datei)'
                            });
                            if (files.length === 1) return files[0].name;
                            // NOTE: param is deliberately NOT named `count` — the real tr()
                            // would branch into `${key}_plural` lookup and skip defaultValue.
                            return tr('editableField.file.count', {
                                defaultValue: '{{n}} Dateien',
                                n: files.length
                            });
                        }
                        if (value instanceof File) return value.name;
                        if (typeof value === 'string' && value) return value;
                        return tr('editableField.file.none', {
                            defaultValue: '(keine Datei)'
                        });
                    }
                case 'places':
                    {
                        if (value && typeof value === 'object') {
                            const pv = value;
                            return pv.address || tr('editableField.display.empty', {
                                defaultValue: '(leer)'
                            });
                        }
                        if (typeof value === 'string' && value) return value;
                        return tr('editableField.display.empty', {
                            defaultValue: '(leer)'
                        });
                    }
                case 'date':
                    if (typeof value === 'string') {
                        return fmt.date(value);
                    }
                    return String(value);
                case 'datetime':
                    if (typeof value === 'string') {
                        return fmt.dateTime(value);
                    }
                    return String(value);
                case 'time':
                    // Stored as "HH:mm" (matches the native <input type="time"> value)
                    return typeof value === 'string' ? value : String(value);
                case 'picklist':
                    {
                        const option = options.find({
                            "EditableField.useCallback[formatDisplayValue].option": (opt)=>opt.value === value
                        }["EditableField.useCallback[formatDisplayValue].option"]);
                        return option?.label || String(value);
                    }
                case 'multipicklist':
                    {
                        // Value is either a semicolon-separated string or an array
                        const selectedValues = Array.isArray(value) ? value : typeof value === 'string' ? value.split(';').filter(Boolean) : [];
                        const labels = selectedValues.map({
                            "EditableField.useCallback[formatDisplayValue].labels": (v)=>{
                                const opt = options.find({
                                    "EditableField.useCallback[formatDisplayValue].labels.opt": (o)=>o.value === v
                                }["EditableField.useCallback[formatDisplayValue].labels.opt"]);
                                return opt?.label || v;
                            }
                        }["EditableField.useCallback[formatDisplayValue].labels"]);
                        return labels.length > 0 ? labels.join(', ') : tr('editableField.display.empty', {
                            defaultValue: '(leer)'
                        });
                    }
                case 'lookup':
                    return lookupLabel.text;
                case 'number':
                    if (typeof value === 'number') {
                        return fmt.number(value, {
                            maximumFractionDigits: 3
                        });
                    }
                    return String(value);
                case 'currency':
                    if (typeof value === 'number') {
                        return fmt.number(value, {
                            style: 'currency',
                            currency: currencyCode
                        });
                    }
                    return String(value);
                case 'percent':
                    if (typeof value === 'number') {
                        return fmt.percent(value);
                    }
                    return String(value);
                case 'address':
                    {
                        const addr = value;
                        const parts = [
                            addr.street,
                            addr.postalCode,
                            addr.city,
                            addr.state,
                            addr.country
                        ].filter(Boolean);
                        return parts.length > 0 ? parts.join(', ') : tr('editableField.display.empty', {
                            defaultValue: '(leer)'
                        });
                    }
                case 'location':
                    {
                        const loc = value;
                        if (loc.latitude !== undefined && loc.longitude !== undefined) {
                            return `${loc.latitude.toFixed(6)}, ${loc.longitude.toFixed(6)}`;
                        }
                        return tr('editableField.display.empty', {
                            defaultValue: '(leer)'
                        });
                    }
                case 'creditcard':
                    // PCI-DSS: display mode never reveals more than the last 4 digits.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maskCardNumber"])(String(value));
                case 'iban':
                    // Grouped but unmasked — IBANs are not secrets.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanGroup"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanCompact"])(String(value)));
                case 'duration':
                    {
                        const minutes = typeof value === 'number' ? value : Number(value);
                        return Number.isFinite(minutes) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDurationDe"])(minutes) : String(value);
                    }
                case 'color':
                    // Plain hex text; renderDisplayValue() adds the swatch JSX around it.
                    return String(value);
                case 'otp':
                    // Never echo the code — display is always a fixed-length bullet mask.
                    return '•'.repeat(otpLength ?? 6);
                case 'tags':
                    {
                        const sep = tagsSeparator ?? ';';
                        const tags = (Array.isArray(value) ? value.map(String) : String(value).split(sep)).map({
                            "EditableField.useCallback[formatDisplayValue].tags": (t)=>t.trim()
                        }["EditableField.useCallback[formatDisplayValue].tags"]).filter(Boolean);
                        return tags.length > 0 ? tags.join(', ') : tr('editableField.display.empty', {
                            defaultValue: '(leer)'
                        });
                    }
                case 'slider':
                    {
                        const num = typeof value === 'number' ? value : Number(value);
                        if (!Number.isFinite(num)) return String(value);
                        return sliderUnit ? `${fmt.number(num, {
                            maximumFractionDigits: 3
                        })} ${sliderUnit}` : fmt.number(num, {
                            maximumFractionDigits: 3
                        });
                    }
                case 'rating':
                    {
                        // String fallback; renderDisplayValue() prefixes the star-row JSX.
                        const num = typeof value === 'number' ? value : Number(value);
                        return Number.isFinite(num) ? `${num} / ${ratingMax ?? 5}` : String(value);
                    }
                case 'audience':
                    {
                        const audVal = String(value);
                        if (audVal === 'team') return tr('editableField.audience.typeTeam', {
                            defaultValue: 'Team (Staff und Admin)'
                        });
                        if (audVal === 'all') return tr('editableField.audience.typeAllAdminOnly', {
                            defaultValue: 'Alle Benutzer (auch Kunden, nur Admin)'
                        });
                        if (audVal.startsWith('role:')) {
                            const roleName = audVal.replace('role:', '');
                            const roleLabel = AUDIENCE_ROLES.find({
                                "EditableField.useCallback[formatDisplayValue]": (r)=>r.value === roleName
                            }["EditableField.useCallback[formatDisplayValue]"])?.label || roleName;
                            return tr('editableField.audience.displayRole', {
                                defaultValue: 'Rolle: {{role}}',
                                role: roleLabel
                            });
                        }
                        if (audVal.startsWith('user:')) {
                            return tr('editableField.audience.displayUser', {
                                defaultValue: 'Benutzer: {{user}}',
                                user: audienceUserLabel.text
                            });
                        }
                        return String(value);
                    }
                default:
                    return String(value);
            }
        }
    }["EditableField.useCallback[formatDisplayValue]"], [
        value,
        fieldType,
        options,
        lookupLabel,
        currencyCode,
        AUDIENCE_ROLES,
        audienceUserLabel,
        otpLength,
        tagsSeparator,
        sliderUnit,
        ratingMax,
        tr,
        fmt
    ]);
    /**
   * Display-mode value as a ReactNode. Most field types render the plain
   * string from {@link formatDisplayValue} (which stays string-only for ALL
   * types — tests/consumers rely on it); the JSX special cases live here:
   * - markdown → MarkdownRenderer preview
   * - color → swatch square + hex text
   * - rating → read-only star row (spans, no buttons) + the '3 / 5' string
   *   from formatDisplayValue()
   */ const renderDisplayValue = ()=>{
        if (fieldType === 'markdown' && value) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkdownRenderer, {
                content: String(value),
                dataTestId: `${testId}-markdown-preview`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 1368,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (fieldType === 'color' && typeof value === 'string' && value !== '') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSwatch"], {
                        $color: value,
                        "aria-hidden": "true",
                        "data-testid": `${testId}-color-swatch`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1373,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    formatDisplayValue()
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 1372,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (fieldType === 'rating' && typeof value === 'number' && Number.isFinite(value)) {
            const max = ratingMax ?? 5;
            const filledCount = Math.min(Math.max(Math.round(value), 0), max);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingDisplayRow"], {
                        "aria-hidden": "true",
                        "data-testid": `${testId}-rating-display`,
                        children: Array.from({
                            length: max
                        }, (_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingDisplayStar"], {
                                $filled: idx < filledCount,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStar$2f$IconStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStar"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 1386,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, idx, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1385,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1383,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    formatDisplayValue()
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 1382,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return formatDisplayValue();
    };
    // Render the edit input based on field type
    const renderEditInput = ()=>{
        switch(fieldType){
            case 'boolean':
                // Switch VISUAL over a real checkbox: StyledCheckbox is an invisible
                // overlay (single toggle path — the pill has NO onClick) so the
                // native checkbox contract (Playwright isChecked/click) is untouched.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchShell"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledCheckbox"], {
                                    ref: inputRef,
                                    id: inputElId,
                                    type: "checkbox",
                                    checked: Boolean(localValue),
                                    onChange: (e)=>handleChange(e.target.checked),
                                    onKeyDown: handleKeyDown,
                                    ...controlLockProps,
                                    "data-testid": `${testId}-checkbox`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 1407,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSwitch$2f$InputSwitch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                    $checked: Boolean(localValue),
                                    $disabled: isLocked,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSwitch$2f$InputSwitch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                        $checked: Boolean(localValue),
                                        $disabled: isLocked
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1418,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 1417,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 1406,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: Boolean(localValue) ? tr('editableField.boolean.yes', {
                                defaultValue: 'Ja'
                            }) : tr('editableField.boolean.no', {
                                defaultValue: 'Nein'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 1421,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1405,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'picklist':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSelect"], {
                        ref: inputRef,
                        id: inputElId,
                        value: String(localValue || ''),
                        onChange: handleChange,
                        options: options,
                        // Der Platzhalter des Aufrufers gilt auch hier (#1188: bis dahin fest „-- Bitte wählen --“)
                        placeholder: placeholder || tr('editableField.picklist.placeholder', {
                            defaultValue: '-- Bitte wählen --'
                        }),
                        allowEmpty: true,
                        disabled: isLocked,
                        onKeyDown: handleKeyDown,
                        ariaInvalid: ariaInvalid,
                        ariaDescribedBy: ariaDescribedBy,
                        listMaxHeight: listMaxHeight,
                        dataTestId: `${testId}-select`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1432,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1431,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'textarea':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditContainer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledTextarea"], {
                        ref: inputRef,
                        id: inputElId,
                        value: String(localValue || ''),
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === 'Escape') {
                                e.preventDefault();
                                handleCancel();
                            }
                        },
                        placeholder: placeholder,
                        maxLength: maxLength,
                        ...inputA11yProps,
                        ...textLockProps,
                        "data-testid": `${testId}-textarea`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1459,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1458,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'markdown':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditContainer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMarkdown$2f$InputMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputMarkdown"], {
                        htmlFor: `${testId}-markdown`,
                        value: String(localValue ?? ''),
                        onChange: (val)=>handleChange(val),
                        placeholder: placeholder,
                        disabled: isLocked,
                        dataTestId: `${testId}-markdown`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1482,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1481,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'audience':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditContainer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            width: '100%'
                        },
                        "data-testid": `${testId}-audience`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSelect"], {
                                value: audienceType,
                                onChange: (v)=>handleAudienceTypeChange(v),
                                options: audienceTypeOptions,
                                allowEmpty: false,
                                disabled: isLocked,
                                dataTestId: `${testId}-audience-type`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1501,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            audienceType === 'role' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSelect"], {
                                value: audienceRoleValue,
                                onChange: (v)=>{
                                    setAudienceRoleValue(v);
                                    handleChange(`role:${v}`);
                                },
                                options: AUDIENCE_ROLES,
                                allowEmpty: false,
                                disabled: isLocked,
                                dataTestId: `${testId}-audience-role`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1512,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            audienceType === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAutocomplete"], {
                                placeholder: tr('editableField.audience.userSearchPlaceholder', {
                                    defaultValue: 'Benutzer suchen...'
                                }),
                                displayValue: audienceUserDisplay,
                                options: audienceUserOptions,
                                loading: audienceUserLoading,
                                minChars: 2,
                                disabled: isLocked,
                                noResultsText: tr('editableField.audience.userNoResults', {
                                    defaultValue: 'Kein Benutzer gefunden'
                                }),
                                noMargin: true,
                                onSearch: (term)=>searchAudienceUsers(term),
                                onSelect: (opt)=>{
                                    setAudienceUserDisplay(opt.label);
                                    handleChange(`user:${opt.value}`);
                                },
                                onClear: ()=>{
                                    setAudienceUserDisplay('');
                                    handleChange('user:');
                                },
                                dataTestId: `${testId}-audience-user`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1527,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1496,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1495,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'lookup':
                // The reusable InputAutocomplete emits exactly the testid suffixes the
                // E2E lookup contract expects: `${testId}-input` / `-dropdown` /
                // `-option-${index}` (its root gets `${testId}-root`). EditableField
                // stays the data owner: debounced searchLookup, mount display
                // resolution and originalLookupDisplayRef cancel-reset live here.
                // Key contract: Escape with open panel closes the panel only (consumed
                // inside the atom); Escape/Enter with closed panel are forwarded to
                // handleKeyDown (cancel/confirm) — same as the picklist InputSelect.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAutocomplete"], {
                    dataTestId: testId,
                    forId: inputElId,
                    placeholder: placeholder || tr('editableField.lookup.searchPlaceholder', {
                        defaultValue: 'Suchen...'
                    }),
                    displayValue: lookupDisplayValue,
                    options: lookupAutocompleteOptions,
                    loading: lookupLoading,
                    minChars: lookupFilter ? 0 : 2,
                    // #917: gesperrter abhängiger Lookup (steuerndes Feld leer) — das
                    // Formular reicht disabled/readOnly durch, das Eingabefeld bleibt
                    // sichtbar (Hinweis darunter), ist aber nicht bedienbar.
                    // #1891: zusätzlich disabled/readOnly (effectiveEditable enthält beide)
                    disabled: !effectiveEditable,
                    noResultsText: tr('editableField.lookup.noResults', {
                        defaultValue: 'Keine Ergebnisse'
                    }),
                    noMargin: true,
                    autoFocus: true,
                    onSearch: handleLookupSearch,
                    onSelect: handleLookupSelect,
                    onKeyDown: handleKeyDown
                }, `${testId}-lookup-${lookupCancelEpoch}`, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1566,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'date':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "date",
                        value: typeof localValue === 'string' ? localValue.split('T')[0] : '',
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        ...textLockProps,
                        "data-testid": `${testId}-date`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1597,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1596,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'datetime':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "datetime-local",
                        value: typeof localValue === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDatetimeLocalValue"])(localValue) : '',
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        ...textLockProps,
                        "data-testid": `${testId}-datetime`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1613,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1612,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'time':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "time",
                        step: 60,
                        value: typeof localValue === 'string' ? localValue.slice(0, 5) : '',
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...textLockProps,
                        "data-testid": `${testId}-time`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1629,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1628,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'number':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "text",
                        inputMode: "decimal",
                        value: numericDraft,
                        onChange: (e)=>handleNumericDraftChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...textLockProps,
                        "data-testid": `${testId}-number`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1647,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1646,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'email':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "email",
                        value: String(localValue || ''),
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...inputA11yProps,
                        ...textLockProps,
                        "data-testid": `${testId}-email`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1665,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1664,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'url':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "url",
                        value: String(localValue || ''),
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...inputA11yProps,
                        ...textLockProps,
                        "data-testid": `${testId}-url`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1683,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1682,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'phone':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "tel",
                        value: String(localValue || ''),
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...inputA11yProps,
                        ...textLockProps,
                        "data-testid": `${testId}-phone`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1701,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1700,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'password':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "password",
                        autoComplete: autoComplete ?? 'current-password',
                        value: String(localValue || ''),
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...inputA11yProps,
                        ...textLockProps,
                        "data-testid": `${testId}-password`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1719,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1718,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'file':
                // Controlled-mode InputFile (dropzone + file list). The inner dropzone
                // input gets id=inputElId via forId so the outer FieldLabel stays
                // associated. Emits a single File (or null) unless `multiple`.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputFile, {
                    forId: inputElId,
                    dataTestId: `${testId}-file`,
                    value: localValue,
                    multiple: multiple,
                    accept: accept,
                    maxFiles: maxFiles,
                    maxSize: maxSize,
                    disabled: isLocked,
                    noMargin: true,
                    onChange: (files)=>handleChange(multiple ? files : files[0] ?? null)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1740,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'places':
                {
                    const placeVal = localValue || {};
                    const listId = `${inputElId}-places-list`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlacesWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                                        id: inputElId,
                                        type: "text",
                                        value: typeof placeVal === 'string' ? placeVal : placeVal.address || '',
                                        onChange: (e)=>{
                                            // Freie Eingabe ändert nur die Adresse; Koordinaten fallen weg,
                                            // bis ein Treffer gewählt ist.
                                            handleChange({
                                                address: e.target.value
                                            });
                                            setPlacesOpen(true);
                                            setPlacesActive(-1);
                                            placesSearch.search(e.target.value);
                                        },
                                        onFocus: ()=>setPlacesOpen(true),
                                        onBlur: ()=>{
                                            // verzögert: Klick auf einen Treffer kommt nach dem Blur an
                                            placesBlurTimer.current = setTimeout(()=>setPlacesOpen(false), 150);
                                        },
                                        onKeyDown: handlePlacesKeyDown,
                                        placeholder: placeholder,
                                        autoComplete: "off",
                                        role: "combobox",
                                        "aria-autocomplete": "list",
                                        "aria-expanded": placesListVisible,
                                        "aria-controls": listId,
                                        ...textLockProps,
                                        "data-testid": `${testId}-places`,
                                        "data-state": placesSearch.loading ? 'loading' : 'idle'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1760,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    placesListVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlacesList"], {
                                        id: listId,
                                        role: "listbox",
                                        "data-testid": `${testId}-places-list`,
                                        children: placesSearch.results.map((place, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItem"], {
                                                role: "option",
                                                $active: index === placesActive,
                                                "aria-selected": index === placesActive,
                                                onMouseDown: (e)=>{
                                                    e.preventDefault();
                                                    selectPlace(index);
                                                },
                                                onMouseEnter: ()=>setPlacesActive(index),
                                                "data-testid": `${testId}-places-option-${index}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItemPrimary"], {
                                                    children: place.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                                    lineNumber: 1803,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, `${place.label}-${index}`, false, {
                                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                                lineNumber: 1791,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1789,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1759,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            placesSearch.unavailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelperText"], {
                                "data-testid": `${testId}-places-hint`,
                                children: tr('editableField.places.unavailable', {
                                    defaultValue: 'Adresssuche nicht verfügbar'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1810,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1758,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'multipicklist':
                // Salesforce stores multipicklists as semicolon-separated strings; the
                // reusable InputMultiSelect atom handles parsing/joining and accepts
                // both string and array input shapes.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputMultiSelect"], {
                    value: localValue,
                    onChange: handleChange,
                    options: options,
                    inline: true,
                    separator: multipicklistSeparator,
                    disabled: lockState === 'disabled',
                    readOnly: isReadOnlyLock,
                    dataTestId: `${testId}-multipicklist`,
                    noMargin: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1825,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'currency':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrencyWrapper"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrencySymbol"], {
                            children: currencySymbol
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 1841,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrencyInput"], {
                            ref: inputRef,
                            id: inputElId,
                            type: "text",
                            inputMode: "decimal",
                            value: numericDraft,
                            onChange: (e)=>handleNumericDraftChange(e.target.value),
                            onKeyDown: handleKeyDown,
                            placeholder: placeholder || fmt.number(0, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }),
                            ...textLockProps,
                            "data-testid": `${testId}-currency`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 1842,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1840,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'percent':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PercentWrapper"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PercentInput"], {
                            ref: inputRef,
                            id: inputElId,
                            type: "text",
                            inputMode: "decimal",
                            value: numericDraft,
                            onChange: (e)=>handleNumericDraftChange(e.target.value),
                            onKeyDown: handleKeyDown,
                            placeholder: placeholder || '0',
                            ...textLockProps,
                            "data-testid": `${testId}-percent`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 1860,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PercentSymbol"], {
                            children: "%"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 1872,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 1859,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'address':
                {
                    const addressValue = localValue || {};
                    const handleAddressChange = (field, fieldValue)=>{
                        handleChange({
                            ...addressValue,
                            [field]: fieldValue || undefined
                        });
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressGrid"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressFullWidth"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressField"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressLabel"], {
                                            htmlFor: `${testId}-address-street-el`,
                                            children: tr('editableField.address.street', {
                                                defaultValue: 'Straße'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                            lineNumber: 1890,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressInput"], {
                                            id: `${testId}-address-street-el`,
                                            type: "text",
                                            value: addressValue.street || '',
                                            onChange: (e)=>handleAddressChange('street', e.target.value),
                                            placeholder: tr('editableField.address.street', {
                                                defaultValue: 'Straße'
                                            }),
                                            ...textLockProps,
                                            "data-testid": `${testId}-address-street`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                            lineNumber: 1893,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 1889,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1888,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressField"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressLabel"], {
                                        htmlFor: `${testId}-address-postalCode-el`,
                                        children: tr('editableField.address.postalCode', {
                                            defaultValue: 'PLZ'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1905,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressInput"], {
                                        id: `${testId}-address-postalCode-el`,
                                        type: "text",
                                        value: addressValue.postalCode || '',
                                        onChange: (e)=>handleAddressChange('postalCode', e.target.value),
                                        placeholder: tr('editableField.address.postalCode', {
                                            defaultValue: 'PLZ'
                                        }),
                                        ...textLockProps,
                                        "data-testid": `${testId}-address-postalCode`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1908,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1904,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressField"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressLabel"], {
                                        htmlFor: `${testId}-address-city-el`,
                                        children: tr('editableField.address.city', {
                                            defaultValue: 'Stadt'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1919,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressInput"], {
                                        id: `${testId}-address-city-el`,
                                        type: "text",
                                        value: addressValue.city || '',
                                        onChange: (e)=>handleAddressChange('city', e.target.value),
                                        placeholder: tr('editableField.address.city', {
                                            defaultValue: 'Stadt'
                                        }),
                                        ...textLockProps,
                                        "data-testid": `${testId}-address-city`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1922,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1918,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressField"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressLabel"], {
                                        htmlFor: `${testId}-address-state-el`,
                                        children: tr('editableField.address.state', {
                                            defaultValue: 'Bundesland'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1933,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressInput"], {
                                        id: `${testId}-address-state-el`,
                                        type: "text",
                                        value: addressValue.state || '',
                                        onChange: (e)=>handleAddressChange('state', e.target.value),
                                        placeholder: tr('editableField.address.state', {
                                            defaultValue: 'Bundesland'
                                        }),
                                        ...textLockProps,
                                        "data-testid": `${testId}-address-state`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1936,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1932,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressField"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressLabel"], {
                                        htmlFor: `${testId}-address-country-el`,
                                        children: tr('editableField.address.country', {
                                            defaultValue: 'Land'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1947,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressInput"], {
                                        id: `${testId}-address-country-el`,
                                        type: "text",
                                        value: addressValue.country || '',
                                        onChange: (e)=>handleAddressChange('country', e.target.value),
                                        placeholder: tr('editableField.address.country', {
                                            defaultValue: 'Land'
                                        }),
                                        ...textLockProps,
                                        "data-testid": `${testId}-address-country`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1950,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1946,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1887,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'location':
                {
                    const locationValue = localValue || {};
                    const handleLocationChange = (field, fieldValue)=>{
                        handleChange({
                            ...locationValue,
                            [field]: fieldValue ? Number(fieldValue) : undefined
                        });
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationWrapper"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationField"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationLabel"], {
                                        htmlFor: `${testId}-location-latitude-el`,
                                        children: tr('editableField.location.latitude', {
                                            defaultValue: 'Breitengrad'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1977,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationInput"], {
                                        id: `${testId}-location-latitude-el`,
                                        type: "number",
                                        step: "0.000001",
                                        min: -90,
                                        max: 90,
                                        value: locationValue.latitude !== undefined ? String(locationValue.latitude) : '',
                                        onChange: (e)=>handleLocationChange('latitude', e.target.value),
                                        placeholder: tr('editableField.location.latitudePlaceholder', {
                                            defaultValue: 'z.B. 52.520008'
                                        }),
                                        ...textLockProps,
                                        "data-testid": `${testId}-location-latitude`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1980,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1976,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationField"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationLabel"], {
                                        htmlFor: `${testId}-location-longitude-el`,
                                        children: tr('editableField.location.longitude', {
                                            defaultValue: 'Längengrad'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1996,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationInput"], {
                                        id: `${testId}-location-longitude-el`,
                                        type: "number",
                                        step: "0.000001",
                                        min: -180,
                                        max: 180,
                                        value: locationValue.longitude !== undefined ? String(locationValue.longitude) : '',
                                        onChange: (e)=>handleLocationChange('longitude', e.target.value),
                                        placeholder: tr('editableField.location.longitudePlaceholder', {
                                            defaultValue: 'z.B. 13.404954'
                                        }),
                                        ...textLockProps,
                                        "data-testid": `${testId}-location-longitude`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 1999,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 1995,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 1975,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'creditcard':
                {
                    // PCI-DSS: intended for tokenized values or last4 display. Do not
                    // persist raw PANs unless the backend is PCI-scoped. The Luhn/brand
                    // feedback is advisory only and never blocks input or confirm.
                    const cardDigits = String(localValue || '').replace(/\D/g, '');
                    const cardBrand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectCardBrand"])(cardDigits);
                    const cardBrandLabel = cardBrand === 'visa' ? 'Visa' : cardBrand === 'mastercard' ? 'Mastercard' : cardBrand === 'amex' ? 'Amex' : null;
                    // Show validity only once the digit count is in the brand-complete
                    // range: 15 for amex, 16–19 otherwise.
                    const cardComplete = cardBrand === 'amex' ? cardDigits.length === 15 : cardDigits.length >= 16 && cardDigits.length <= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_CARD_DIGITS"];
                    const cardValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["luhnCheck"])(cardDigits);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormattedInputWrapper"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardNumberInput"], {
                                ref: inputRef,
                                id: inputElId,
                                type: "text",
                                inputMode: "numeric",
                                autoComplete: "cc-number",
                                spellCheck: false,
                                maxLength: 23,
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupCardDigits"])(cardDigits, cardBrand),
                                onChange: (e)=>{
                                    const el = e.target;
                                    const digitsBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countDigitsBeforeCaret"])(el.value, el.selectionStart ?? el.value.length);
                                    const raw = el.value.replace(/\D/g, '');
                                    const nextDigits = raw.slice(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectCardBrand"])(raw) === 'amex' ? 15 : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_CARD_DIGITS"]);
                                    formattedCaretRef.current = Math.min(digitsBefore, nextDigits.length);
                                    // Emits digits-only — the grouped string is presentation-only.
                                    handleChange(nextDigits);
                                },
                                onKeyDown: handleKeyDown,
                                placeholder: placeholder,
                                ...textLockProps,
                                "data-testid": `${testId}-creditcard`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2041,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidityAdornment"], {
                                children: [
                                    cardBrandLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardBrandName"], {
                                        "data-testid": `${testId}-creditcard-brand`,
                                        children: cardBrandLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 2072,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    cardComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidityMark"], {
                                        $valid: cardValid,
                                        "data-valid": cardValid ? 'true' : 'false',
                                        "data-testid": `${testId}-creditcard-valid`,
                                        children: cardValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                            lineNumber: 2082,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0)) : '!'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 2077,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2070,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2040,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'iban':
                {
                    const ibanValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanCompact"])(String(localValue || ''));
                    const ibanValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanLengthValid"])(ibanValue) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanMod97Valid"])(ibanValue);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormattedInputWrapper"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IbanInput"], {
                                ref: inputRef,
                                id: inputElId,
                                type: "text",
                                autoComplete: "off",
                                spellCheck: false,
                                maxLength: 42,
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanGroup"])(ibanValue),
                                onChange: (e)=>{
                                    const el = e.target;
                                    const charsBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanCountCharsBeforeCaret"])(el.value, el.selectionStart ?? el.value.length);
                                    // Emits the compact uppercase form (hard-capped at the ISO 34)
                                    const nextCompact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ibanCompact"])(el.value).slice(0, 34);
                                    formattedCaretRef.current = Math.min(charsBefore, nextCompact.length);
                                    handleChange(nextCompact);
                                },
                                onKeyDown: handleKeyDown,
                                placeholder: placeholder,
                                ...textLockProps,
                                "data-testid": `${testId}-iban`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2095,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            ibanValue.length >= 15 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidityAdornment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidityMark"], {
                                    $valid: ibanValid,
                                    "data-valid": ibanValid ? 'true' : 'false',
                                    "data-testid": `${testId}-iban-valid`,
                                    children: ibanValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 2126,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)) : '!'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2121,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2120,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2094,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'duration':
                // Compound hh/mm field with micro-labels (location pattern) — the
                // outer FieldLabel stays unassociated; these labels carry the a11y.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationWrapper"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationField"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationLabel"], {
                                    htmlFor: `${testId}-duration-hours-el`,
                                    children: tr('editableField.duration.hours', {
                                        defaultValue: 'Stunden'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2140,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationInput"], {
                                    id: `${testId}-duration-hours-el`,
                                    type: "number",
                                    min: 0,
                                    value: durationDraft.h,
                                    ...textLockProps,
                                    onChange: (e)=>{
                                        if (isLocked) return;
                                        const h = e.target.value;
                                        setDurationDraft((d)=>({
                                                ...d,
                                                h
                                            }));
                                        emitDuration(h, durationDraft.m);
                                    },
                                    onKeyDown: handleKeyDown,
                                    placeholder: "0",
                                    "data-testid": `${testId}-duration-hours`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2143,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 2139,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationField"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationLabel"], {
                                    htmlFor: `${testId}-duration-minutes-el`,
                                    children: tr('editableField.duration.minutes', {
                                        defaultValue: 'Minuten'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2161,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DurationInput"], {
                                    id: `${testId}-duration-minutes-el`,
                                    type: "number",
                                    min: 0,
                                    max: 59,
                                    value: durationDraft.m,
                                    ...textLockProps,
                                    onChange: (e)=>{
                                        if (isLocked) return;
                                        const m = e.target.value;
                                        setDurationDraft((d)=>({
                                                ...d,
                                                m
                                            }));
                                        emitDuration(durationDraft.h, m);
                                    },
                                    onBlur: ()=>{
                                        // Minutes clamp to 0–59 on blur (typing stays unrestricted)
                                        const mm = parseInt(durationDraft.m, 10);
                                        if (Number.isFinite(mm) && (mm < 0 || mm > 59)) {
                                            const clamped = String(Math.min(59, Math.max(0, mm)));
                                            setDurationDraft((d)=>({
                                                    ...d,
                                                    m: clamped
                                                }));
                                            emitDuration(durationDraft.h, clamped);
                                        }
                                    },
                                    onKeyDown: handleKeyDown,
                                    placeholder: "0",
                                    "data-testid": `${testId}-duration-minutes`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                            lineNumber: 2160,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 2138,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'color':
                {
                    // Native picker swatch + synced hex text input. The TEXT input is the
                    // primary control (inputElId); the picker always holds the last valid
                    // hex so an invalid draft never reaches the native control.
                    const lastValidColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHexColor"])(typeof localValue === 'string' ? localValue : '') ?? '#000000';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorPickerInput"], {
                                        type: "color",
                                        value: lastValidColor,
                                        ...controlLockProps,
                                        onChange: (e)=>{
                                            if (isLocked) return;
                                            const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHexColor"])(e.target.value);
                                            if (normalized !== null) {
                                                handleChange(normalized);
                                                setColorDraft(normalized);
                                                setColorDraftInvalid(false);
                                            }
                                        },
                                        "aria-label": tr('editableField.color.pickerAria', {
                                            defaultValue: 'Farbe wählen'
                                        }),
                                        "data-testid": `${testId}-color-picker`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 2203,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorTextInput"], {
                                        ref: inputRef,
                                        id: inputElId,
                                        type: "text",
                                        spellCheck: false,
                                        maxLength: 7,
                                        $invalid: colorDraftInvalid,
                                        value: colorDraft,
                                        ...textLockProps,
                                        onChange: (e)=>{
                                            if (isLocked) return;
                                            const text = e.target.value;
                                            setColorDraft(text);
                                            const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHexColor"])(text);
                                            if (normalized !== null) {
                                                // Emits ONLY valid colors, normalized to '#RRGGBB'.
                                                handleChange(normalized);
                                                setColorDraftInvalid(false);
                                            }
                                        },
                                        onBlur: ()=>{
                                            setColorDraftInvalid(colorDraft.trim() !== '' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$valueFormats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHexColor"])(colorDraft) === null);
                                        },
                                        onKeyDown: handleKeyDown,
                                        placeholder: placeholder || '#RRGGBB',
                                        "data-testid": `${testId}-color-text`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                        lineNumber: 2221,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2202,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            colorDraftInvalid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelperText"], {
                                $hasError: true,
                                "data-testid": `${testId}-color-error`,
                                children: tr('editableField.color.invalid', {
                                    defaultValue: 'Ungültiger Farbwert (#RRGGBB)'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2252,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2201,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'otp':
                // InputOtp manages focus itself (auto-advance / backspace-to-prev);
                // the hidden combined-value input carries `${testId}-otp`, the boxes
                // `-otp-{i}`. Enter/Escape (unconsumed by the boxes) are forwarded to
                // handleKeyDown → confirm/cancel.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$InputOtp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputOtp"], {
                        value: String(localValue ?? ''),
                        onChange: handleChange,
                        length: otpLength ?? 6,
                        disabled: isLocked,
                        dataTestId: `${testId}-otp`,
                        onKeyDown: handleKeyDown,
                        id: inputElId
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2269,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 2268,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'tags':
                // InputTags consumes Enter while a draft tag is buffered (commits the
                // tag) and forwards empty-buffer Enter/Escape here → the surrounding
                // field edit confirms/cancels. Emits the separator-joined string.
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTags"], {
                    value: localValue,
                    onChange: handleChange,
                    separator: tagsSeparator ?? ';',
                    disabled: isLocked,
                    dataTestId: `${testId}-tags`,
                    onKeyDown: handleKeyDown,
                    id: inputElId
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 2286,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'slider':
                {
                    const min = sliderMin ?? 0;
                    const max = sliderMax ?? 100;
                    const step = sliderStep ?? 1;
                    const numeric = typeof localValue === 'number' && Number.isFinite(localValue) ? localValue : null;
                    // null value: the thumb parks at min and nothing is emitted until the
                    // user actually interacts — the readout shows '–' meanwhile.
                    const thumbValue = numeric ?? min;
                    const clampedThumb = Math.min(Math.max(thumbValue, min), max);
                    const percent = max > min ? (clampedThumb - min) / (max - min) * 100 : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderWrapper"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderInput"], {
                                ref: inputRef,
                                id: inputElId,
                                type: "range",
                                min: min,
                                max: max,
                                step: step,
                                $percent: percent,
                                value: thumbValue,
                                onChange: (e)=>handleChange(Number(e.target.value)),
                                onKeyDown: handleKeyDown,
                                ...controlLockProps,
                                "data-testid": `${testId}-slider`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2310,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderReadout"], {
                                "data-testid": `${testId}-slider-value`,
                                children: numeric === null ? '–' : `${fmt.number(numeric, {
                                    maximumFractionDigits: 3
                                })}${sliderUnit ? ` ${sliderUnit}` : ''}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2324,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2309,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'rating':
                {
                    const max = ratingMax ?? 5;
                    const current = typeof localValue === 'number' && Number.isFinite(localValue) && localValue >= 1 ? Math.min(Math.round(localValue), max) : null;
                    // Roving tabindex: the selected star (or the first one) is the only
                    // tab stop; arrow keys move selection AND focus.
                    const tabbableStar = current ?? 1;
                    const selectStar = (star)=>{
                        handleChange(star);
                        ratingStarRefs.current[star - 1]?.focus();
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingGroup"], {
                        role: "radiogroup",
                        "aria-label": label || tr('editableField.rating.label', {
                            defaultValue: 'Bewertung'
                        }),
                        "aria-disabled": isLocked || undefined,
                        "aria-readonly": isReadOnlyLock || undefined,
                        "data-disabled": isLocked ? 'true' : undefined,
                        "data-testid": `${testId}-rating`,
                        onKeyDown: (e)=>{
                            // #1891: gesperrt — Pfeiltasten wählen nichts, Enter/Escape bleiben
                            if (isLocked) {
                                handleKeyDown(e);
                                return;
                            }
                            switch(e.key){
                                case 'ArrowRight':
                                case 'ArrowUp':
                                    e.preventDefault();
                                    selectStar(Math.min((current ?? 0) + 1, max));
                                    return;
                                case 'ArrowLeft':
                                case 'ArrowDown':
                                    e.preventDefault();
                                    selectStar(Math.max((current ?? 2) - 1, 1));
                                    return;
                                case 'Home':
                                    e.preventDefault();
                                    selectStar(1);
                                    return;
                                case 'End':
                                    e.preventDefault();
                                    selectStar(max);
                                    return;
                                default:
                                    // Enter confirms / Escape cancels the surrounding edit
                                    // (handleKeyDown preventDefaults Enter, so the focused
                                    // star button is NOT click-activated).
                                    handleKeyDown(e);
                            }
                        },
                        children: Array.from({
                            length: max
                        }, (_, idx)=>{
                            const star = idx + 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RatingStarButton"], {
                                ref: (node)=>{
                                    ratingStarRefs.current[idx] = node;
                                },
                                type: "button",
                                role: "radio",
                                "aria-checked": star === current,
                                "aria-label": tr('editableField.rating.starAria', {
                                    defaultValue: '{{star}} von {{max}} Sternen',
                                    star,
                                    max
                                }),
                                tabIndex: star === tabbableStar ? 0 : -1,
                                disabled: isLocked || undefined,
                                $filled: current !== null && star <= current,
                                onClick: ()=>handleChange(star === current ? null : star),
                                "data-testid": `${testId}-rating-star-${star}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStar$2f$IconStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStar"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2409,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, star, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2390,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2347,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            case 'text':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                        ref: inputRef,
                        id: inputElId,
                        type: "text",
                        value: String(localValue || ''),
                        onChange: (e)=>handleChange(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: placeholder,
                        ...inputA11yProps,
                        ...textLockProps,
                        "data-testid": `${testId}-input`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2421,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                    lineNumber: 2420,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $compact: compact,
        "data-testid": testId,
        // #1891: Sperrzustand im Bearbeitungsmodus (editable | readonly | disabled)
        "data-state": isEditing ? lockState : undefined,
        children: [
            !hideLabel && (onLabelClick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldLabelLink"], {
                type: "button",
                onClick: onLabelClick,
                "data-testid": `${testId}-label-link`,
                children: [
                    label || fieldName,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 2447,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldLabel"], {
                htmlFor: labelHtmlFor,
                children: [
                    label || fieldName,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 2451,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))),
            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditContainer"], {
                onKeyDown: (e)=>{
                    // Container-level Escape fallback so cancel also works from
                    // elements without their own key wiring (edit-action buttons,
                    // multipicklist checkboxes). Inputs that already handled the key
                    // call preventDefault; consuming children (open dropdown panels)
                    // stopPropagation — both never reach this handler twice.
                    if (e.key === 'Escape' && !e.defaultPrevented) {
                        e.preventDefault();
                        handleCancel();
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditInputColumn"], {
                        children: [
                            renderEditInput(),
                            helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelperText"], {
                                $hasError: hasError,
                                children: helperText
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2470,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2468,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !hideEditActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditActions"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    color: "white"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2475,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                onClick: handleConfirm,
                                isDisabled: isSaving,
                                size: "small",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS,
                                tooltip: tr('editableField.actions.save', {
                                    defaultValue: 'Speichern'
                                }),
                                dataTestId: `${testId}-confirm`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2474,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    color: "white"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                    lineNumber: 2484,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                onClick: handleCancel,
                                isDisabled: isSaving,
                                size: "small",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY,
                                tooltip: tr('editableField.actions.cancel', {
                                    defaultValue: 'Abbrechen'
                                }),
                                dataTestId: `${testId}-cancel`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                                lineNumber: 2483,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                        lineNumber: 2473,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 2455,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueDisplay"], {
                $isEmpty: value === null || value === undefined || value === '',
                $isEditing: isEditing,
                $isEditable: effectiveEditable,
                $isDirty: isDirty,
                onClick: handleDisplayClick,
                "data-testid": `${testId}-display`,
                // #507: die Editierbarkeit war bisher NUR als CSS sichtbar
                // ($isEditable -> cursor: pointer) und damit nicht testbar — genau
                // deshalb assertierte inline-edit-rbac auf ein '-edit-icon', das es
                // nie gab. effectiveEditable = isEditable && !readOnly spiegelt die
                // RBAC-Edit-Berechtigung der Rolle (editable = hasObjectAccess(..,
                // 'edit')) UND die Feld-Read-only-Regel. Als data-Attribut wird der
                // Inline-Edit-Anspruch je Rolle direkt pruefbar.
                "data-editable": effectiveEditable ? 'true' : 'false',
                // #511 F1: der Roh-Display-Wert als Attribut, damit Status-/Boolean-
                // Übergänge ohne Textprüfung assertierbar sind. Nur skalare, nicht-
                // sensible fieldTypes (DATA_VALUE_FIELD_TYPES) → sonst undefined.
                "data-value": displayDataValue,
                // #1239 (M-18): Lookup/Audience ohne aufgelösten Namen zeigen den
                // Platzhalter statt der rohen Id/UUID — als data-Attribut prüfbar.
                "data-unnamed": displayUnnamed || undefined,
                // M14: Lookup-Name wird noch geladen (neutraler Zustand, kein Platzhalter).
                "data-resolving": fieldType === 'lookup' && lookupResolving || undefined,
                children: renderDisplayValue()
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
                lineNumber: 2496,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx",
        lineNumber: 2439,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditableField, "HC6EzhYFJI1ZMDeb1AM5Wou/Wqc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSharedUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDebouncedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDebouncedCallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$useAddressSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddressSearch"]
    ];
});
_c2 = EditableField;
const __TURBOPACK__default__export__ = EditableField;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
__turbopack_context__.k.register(_c1, "InputFile");
__turbopack_context__.k.register(_c2, "EditableField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/EditableField/useAddressSearch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADDRESS_SEARCH_DEBOUNCE_MS",
    ()=>ADDRESS_SEARCH_DEBOUNCE_MS,
    "useAddressSearch",
    ()=>useAddressSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$maps$2f$geoClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/maps/geoClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$geo$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/geo/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ADDRESS_SEARCH_DEBOUNCE_MS = 250;
function useAddressSearch({ enabled, lang }) {
    _s();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unavailable, setUnavailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const laufend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nummer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const abbrechen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAddressSearch.useCallback[abbrechen]": ()=>{
            if (timer.current) clearTimeout(timer.current);
            timer.current = null;
            laufend.current?.abort();
            laufend.current = null;
        }
    }["useAddressSearch.useCallback[abbrechen]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAddressSearch.useCallback[clear]": ()=>{
            abbrechen();
            nummer.current++;
            setResults([]);
            setLoading(false);
        }
    }["useAddressSearch.useCallback[clear]"], [
        abbrechen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAddressSearch.useEffect": ()=>{
            if (!enabled) clear();
        }
    }["useAddressSearch.useEffect"], [
        enabled,
        clear
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAddressSearch.useEffect": ()=>abbrechen
    }["useAddressSearch.useEffect"], [
        abbrechen
    ]);
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAddressSearch.useCallback[search]": (term)=>{
            if (!enabled) return;
            const text = term.trim();
            if (text.length < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$geo$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GEO_LIMITS"].queryMin) {
                clear();
                return;
            }
            abbrechen();
            const meine = ++nummer.current;
            setLoading(true);
            timer.current = setTimeout({
                "useAddressSearch.useCallback[search]": ()=>{
                    const ctrl = new AbortController();
                    laufend.current = ctrl;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$maps$2f$geoClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchPlaces"])(text.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$geo$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GEO_LIMITS"].queryMax), {
                        lang,
                        signal: ctrl.signal
                    }).then({
                        "useAddressSearch.useCallback[search]": (places)=>{
                            if (meine !== nummer.current) return;
                            setResults(places);
                            setUnavailable(false);
                        }
                    }["useAddressSearch.useCallback[search]"]).catch({
                        "useAddressSearch.useCallback[search]": ()=>{
                            if (meine !== nummer.current) return;
                            setResults([]);
                            setUnavailable(true);
                        }
                    }["useAddressSearch.useCallback[search]"]).finally({
                        "useAddressSearch.useCallback[search]": ()=>{
                            if (meine === nummer.current) setLoading(false);
                        }
                    }["useAddressSearch.useCallback[search]"]);
                }
            }["useAddressSearch.useCallback[search]"], ADDRESS_SEARCH_DEBOUNCE_MS);
        }
    }["useAddressSearch.useCallback[search]"], [
        enabled,
        lang,
        abbrechen,
        clear
    ]);
    return {
        results,
        loading,
        unavailable,
        search,
        clear
    };
}
_s(useAddressSearch, "LmAnCmQQdPeShu4Izels2nXNkEE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/EditableField/valueFormats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_CARD_DIGITS",
    ()=>MAX_CARD_DIGITS,
    "caretIndexForDigitCount",
    ()=>caretIndexForDigitCount,
    "countDigitsBeforeCaret",
    ()=>countDigitsBeforeCaret,
    "detectCardBrand",
    ()=>detectCardBrand,
    "formatDecimalDraft",
    ()=>formatDecimalDraft,
    "formatDurationDe",
    ()=>formatDurationDe,
    "groupCardDigits",
    ()=>groupCardDigits,
    "ibanCaretIndexForCharCount",
    ()=>ibanCaretIndexForCharCount,
    "ibanCompact",
    ()=>ibanCompact,
    "ibanCountCharsBeforeCaret",
    ()=>ibanCountCharsBeforeCaret,
    "ibanGroup",
    ()=>ibanGroup,
    "ibanLengthValid",
    ()=>ibanLengthValid,
    "ibanMod97Valid",
    ()=>ibanMod97Valid,
    "luhnCheck",
    ()=>luhnCheck,
    "maskCardNumber",
    ()=>maskCardNumber,
    "normalizeHexColor",
    ()=>normalizeHexColor,
    "parseDecimalInput",
    ()=>parseDecimalInput,
    "toDatetimeLocalValue",
    ()=>toDatetimeLocalValue
]);
/**
 * Pure value-formatting helpers for EditableField renderers.
 * Keep this module free of React/DOM imports so it stays unit-testable.
 */ const pad2 = (n)=>String(n).padStart(2, '0');
function toDatetimeLocalValue(v) {
    const date = new Date(v);
    if (isNaN(date.getTime())) {
        return v.replace('Z', '').slice(0, 16);
    }
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}T${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}
const MAX_CARD_DIGITS = 19;
function luhnCheck(digits) {
    if (!/^\d+$/.test(digits)) return false;
    let sum = 0;
    let double = false;
    for(let i = digits.length - 1; i >= 0; i--){
        let d = digits.charCodeAt(i) - 48;
        if (double) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        sum += d;
        double = !double;
    }
    return sum % 10 === 0;
}
function detectCardBrand(digits) {
    if (/^(34|37)/.test(digits)) return 'amex';
    if (digits.startsWith('4')) return 'visa';
    if (digits.length >= 2) {
        const two = parseInt(digits.slice(0, 2), 10);
        if (two >= 51 && two <= 55) return 'mastercard';
    }
    if (digits.length >= 4) {
        const four = parseInt(digits.slice(0, 4), 10);
        if (four >= 2221 && four <= 2720) return 'mastercard';
    }
    return 'unknown';
}
function groupCardDigits(digits, brand) {
    const clean = digits.replace(/\D/g, '');
    if (brand === 'amex') {
        const d = clean.slice(0, 15);
        return [
            d.slice(0, 4),
            d.slice(4, 10),
            d.slice(10, 15)
        ].filter(Boolean).join(' ');
    }
    return clean.slice(0, MAX_CARD_DIGITS).replace(/(\d{4})(?=\d)/g, '$1 ');
}
function maskCardNumber(digits) {
    const clean = digits.replace(/\D/g, '');
    if (clean.length === 0) return '';
    const last4 = clean.slice(-4);
    if (detectCardBrand(clean) === 'amex') {
        return `•••• •••••• •${last4}`;
    }
    return `•••• •••• •••• ${last4}`;
}
function caretIndexForDigitCount(formatted, digitCount) {
    if (digitCount <= 0) return 0;
    let seen = 0;
    for(let i = 0; i < formatted.length; i++){
        const ch = formatted[i];
        if (ch >= '0' && ch <= '9') {
            seen++;
            if (seen === digitCount) return i + 1;
        }
    }
    return formatted.length;
}
function countDigitsBeforeCaret(formatted, caret) {
    let count = 0;
    const end = Math.min(Math.max(0, caret), formatted.length);
    for(let i = 0; i < end; i++){
        const ch = formatted[i];
        if (ch >= '0' && ch <= '9') count++;
    }
    return count;
}
function ibanCompact(input) {
    return input.toUpperCase().replace(/[^A-Z0-9]/g, '');
}
const isIbanChar = (ch)=>ch >= '0' && ch <= '9' || ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z';
function ibanCountCharsBeforeCaret(text, caret) {
    let count = 0;
    const end = Math.min(Math.max(0, caret), text.length);
    for(let i = 0; i < end; i++){
        if (isIbanChar(text[i])) count++;
    }
    return count;
}
function ibanCaretIndexForCharCount(formatted, charCount) {
    if (charCount <= 0) return 0;
    let seen = 0;
    for(let i = 0; i < formatted.length; i++){
        if (isIbanChar(formatted[i])) {
            seen++;
            if (seen === charCount) return i + 1;
        }
    }
    return formatted.length;
}
function ibanGroup(compact) {
    return compact.replace(/(.{4})(?=.)/g, '$1 ');
}
function ibanMod97Valid(compact) {
    if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(compact)) return false;
    const rearranged = compact.slice(4) + compact.slice(0, 4);
    let rem = 0;
    for(let i = 0; i < rearranged.length; i++){
        const code = rearranged.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            const v = code - 55 // A=10 … Z=35
            ;
            rem = (rem * 10 + Math.floor(v / 10)) % 97;
            rem = (rem * 10 + v % 10) % 97;
        } else {
            rem = (rem * 10 + (code - 48)) % 97;
        }
    }
    return rem === 1;
}
/** Exact IBAN lengths for common countries; everything else uses 15–34. */ const IBAN_COUNTRY_LENGTHS = {
    DE: 22,
    AT: 20,
    BE: 16,
    CH: 21,
    ES: 24,
    FR: 27,
    GB: 22,
    IT: 27,
    LU: 20,
    NL: 18,
    PL: 28,
    DK: 18
};
function ibanLengthValid(compact) {
    const expected = IBAN_COUNTRY_LENGTHS[compact.slice(0, 2)];
    if (expected !== undefined) return compact.length === expected;
    return compact.length >= 15 && compact.length <= 34;
}
function formatDurationDe(minutes) {
    const total = Number.isFinite(minutes) ? Math.max(0, Math.round(minutes)) : 0;
    const h = Math.floor(total / 60);
    const m = total % 60;
    if (h === 0) return `${m} min`;
    if (m === 0) return `${h} h`;
    return `${h} h ${m} min`;
}
function parseDecimalInput(text) {
    const raw = text.trim();
    if (!/^-?\d*[.,]?\d*$/.test(raw)) return undefined;
    if (!/\d/.test(raw)) return null;
    const n = Number(raw.replace(',', '.'));
    return Number.isFinite(n) ? n : undefined;
}
function formatDecimalDraft(value, locale = 'de-DE') {
    const n = typeof value === 'string' ? parseDecimalInput(value) : value;
    if (typeof n !== 'number' || !Number.isFinite(n)) return '';
    return n.toLocaleString(locale, {
        useGrouping: false,
        maximumFractionDigits: 20
    });
}
function normalizeHexColor(input) {
    const raw = input.trim().replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(raw)) {
        return `#${raw.split('').map((c)=>c + c).join('').toUpperCase()}`;
    }
    if (/^[0-9a-fA-F]{6}$/.test(raw)) {
        return `#${raw.toUpperCase()}`;
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/ErrorText/ErrorText.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
'use client';
;
;
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"]).withConfig({
    displayName: "ErrorText.styles__Root",
    componentId: "sc-76c53088-0"
})`
  color: ${(props)=>props.theme.palette.default.error};
  margin-bottom: 0;
  margin-top: 0.3125rem;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/ErrorText/ErrorText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorText",
    ()=>ErrorText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$ErrorText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ErrorText/ErrorText.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
;
;
;
const ErrorText = ({ children, className, dataTestId = 'error-text-root', id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-testid": dataTestId,
        id: id,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$ErrorText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/ErrorText/ErrorText.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/ErrorText/ErrorText.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ErrorText;
;
var _c;
__turbopack_context__.k.register(_c, "ErrorText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/ErrorText/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$ErrorText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ErrorText/ErrorText.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$ErrorText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorText"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.styles.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputWrapper",
    ()=>InputWrapper,
    "LoadingIndicator",
    ()=>LoadingIndicator,
    "Root",
    ()=>Root,
    "StyledInput",
    ()=>StyledInput,
    "StyledInputLabel",
    ()=>StyledInputLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputAutocomplete.styles__Root",
    componentId: "sc-9aeec050-0"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${(props)=>props.$noMargin ? '0' : props.theme.margin.default};
  position: relative;
`;
const StyledInputLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "InputAutocomplete.styles__StyledInputLabel",
    componentId: "sc-9aeec050-1"
})`
  color: ${({ error, theme })=>error ? theme.palette.default.error : theme.palette.default.black};
  opacity: ${({ disabled })=>disabled ? 0.5 : 1};
`;
const InputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputAutocomplete.styles__InputWrapper",
    componentId: "sc-9aeec050-2"
})`
  position: relative;
  z-index: 100;
`;
const StyledInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "InputAutocomplete.styles__StyledInput",
    componentId: "sc-9aeec050-3"
})`
  ${({ $error })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])({
        error: !!$error
    })}
`;
;
const LoadingIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputAutocomplete.styles__LoadingIndicator",
    componentId: "sc-9aeec050-4"
})`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputAutocomplete",
    ()=>InputAutocomplete,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.styles.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ErrorText/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function InputAutocomplete({ label, forId, placeholder, value, displayValue = '', options, onSearch, onSelect, onClear, required, disabled, loading, error, errorText, minChars = 1, noResultsText, noMargin, autoFocus, onKeyDown, dataTestId, infoTextTitle, infoTextContent }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const resolvedPlaceholder = placeholder ?? tr('form.inputAutocomplete.placeholder', {
        defaultValue: 'Suchen...'
    });
    const resolvedNoResultsText = noResultsText ?? tr('form.inputAutocomplete.noResults', {
        defaultValue: 'Keine Ergebnisse gefunden'
    });
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(displayValue);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    /**
   * Fixed-Position des Panels im Viewport (Muster InputSelect, #415): das
   * Panel wird per Portal nach document.body gerendert, damit es weder vom
   * overflow:auto-Scrollcontainer (EntityModal/GenericEntityForm) abgeschnitten
   * noch von nachfolgenden Formularfeldern übermalt wird (#384-Feedback).
   */ const [panelPos, setPanelPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Sync input value with displayValue prop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputAutocomplete.useEffect": ()=>{
            setInputValue(displayValue);
        }
    }["InputAutocomplete.useEffect"], [
        displayValue
    ]);
    // Open dropdown when options arrive while input is focused
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputAutocomplete.useEffect": ()=>{
            if (isFocusedRef.current && options.length > 0) {
                setIsOpen(true);
            }
        }
    }["InputAutocomplete.useEffect"], [
        options
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputAutocomplete.useCallback[handleInputChange]": (e)=>{
            const newValue = e.target.value;
            setInputValue(newValue);
            setActiveIndex(-1);
            if (newValue.length >= minChars) {
                setIsOpen(true);
                onSearch?.(newValue);
            } else {
                setIsOpen(false);
            }
            // If clearing the input, notify parent
            if (newValue === '' && value) {
                onClear?.();
            }
        }
    }["InputAutocomplete.useCallback[handleInputChange]"], [
        minChars,
        onSearch,
        onClear,
        value
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputAutocomplete.useCallback[handleSelect]": (option)=>{
            setInputValue(option.label);
            setIsOpen(false);
            setActiveIndex(-1);
            onSelect(option);
        }
    }["InputAutocomplete.useCallback[handleSelect]"], [
        onSelect
    ]);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputAutocomplete.useCallback[handleFocus]": ()=>{
            isFocusedRef.current = true;
            // Show dropdown on focus if there are options available
            if (options.length > 0) {
                setIsOpen(true);
            }
            // Always trigger search on focus - use current value or empty string
            // This allows showing options for prefilled values
            if (onSearch) {
                onSearch(inputValue);
            }
        }
    }["InputAutocomplete.useCallback[handleFocus]"], [
        inputValue,
        options.length,
        onSearch
    ]);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputAutocomplete.useCallback[handleBlur]": ()=>{
            isFocusedRef.current = false;
            // Delay closing to allow click on dropdown item
            setTimeout({
                "InputAutocomplete.useCallback[handleBlur]": ()=>setIsOpen(false)
            }["InputAutocomplete.useCallback[handleBlur]"], 200);
        }
    }["InputAutocomplete.useCallback[handleBlur]"], []);
    // Panel visibility: open AND something to show (options, or the no-results
    // row once the user typed enough chars and loading finished). Keyboard
    // semantics key off the VISIBLE panel, not the raw isOpen flag, so e.g.
    // Escape during a pending search is forwarded instead of silently eaten.
    const showDropdown = isOpen && !disabled && (options.length > 0 || inputValue.length >= minChars);
    const showNoResults = isOpen && !disabled && !loading && options.length === 0 && inputValue.length >= minChars;
    const panelVisible = showDropdown && (options.length > 0 || showNoResults);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputAutocomplete.useCallback[handleKeyDown]": (e)=>{
            if (!panelVisible) {
                // CLOSED: ArrowDown opens when options exist; everything else is NOT
                // consumed — forward to props.onKeyDown (InputSelect contract: a
                // surrounding inline edit may confirm on Enter / cancel on Escape).
                if (e.key === 'ArrowDown' && options.length > 0) {
                    setIsOpen(true);
                    setActiveIndex(0);
                    e.preventDefault();
                    return;
                }
                onKeyDown?.(e);
                return;
            }
            // OPEN: the component owns the keyboard fully.
            switch(e.key){
                case 'ArrowDown':
                    e.preventDefault();
                    setActiveIndex({
                        "InputAutocomplete.useCallback[handleKeyDown]": (prev)=>prev < options.length - 1 ? prev + 1 : prev
                    }["InputAutocomplete.useCallback[handleKeyDown]"]);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setActiveIndex({
                        "InputAutocomplete.useCallback[handleKeyDown]": (prev)=>prev > 0 ? prev - 1 : 0
                    }["InputAutocomplete.useCallback[handleKeyDown]"]);
                    break;
                case 'Enter':
                    // Must NOT reach props.onKeyDown / ancestors (would confirm the
                    // surrounding field edit while the panel is open)
                    e.preventDefault();
                    e.stopPropagation();
                    if (activeIndex >= 0 && activeIndex < options.length) {
                        handleSelect(options[activeIndex]);
                    } else {
                        setIsOpen(false);
                        setActiveIndex(-1);
                    }
                    break;
                case 'Escape':
                    // Closes the panel only — must NOT cancel the surrounding field edit
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                    setActiveIndex(-1);
                    break;
            }
        }
    }["InputAutocomplete.useCallback[handleKeyDown]"], [
        panelVisible,
        options,
        activeIndex,
        handleSelect,
        onKeyDown
    ]);
    // Panel im Viewport am Input ausrichten; bei Scroll/Resize nachführen
    // (Scroll capture-phase, damit auch Scrollcontainer im Modal erfasst sind).
    const updatePanelPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputAutocomplete.useCallback[updatePanelPosition]": ()=>{
            const rect = inputRef.current?.getBoundingClientRect();
            if (!rect) return;
            const PANEL_MAX_HEIGHT = 300 // 18.75rem aus dropdownListStyles
            ;
            const spaceBelow = window.innerHeight - rect.bottom;
            const openUp = spaceBelow < PANEL_MAX_HEIGHT && rect.top > spaceBelow;
            setPanelPos({
                left: rect.left,
                width: rect.width,
                ...openUp ? {
                    bottom: window.innerHeight - rect.top
                } : {
                    top: rect.bottom
                }
            });
        }
    }["InputAutocomplete.useCallback[updatePanelPosition]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "InputAutocomplete.useLayoutEffect": ()=>{
            if (!panelVisible) {
                setPanelPos(null);
                return;
            }
            updatePanelPosition();
            window.addEventListener('scroll', updatePanelPosition, true);
            window.addEventListener('resize', updatePanelPosition);
            return ({
                "InputAutocomplete.useLayoutEffect": ()=>{
                    window.removeEventListener('scroll', updatePanelPosition, true);
                    window.removeEventListener('resize', updatePanelPosition);
                }
            })["InputAutocomplete.useLayoutEffect"];
        }
    }["InputAutocomplete.useLayoutEffect"], [
        panelVisible,
        updatePanelPosition
    ]);
    // Scroll active item into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputAutocomplete.useEffect": ()=>{
            if (activeIndex >= 0 && listRef.current) {
                const activeItem = listRef.current.children[activeIndex];
                // Optional call: jsdom does not implement scrollIntoView (InputSelect precedent)
                activeItem?.scrollIntoView?.({
                    block: 'nearest'
                });
            }
        }
    }["InputAutocomplete.useEffect"], [
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Root"], {
        $noMargin: noMargin,
        "data-testid": dataTestId ? `${dataTestId}-root` : undefined,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StyledInputLabel"], {
                error: error,
                disabled: disabled,
                required: required,
                htmlFor: forId,
                infoTextTitle: infoTextTitle,
                infoTextContent: infoTextContent,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InputWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StyledInput"], {
                        ref: inputRef,
                        id: forId,
                        type: "text",
                        value: inputValue,
                        onChange: handleInputChange,
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                        onKeyDown: handleKeyDown,
                        placeholder: resolvedPlaceholder,
                        disabled: disabled,
                        autoFocus: autoFocus,
                        $error: error,
                        $disabled: disabled,
                        autoComplete: "off",
                        "aria-autocomplete": "list",
                        "aria-expanded": panelVisible,
                        "aria-controls": forId ? `${forId}-listbox` : undefined,
                        "data-testid": dataTestId ? `${dataTestId}-input` : undefined
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputAutocomplete$2f$InputAutocomplete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LoadingIndicator"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                            size: "small"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    panelVisible && panelPos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownList"], {
                        ref: listRef,
                        $visible: panelVisible,
                        id: forId ? `${forId}-listbox` : undefined,
                        role: "listbox",
                        "data-testid": dataTestId ? `${dataTestId}-dropdown` : undefined,
                        // Dynamische Viewport-Koordinaten — bewusst style statt
                        // styled-props (Messwerte, kein Theming; Muster InputSelect).
                        style: {
                            position: 'fixed',
                            // 'auto' zwingend — sonst greift das top:100% aus dropdownListStyles
                            top: panelPos.top ?? 'auto',
                            bottom: panelPos.bottom ?? 'auto',
                            left: panelPos.left,
                            right: 'auto',
                            width: panelPos.width,
                            margin: panelPos.top !== undefined ? '0.25rem 0 0 0' : '0 0 0.25rem 0'
                        },
                        children: showNoResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoResults"], {
                            children: resolvedNoResultsText
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this) : options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItem"], {
                                $active: index === activeIndex,
                                role: "option",
                                "aria-selected": index === activeIndex,
                                onMouseDown: ()=>handleSelect(option),
                                onMouseEnter: ()=>setActiveIndex(index),
                                "data-testid": dataTestId ? `${dataTestId}-option-${index}` : undefined,
                                // Datensatz-Id als Zustand: E2E waehlt die gesuchte Option ueber
                                // `[data-value=…]` statt ueber die Position, die bei nachlaufenden
                                // Suchergebnissen noch die alte Liste zeigen kann (#912).
                                "data-value": option.value,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItemPrimary"], {
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this),
                                    option.secondaryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItemSecondary"], {
                                        // Nicht `-option-N-…`: E2E zaehlt Optionen per Praefix `<id>-option-`.
                                        "data-testid": dataTestId ? `${dataTestId}-secondary-${index}` : undefined,
                                        children: option.secondaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                                        lineNumber: 362,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, option.value, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                                lineNumber: 347,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this), document.body)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            error && errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                dataTestId: dataTestId ? `${dataTestId}-error` : undefined,
                children: errorText
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
                lineNumber: 378,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputAutocomplete/InputAutocomplete.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s(InputAutocomplete, "o5/cwyL9bFiQRiMbzPuR2qGf3l0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c = InputAutocomplete;
const __TURBOPACK__default__export__ = InputAutocomplete;
var _c;
__turbopack_context__.k.register(_c, "InputAutocomplete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoButton",
    ()=>InfoButton,
    "InfoPlaceholder",
    ()=>InfoPlaceholder,
    "InfoSymbol",
    ()=>InfoSymbol,
    "Root",
    ()=>Root,
    "Sup",
    ()=>Sup,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipHeadline",
    ()=>TooltipHeadline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const InfoSymbol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputLabel.styles__InfoSymbol",
    componentId: "sc-3af739ba-0"
})`
  align-items: center;
  background-color: ${(props)=>props.theme.palette.default.black};
  border-radius: 100%;
  color: ${(props)=>props.theme.palette.default.white};
  display: inline-flex;
  font-weight: bolder;
  height: 20px;
  justify-content: center;
  width: 20px;
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "InputLabel.styles__Root",
    componentId: "sc-3af739ba-1"
})`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  cursor: ${(props)=>props.$disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  color: ${(props)=>props.$error ? props.theme.palette.default.error : props.theme.palette.default.black};
  margin-bottom: ${(props)=>props.theme.margin.small};
  user-select: none;
  display: block;

  span:not(${InfoSymbol}),
  a {
    display: inline-block;
  }
`;
const InfoButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputLabel.styles__InfoButton",
    componentId: "sc-3af739ba-2"
})`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 0 0 10px;
  outline: none;
  padding: 0;
`;
const InfoPlaceholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputLabel.styles__InfoPlaceholder",
    componentId: "sc-3af739ba-3"
})`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 0 0 10px;
  vertical-align: middle;
`;
const TooltipHeadline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "InputLabel.styles__TooltipHeadline",
    componentId: "sc-3af739ba-4"
})`
  color: ${(props)=>props.theme.palette.default.white};
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
const TooltipContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputLabel.styles__TooltipContent",
    componentId: "sc-3af739ba-5"
})`
  max-width: 300px;
  text-align: left;
`;
const Sup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sup.withConfig({
    displayName: "InputLabel.styles__Sup",
    componentId: "sc-3af739ba-6"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputLabel",
    ()=>InputLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.styles.ts [app-client] (ecmascript)");
;
;
;
;
;
/**
 * #1531: Info-Knopf samt Tooltip (react-tooltip, slugify — 19 KB) als eigener
 * Chunk. Geladen wird er nur, wenn ein Feld einen Hinweistext hat; bis dahin
 * hält ein Platzhalter gleicher Größe die Stelle frei.
 */ const InputLabelInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.InputLabelInfo), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoPlaceholder"], {
            "aria-hidden": "true",
            "data-testid": "InputLabel-info-loading"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx",
            lineNumber: 13,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = InputLabelInfo;
const InputLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c1 = function InputLabel(props, ref) {
    const { children, className, infoTextTitle, infoTextContent, htmlFor, required = false, $required, error = false, $error, disabled = false, $disabled, dataTestId } = props;
    // Check for error and convert to boolean
    const hasError = $error !== undefined ? $error : typeof error === 'boolean' ? error : !!error;
    // Check if info text should be shown
    const showInfoText = typeof infoTextTitle === 'string' && infoTextTitle.length > 0 && typeof infoTextContent === 'string' && infoTextContent.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: className,
        htmlFor: htmlFor,
        $error: hasError,
        $required: $required !== undefined ? $required : required,
        $disabled: $disabled !== undefined ? $disabled : disabled,
        "data-testid": dataTestId || 'InputLabel-root',
        children: [
            children,
            showInfoText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputLabelInfo, {
                title: infoTextTitle,
                content: infoTextContent
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx",
                lineNumber: 73,
                columnNumber: 26
            }, this),
            required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sup"], {
                children: "*"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx",
                lineNumber: 74,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx",
        lineNumber: 63,
        columnNumber: 7
    }, this);
});
_c2 = InputLabel;
// Add display name for better debugging
InputLabel.displayName = 'InputLabel';
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InputLabelInfo");
__turbopack_context__.k.register(_c1, "InputLabel$React.forwardRef");
__turbopack_context__.k.register(_c2, "InputLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputLabel/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputLabel"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorWrapper",
    ()=>EditorWrapper,
    "Root",
    ()=>Root,
    "StyledInputLabel",
    ()=>StyledInputLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/index.tsx [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMarkdown.styles__Root",
    componentId: "sc-9b3128cd-0"
})`
  margin-bottom: ${(props)=>props.theme.margin.default};
  width: 100%;
`;
const StyledInputLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "InputMarkdown.styles__StyledInputLabel",
    componentId: "sc-9b3128cd-1"
})`
  color: ${({ error, theme })=>error ? theme.palette.default.error : theme.palette.default.black};
  opacity: ${({ disabled })=>disabled ? 0.5 : 1};
`;
const EditorWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMarkdown.styles__EditorWrapper",
    componentId: "sc-9b3128cd-2"
})`
  border: 1px solid
    ${(props)=>props.$error ? props.theme.palette.default.error : props.theme.palette.default.grey};
  border-radius: ${(props)=>props.theme.borderRadius.box || '6px'};
  overflow: hidden;
  opacity: ${(props)=>props.$disabled ? 0.5 : 1};
  pointer-events: ${(props)=>props.$disabled ? 'none' : 'auto'};

  /* Override @uiw/react-md-editor default styles to match app theme */
  .w-md-editor {
    border: none !important;
    box-shadow: none !important;
    background-color: ${(props)=>props.theme.palette.default.white} !important;
    font-family: ${(props)=>props.theme.font.secondaryFamily} !important;
  }

  .w-md-editor-toolbar {
    border-bottom: 1px solid ${(props)=>props.theme.palette.default.grey} !important;
    background-color: ${(props)=>props.theme.palette.default.greyLight} !important;
    padding: 4px 8px !important;
  }

  .w-md-editor-toolbar li > button {
    color: ${(props)=>props.theme.palette.text.secondary} !important;
    height: 28px !important;
    width: 28px !important;
  }

  .w-md-editor-toolbar li > button:hover {
    color: ${(props)=>props.theme.palette.default.primary} !important;
    background-color: ${(props)=>props.theme.palette.default.primary}15 !important;
  }

  .w-md-editor-content {
    font-family: ${(props)=>props.theme.font.secondaryFamily} !important;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input,
  .w-md-editor-text textarea {
    font-family: ${(props)=>props.theme.font.secondaryFamily} !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
    color: ${(props)=>props.theme.palette.text.primary} !important;
  }

  .w-md-editor-preview {
    font-family: ${(props)=>props.theme.font.secondaryFamily} !important;
    font-size: 14px !important;
    padding: 12px 16px !important;
  }

  /* Preview styling — matches MarkdownRenderer block styles */
  .wmde-markdown {
    font-family: ${(props)=>props.theme.font.secondaryFamily} !important;
    font-size: 14px !important;
    color: ${(props)=>props.theme.palette.text.primary} !important;
    background-color: transparent !important;
  }

  .wmde-markdown h1,
  .wmde-markdown h2,
  .wmde-markdown h3 {
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .wmde-markdown a {
    color: ${(props)=>props.theme.palette.link?.primary || '#00416e'} !important;
  }

  .wmde-markdown code {
    font-family: 'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace !important;
    font-size: 13px !important;
    background-color: ${(props)=>props.theme.palette.default.greyLight} !important;
    padding: 1px 6px !important;
    border-radius: 3px !important;
  }

  .wmde-markdown blockquote {
    border-left: 3px solid ${(props)=>props.theme.palette.default.grey} !important;
    color: ${(props)=>props.theme.palette.default.greyDark} !important;
    background-color: ${(props)=>props.theme.palette.default.greyLight} !important;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputMarkdown",
    ()=>InputMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMarkdown$2f$InputMarkdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ErrorText/index.ts [app-client] (ecmascript)");
;
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
/**
 * Die Bibliothek beschriftet ihre Werkzeugleiste fest auf Englisch. Titel,
 * aria-label und Textinhalt (Überschriften-Menü) werden je Befehlsname durch
 * die Texte in der Sprache des Nutzers ersetzt; unbekannte Befehle bleiben.
 */ const localizeCommands = (commands, texts)=>commands.map((command)=>{
        const text = command.name ? texts[command.name] : undefined;
        const children = Array.isArray(command.children) ? localizeCommands(command.children, texts) : command.children;
        return {
            ...command,
            ...children !== undefined ? {
                children
            } : {},
            ...text ? {
                buttonProps: {
                    ...command.buttonProps,
                    title: text,
                    'aria-label': text
                }
            } : {},
            ...text && typeof command.children === 'string' ? {
                children: text
            } : {}
        };
    });
// Dynamic import to avoid SSR issues with @uiw/react-md-editor
const MDEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    var _s = __turbopack_context__.k.signature();
    const mod = await __turbopack_context__.A("[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-client] (ecmascript, next/dynamic entry, async loader)");
    const Editor = mod.default;
    const { getCommands, getExtraCommands } = mod.commands;
    function LocalizedEditor({ toolbarTexts, ...props }) {
        _s();
        const commands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "MDEditor.LocalizedEditor.useMemo[commands]": ()=>localizeCommands(getCommands(), toolbarTexts)
        }["MDEditor.LocalizedEditor.useMemo[commands]"], [
            toolbarTexts
        ]);
        const extraCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "MDEditor.LocalizedEditor.useMemo[extraCommands]": ()=>localizeCommands(getExtraCommands(), toolbarTexts)
        }["MDEditor.LocalizedEditor.useMemo[extraCommands]"], [
            toolbarTexts
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Editor, {
            ...props,
            commands: commands,
            extraCommands: extraCommands
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
            lineNumber: 50,
            columnNumber: 14
        }, this);
    }
    _s(LocalizedEditor, "QzswGE266jsWxvmUx30ZAywLUVI=");
    return LocalizedEditor;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MDEditor;
function useToolbarTexts() {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    // Zähler der nachgeladenen Übersetzungen (`tr` behält seine Identität)
    const { revision: trRevision } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useToolbarTexts.useMemo": ()=>({
                bold: tr('common.markdownEditor.bold', {
                    defaultValue: 'Add bold text (ctrl + b)'
                }),
                italic: tr('common.markdownEditor.italic', {
                    defaultValue: 'Add italic text (ctrl + i)'
                }),
                strikethrough: tr('common.markdownEditor.strikethrough', {
                    defaultValue: 'Add strikethrough text (ctrl + shift + x)'
                }),
                hr: tr('common.markdownEditor.hr', {
                    defaultValue: 'Insert HR (ctrl + h)'
                }),
                title: tr('common.markdownEditor.title', {
                    defaultValue: 'Insert title'
                }),
                heading1: tr('common.markdownEditor.heading1', {
                    defaultValue: 'Heading 1'
                }),
                heading2: tr('common.markdownEditor.heading2', {
                    defaultValue: 'Heading 2'
                }),
                heading3: tr('common.markdownEditor.heading3', {
                    defaultValue: 'Heading 3'
                }),
                heading4: tr('common.markdownEditor.heading4', {
                    defaultValue: 'Heading 4'
                }),
                heading5: tr('common.markdownEditor.heading5', {
                    defaultValue: 'Heading 5'
                }),
                heading6: tr('common.markdownEditor.heading6', {
                    defaultValue: 'Heading 6'
                }),
                link: tr('common.markdownEditor.link', {
                    defaultValue: 'Add a link (ctrl + l)'
                }),
                quote: tr('common.markdownEditor.quote', {
                    defaultValue: 'Insert a quote (ctrl + q)'
                }),
                code: tr('common.markdownEditor.code', {
                    defaultValue: 'Insert code (ctrl + j)'
                }),
                codeBlock: tr('common.markdownEditor.codeBlock', {
                    defaultValue: 'Insert Code Block (ctrl + shift + j)'
                }),
                comment: tr('common.markdownEditor.comment', {
                    defaultValue: 'Insert comment (ctrl + /)'
                }),
                image: tr('common.markdownEditor.image', {
                    defaultValue: 'Add image (ctrl + k)'
                }),
                table: tr('common.markdownEditor.table', {
                    defaultValue: 'Add table'
                }),
                'unordered-list': tr('common.markdownEditor.unorderedList', {
                    defaultValue: 'Add unordered list (ctrl + shift + u)'
                }),
                'ordered-list': tr('common.markdownEditor.orderedList', {
                    defaultValue: 'Add ordered list (ctrl + shift + o)'
                }),
                'checked-list': tr('common.markdownEditor.checkedList', {
                    defaultValue: 'Add checked list (ctrl + shift + c)'
                }),
                help: tr('common.markdownEditor.help', {
                    defaultValue: 'Open help'
                }),
                edit: tr('common.markdownEditor.edit', {
                    defaultValue: 'Edit code (ctrl + 7)'
                }),
                live: tr('common.markdownEditor.live', {
                    defaultValue: 'Live code (ctrl + 8)'
                }),
                preview: tr('common.markdownEditor.preview', {
                    defaultValue: 'Preview code (ctrl + 9)'
                }),
                fullscreen: tr('common.markdownEditor.fullscreen', {
                    defaultValue: 'Toggle fullscreen (ctrl + 0)'
                })
            })
    }["useToolbarTexts.useMemo"], // eslint-disable-next-line react-hooks/exhaustive-deps -- `tr` behält beim Nachladen seine Identität, der Zähler nicht
    [
        tr,
        trRevision
    ]);
}
_s(useToolbarTexts, "7VoF6HiRZOGADimZSA0NxrDh200=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"]
    ];
});
function InputMarkdown({ error, errorText, disabled, label, htmlFor, required, name, control, value, onChange, placeholder, height = 200, dataTestId = 'input-markdown', className }) {
    _s1();
    const toolbarTexts = useToolbarTexts();
    const editor = (currentValue, handleChange)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMarkdown$2f$InputMarkdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorWrapper"], {
            $error: !!error,
            $disabled: !!disabled,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MDEditor, {
                toolbarTexts: toolbarTexts,
                value: currentValue,
                // #1891: gesperrt — nur Vorschau, keine Werkzeugleiste, kein onChange
                onChange: (val)=>{
                    if (!disabled) handleChange(val || '');
                },
                height: height,
                preview: disabled ? 'preview' : 'live',
                hideToolbar: !!disabled,
                textareaProps: {
                    id: htmlFor,
                    placeholder: placeholder || '',
                    disabled: !!disabled,
                    'aria-disabled': disabled || undefined
                },
                "data-color-mode": "light"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
            lineNumber: 153,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMarkdown$2f$InputMarkdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": `${dataTestId}-root`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMarkdown$2f$InputMarkdown$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInputLabel"], {
                error: !!error,
                disabled: !!disabled,
                required: required,
                htmlFor: htmlFor,
                dataTestId: `${dataTestId}-label`,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            control && name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                name: name,
                control: control,
                render: ({ field })=>editor(field.value || '', (val)=>{
                        field.onChange(val);
                        onChange?.(val);
                    })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this) : editor(value ?? '', (val)=>onChange?.(val)),
            error && errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                dataTestId: `${dataTestId}-error`,
                children: errorText
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
                lineNumber: 202,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMarkdown/InputMarkdown.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s1(InputMarkdown, "g9BdcuB43bixvndsBWXFdb8S26A=", false, function() {
    return [
        useToolbarTexts
    ];
});
_c1 = InputMarkdown;
var _c, _c1;
__turbopack_context__.k.register(_c, "MDEditor");
__turbopack_context__.k.register(_c1, "InputMarkdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownPanel",
    ()=>DropdownPanel,
    "InlineContainer",
    ()=>InlineContainer,
    "OptionItem",
    ()=>OptionItem,
    "OptionsList",
    ()=>OptionsList,
    "RemoveTagButton",
    ()=>RemoveTagButton,
    "Root",
    ()=>Root,
    "SelectedTag",
    ()=>SelectedTag,
    "SelectedTags",
    ()=>SelectedTags,
    "StyledIconArrowLeft",
    ()=>StyledIconArrowLeft,
    "StyledInputLabel",
    ()=>StyledInputLabel,
    "Trigger",
    ()=>Trigger,
    "TriggerPlaceholder",
    ()=>TriggerPlaceholder,
    "TriggerText",
    ()=>TriggerText,
    "TriggerWrap",
    ()=>TriggerWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__Root",
    componentId: "sc-75126dac-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props)=>props.$noMargin ? '0' : props.theme.margin.default};
`;
const StyledInputLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).attrs((props)=>({
        ...props
    })).withConfig({
    displayName: "InputMultiSelect.styles__StyledInputLabel",
    componentId: "sc-75126dac-1"
})`
  color: ${({ error, theme })=>error ? theme.palette.default.error : theme.palette.default.black};
  opacity: ${({ disabled })=>disabled ? 0.5 : 1};
`;
const SelectedTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__SelectedTags",
    componentId: "sc-75126dac-2"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;
const SelectedTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputMultiSelect.styles__SelectedTag",
    componentId: "sc-75126dac-3"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background-color: #e3f2fd;
  border: 1px solid ${({ theme })=>theme.palette.default.primary};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  font-size: 0.8rem;
  color: ${({ theme })=>theme.palette.default.primary};
`;
const RemoveTagButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputMultiSelect.styles__RemoveTagButton",
    componentId: "sc-75126dac-4"
})`
  background: none;
  border: none;
  color: inherit;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  margin-left: 0.125rem;
  &:hover {
    opacity: 0.7;
  }
`;
const OptionsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__OptionsList",
    componentId: "sc-75126dac-5"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  background-color: ${({ theme })=>theme.palette.default.white};
  max-height: 240px;
  overflow-y: auto;
`;
const OptionItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "InputMultiSelect.styles__OptionItem",
    componentId: "sc-75126dac-6"
})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme })=>theme.borderRadius.input};
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
  background-color: ${({ $isSelected, theme })=>$isSelected ? '#e3f2fd' : theme.palette.default.greyLight};
  border: 1px solid
    ${({ $isSelected, theme })=>$isSelected ? theme.palette.default.primary : theme.palette.default.grey};

  &:hover {
    background-color: ${({ $isSelected, theme })=>$isSelected ? '#bbdefb' : theme.palette.default.grey};
  }

  input {
    margin: 0;
  }
`;
const TriggerWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__TriggerWrap",
    componentId: "sc-75126dac-7"
})`
  position: relative;
  display: flex;
  max-width: 100%;
  min-height: 38px;
`;
const Trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__Trigger",
    componentId: "sc-75126dac-8"
})`
  ${({ $error })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])({
        error: !!$error
    })}
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${(props)=>props.$disabled || props.$readOnly ? 'not-allowed' : 'pointer'};
  /* Trigger is a div — :disabled never fires, so the disabled bg stays explicit */
  background-color: ${(props)=>props.$disabled ? props.theme.palette.default.grey : props.theme.palette.default.white};
  ${(props)=>props.$isopen && !props.$disabled && !props.$readOnly && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: ${(p)=>p.theme.palette.default.primary};
    `}
`;
const TriggerText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputMultiSelect.styles__TriggerText",
    componentId: "sc-75126dac-9"
})`
  flex: 1;
  font-size: 0.9rem;
  color: ${(props)=>props.theme.palette.default.black};
  margin-right: 1.5rem;
`;
const TriggerPlaceholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputMultiSelect.styles__TriggerPlaceholder",
    componentId: "sc-75126dac-10"
})`
  flex: 1;
  font-size: 0.9rem;
  color: ${(props)=>props.theme.palette.default.black};
  opacity: 0.5;
`;
const StyledIconArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "InputMultiSelect.styles__StyledIconArrowLeft",
    componentId: "sc-75126dac-11"
})`
  position: absolute;
  right: 0.625rem;
  top: 0.7rem;
  transform: rotate(90deg) ${(props)=>props.$isopen ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  transform-origin: 50% 50%;
  transition: 200ms ease-in-out;
`;
const DropdownPanel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__DropdownPanel",
    componentId: "sc-75126dac-12"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropdownListStyles"]}
  display: ${(props)=>props.$isopen ? 'block' : 'none'};
  padding: 0.5rem;
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userSelectNone"])()}
`;
const InlineContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputMultiSelect.styles__InlineContainer",
    componentId: "sc-75126dac-13"
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputMultiSelect",
    ()=>InputMultiSelect,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ErrorText/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function parseValue(value, separator) {
    if (Array.isArray(value)) return value.filter(Boolean);
    if (typeof value === 'string' && value.length > 0) {
        return value.split(separator).map((v)=>v.trim()).filter(Boolean);
    }
    return [];
}
function InputMultiSelect({ value, onChange, onChangeArray, options, separator = ';', inline = false, label, placeholder, forId, required, disabled, readOnly, error, errorText, dataTestId, noMargin, clearable = false, clearAllLabel, renderTriggerSummary }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const resolvedPlaceholder = placeholder ?? tr('form.inputMultiSelect.placeholder', {
        defaultValue: 'Bitte auswählen'
    });
    const resolvedClearAllLabel = clearAllLabel ?? tr('form.inputMultiSelect.clearAll', {
        defaultValue: 'Alle löschen'
    });
    const testId = dataTestId || 'InputMultiSelect';
    const hasError = !!error;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InputMultiSelect.useMemo[selectedValues]": ()=>parseValue(value, separator)
    }["InputMultiSelect.useMemo[selectedValues]"], [
        value,
        separator
    ]);
    const selectedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InputMultiSelect.useMemo[selectedOptions]": ()=>options.filter({
                "InputMultiSelect.useMemo[selectedOptions]": (opt)=>selectedValues.includes(opt.value)
            }["InputMultiSelect.useMemo[selectedOptions]"])
    }["InputMultiSelect.useMemo[selectedOptions]"], [
        options,
        selectedValues
    ]);
    // Close dropdown on click outside (dropdown mode only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputMultiSelect.useEffect": ()=>{
            if (inline) return undefined;
            const handleClickOutside = {
                "InputMultiSelect.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["InputMultiSelect.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "InputMultiSelect.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["InputMultiSelect.useEffect"];
        }
    }["InputMultiSelect.useEffect"], [
        inline
    ]);
    const emit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputMultiSelect.useCallback[emit]": (next)=>{
            onChange(next.join(separator));
            onChangeArray?.(next);
        }
    }["InputMultiSelect.useCallback[emit]"], [
        onChange,
        onChangeArray,
        separator
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputMultiSelect.useCallback[toggle]": (optionValue)=>{
            if (disabled || readOnly) return;
            const next = selectedValues.includes(optionValue) ? selectedValues.filter({
                "InputMultiSelect.useCallback[toggle]": (v)=>v !== optionValue
            }["InputMultiSelect.useCallback[toggle]"]) : [
                ...selectedValues,
                optionValue
            ];
            emit(next);
        }
    }["InputMultiSelect.useCallback[toggle]"], [
        selectedValues,
        disabled,
        readOnly,
        emit
    ]);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputMultiSelect.useCallback[clearAll]": ()=>{
            if (disabled || readOnly) return;
            emit([]);
        }
    }["InputMultiSelect.useCallback[clearAll]"], [
        disabled,
        readOnly,
        emit
    ]);
    const renderOptions = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsList"], {
            "data-testid": `${testId}-options`,
            children: options.map((opt)=>{
                const isSelected = selectedValues.includes(opt.value);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionItem"], {
                    $isSelected: isSelected,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: isSelected,
                            disabled: disabled || readOnly,
                            onChange: ()=>toggle(opt.value),
                            "data-testid": `${testId}-option-${opt.value}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this),
                        opt.label
                    ]
                }, opt.value, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
            lineNumber: 157,
            columnNumber: 5
        }, this);
    const renderSummary = ()=>{
        if (selectedOptions.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerPlaceholder"], {
                children: resolvedPlaceholder
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 178,
                columnNumber: 14
            }, this);
        }
        if (renderTriggerSummary) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerText"], {
                children: renderTriggerSummary(selectedOptions)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 181,
                columnNumber: 14
            }, this);
        }
        if (selectedOptions.length <= 2) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerText"], {
                children: selectedOptions.map((o)=>o.label).join(', ')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 184,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerText"], {
            children: [
                selectedOptions.slice(0, 2).map((o)=>o.label).join(', '),
                ` +${selectedOptions.length - 2}`
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $noMargin: !!noMargin,
        "data-testid": `${testId}-root`,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInputLabel"], {
                error: hasError,
                disabled: !!disabled,
                required: required,
                htmlFor: forId,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this),
            inline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineContainer"], {
                children: [
                    selectedOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectedTags"], {
                        "data-testid": `${testId}-tags`,
                        children: [
                            selectedOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectedTag"], {
                                    "data-testid": `${testId}-tag-${opt.value}`,
                                    children: [
                                        opt.label,
                                        !disabled && !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveTagButton"], {
                                            type: "button",
                                            "aria-label": tr('form.inputMultiSelect.removeOption', {
                                                defaultValue: '{label} entfernen'
                                            }).replace('{label}', opt.label),
                                            onClick: ()=>toggle(opt.value),
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                                            lineNumber: 218,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, opt.value, true, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this)),
                            clearable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clearAll,
                                "data-testid": `${testId}-clear`,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem',
                                    textDecoration: 'underline',
                                    color: 'inherit'
                                },
                                children: resolvedClearAllLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                                lineNumber: 231,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this),
                    renderOptions()
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                            $disabled: !!disabled,
                            $error: hasError,
                            $isopen: isOpen,
                            $readOnly: !!readOnly,
                            onClick: ()=>!disabled && !readOnly && setIsOpen((v)=>!v),
                            tabIndex: disabled || readOnly ? -1 : 0,
                            role: "button",
                            "aria-haspopup": "listbox",
                            "aria-expanded": isOpen,
                            "data-testid": `${testId}-trigger`,
                            onKeyDown: (e)=>{
                                if (disabled || readOnly) return;
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setIsOpen((v)=>!v);
                                } else if (e.key === 'Escape') {
                                    setIsOpen(false);
                                }
                            },
                            children: [
                                renderSummary(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledIconArrowLeft"], {
                                    $isopen: isOpen
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownPanel"], {
                        $isopen: isOpen,
                        role: "listbox",
                        "data-testid": `${testId}-panel`,
                        children: [
                            renderOptions(),
                            clearable && selectedOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '0.5rem',
                                    textAlign: 'right'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: clearAll,
                                    "data-testid": `${testId}-clear`,
                                    style: {
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '0.8rem',
                                        textDecoration: 'underline',
                                        color: 'inherit'
                                    },
                                    children: resolvedClearAllLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            hasError && errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                dataTestId: `${testId}-error`,
                children: errorText
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
                lineNumber: 305,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s(InputMultiSelect, "HvKXBiJe0v67k41V8FctxPY9O2o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c = InputMultiSelect;
const __TURBOPACK__default__export__ = InputMultiSelect;
var _c;
__turbopack_context__.k.register(_c, "InputMultiSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputMultiSelect$2f$InputMultiSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputMultiSelect/InputMultiSelect.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigitBox",
    ()=>DigitBox,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputOtp.styles__Root",
    componentId: "sc-f69a5d61-0"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const DigitBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "InputOtp.styles__DigitBox",
    componentId: "sc-f69a5d61-1"
})`
  ${({ $error })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])({
        error: $error
    })}
  /* Square-ish per-digit box: override inputBase's full-width metrics */
  width: 2.5rem;
  flex: 0 0 auto;
  padding: 0.375rem 0.25rem;
  text-align: center;
  font-size: 1.25rem;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputOtp",
    ()=>InputOtp,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$InputOtp$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DIGITS_ONLY = /\D+/g;
const InputOtp = ({ value, onChange, length = 6, disabled, error, dataTestId, onKeyDown, ariaLabel, id })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const resolvedAriaLabel = ariaLabel ?? tr('form.inputOtp.ariaLabel', {
        defaultValue: 'Einmalcode'
    });
    const boxRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Sanitized per-box digits derived from the controlled value
    const digits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InputOtp.useMemo[digits]": ()=>{
            const clean = (value ?? '').replace(DIGITS_ONLY, '').slice(0, length);
            return Array.from({
                length
            }, {
                "InputOtp.useMemo[digits]": (_, i)=>clean[i] ?? ''
            }["InputOtp.useMemo[digits]"]);
        }
    }["InputOtp.useMemo[digits]"], [
        value,
        length
    ]);
    const combined = digits.join('');
    const emit = (nextDigits)=>{
        onChange(nextDigits.join(''));
    };
    const focusBox = (index)=>{
        const clamped = Math.max(0, Math.min(index, length - 1));
        const box = boxRefs.current[clamped];
        box?.focus();
        box?.select?.();
    };
    const setDigit = (index, digit)=>{
        const next = [
            ...digits
        ];
        next[index] = digit;
        emit(next);
    };
    /** Writes `code` into the boxes starting at `start`, focuses the box after the last written digit */ const distributeFrom = (start, code)=>{
        const next = [
            ...digits
        ];
        let cursor = start;
        for (const char of code){
            if (cursor >= length) {
                break;
            }
            next[cursor] = char;
            cursor += 1;
        }
        emit(next);
        focusBox(cursor);
    };
    const handleChange = (index)=>(e)=>{
            if (disabled) {
                return;
            }
            const raw = e.target.value;
            if (raw === '') {
                // Cleared (e.g. cut/select+delete)
                setDigit(index, '');
                return;
            }
            const sanitized = raw.replace(DIGITS_ONLY, '');
            if (sanitized === '') {
                // Non-digit input is filtered — keep the previous digit
                return;
            }
            if (sanitized.length === 1) {
                // Single digit typed (over a filled box: select-on-focus makes it replace)
                setDigit(index, sanitized);
                focusBox(index + 1);
                return;
            }
            // Multi-char insert (iOS one-time-code autofill path): if the previous
            // digit survived as a prefix, strip it, then distribute from this box.
            const previous = digits[index];
            const code = previous && sanitized.startsWith(previous) && sanitized.length > 1 ? sanitized.slice(previous.length) : sanitized;
            distributeFrom(index, code);
        };
    const handlePaste = (e)=>{
        if (disabled) {
            return;
        }
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(DIGITS_ONLY, '');
        if (!pasted) {
            return;
        }
        // Pasting a code always fills from the first box (autofill semantics)
        distributeFrom(0, pasted);
    };
    const handleKeyDown = (index)=>(e)=>{
            if (disabled) {
                return;
            }
            switch(e.key){
                case 'Backspace':
                    e.preventDefault();
                    if (digits[index]) {
                        // Filled box: clear it, keep focus
                        setDigit(index, '');
                    } else if (index > 0) {
                        // Empty box: clear the previous box and focus it
                        setDigit(index - 1, '');
                        focusBox(index - 1);
                    }
                    return;
                case 'ArrowLeft':
                    e.preventDefault();
                    focusBox(index - 1);
                    return;
                case 'ArrowRight':
                    e.preventDefault();
                    focusBox(index + 1);
                    return;
                default:
                    // Digits are consumed via the change event. Everything else —
                    // notably Enter/Escape — bubbles and is forwarded so the
                    // surrounding EditableField can confirm/cancel.
                    if (!/^[0-9]$/.test(e.key)) {
                        onKeyDown?.(e);
                    }
            }
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$InputOtp$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        role: "group",
        "aria-label": resolvedAriaLabel,
        children: [
            digits.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$InputOtp$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitBox"], {
                    ref: (node)=>{
                        boxRefs.current[index] = node;
                    },
                    type: "text",
                    maxLength: 1,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    autoComplete: index === 0 ? 'one-time-code' : 'off',
                    id: id ? index === 0 ? id : `${id}-${index}` : undefined,
                    value: digit,
                    disabled: disabled,
                    $error: error,
                    onChange: handleChange(index),
                    onKeyDown: handleKeyDown(index),
                    onPaste: handlePaste,
                    onFocus: (e)=>e.target.select(),
                    "aria-label": tr('form.inputOtp.digitOfTotal', {
                        defaultValue: 'Ziffer {index} von {total}'
                    }).replace('{index}', String(index + 1)).replace('{total}', String(length)),
                    "data-testid": dataTestId ? `${dataTestId}-${index}` : undefined
                }, index, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                value: combined,
                "data-testid": dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InputOtp, "+4K0E3NM8Bod5Y6FBhN3E9o53aA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c = InputOtp;
const __TURBOPACK__default__export__ = InputOtp;
var _c;
__turbopack_context__.k.register(_c, "InputOtp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputOtp/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputOtp$2f$InputOtp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputOtp/InputOtp.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.styles.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoOptionsRow",
    ()=>NoOptionsRow,
    "OptionItem",
    ()=>OptionItem,
    "OptionLabel",
    ()=>OptionLabel,
    "OptionSecondary",
    ()=>OptionSecondary,
    "Root",
    ()=>Root,
    "SelectDropdownList",
    ()=>SelectDropdownList,
    "StyledCheck",
    ()=>StyledCheck,
    "StyledChevron",
    ()=>StyledChevron,
    "TriggerButton",
    ()=>TriggerButton,
    "TriggerLabel",
    ()=>TriggerLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$IconChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/IconChevronDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCheck/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const SelectDropdownList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownList"]).withConfig({
    displayName: "InputSelect.styles__SelectDropdownList",
    componentId: "sc-8932dfcc-0"
})`
  ${({ $maxHeight })=>$maxHeight !== undefined && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      max-height: ${$maxHeight}px;
    `}
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSelect.styles__Root",
    componentId: "sc-8932dfcc-1"
})`
  position: relative;
  width: 100%;
`;
const TriggerButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputSelect.styles__TriggerButton",
    componentId: "sc-8932dfcc-2"
})`
  ${({ $error })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])({
        error: $error
    })}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-width: 0;
  text-align: left;
  cursor: pointer;
`;
const TriggerLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputSelect.styles__TriggerLabel",
    componentId: "sc-8932dfcc-3"
})`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ $placeholder, theme })=>$placeholder ? theme.palette.default.greyDark : 'inherit'};
  font-style: ${({ $placeholder })=>$placeholder ? 'italic' : 'normal'};
`;
const StyledChevron = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$IconChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"]).withConfig({
    displayName: "InputSelect.styles__StyledChevron",
    componentId: "sc-8932dfcc-4"
})`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: ${({ theme })=>theme.palette.default.greyDark};
  transition: transform 200ms ease-in-out;
  transform: rotate(${({ $open })=>$open ? '180deg' : '0deg'});
`;
const OptionItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItem"]).withConfig({
    displayName: "InputSelect.styles__OptionItem",
    componentId: "sc-8932dfcc-5"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({ $selected })=>$selected ? 500 : 300};
`;
const OptionLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputSelect.styles__OptionLabel",
    componentId: "sc-8932dfcc-6"
})`
  flex: 1;
  min-width: 0;
`;
const OptionSecondary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputSelect.styles__OptionSecondary",
    componentId: "sc-8932dfcc-7"
})`
  display: block;
  font-size: 0.8em;
  color: ${({ theme })=>theme.palette.text.secondary};
  overflow-wrap: anywhere;
`;
const StyledCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "InputSelect.styles__StyledCheck",
    componentId: "sc-8932dfcc-8"
})`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;
const NoOptionsRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "InputSelect.styles__NoOptionsRow",
    componentId: "sc-8932dfcc-9"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noResultsStyles"]}
  cursor: default;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputSelect",
    ()=>InputSelect,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.styles.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const TYPEAHEAD_RESET_MS = 500;
const InputSelect = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s(function InputSelect({ value, onChange, options, placeholder, allowEmpty = true, disabled, error, dataTestId, onKeyDown, id, ariaInvalid, ariaDescribedBy, listMaxHeight }, ref) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const resolvedPlaceholder = placeholder ?? tr('form.inputSelect.placeholder', {
        defaultValue: '-- Bitte wählen --'
    });
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /**
     * Fixed-Position des Panels im Viewport (#415): das Panel wird per Portal
     * nach document.body gerendert, damit es nicht von overflow:auto-Vorfahren
     * (EntityModal/GenericEntityForm-Scrollcontainer) abgeschnitten wird.
     * `bottom` statt `top`, wenn unterhalb des Triggers kein Platz ist.
     */ const [panelPos, setPanelPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typeaheadBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const typeaheadTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Unified items list so index math is uniform for activeIndex/scroll/render.
    // Wenn die options bereits eine eigene ''-Option mitbringen (fachliches
    // Label wie „-- egal --"), keinen Placeholder davorstellen — sonst gibt es
    // zwei Leer-Optionen und doppelte `__empty__`-React-Keys.
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InputSelect.InputSelect.useMemo[items]": ()=>{
            const hasOwnEmpty = options.some({
                "InputSelect.InputSelect.useMemo[items].hasOwnEmpty": (o)=>o.value === ''
            }["InputSelect.InputSelect.useMemo[items].hasOwnEmpty"]);
            return allowEmpty && !hasOwnEmpty ? [
                {
                    value: '',
                    label: resolvedPlaceholder
                },
                ...options
            ] : options;
        }
    }["InputSelect.InputSelect.useMemo[items]"], [
        allowEmpty,
        resolvedPlaceholder,
        options
    ]);
    const setTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSelect.InputSelect.useCallback[setTriggerRef]": (node)=>{
            triggerRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        }
    }["InputSelect.InputSelect.useCallback[setTriggerRef]"], [
        ref
    ]);
    const selectedValue = value ?? '';
    const selectedOption = options.find((option)=>option.value === value);
    const hasValue = value !== undefined && value !== '';
    const displayLabel = hasValue ? selectedOption ? selectedOption.label : String(value) : resolvedPlaceholder;
    const openPanel = ()=>{
        if (disabled) {
            return;
        }
        const selectedIndex = items.findIndex((item)=>item.value === selectedValue);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
        setIsOpen(true);
    };
    const selectItem = (item)=>{
        onChange(item.value);
        setIsOpen(false);
        triggerRef.current?.focus();
    };
    const handleTriggerClick = ()=>{
        if (disabled) {
            return;
        }
        if (isOpen) {
            setIsOpen(false);
        } else {
            openPanel();
        }
    };
    const handleTypeahead = (char)=>{
        typeaheadBufferRef.current += char.toLowerCase();
        if (typeaheadTimerRef.current) {
            clearTimeout(typeaheadTimerRef.current);
        }
        typeaheadTimerRef.current = setTimeout(()=>{
            typeaheadBufferRef.current = '';
        }, TYPEAHEAD_RESET_MS);
        const matchIndex = items.findIndex((item)=>item.label.toLowerCase().startsWith(typeaheadBufferRef.current));
        if (matchIndex >= 0) {
            // When closed: just open and highlight — never select directly
            setIsOpen(true);
            setActiveIndex(matchIndex);
        }
    };
    const isPrintableKey = (e)=>e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
    const handleKeyDown = (e)=>{
        if (!isOpen) {
            // CLOSED: ArrowDown/ArrowUp/Space open; Enter/Escape/Tab are NOT
            // consumed — they go to props.onKeyDown and keep propagating.
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
                e.preventDefault();
                openPanel();
                return;
            }
            if (isPrintableKey(e)) {
                e.preventDefault();
                handleTypeahead(e.key);
                return;
            }
            onKeyDown?.(e);
            return;
        }
        // OPEN: the component owns the keyboard fully.
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                setActiveIndex((prev)=>Math.min(prev + 1, items.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setActiveIndex((prev)=>Math.max(prev - 1, 0));
                break;
            case 'Home':
                e.preventDefault();
                setActiveIndex(0);
                break;
            case 'End':
                e.preventDefault();
                setActiveIndex(Math.max(items.length - 1, 0));
                break;
            case 'Enter':
                // Must NOT reach props.onKeyDown (would confirm the surrounding field)
                e.preventDefault();
                e.stopPropagation();
                if (items[activeIndex]) {
                    selectItem(items[activeIndex]);
                } else {
                    setIsOpen(false);
                }
                break;
            case 'Escape':
                // Closes the panel only — must NOT cancel the surrounding field edit
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
                break;
            case 'Tab':
                setIsOpen(false);
                break;
            default:
                if (isPrintableKey(e)) {
                    e.preventDefault();
                    handleTypeahead(e.key);
                }
                break;
        }
    };
    // Panel im Viewport am Trigger ausrichten; bei Scroll/Resize nachführen
    // (Scroll capture-phase, damit auch Scrollcontainer im Modal erfasst sind).
    const updatePanelPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSelect.InputSelect.useCallback[updatePanelPosition]": ()=>{
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const PANEL_MAX_HEIGHT = listMaxHeight ?? 300 // Standard 18.75rem aus dropdownListStyles
            ;
            const spaceBelow = window.innerHeight - rect.bottom;
            const openUp = spaceBelow < PANEL_MAX_HEIGHT && rect.top > spaceBelow;
            setPanelPos({
                left: rect.left,
                width: rect.width,
                ...openUp ? {
                    bottom: window.innerHeight - rect.top
                } : {
                    top: rect.bottom
                }
            });
        }
    }["InputSelect.InputSelect.useCallback[updatePanelPosition]"], [
        listMaxHeight
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "InputSelect.InputSelect.useLayoutEffect": ()=>{
            if (!isOpen) {
                setPanelPos(null);
                return;
            }
            updatePanelPosition();
            window.addEventListener('scroll', updatePanelPosition, true);
            window.addEventListener('resize', updatePanelPosition);
            return ({
                "InputSelect.InputSelect.useLayoutEffect": ()=>{
                    window.removeEventListener('scroll', updatePanelPosition, true);
                    window.removeEventListener('resize', updatePanelPosition);
                }
            })["InputSelect.InputSelect.useLayoutEffect"];
        }
    }["InputSelect.InputSelect.useLayoutEffect"], [
        isOpen,
        updatePanelPosition
    ]);
    // Close on outside click (mousedown + contains check, not blur-timeout).
    // Das Panel hängt per Portal außerhalb von rootRef — listRef zählt mit,
    // sonst schließt der mousedown das Panel, bevor der Options-Click feuert.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSelect.InputSelect.useEffect": ()=>{
            if (!isOpen) {
                return;
            }
            const handleDocumentMouseDown = {
                "InputSelect.InputSelect.useEffect.handleDocumentMouseDown": (e)=>{
                    const target = e.target;
                    const insideTrigger = rootRef.current?.contains(target);
                    const insidePanel = listRef.current?.contains(target);
                    if (!insideTrigger && !insidePanel) {
                        setIsOpen(false);
                    }
                }
            }["InputSelect.InputSelect.useEffect.handleDocumentMouseDown"];
            document.addEventListener('mousedown', handleDocumentMouseDown);
            return ({
                "InputSelect.InputSelect.useEffect": ()=>document.removeEventListener('mousedown', handleDocumentMouseDown)
            })["InputSelect.InputSelect.useEffect"];
        }
    }["InputSelect.InputSelect.useEffect"], [
        isOpen
    ]);
    // Keep the active item in view while navigating
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSelect.InputSelect.useEffect": ()=>{
            if (!isOpen) {
                return;
            }
            const activeItem = listRef.current?.children[activeIndex];
            activeItem?.scrollIntoView?.({
                block: 'nearest'
            });
        }
    }["InputSelect.InputSelect.useEffect"], [
        activeIndex,
        isOpen
    ]);
    // Clear pending typeahead reset timer on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSelect.InputSelect.useEffect": ()=>{
            return ({
                "InputSelect.InputSelect.useEffect": ()=>{
                    if (typeaheadTimerRef.current) {
                        clearTimeout(typeaheadTimerRef.current);
                    }
                }
            })["InputSelect.InputSelect.useEffect"];
        }
    }["InputSelect.InputSelect.useEffect"], []);
    const optionId = (index)=>id ? `${id}-option-${index}` : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Root"], {
        ref: rootRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TriggerButton"], {
                ref: setTriggerRef,
                type: "button",
                id: id,
                disabled: disabled,
                $error: error,
                onClick: handleTriggerClick,
                onKeyDown: handleKeyDown,
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                "aria-controls": id ? `${id}-listbox` : undefined,
                "aria-activedescendant": isOpen ? optionId(activeIndex) : undefined,
                "aria-invalid": ariaInvalid || undefined,
                "aria-describedby": ariaDescribedBy,
                "data-testid": dataTestId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TriggerLabel"], {
                        $placeholder: !hasValue,
                        suppressHydrationWarning: true,
                        children: displayLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StyledChevron"], {
                        $open: isOpen
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this),
            isOpen && panelPos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SelectDropdownList"], {
                ref: listRef,
                $maxHeight: listMaxHeight,
                role: "listbox",
                id: id ? `${id}-listbox` : undefined,
                "data-testid": dataTestId ? `${dataTestId}-dropdown` : undefined,
                // Dynamische Viewport-Koordinaten — bewusst style statt
                // styled-props (Messwerte, kein Theming).
                style: {
                    position: 'fixed',
                    // 'auto' zwingend — sonst greift das top:100% aus dropdownListStyles
                    top: panelPos.top ?? 'auto',
                    bottom: panelPos.bottom ?? 'auto',
                    left: panelPos.left,
                    right: 'auto',
                    width: panelPos.width,
                    margin: panelPos.top !== undefined ? '0.25rem 0 0 0' : '0 0 0.25rem 0'
                },
                children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NoOptionsRow"], {
                    "data-testid": dataTestId ? `${dataTestId}-no-options` : undefined,
                    children: tr('form.inputSelect.noOptions', {
                        defaultValue: 'Keine Optionen'
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                    lineNumber: 365,
                    columnNumber: 15
                }, this) : items.map((item, index)=>{
                    const isSelected = item.value === selectedValue;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["OptionItem"], {
                        id: optionId(index),
                        role: "option",
                        "aria-selected": isSelected,
                        $active: index === activeIndex,
                        $selected: isSelected,
                        onClick: ()=>selectItem(item),
                        onMouseEnter: ()=>setActiveIndex(index),
                        "data-testid": dataTestId ? item.value === '' ? `${dataTestId}-option-empty` : `${dataTestId}-option-${item.value}` : undefined,
                        children: [
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StyledCheck"], {
                                color: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                                lineNumber: 389,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["OptionLabel"], {
                                children: [
                                    item.label,
                                    item.secondaryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["OptionSecondary"], {
                                        "data-testid": dataTestId ? `${dataTestId}-option-${item.value}-secondary` : undefined,
                                        children: item.secondaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                                        lineNumber: 393,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                                lineNumber: 390,
                                columnNumber: 21
                            }, this)
                        ]
                    }, item.value === '' ? '__empty__' : item.value, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                        lineNumber: 372,
                        columnNumber: 19
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
                lineNumber: 345,
                columnNumber: 11
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx",
        lineNumber: 314,
        columnNumber: 7
    }, this);
}, "wTjyglS9LfUsSKVzjP2p7X9EacY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
})), "wTjyglS9LfUsSKVzjP2p7X9EacY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c1 = InputSelect;
const __TURBOPACK__default__export__ = InputSelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "InputSelect$React.forwardRef");
__turbopack_context__.k.register(_c1, "InputSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputSelect/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSelect$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSelect/InputSelect.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputSwitch/InputSwitch.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "LabelInputWrapper",
    ()=>LabelInputWrapper,
    "Root",
    ()=>Root,
    "Slider",
    ()=>Slider,
    "StyledInputLabel",
    ()=>StyledInputLabel,
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.tsx [app-client] (ecmascript)");
'use client';
;
;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "InputSwitch.styles__Input",
    componentId: "sc-d628574b-0"
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
  width: 2.4375rem;
  height: 1.75rem;
  margin: 0;
  padding: 0;
  position: absolute;
  border: none;
  outline: none;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 20;
`;
const Slider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputSwitch.styles__Slider",
    componentId: "sc-d628574b-1"
})`
  position: absolute;
  top: 3px;
  left: 3px;
  background: ${(props)=>props.theme.palette.default.primary};
  border-radius: 0.5rem;
  width: 18px;
  height: 18px;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;
  }

  ${(props)=>!props.$checked && `
    &::after {
      width: 8px;
      height: 8px;
      border: 2px solid ${props.theme.palette.default.white};
      border-radius: 50%;
    }
  `}

  ${(props)=>props.$checked && `
    transform: translateX(24px);
    background: ${props.theme.palette.default.white};
    &::after {
      width: 2px;
      height: 10px;
      background: ${props.theme.palette.default.primary};
      border-radius: 1px;
    }
  `}

  ${(props)=>props.$disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${(props)=>props.$error && `
    background: ${props.theme.palette.default.error};
  `}
`;
const Switch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSwitch.styles__Switch",
    componentId: "sc-d628574b-2"
})`
  min-width: 3rem;
  width: 3rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background: ${(props)=>props.theme.palette.default.white};
  position: relative;
  margin-right: ${(props)=>props.theme.margin.small};
  border: 0.0625rem solid
    ${(props)=>props.$error ? props.theme.palette.default.error : props.theme.palette.default.primary};
  z-index: 10;
  position: relative;
  cursor: ${(props)=>props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(props)=>props.$disabled ? 0.5 : 1};

  ${(props)=>props.$checked && `
    background: ${props.theme.palette.default.primary};
  `}
`;
const StyledInputLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputLabel"]).withConfig({
    displayName: "InputSwitch.styles__StyledInputLabel",
    componentId: "sc-d628574b-3"
})`
  margin: 0;
  color: ${({ $error, theme })=>$error ? theme.palette.default.error : theme.palette.default.black};
  opacity: ${({ $disabled })=>$disabled ? 0.5 : 1};
`;
const LabelInputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSwitch.styles__LabelInputWrapper",
    componentId: "sc-d628574b-4"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSwitch.styles__Root",
    componentId: "sc-d628574b-5"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props)=>props.theme.margin.default};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveTagButton",
    ()=>RemoveTagButton,
    "Root",
    ()=>Root,
    "StyledIconClose",
    ()=>StyledIconClose,
    "Tag",
    ()=>Tag,
    "TagInput",
    ()=>TagInput,
    "TagLabel",
    ()=>TagLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputTags.styles__Root",
    componentId: "sc-ca252c6e-0"
})`
  ${({ $error })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])({
        error: $error
    })}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  cursor: ${({ $disabled })=>$disabled ? 'not-allowed' : 'text'};
  background-color: ${({ $disabled, theme })=>$disabled ? theme.palette.default.greyLight : theme.palette.default.white};

  &:focus-within {
    ${({ $error })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusRing"])($error)}
  }
`;
const Tag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputTags.styles__Tag",
    componentId: "sc-ca252c6e-1"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background-color: #e3f2fd;
  border: 1px solid ${({ theme })=>theme.palette.default.primary};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  font-size: 0.8rem;
  color: ${({ theme })=>theme.palette.default.primary};
  max-width: 100%;
`;
const TagLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputTags.styles__TagLabel",
    componentId: "sc-ca252c6e-2"
})`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const RemoveTagButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputTags.styles__RemoveTagButton",
    componentId: "sc-ca252c6e-3"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  margin-left: 0.125rem;

  &:hover {
    opacity: 0.7;
  }
`;
const StyledIconClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "InputTags.styles__StyledIconClose",
    componentId: "sc-ca252c6e-4"
})`
  display: block;
  width: 0.7rem;
  height: 0.7rem;

  line {
    stroke: currentColor;
  }
`;
const TagInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "InputTags.styles__TagInput",
    componentId: "sc-ca252c6e-5"
})`
  flex: 1;
  min-width: 6ch;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.9rem;
  color: inherit;

  &::placeholder {
    color: ${({ theme })=>theme.palette.default.greyDark};
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputTags",
    ()=>InputTags,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
/**
 * Normalize the incoming value (string | string[]) to a clean tag list:
 * split string entries by the separator, trim, drop empties, dedupe exact
 * matches. Array entries containing the separator are split too, so a tag
 * can never smuggle a separator into the emitted joined string.
 */ function parseTags(value, separator) {
    const entries = Array.isArray(value) ? value : typeof value === 'string' ? [
        value
    ] : [];
    const tags = [];
    for (const entry of entries){
        for (const part of String(entry).split(separator)){
            const tag = part.trim();
            if (tag && !tags.includes(tag)) {
                tags.push(tag);
            }
        }
    }
    return tags;
}
const InputTags = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s(function InputTags({ value, onChange, separator = ';', placeholder, disabled, error, dataTestId, onKeyDown, id, removeTagLabel }, ref) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const resolvedPlaceholder = placeholder ?? tr('form.inputTags.placeholder', {
        defaultValue: 'Tag hinzufügen...'
    });
    const resolvedRemoveTagLabel = removeTagLabel ?? ((tag)=>tr('form.inputTags.removeTag', {
            defaultValue: 'Tag {tag} entfernen'
        }).replace('{tag}', tag));
    const [buffer, setBuffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InputTags.InputTags.useMemo[tags]": ()=>parseTags(value, separator)
    }["InputTags.InputTags.useMemo[tags]"], [
        value,
        separator
    ]);
    const setInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputTags.InputTags.useCallback[setInputRef]": (node)=>{
            inputRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        }
    }["InputTags.InputTags.useCallback[setInputRef]"], [
        ref
    ]);
    const emit = (next)=>{
        onChange(next.join(separator));
    };
    /** Add candidate tags (trim/drop-empty/dedupe); emits only on actual change. */ const commitTags = (candidates)=>{
        const next = [
            ...tags
        ];
        for (const candidate of candidates){
            for (const part of candidate.split(separator)){
                const tag = part.trim();
                if (tag && !next.includes(tag)) {
                    next.push(tag);
                }
            }
        }
        if (next.length !== tags.length) {
            emit(next);
        }
    };
    const removeTag = (tag)=>{
        if (disabled) {
            return;
        }
        emit(tags.filter((t)=>t !== tag));
    };
    // Typing the separator char or a comma commits everything before it; the
    // remainder after the last commit char stays in the buffer (covers paste
    // of pre-joined lists like "a, b, c" too).
    const handleInputChange = (e)=>{
        const text = e.target.value;
        const withComma = separator === ',' ? text : text.split(',').join(separator);
        if (withComma.includes(separator)) {
            const parts = withComma.split(separator);
            const remainder = parts.pop() ?? '';
            commitTags(parts);
            setBuffer(remainder);
        } else {
            setBuffer(text);
        }
    };
    const handleKeyDown = (e)=>{
        const hasBuffer = buffer.trim().length > 0;
        if (e.key === 'Enter') {
            if (hasBuffer) {
                // Consumed: must NOT reach props.onKeyDown (would confirm the field)
                e.preventDefault();
                e.stopPropagation();
                commitTags([
                    buffer
                ]);
                setBuffer('');
            } else {
                onKeyDown?.(e);
            }
            return;
        }
        if (e.key === 'Escape') {
            if (hasBuffer || buffer.length > 0) {
                // Discards the draft only — must NOT cancel the surrounding edit
                e.preventDefault();
                e.stopPropagation();
                setBuffer('');
            } else {
                onKeyDown?.(e);
            }
            return;
        }
        if (e.key === 'Backspace' && buffer.length === 0 && tags.length > 0) {
            e.preventDefault();
            emit(tags.slice(0, -1));
            return;
        }
        onKeyDown?.(e);
    };
    const handleBlur = ()=>{
        if (buffer.trim().length > 0) {
            commitTags([
                buffer
            ]);
        }
        setBuffer('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $error: error,
        $disabled: disabled,
        onClick: ()=>!disabled && inputRef.current?.focus(),
        "data-testid": dataTestId,
        children: [
            tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                    "data-testid": dataTestId ? `${dataTestId}-tag-${tag}` : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagLabel"], {
                            children: tag
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveTagButton"], {
                            type: "button",
                            "aria-label": resolvedRemoveTagLabel(tag),
                            onClick: (e)=>{
                                e.stopPropagation();
                                removeTag(tag);
                            },
                            "data-testid": dataTestId ? `${dataTestId}-tag-${tag}-remove` : undefined,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledIconClose"], {
                                color: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx",
                                lineNumber: 226,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx",
                            lineNumber: 217,
                            columnNumber: 15
                        }, this)
                    ]
                }, tag, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagInput"], {
                ref: setInputRef,
                type: "text",
                id: id,
                value: buffer,
                placeholder: resolvedPlaceholder,
                disabled: disabled,
                onChange: handleInputChange,
                onKeyDown: handleKeyDown,
                onBlur: handleBlur,
                autoComplete: "off",
                "data-testid": dataTestId ? `${dataTestId}-input` : undefined
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx",
        lineNumber: 207,
        columnNumber: 7
    }, this);
}, "dTtk0uirNg/zfYXkW7CCtJWsW7U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
})), "dTtk0uirNg/zfYXkW7CCtJWsW7U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c1 = InputTags;
const __TURBOPACK__default__export__ = InputTags;
var _c, _c1;
__turbopack_context__.k.register(_c, "InputTags$React.forwardRef");
__turbopack_context__.k.register(_c1, "InputTags");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputTags/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputTags$2f$InputTags$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputTags/InputTags.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/adornment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdornedInputWrapper",
    ()=>AdornedInputWrapper,
    "InputAdornment",
    ()=>InputAdornment,
    "adornedInputPadding",
    ()=>adornedInputPadding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const AdornedInputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "adornment__AdornedInputWrapper",
    componentId: "sc-cf83c0e4-0"
})`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
const InputAdornment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "adornment__InputAdornment",
    componentId: "sc-cf83c0e4-1"
})`
  position: absolute;
  ${({ $position })=>$position === 'start' ? 'left' : 'right'}: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-weight: 500;
  pointer-events: none;
`;
const adornedInputPadding = '1.75rem';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownItem",
    ()=>DropdownItem,
    "DropdownItemPrimary",
    ()=>DropdownItemPrimary,
    "DropdownItemSecondary",
    ()=>DropdownItemSecondary,
    "DropdownList",
    ()=>DropdownList,
    "NoResults",
    ()=>NoResults,
    "dropdownItemStyles",
    ()=>dropdownItemStyles,
    "dropdownListStyles",
    ()=>dropdownListStyles,
    "noResultsStyles",
    ()=>noResultsStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const dropdownListStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].popover};
  max-height: 18.75rem;
  overflow-y: auto;
  margin: 0.25rem 0 0 0;
  padding: 0;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  outline: 1px solid ${({ theme })=>theme.palette.default.grey};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
`;
const dropdownItemStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5rem;
  transition: all 200ms ease-in-out;
  border-bottom: 1px solid ${({ theme })=>theme.palette.default.greyLight};

  &:last-child {
    border-bottom: none;
  }
`;
const DropdownList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "dropdownStyles__DropdownList",
    componentId: "sc-9bb914e4-0"
})`
  ${dropdownListStyles}
  display: ${({ $visible })=>$visible === false ? 'none' : 'block'};
`;
const DropdownItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "dropdownStyles__DropdownItem",
    componentId: "sc-9bb914e4-1"
})`
  ${dropdownItemStyles}
  color: ${({ $active, theme })=>$active ? theme.palette.default.white : theme.palette.default.black};
  background: ${({ $active, theme })=>$active ? theme.palette.default.primary : theme.palette.default.white};

  &:hover {
    color: ${({ theme })=>theme.palette.default.black};
    background: ${({ theme })=>theme.palette.default.greyLight};
  }
`;
const DropdownItemPrimary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "dropdownStyles__DropdownItemPrimary",
    componentId: "sc-9bb914e4-2"
})`
  font-weight: 500;
  color: inherit;
`;
const DropdownItemSecondary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "dropdownStyles__DropdownItemSecondary",
    componentId: "sc-9bb914e4-3"
})`
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  margin-top: 0.125rem;
`;
const noResultsStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding: 0.75rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-size: 0.875rem;
  text-align: center;
`;
const NoResults = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "dropdownStyles__NoResults",
    componentId: "sc-9bb914e4-4"
})`
  ${noResultsStyles}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/adornment.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusRing",
    ()=>focusRing,
    "inputBase",
    ()=>inputBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const focusRing = (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  border-color: ${({ theme })=>error ? theme.palette.default.error : theme.palette.default.primary};
  box-shadow: 0 0 0 0.2rem
    ${({ theme })=>(error ? theme.palette.default.error : theme.palette.default.primary) + '40'};
`;
const inputBase = (opts)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  box-sizing: border-box;
  width: 100%;
  min-height: 38px;
  padding: 0.375rem 0.5rem;
  font-family: inherit;
  font-size: 0.9rem;
  color: ${({ theme })=>theme.palette.default.black};
  background-color: ${({ theme })=>theme.palette.default.white};
  border: 1px solid
    ${({ theme })=>opts?.error ? theme.palette.default.error : theme.palette.default.grey};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  outline: none;
  color-scheme: light;

  &::placeholder {
    color: ${({ theme })=>theme.palette.default.greyDark};
    opacity: 0.7;
  }

  &:focus {
    ${focusRing(opts?.error)}
  }

  &:disabled {
    background-color: ${({ theme })=>theme.palette.default.greyLight};
    cursor: not-allowed;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconArrowLeft.styles__Root",
    componentId: "sc-6d9f062c-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconArrowLeft",
    ()=>IconArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.styles.ts [app-client] (ecmascript)");
;
;
const IconArrowLeft = (props)=>{
    const defaultStrokeColor = 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: props['className'],
        "data-testid": 'icon-arrow-left-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",
            stroke: props['strokeColor'] || defaultStrokeColor,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconArrowLeft;
;
var _c;
__turbopack_context__.k.register(_c, "IconArrowLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowLeft"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LogoPlastshipNoText.styles__Root",
    componentId: "sc-af92995f-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoPlastshipNoText",
    ()=>LogoPlastshipNoText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.styles.ts [app-client] (ecmascript)");
;
;
const LogoPlastshipNoText = (props)=>{
    const { className, width = 89, height = 100, ...restProps } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": 'logo-plastship-no-text-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: "0 0 89 100",
            fill: "none",
            shapeRendering: "geometricPrecision",
            ...restProps,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_2_2)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M16.157 63.1687V37.2257C16.1565 36.2097 16.4236 35.2114 16.9315 34.3314C17.4394 33.4514 18.17 32.7206 19.05 32.2127L41.168 19.4377C42.0482 18.9295 43.0466 18.662 44.063 18.662C45.0794 18.662 46.0778 18.9295 46.958 19.4377L69.418 32.4087L85.574 23.0787L46.959 0.775713C46.0788 0.267534 45.0804 0 44.064 0C43.0476 0 42.0492 0.267534 41.169 0.775713L2.895 22.8817C2.01486 23.3896 1.28395 24.1203 0.775767 25.0003C0.267579 25.8803 2.32196e-05 26.8785 0 27.8947L0 72.5007L16.157 63.1687Z",
                            fill: "#00416E"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M71.9698 36.831V62.774C71.97 63.79 71.7028 64.7882 71.195 65.6682C70.6872 66.5481 69.9566 67.2789 69.0768 67.787L46.9568 80.562C46.0771 81.0707 45.0789 81.3385 44.0628 81.3385C43.0466 81.3385 42.0484 81.0707 41.1688 80.562L18.7098 67.59L2.55176 76.921L41.1698 99.224C42.0494 99.7328 43.0476 100.001 44.0638 100.001C45.0799 100.001 46.0781 99.7328 46.9578 99.224L85.2328 77.118C86.1129 76.6101 86.8438 75.8794 87.352 74.9994C87.8602 74.1194 88.1277 73.1212 88.1278 72.105V27.5L71.9698 36.831Z",
                            fill: "#37BA24"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_2_2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "89",
                            height: "100.001",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LogoPlastshipNoText;
;
var _c;
__turbopack_context__.k.register(_c, "LogoPlastshipNoText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text,
    "getTextStyles",
    ()=>getTextStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
'use client';
;
;
const getTextStyles = (variant = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    font-family: ${(props)=>props.theme.font.secondaryFamily};
    font-size: ${(props)=>props.theme.font.text[variant].mobile.fontSize};
    line-height: ${(props)=>props.theme.font.text[variant].mobile.lineHeight};
    font-weight: ${(props)=>props.theme.font.text[variant].mobile.fontWeight};
    letter-spacing: ${(props)=>props.theme.font.text[variant].mobile.letterSpacing};
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;

    a {
      text-decoration: underline;
      &:link,
      &:active,
      &:visited {
        color: ${(props)=>props.theme.palette.link.primary};
      }
    }

    b,
    strong {
      font-weight: bold;
    }

    @media screen and (min-width: ${(props)=>props.theme.device.mobile}) {
      font-size: ${(props)=>props.theme.font.text[variant].desktop.fontSize};
      line-height: ${(props)=>props.theme.font.text[variant].desktop.lineHeight};
      font-weight: ${(props)=>props.theme.font.text[variant].desktop.fontWeight};
      letter-spacing: ${(props)=>props.theme.font.text[variant].desktop.letterSpacing};
    }
  `;
};
const baseTextStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  margin-bottom: ${(props)=>props.$variant === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption ? 0 : props.theme.margin.default};
  max-width: 700px;
  ${(props)=>getTextStyles(props.$variant)}
`;
const Text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Text.styles__Text",
    componentId: "sc-18bfeccb-0"
})`
  ${baseTextStyles}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text,
    "TextVariants",
    ()=>TextVariants,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)");
;
;
var TextVariants = /*#__PURE__*/ function(TextVariants) {
    TextVariants["bodybig"] = "bodybig";
    TextVariants["body"] = "body";
    TextVariants["bodysmall"] = "bodysmall";
    TextVariants["button"] = "button";
    TextVariants["caption"] = "caption";
    TextVariants["navigation"] = "navigation";
    return TextVariants;
}({});
const Text = ({ children, dataTestId = 'text-root', variant, className })=>{
    // Filter out props to avoid DOM attribute warnings
    const domProps = {
        'data-testid': dataTestId,
        className
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        ...domProps,
        $variant: variant,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Text/Text.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Text;
const __TURBOPACK__default__export__ = Text;
var _c;
__turbopack_context__.k.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormEditableField",
    ()=>FormEditableField,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ErrorText/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const FieldWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FormEditableField__FieldWrapper",
    componentId: "sc-91e4a8d6-0"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledErrorText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ErrorText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "FormEditableField__StyledErrorText",
    componentId: "sc-91e4a8d6-1"
})`
  && {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;
function FormEditableField({ name, control, label, fieldType, options, lookupObjectType, lookupFilter, lookupStaticOptions, required, disabled, placeholder, helperText, dataTestId, currencySymbol, currencyCode, errorText, multipicklistSeparator, accept, maxFiles, multiple, maxSize, otpLength, sliderMin, sliderMax, sliderStep, sliderUnit, ratingMax, tagsSeparator, onEnter, onValueChange, autoComplete, maxLength, dataAutofocus }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const testId = dataTestId || `form-editable-field-${String(name)}`;
    const requiredFieldMessage = tr('form.formEditableField.requiredField', {
        defaultValue: '{label} ist ein Pflichtfeld'
    }).replace('{label}', label);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
        name: name,
        control: control,
        rules: required ? {
            required: requiredFieldMessage
        } : undefined,
        render: ({ field, fieldState })=>{
            const handleChange = (_fieldName, value)=>{
                field.onChange(value);
                onValueChange?.(value);
            };
            const displayLabel = required ? `${label} *` : label;
            // #1661: Fehler am Feld für Screenreader (aria-describedby/aria-invalid)
            // und für Tests (data-invalid, data-error-code = Art des Fehlers, z. B.
            // `required` oder ein Server-Code, den der Aufrufer per setError setzt)
            const errorId = `${testId}-error-msg`;
            const error = fieldState.error;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldWrapper, {
                "data-testid": `${testId}-root`,
                "data-invalid": error ? 'true' : 'false',
                "data-error-code": error?.type,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                        fieldName: String(name),
                        label: displayLabel,
                        value: field.value,
                        fieldType: fieldType,
                        isEditing: true,
                        isEditable: !disabled,
                        readOnly: disabled,
                        hideEditActions: true,
                        onChange: handleChange,
                        options: options,
                        lookupObjectType: lookupObjectType,
                        lookupFilter: lookupFilter,
                        lookupStaticOptions: lookupStaticOptions,
                        placeholder: placeholder,
                        helperText: helperText,
                        hasError: !!fieldState.error,
                        dataTestId: testId,
                        currencySymbol: currencySymbol,
                        currencyCode: currencyCode,
                        multipicklistSeparator: multipicklistSeparator,
                        accept: accept,
                        maxFiles: maxFiles,
                        multiple: multiple,
                        maxSize: maxSize,
                        otpLength: otpLength,
                        sliderMin: sliderMin,
                        sliderMax: sliderMax,
                        sliderStep: sliderStep,
                        sliderUnit: sliderUnit,
                        ratingMax: ratingMax,
                        tagsSeparator: tagsSeparator,
                        onEnterKey: onEnter,
                        autoComplete: autoComplete,
                        maxLength: maxLength,
                        ariaInvalid: !!error,
                        ariaDescribedBy: error ? errorId : undefined,
                        dataAutofocus: dataAutofocus,
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledErrorText, {
                        dataTestId: `${testId}-error`,
                        id: errorId,
                        children: errorText || error.message || requiredFieldMessage
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx",
                        lineNumber: 228,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx",
                lineNumber: 182,
                columnNumber: 11
            }, this);
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(FormEditableField, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c = FormEditableField;
const __TURBOPACK__default__export__ = FormEditableField;
var _c;
__turbopack_context__.k.register(_c, "FormEditableField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FormEditableField/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FormEditableField$2f$FormEditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "TooltipWrapper",
    ()=>TooltipWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
'use client';
;
;
;
const sizeMap = {
    small: {
        outer: 28,
        inner: 24,
        inset: 2,
        iconScale: 0.55
    },
    medium: {
        outer: 36,
        inner: 32,
        inset: 2,
        iconScale: 0.8
    },
    large: {
        outer: 48,
        inner: 44,
        inset: 2,
        iconScale: 1
    }
};
/**
 * #1742: Kontur der Wabe mit abgerundeten Ecken wie im Logo. Der innere
 * Ausschnitt rundet konzentrisch zum äußeren (concentricHexCornerRadius).
 */ const outerClipPath = (size)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(sizeMap[size].outer);
const innerClipPath = (size)=>{
    const { outer, inner, inset } = sizeMap[size];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(inner, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(outer, inset));
};
/**
 * #392: Schrift- und Symbolfarbe auf der gefüllten Wabe (Hover/Aktiv). Feste
 * Markenfarbe aus der color-Prop → Kontrast per Farb-Helfer (Navy → weiß,
 * Gelb → dunkel), in beiden Themes gleich. Ohne color-Prop füllt
 * default.primary, das im Dark Theme hell ist → dort der invertierte Wert
 * default.white (hell: weiß auf Navy, dunkel: dunkel auf Hellblau).
 */ const fillTextColor = (theme, color)=>{
    if (!color) return theme.palette.default.white;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHexColor"])(color) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastTextColor"])(color) : theme.palette.text.onAccent;
};
const TooltipWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "IconButton.styles__TooltipWrapper",
    componentId: "sc-9416e081-0"
})`
  position: relative;
  display: inline-flex;
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "IconButton.styles__Root",
    componentId: "sc-9416e081-1"
})`
  width: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  height: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  min-width: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  min-height: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  /* All children get position and z-index */
  & > * {
    position: relative;
    z-index: 1;
  }

  /* SVG icons - use block display and scale by size */
  & > svg {
    flex-shrink: 0;
    display: block;
    transform: scale(${(props)=>sizeMap[props.$size || 'medium'].iconScale});
  }

  /* Icon components (non-SVG) and text spans, but not tooltip */
  & > :not(svg):not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon color: black by default */
  path,
  rect,
  line,
  circle,
  polyline,
  polygon {
    stroke: ${(props)=>props.theme.palette.default.black};
  }

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
    height: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
    clip-path: ${(props)=>outerClipPath(props.$size || 'medium')};
    background: ${(props)=>props.color || props.theme.palette.default.greyDark};
    opacity: 0.6;
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${(props)=>sizeMap[props.$size || 'medium'].inset}px;
    left: ${(props)=>sizeMap[props.$size || 'medium'].inset}px;
    width: ${(props)=>sizeMap[props.$size || 'medium'].inner}px;
    height: ${(props)=>sizeMap[props.$size || 'medium'].inner}px;
    clip-path: ${(props)=>innerClipPath(props.$size || 'medium')};
    background: ${(props)=>props.theme.palette.default.white};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Text label for children, exclude tooltip */
  & > span:not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Apply the same hover styles for active state — Farben siehe fillTextColor */
  ${(props)=>props.$isActive && `
    color: ${fillTextColor(props.theme, props.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${fillTextColor(props.theme, props.color)};
    }
    &::before {
      opacity: 1;
      background: ${props.theme.palette.default.white};
    }
    &::after {
      background: ${props.color || props.theme.palette.default.primary};
      opacity: 1;
    }
  `}

  /* #1863: Gesperrter Knopf (natives disabled) sieht gesperrt aus — Sechseck
     und Icon gedaempft, kein Zeiger, kein Hover-Effekt. Der Tooltip am
     TooltipWrapper bleibt und nennt den Grund. */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
    pointer-events: none;
  }

  &:hover {
    color: ${(props)=>fillTextColor(props.theme, props.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>fillTextColor(props.theme, props.color)};
    }
    &::before {
      opacity: 1;
      background: ${(props)=>props.theme.palette.default.white};
    }
    &::after {
      background: ${(props)=>props.color || props.theme.palette.default.primary};
      opacity: 1;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAlign",
    ()=>IconAlign,
    "IconButton",
    ()=>IconButton,
    "IconButtonColors",
    ()=>IconButtonColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const IconButtonColors = {
    primary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
    secondary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
    white: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE,
    greyLight: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT,
    grey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY,
    greyDark: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK,
    black: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK,
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].ERROR,
    success: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS,
    info: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].INFO,
    warning: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WARNING,
    linkPrimary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].LINK_PRIMARY,
    buttonPrimaryBg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BUTTON_PRIMARY_BG,
    buttonSecondaryBg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BUTTON_SECONDARY_BG,
    teal: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].TEAL,
    orange: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].ORANGE,
    coral: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].CORAL,
    purple: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PURPLE,
    microsoft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].MICROSOFT
};
var IconAlign = /*#__PURE__*/ function(IconAlign) {
    IconAlign["LEFT"] = "left";
    IconAlign["RIGHT"] = "right";
    return IconAlign;
}({});
const IconButton = (props)=>{
    _s();
    const { icon, onClick, tooltip, tooltipPosition = 'bottom', ariaLabel, color, style, isDisabled, isActive, forceTooltip, iconAlign, children, dataTestId, dataState, size } = props;
    // Use a client-side only state for the title attribute
    // to prevent hydration mismatches between server and client
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Only enable the tooltip after client-side hydration is complete
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconButton.useEffect": ()=>{
            setMounted(true);
        }
    }["IconButton.useEffect"], []);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipWrapper"], {
        ref: wrapperRef,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                type: "button",
                onClick: onClick,
                className: props['className'],
                "data-testid": dataTestId || 'icon-button-root',
                "data-state": dataState,
                "data-shape": "rounded-hex",
                "data-disabled": isDisabled ? 'true' : undefined,
                "aria-label": mounted ? ariaLabel || tooltip : '',
                color: color,
                style: style,
                $isDisabled: isDisabled,
                $isActive: isActive,
                $hasChildren: !!children,
                $size: size,
                disabled: isDisabled,
                children: [
                    iconAlign === "left" && icon,
                    children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
                        lineNumber: 116,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    (!iconAlign || iconAlign === "right") && icon
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mounted && tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                content: tooltip,
                isVisible: forceTooltip || isHovered && !isActive,
                position: tooltipPosition,
                backgroundColor: color,
                anchorRef: wrapperRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IconButton, "sJCReq8U3BqkUPomRaQfgJZp9jY=");
_c = IconButton;
;
var _c;
__turbopack_context__.k.register(_c, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingContainer",
    ()=>LoadingContainer,
    "LoadingMessage",
    ()=>LoadingMessage,
    "SpinnerWrapper",
    ()=>SpinnerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const rotate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoadingSpinner.styles__LoadingContainer",
    componentId: "sc-ec6f4daf-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props)=>props.$padding || '2rem'};
  min-height: ${(props)=>props.$fullHeight ? '100%' : 'auto'};
`;
const LoadingMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "LoadingSpinner.styles__LoadingMessage",
    componentId: "sc-ec6f4daf-1"
})`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${(props)=>props.theme.palette.default.greyDark};
  text-align: center;
`;
const SpinnerWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoadingSpinner.styles__SpinnerWrapper",
    componentId: "sc-ec6f4daf-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props)=>props.$useLogo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${rotate} 3s ease-in-out infinite;
      animation-delay: 0.5s;
      /* Hardware acceleration for smooth animation */
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    `}

  svg {
    width: ${(props)=>{
    switch(props.$size){
        case 'small':
            return '16px';
        case 'large':
            return props.$useLogo ? '100px' : '48px';
        default:
            return '24px';
    }
}};
    height: ${(props)=>{
    switch(props.$size){
        case 'small':
            return '16px';
        case 'large':
            return props.$useLogo ? '112px' : '48px';
        default:
            return '24px';
    }
}};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const LoadingSpinner = ({ message, size = 'medium', inverted = false, padding = '2rem', fullHeight = false, dataTestId = 'loading-spinner', className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingContainer"], {
        $padding: padding,
        $fullHeight: fullHeight,
        className: className,
        "data-testid": dataTestId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerWrapper"], {
                $size: size,
                $useLogo: size === 'large',
                children: size === 'large' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoPlastshipNoText"], {
                    width: 100,
                    height: 112
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLoadingSpinner"], {
                    inverted: inverted
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingMessage"], {
                "data-testid": `${dataTestId}-message`,
                children: message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                lineNumber: 94,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LoadingSpinner/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
'use client';
;
;
/**
 * #392: Schriftfarbe zur Fläche. Ohne feste Fläche gilt das Theme-Paar
 * default.primary / default.white (invertiert gemeinsam). Eine feste Fläche
 * (IconButton reicht seine Markenfarbe durch, z. B. Navy) bekommt die Schrift
 * aus dem Farb-Helfer — vorher stand dort default.white, im Dark Theme also
 * Dunkelgrau auf Navy (1,4:1).
 */ const tooltipTextColor = (theme, background, text)=>{
    if (text) return text;
    if (!background) return theme.palette.default.white;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHexColor"])(background) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastTextColor"])(background) : theme.palette.text.onAccent;
};
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Tooltip.styles__Root",
    componentId: "sc-3975a79f-0"
})`
  position: ${(props)=>props.$fixed ? 'fixed' : 'absolute'};
  white-space: pre-line;
  padding: 8px 12px;
  background: ${(props)=>props.$backgroundColor || props.theme.palette.default.primary};
  color: ${(props)=>tooltipTextColor(props.theme, props.$backgroundColor, props.$textColor)};
  border-radius: 4px;
  font-size: 16px;
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  line-height: 24px;
  opacity: ${(props)=>props.$isVisible ? 1 : 0};
  visibility: ${(props)=>props.$isVisible ? 'visible' : 'hidden'};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  z-index: ${(props)=>props.$fixed ? 9999 : 100};
  pointer-events: ${(props)=>props.$interactive ? 'auto' : 'none'};

  /* Position variants with dynamic offset adjustments */
  ${(props)=>{
    if (props.$fixed) {
        return `
        top: ${props.$top || 0}px;
        left: ${props.$left || 0}px;
      `;
    }
    const offsetX = props.$offsetX || 0;
    const offsetY = props.$offsetY || 0;
    switch(props.$position){
        case 'top':
            return `
          bottom: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
          margin-bottom: 8px;
        `;
        case 'bottom':
            return `
          top: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
          margin-top: 8px;
        `;
        case 'left':
            return `
          right: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${offsetY}px)) translateX(${offsetX}px);
          margin-right: 8px;
        `;
        case 'right':
            return `
          left: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${offsetY}px)) translateX(${offsetX}px);
          margin-left: 8px;
        `;
        default:
            return `
          top: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
          margin-top: 8px;
        `;
    }
}}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Tooltip = (props)=>{
    _s();
    const { content, isVisible = false, position = 'bottom', backgroundColor, textColor, anchorRef, interactive = false, onMouseEnter, onMouseLeave, align = 'center', dataTestId = 'tooltip-root' } = props;
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [adjustedPosition, setAdjustedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(position);
    const [offsetAdjustment, setOffsetAdjustment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [fixedCoords, setFixedCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [isPositioned, setIsPositioned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            setMounted(true);
        }
    }["Tooltip.useEffect"], []);
    const usePortal = !!anchorRef;
    const contentKey = typeof content === 'string' ? content : 'node';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            if (!isVisible || !tooltipRef.current) {
                setAdjustedPosition(position);
                setOffsetAdjustment({
                    x: 0,
                    y: 0
                });
                setIsPositioned(false);
                return;
            }
            requestAnimationFrame({
                "Tooltip.useEffect": ()=>{
                    if (!tooltipRef.current) return;
                    if (usePortal && anchorRef?.current) {
                        // Portal mode: calculate fixed position from anchor element
                        const anchor = anchorRef.current;
                        const tooltip = tooltipRef.current;
                        const anchorRect = anchor.getBoundingClientRect();
                        const tooltipRect = tooltip.getBoundingClientRect();
                        const tooltipWidth = tooltipRect.width;
                        const tooltipHeight = tooltipRect.height;
                        const vw = window.innerWidth;
                        const vh = window.innerHeight;
                        const gap = 8;
                        let top = 0;
                        let left = 0;
                        switch(position){
                            case 'top':
                                top = anchorRect.top - tooltipHeight - gap;
                                left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
                                break;
                            case 'bottom':
                                top = anchorRect.bottom + gap;
                                left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
                                break;
                            case 'left':
                                top = align === 'start' ? anchorRect.top : anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2;
                                left = anchorRect.left - tooltipWidth - gap;
                                break;
                            case 'right':
                                top = align === 'start' ? anchorRect.top : anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2;
                                left = anchorRect.right + gap;
                                break;
                        }
                        // Clamp to viewport edges
                        if (left + tooltipWidth > vw - gap) left = vw - tooltipWidth - gap;
                        if (left < gap) left = gap;
                        if (top + tooltipHeight > vh - gap && position === 'bottom') {
                            top = anchorRect.top - tooltipHeight - gap;
                        }
                        if (top < gap && position === 'top') {
                            top = anchorRect.bottom + gap;
                        }
                        if (top + tooltipHeight > vh - gap) top = Math.max(gap, vh - tooltipHeight - gap);
                        setFixedCoords({
                            top,
                            left
                        });
                        setIsPositioned(true);
                    } else {
                        // Legacy absolute positioning mode
                        const tooltip = tooltipRef.current;
                        const rect = tooltip.getBoundingClientRect();
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;
                        let newPosition = position;
                        let offsetX = 0;
                        let offsetY = 0;
                        if (rect.right > viewportWidth) {
                            if (position === 'bottom' || position === 'top') {
                                offsetX = viewportWidth - rect.right - 8;
                            } else if (position === 'right') {
                                newPosition = 'left';
                            }
                        }
                        if (rect.left < 0) {
                            if (position === 'bottom' || position === 'top') {
                                offsetX = -rect.left + 8;
                            } else if (position === 'left') {
                                newPosition = 'right';
                            }
                        }
                        if (rect.bottom > viewportHeight) {
                            if (position === 'bottom') {
                                newPosition = 'top';
                            } else if (position === 'left' || position === 'right') {
                                offsetY = viewportHeight - rect.bottom - 8;
                            }
                        }
                        if (rect.top < 0) {
                            if (position === 'top') {
                                newPosition = 'bottom';
                            } else if (position === 'left' || position === 'right') {
                                offsetY = -rect.top + 8;
                            }
                        }
                        setAdjustedPosition(newPosition);
                        setOffsetAdjustment({
                            x: offsetX,
                            y: offsetY
                        });
                        setIsPositioned(true);
                    }
                }
            }["Tooltip.useEffect"]);
        }
    }["Tooltip.useEffect"], [
        isVisible,
        position,
        align,
        contentKey,
        usePortal,
        anchorRef,
        mounted
    ]);
    if (!content) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
        lineNumber: 159,
        columnNumber: 24
    }, ("TURBOPACK compile-time value", void 0));
    if (usePortal) {
        const tooltipElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            ref: tooltipRef,
            className: props['className'],
            $isVisible: isVisible && isPositioned,
            $position: position,
            $backgroundColor: backgroundColor,
            $textColor: textColor,
            $fixed: true,
            $top: fixedCoords.top,
            $left: fixedCoords.left,
            $interactive: interactive,
            as: interactive ? 'div' : 'span',
            // Mirrors $top/$left as real inline style: heavy, per-render JS-computed
            // layout (see root CLAUDE.md inline-style carve-out). Values match the
            // CSS-in-JS above 1:1, so real (unmocked) styled-components rendering is
            // unaffected. pointer-events itself lives only in Tooltip.styles.ts.
            style: {
                top: fixedCoords.top,
                left: fixedCoords.left
            },
            onMouseEnter: interactive ? onMouseEnter : undefined,
            onMouseLeave: interactive ? onMouseLeave : undefined,
            "data-testid": dataTestId,
            "data-visible": isVisible ? 'true' : 'false',
            "data-interactive": interactive ? 'true' : 'false',
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
            lineNumber: 163,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
        if (mounted && typeof document !== 'undefined') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(tooltipElement, document.body);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
            lineNumber: 193,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: tooltipRef,
        className: props['className'],
        $isVisible: isVisible && isPositioned,
        $position: adjustedPosition,
        $backgroundColor: backgroundColor,
        $textColor: textColor,
        $offsetX: offsetAdjustment.x,
        $offsetY: offsetAdjustment.y,
        $interactive: interactive,
        onMouseEnter: interactive ? onMouseEnter : undefined,
        onMouseLeave: interactive ? onMouseLeave : undefined,
        "data-testid": dataTestId,
        "data-visible": isVisible ? 'true' : 'false',
        "data-interactive": interactive ? 'true' : 'false',
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Tooltip, "bUu1XFvl/o8JeyPS1p1PDZ/KBmA=");
_c = Tooltip;
;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerBanner.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Actions",
    ()=>Actions,
    "DialogActions",
    ()=>DialogActions,
    "DialogBody",
    ()=>DialogBody,
    "DialogError",
    ()=>DialogError,
    "DialogText",
    ()=>DialogText,
    "DialogTexts",
    ()=>DialogTexts,
    "ErrorLine",
    ()=>ErrorLine,
    "EventGap",
    ()=>EventGap,
    "EventItem",
    ()=>EventItem,
    "EventLabel",
    ()=>EventLabel,
    "EventLog",
    ()=>EventLog,
    "EventTime",
    ()=>EventTime,
    "IdleRoot",
    ()=>IdleRoot,
    "Indicator",
    ()=>Indicator,
    "Label",
    ()=>Label,
    "Meta",
    ()=>Meta,
    "Metric",
    ()=>Metric,
    "MetricLabel",
    ()=>MetricLabel,
    "MetricValue",
    ()=>MetricValue,
    "Metrics",
    ()=>Metrics,
    "ProposedItem",
    ()=>ProposedItem,
    "ProposedList",
    ()=>ProposedList,
    "Root",
    ()=>Root,
    "TopRow",
    ()=>TopRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const pulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.4); opacity: 0.4; }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Root",
    componentId: "sc-7a4c7d98-0"
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, $tone })=>$tone === 'running' ? theme.palette.status.success.border : theme.palette.status.warning.border};
  background: ${({ theme, $tone })=>$tone === 'running' ? theme.palette.status.success.bg : theme.palette.status.warning.bg};
  color: ${({ theme, $tone })=>$tone === 'running' ? theme.palette.status.success.text : theme.palette.status.warning.text};
`;
const TopRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__TopRow",
    componentId: "sc-7a4c7d98-1"
})`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;
const EventLog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__EventLog",
    componentId: "sc-7a4c7d98-2"
})`
  list-style: none;
  margin: 0;
  padding: 8px 0 0 0;
  border-top: 1px dashed ${({ theme })=>theme.palette.default.grey};
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 180px;
  overflow-y: auto;
`;
const EventItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__EventItem",
    componentId: "sc-7a4c7d98-3"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: ${({ theme })=>theme.palette.default.black};

  & svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;
const EventTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__EventTime",
    componentId: "sc-7a4c7d98-4"
})`
  font-weight: 600;
  min-width: 64px;
`;
const EventLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__EventLabel",
    componentId: "sc-7a4c7d98-5"
})`
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const EventGap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__EventGap",
    componentId: "sc-7a4c7d98-6"
})`
  margin-left: auto;
  font-size: 11px;
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const Indicator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Indicator",
    componentId: "sc-7a4c7d98-7"
})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme, $tone })=>$tone === 'running' ? theme.palette.default.success : theme.palette.default.warning};
  flex-shrink: 0;
  ${({ $tone })=>$tone === 'running' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${pulse} 1.6s ease-in-out infinite;
    `}
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Label",
    componentId: "sc-7a4c7d98-8"
})`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;
const Metrics = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Metrics",
    componentId: "sc-7a4c7d98-9"
})`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;
const Metric = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Metric",
    componentId: "sc-7a4c7d98-10"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  opacity: ${({ $active })=>$active ? 1 : 0.55};
  transition: opacity 0.15s ease;
`;
const MetricValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__MetricValue",
    componentId: "sc-7a4c7d98-11"
})`
  font-size: 22px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: ${({ theme })=>theme.palette.default.black};
`;
const MetricLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__MetricLabel",
    componentId: "sc-7a4c7d98-12"
})`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const Meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Meta",
    componentId: "sc-7a4c7d98-13"
})`
  font-size: 12px;
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const Actions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__Actions",
    componentId: "sc-7a4c7d98-14"
})`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const IdleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Root).withConfig({
    displayName: "WorkingHoursTimerBanner.styles__IdleRoot",
    componentId: "sc-7a4c7d98-15"
})`
  opacity: 0.6;
`;
const ErrorLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__ErrorLine",
    componentId: "sc-7a4c7d98-16"
})`
  font-size: 12px;
  color: ${({ theme })=>theme.palette.default.error};
`;
const DialogBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__DialogBody",
    componentId: "sc-7a4c7d98-17"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DialogText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__DialogText",
    componentId: "sc-7a4c7d98-18"
})`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme })=>theme.palette.default.black};
`;
const DialogTexts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__DialogTexts",
    componentId: "sc-7a4c7d98-19"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const DialogError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__DialogError",
    componentId: "sc-7a4c7d98-20"
})`
  font-size: 13px;
  color: ${({ theme })=>theme.palette.default.error};
`;
const DialogActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__DialogActions",
    componentId: "sc-7a4c7d98-21"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`;
const ProposedList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__ProposedList",
    componentId: "sc-7a4c7d98-22"
})`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  color: ${({ theme })=>theme.palette.default.black};
`;
const ProposedItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "WorkingHoursTimerBanner.styles__ProposedItem",
    componentId: "sc-7a4c7d98-23"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkingHoursTimerDialogs",
    ()=>WorkingHoursTimerDialogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FormEditableField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FormEditableField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FormEditableField$2f$FormEditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FormEditableField/FormEditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerBanner.styles.ts [app-client] (ecmascript)");
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
/** Berliner Datum und Uhrzeit — Anzeige in der Sprache des Nutzers (#1640). */ const BERLIN_DATE_TIME = {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};
function WorkingHoursTimerDialogs() {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    const { problem, clearProblem, postEvent, pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimer"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { control, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            actualEnd: ''
        }
    });
    const actualEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: 'actualEnd'
    });
    const close = ()=>{
        setError(null);
        clearProblem();
    };
    // forgotten/conflict öffnen ihren eigenen Dialog — dort ist das die Meldung,
    // kein zusätzlicher Fehler.
    const showError = (code)=>setError(code && code !== 'forgotten' && code !== 'conflict' ? code : null);
    const discard = async ()=>{
        const result = await postEvent('stop', {
            discard: true
        });
        showError(result.error);
    };
    const submitActualEnd = handleSubmit(async (values)=>{
        const result = await postEvent('stop', {
            actualEnd: values.actualEnd
        });
        showError(result.error);
    });
    // Ursachen des Konflikts: Überlappung und/oder ein Befund, der sich gar nicht
    // als Eintrag erfassen lässt (z. B. Ende vor Start). Beide können zugleich
    // vorliegen; dann gilt der Rat der zweiten (erneut stoppen hilft nicht).
    const issues = problem?.code === 'conflict' ? problem.issues : [];
    const overlap = issues.includes('overlap');
    const invalidCode = issues.find((code)=>code !== 'overlap') ?? (overlap ? null : 'invalid');
    const errorText = error === 'invalidActualEnd' ? tr('workingHoursTimer.invalidActualEnd', {
        defaultValue: 'Das Ende muss nach dem Start und nicht in der Zukunft liegen.'
    }) : error ? tr('workingHoursTimer.error', {
        defaultValue: 'Timer-Aktion fehlgeschlagen'
    }) : null;
    const discardLabel = tr('workingHoursTimer.discard', {
        defaultValue: 'Sitzung verwerfen'
    });
    const cancelLabel = tr('workingHoursTimer.cancel', {
        defaultValue: 'Abbrechen'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: problem?.code === 'forgotten',
                onClose: close,
                title: tr('workingHoursTimer.forgotten.title', {
                    defaultValue: 'Timer vergessen?'
                }),
                dataTestId: "working-hours-timer-forgotten",
                size: "small",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogBody"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogText"], {
                            children: tr('workingHoursTimer.forgotten.text', {
                                defaultValue: 'Der Timer läuft seit {{start}} Uhr. Wann hast du tatsächlich aufgehört? Es zählt die Zeit bis dahin.',
                                start: problem?.code === 'forgotten' ? fmt.dateWith(problem.startedAt, BERLIN_DATE_TIME) : ''
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FormEditableField$2f$FormEditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormEditableField"], {
                            name: "actualEnd",
                            control: control,
                            fieldType: "datetime",
                            required: true,
                            label: tr('workingHoursTimer.forgotten.actualEnd', {
                                defaultValue: 'Tatsächliches Ende (Berliner Zeit)'
                            }),
                            dataTestId: "working-hours-timer-actual-end",
                            onEnter: ()=>void submitActualEnd()
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        problem?.code === 'forgotten' && errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogError"], {
                            role: "alert",
                            "data-testid": "working-hours-timer-forgotten-error",
                            "data-code": error ?? '',
                            children: errorText
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogActions"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                    onClick: ()=>void submitActualEnd(),
                                    disabled: pending || !actualEnd,
                                    dataTestId: "working-hours-timer-forgotten-submit",
                                    children: tr('workingHoursTimer.forgotten.submit', {
                                        defaultValue: 'Bis dahin speichern'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].DANGER,
                                    onClick: ()=>void discard(),
                                    disabled: pending,
                                    dataTestId: "working-hours-timer-forgotten-discard",
                                    children: discardLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].TERTIARY,
                                    onClick: close,
                                    dataTestId: "working-hours-timer-forgotten-cancel",
                                    children: cancelLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: problem?.code === 'conflict',
                onClose: close,
                title: tr('workingHoursTimer.conflict.title', {
                    defaultValue: 'Zeiten passen nicht'
                }),
                dataTestId: "working-hours-timer-conflict",
                size: "small",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogBody"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTexts"], {
                            "data-testid": "working-hours-timer-conflict-text",
                            "data-kind": invalidCode ? 'invalid' : 'overlap',
                            children: [
                                overlap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogText"], {
                                    "data-testid": "working-hours-timer-conflict-cause",
                                    "data-error-code": "overlap",
                                    children: invalidCode ? tr('workingHoursTimer.conflict.overlapCause', {
                                        defaultValue: 'Die Zeiten überschneiden sich mit einem anderen Eintrag.'
                                    }) : tr('workingHoursTimer.conflict.text', {
                                        defaultValue: 'Diese Zeiten überschneiden sich mit einem anderen Eintrag. Der Timer läuft weiter. Korrigiere den anderen Eintrag und stoppe erneut, oder verwirf die Sitzung.'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                invalidCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogText"], {
                                    "data-testid": "working-hours-timer-conflict-cause",
                                    "data-error-code": invalidCode,
                                    children: tr('workingHoursTimer.conflict.invalidText', {
                                        defaultValue: 'Diese Zeiten lassen sich so nicht als Eintrag erfassen. Der Timer läuft weiter. Verwirf die Sitzung und erfasse die Zeit von Hand.'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        problem?.code === 'conflict' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProposedList"], {
                            "data-testid": "working-hours-timer-conflict-proposed",
                            "data-issues": problem.issues.join(','),
                            children: problem.proposed.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProposedItem"], {
                                    "data-testid": "working-hours-timer-conflict-part",
                                    "data-date": part.date,
                                    "data-start": part.startTime,
                                    "data-end": part.endTime,
                                    "data-break": part.breakMinutes,
                                    children: tr('workingHoursTimer.conflict.part', {
                                        defaultValue: '{{date}}: {{start}}–{{end}}, Pause {{pause}} min',
                                        date: part.date,
                                        start: part.startTime,
                                        end: part.endTime,
                                        pause: part.breakMinutes
                                    })
                                }, `${part.date}-${part.startTime}`, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        problem?.code === 'conflict' && errorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogError"], {
                            role: "alert",
                            "data-testid": "working-hours-timer-conflict-error",
                            "data-code": error ?? '',
                            children: errorText
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$WorkingHoursTimerBanner$2f$WorkingHoursTimerBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogActions"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].DANGER,
                                    onClick: ()=>void discard(),
                                    disabled: pending,
                                    dataTestId: "working-hours-timer-conflict-discard",
                                    children: discardLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].TERTIARY,
                                    onClick: close,
                                    dataTestId: "working-hours-timer-conflict-cancel",
                                    children: cancelLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(WorkingHoursTimerDialogs, "/fF/XhJ8tV3OAGIuX9h1ngYdwzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = WorkingHoursTimerDialogs;
var _c;
__turbopack_context__.k.register(_c, "WorkingHoursTimerDialogs");
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
"[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IDLE_STATE",
    ()=>IDLE_STATE,
    "WorkingHoursTimerProvider",
    ()=>WorkingHoursTimerProvider,
    "formatElapsed",
    ()=>formatElapsed,
    "useWorkingHoursTimer",
    ()=>useWorkingHoursTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/workingHoursTimerAccess.ts [app-client] (ecmascript)");
;
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
// Dialoge (vergessener Timer, Konflikt) erst laden, wenn ein Stopp sie braucht.
const WorkingHoursTimerDialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.WorkingHoursTimerDialogs), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = WorkingHoursTimerDialogs;
const IDLE_STATE = {
    status: 'idle',
    sessionId: null,
    startedAt: null,
    lastEventAt: null,
    pausedMs: 0,
    pausedSince: null
};
const WorkingHoursTimerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function computeElapsedMs(state) {
    if (state.status === 'idle' || !state.startedAt) return 0;
    const start = new Date(state.startedAt).getTime();
    const now = Date.now();
    let elapsed = now - start - state.pausedMs;
    if (state.status === 'paused' && state.pausedSince) {
        elapsed -= now - new Date(state.pausedSince).getTime();
    }
    return elapsed < 0 ? 0 : elapsed;
}
function computeBreakMs(state) {
    if (state.status === 'idle') return 0;
    let breakMs = state.pausedMs;
    if (state.status === 'paused' && state.pausedSince) {
        breakMs += Date.now() - new Date(state.pausedSince).getTime();
    }
    return breakMs < 0 ? 0 : breakMs;
}
// Bounded exponential backoff for the SSE reconnect. A flat infinite retry
// hammers the endpoint forever on a permanent failure (e.g. a 401 after the
// session is lost), so cap both the delay and the number of attempts.
const SSE_RECONNECT_BASE_DELAY = 3000;
const SSE_RECONNECT_MAX_DELAY = 60000;
const SSE_MAX_RECONNECT_ATTEMPTS = 6;
function WorkingHoursTimerProvider({ children }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    // #1576: Timer, Stream und Rückfall-Abruf nur, wer working-hours.create hat
    // (Rollendefinitionen, keine Rollenliste). #1548: erst mit vollständiger
    // Sitzung — davor antworten Stream und /timer/active mit 401.
    const hasTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimerAccess"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(IDLE_STATE);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elapsedMs, setElapsedMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [breakMs, setBreakMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [problem, setProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ein offener Dialog zeigt den Fehler seines Stopps selbst (kein Toast daneben)
    const problemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    problemRef.current = problem;
    const [lastError, setLastError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const eventSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectAttemptsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const bootstrapTimer = bootstrap.data?.timer;
    const bootstrapUpdatedAt = bootstrap.dataUpdatedAt;
    // `timer: null` heißt: kein Recht auf working-hours (z. B. accounting) —
    // dann bleibt der Timer leer. Nur ein gescheiterter Bootstrap fällt auf
    // den Einzelendpunkt zurück.
    const bootstrapFailed = bootstrap.isError;
    // Der Bootstrap-Stand gilt nur als ANFANGSzustand: spätere Schreibvorgänge
    // in den Bootstrap-Cache (Outlook-Refetch, Profil-Mutation) dürfen einen
    // inzwischen per POST/SSE geänderten Timer nicht zurücksetzen.
    const hydratedFromBootstrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkingHoursTimerProvider.useCallback[refresh]": async ()=>{
            if (!hasTimer || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) return;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/plastship/working-hours/timer/active/');
                const { events: nextEvents, ...nextState } = res.data.data ?? IDLE_STATE;
                setState(nextState);
                setEvents(nextEvents ?? []);
            } catch  {
            // Silent; keep current state
            } finally{
                setIsHydrated(true);
            }
        }
    }["WorkingHoursTimerProvider.useCallback[refresh]"], [
        hasTimer
    ]);
    // Cross-tab / cross-device sync: subscribe to server SSE stream.
    // Skipped in Storybook — the static logged-in session would otherwise open a
    // live EventSource per story (×N on autodocs pages), flooding the tab.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (!hasTimer || ("TURBOPACK compile-time value", "object") === 'undefined' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) return;
            reconnectAttemptsRef.current = 0;
            const connect = {
                "WorkingHoursTimerProvider.useEffect.connect": ()=>{
                    if (eventSourceRef.current) eventSourceRef.current.close();
                    const es = new EventSource('/api/plastship/working-hours/timer/stream/');
                    eventSourceRef.current = es;
                    es.onopen = ({
                        "WorkingHoursTimerProvider.useEffect.connect": ()=>{
                            reconnectAttemptsRef.current = 0;
                        }
                    })["WorkingHoursTimerProvider.useEffect.connect"];
                    es.onmessage = ({
                        "WorkingHoursTimerProvider.useEffect.connect": (ev)=>{
                            try {
                                const msg = JSON.parse(ev.data);
                                if (msg.type === 'state-change' && msg.payload) {
                                    setState(msg.payload.state);
                                    setEvents(msg.payload.events ?? []);
                                    // Anderswo gestoppt: ein offener Dialog dieses Stopps ist erledigt
                                    if (msg.payload.state.status === 'idle') setProblem(null);
                                }
                            } catch  {
                            // Ignore parse errors
                            }
                        }
                    })["WorkingHoursTimerProvider.useEffect.connect"];
                    es.onerror = ({
                        "WorkingHoursTimerProvider.useEffect.connect": ()=>{
                            es.close();
                            eventSourceRef.current = null;
                            if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
                            // Give up after the cap so a permanent failure can't hammer the endpoint
                            // forever; a page reload or tab refocus re-establishes the stream.
                            if (reconnectAttemptsRef.current >= SSE_MAX_RECONNECT_ATTEMPTS) return;
                            const delay = Math.min(SSE_RECONNECT_BASE_DELAY * 2 ** reconnectAttemptsRef.current, SSE_RECONNECT_MAX_DELAY);
                            reconnectAttemptsRef.current += 1;
                            reconnectTimerRef.current = setTimeout(connect, delay);
                        }
                    })["WorkingHoursTimerProvider.useEffect.connect"];
                }
            }["WorkingHoursTimerProvider.useEffect.connect"];
            connect();
            return ({
                "WorkingHoursTimerProvider.useEffect": ()=>{
                    if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
                    eventSourceRef.current?.close();
                    eventSourceRef.current = null;
                }
            })["WorkingHoursTimerProvider.useEffect"];
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        hasTimer
    ]);
    // Belt-and-suspenders: refetch when the tab regains focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (typeof document === 'undefined') return;
            const onVisible = {
                "WorkingHoursTimerProvider.useEffect.onVisible": ()=>{
                    if (document.visibilityState === 'visible') void refresh();
                }
            }["WorkingHoursTimerProvider.useEffect.onVisible"];
            document.addEventListener('visibilitychange', onVisible);
            return ({
                "WorkingHoursTimerProvider.useEffect": ()=>document.removeEventListener('visibilitychange', onVisible)
            })["WorkingHoursTimerProvider.useEffect"];
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        refresh
    ]);
    // Hydrate when auth resolves. In Storybook, settle to an idle, hydrated state
    // without hitting the network (the static session would otherwise fetch once
    // per story).
    // #1479: Der Anfangszustand kommt aus dem Shell-Bootstrap (`/me/bootstrap/`);
    // nur wenn der Bootstrap scheitert, gezielt `/timer/active` fragen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (!hasTimer || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) {
                hydratedFromBootstrapRef.current = false;
                setState(IDLE_STATE);
                setEvents([]);
                setIsHydrated(true);
                return;
            }
            if (hydratedFromBootstrapRef.current || bootstrapUpdatedAt === 0) return;
            hydratedFromBootstrapRef.current = true;
            if (bootstrapTimer) {
                const { events: nextEvents, ...nextState } = bootstrapTimer;
                setState(nextState);
                setEvents(nextEvents ?? []);
            }
            setIsHydrated(true);
        // Nur den ersten Bootstrap-Stand übernehmen (siehe hydratedFromBootstrapRef).
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        hasTimer,
        bootstrapUpdatedAt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (hasTimer && bootstrapFailed) void refresh();
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        hasTimer,
        bootstrapFailed,
        refresh
    ]);
    // Live elapsed + break tick — one ticks while running, the other while paused
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            setElapsedMs(computeElapsedMs(state));
            setBreakMs(computeBreakMs(state));
            if (state.status === 'idle') return;
            const id = window.setInterval({
                "WorkingHoursTimerProvider.useEffect.id": ()=>{
                    setElapsedMs(computeElapsedMs(state));
                    setBreakMs(computeBreakMs(state));
                }
            }["WorkingHoursTimerProvider.useEffect.id"], 1000);
            return ({
                "WorkingHoursTimerProvider.useEffect": ()=>window.clearInterval(id)
            })["WorkingHoursTimerProvider.useEffect"];
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        state
    ]);
    const postEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkingHoursTimerProvider.useCallback[postEvent]": async (type, options)=>{
            if (pendingRef.current) return {
                createdEntryIds: []
            };
            pendingRef.current = true;
            setPending(true);
            const clientId = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/plastship/working-hours/timer/events/', {
                    type,
                    clientId,
                    ...type === 'stop' && options?.actualEnd ? {
                        actualEnd: options.actualEnd
                    } : {},
                    ...type === 'stop' && options?.discard ? {
                        discard: true
                    } : {}
                });
                setState(res.data.data.state);
                setEvents(res.data.data.events ?? []);
                setProblem(null);
                setLastError(null);
                // Other tabs/devices will receive the same update via SSE — no client broadcast needed.
                const createdEntryIds = res.data.data.createdEntryIds ?? [];
                if (type === 'stop' && createdEntryIds.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('workingHoursTimer.saved', {
                        defaultValue: 'Arbeitszeit gespeichert'
                    }), {
                        context: {
                            entityType: 'WorkingHoursEntry',
                            entityId: createdEntryIds[0],
                            action: tr('notifications.action.created', {
                                defaultValue: 'Erstellt'
                            })
                        }
                    });
                } else if (type === 'stop' && !options?.discard) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(tr('workingHoursTimer.tooShort', {
                        defaultValue: 'Unter einer Minute – kein Eintrag angelegt'
                    }));
                }
                return {
                    createdEntryIds
                };
            } catch (error) {
                const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAxiosError"])(error) ? error.response?.data : undefined;
                const code = body?.code ?? 'error';
                if (body?.state) setState(body.state);
                if (code === 'forgotten' && body?.startedAt) {
                    setProblem({
                        code: 'forgotten',
                        startedAt: body.startedAt
                    });
                } else if (code === 'conflict') {
                    setProblem({
                        code: 'conflict',
                        issues: body?.issues ?? [],
                        proposed: body?.proposed ?? []
                    });
                } else if (!problemRef.current) {
                    setLastError(code);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('workingHoursTimer.error', {
                        defaultValue: 'Timer-Aktion fehlgeschlagen'
                    }));
                }
                return {
                    createdEntryIds: [],
                    error: code
                };
            } finally{
                pendingRef.current = false;
                setPending(false);
            }
        }
    }["WorkingHoursTimerProvider.useCallback[postEvent]"], [
        tr
    ]);
    const clearProblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkingHoursTimerProvider.useCallback[clearProblem]": ()=>setProblem(null)
    }["WorkingHoursTimerProvider.useCallback[clearProblem]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkingHoursTimerProvider.useMemo[value]": ()=>({
                enabled: hasTimer,
                state,
                events,
                isHydrated,
                pending,
                elapsedMs,
                breakMs,
                postEvent,
                problem,
                clearProblem,
                lastError,
                refresh
            })
    }["WorkingHoursTimerProvider.useMemo[value]"], [
        hasTimer,
        state,
        events,
        isHydrated,
        pending,
        elapsedMs,
        breakMs,
        postEvent,
        problem,
        clearProblem,
        lastError,
        refresh
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkingHoursTimerContext.Provider, {
        value: value,
        children: [
            children,
            problem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkingHoursTimerDialogs, {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx",
                lineNumber: 400,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s(WorkingHoursTimerProvider, "R01hRJWPYMC691cBQGFUyYJcHIU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimerAccess"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"]
    ];
});
_c1 = WorkingHoursTimerProvider;
function useWorkingHoursTimer() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WorkingHoursTimerContext);
    if (!ctx) {
        throw new Error('useWorkingHoursTimer must be used within WorkingHoursTimerProvider');
    }
    return ctx;
}
_s1(useWorkingHoursTimer, "/dMy7t63NXD4eYACoT93CePwGrg=");
function formatElapsed(ms) {
    if (ms <= 0) return '00:00';
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor(totalSec % 3600 / 60);
    const s = totalSec % 60;
    const pad = (n)=>n.toString().padStart(2, '0');
    return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "WorkingHoursTimerDialogs");
__turbopack_context__.k.register(_c1, "WorkingHoursTimerProvider");
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
"[project]/apps/web/src/app/context/workingHoursTimerAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseWorkingHoursTimer",
    ()=>canUseWorkingHoursTimer,
    "useWorkingHoursTimerAccess",
    ()=>useWorkingHoursTimerAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function canUseWorkingHoursTimer(userContext) {
    if (!userContext) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, 'working-hours', 'create');
}
function useWorkingHoursTimerAccess() {
    _s();
    const sessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    if (!sessionComplete) return false;
    return canUseWorkingHoursTimer(userContext);
}
_s(useWorkingHoursTimerAccess, "o06klJrjTpm8Y/6/dqO5lKqb9Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"]
    ];
});
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
"[project]/apps/web/src/app/hooks/useDebouncedCallback.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDebouncedCallback",
    ()=>useDebouncedCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebouncedCallback(callback, delay) {
    _s();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    // Update callback ref when callback changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedCallback.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useDebouncedCallback.useEffect"], [
        callback
    ]);
    // Clear timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedCallback.useEffect": ()=>{
            return ({
                "useDebouncedCallback.useEffect": ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            })["useDebouncedCallback.useEffect"];
        }
    }["useDebouncedCallback.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDebouncedCallback.useCallback": (...args)=>{
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout({
                "useDebouncedCallback.useCallback": ()=>{
                    callbackRef.current(...args);
                }
            }["useDebouncedCallback.useCallback"], delay);
        }
    }["useDebouncedCallback.useCallback"], [
        delay
    ]);
}
_s(useDebouncedCallback, "fDUz5UWalfStebMUOEGxr3AEChg=");
const __TURBOPACK__default__export__ = useDebouncedCallback;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEntityText",
    ()=>useEntityText,
    "useLocalizedEntityFieldConfig",
    ()=>useLocalizedEntityFieldConfig
]);
/**
 * Texte der Feld-Configs in der Sprache des Nutzers (#1626)
 *
 * Bindet die reinen Funktionen aus `config/entityFields/entityFieldI18n.ts` an
 * die Übersetzung des angemeldeten Nutzers. Jede Ansicht, die Texte aus einer
 * Feld-Config oder aus `getFieldLabel` ausgibt, holt sie über diesen Hook.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)");
// Über den Barrel: Tests mocken `@/config/entityFields` und erreichen so auch diesen Hook.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/useEntityFieldConfig.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/**
 * `tr` behält seine Identität, wenn die Übersetzungen einer Sprache
 * nachgeladen sind. Wer übersetzte Configs in `useMemo` hält, braucht deshalb
 * diesen Zähler als Abhängigkeit — sonst bliebe der erste Stand stehen.
 */ const useTranslationsVersion = ()=>{
    _s();
    const [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslationsVersion.useEffect": ()=>{
            const handler = {
                "useTranslationsVersion.useEffect.handler": ()=>setVersion({
                        "useTranslationsVersion.useEffect.handler": (current)=>current + 1
                    }["useTranslationsVersion.useEffect.handler"])
            }["useTranslationsVersion.useEffect.handler"];
            window.addEventListener('translations-loaded', handler);
            return ({
                "useTranslationsVersion.useEffect": ()=>window.removeEventListener('translations-loaded', handler)
            })["useTranslationsVersion.useEffect"];
        }
    }["useTranslationsVersion.useEffect"], []);
    return version;
};
_s(useTranslationsVersion, "wl/odVD8wVUDLhTU0L9z9/g5EVY=");
function useEntityText() {
    _s1();
    const { tr, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const version = useTranslationsVersion();
    const language = i18n?.language;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEntityText.useMemo": ()=>{
            const translate = tr;
            return {
                revision: `${language}:${version}`,
                text: ({
                    "useEntityText.useMemo": (text, key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateEntityText"])(translate, text, key)
                })["useEntityText.useMemo"],
                fieldLabel: ({
                    "useEntityText.useMemo": (apiName)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateFieldLabel"])(translate, apiName)
                })["useEntityText.useMemo"],
                options: ({
                    "useEntityText.useMemo": (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePicklistOptions"])(options, translate)
                })["useEntityText.useMemo"],
                field: ({
                    "useEntityText.useMemo": (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeField"])(field, translate)
                })["useEntityText.useMemo"],
                section: ({
                    "useEntityText.useMemo": (section)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSection"])(section, translate)
                })["useEntityText.useMemo"],
                relatedList: ({
                    "useEntityText.useMemo": (relatedList)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeRelatedList"])(relatedList, translate)
                })["useEntityText.useMemo"],
                tabGroup: ({
                    "useEntityText.useMemo": (group)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeTabGroup"])(group, translate)
                })["useEntityText.useMemo"],
                config: ({
                    "useEntityText.useMemo": (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeEntityFieldConfig"])(config, translate)
                })["useEntityText.useMemo"]
            };
        }
    }["useEntityText.useMemo"], [
        tr,
        language,
        version
    ]);
}
_s1(useEntityText, "+D7AkRo77moGZkP0a6JXvTHeRaQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        useTranslationsVersion
    ];
});
function useLocalizedEntityFieldConfig(entityType, userContext, recordData) {
    _s2();
    // Nur `config` ist im Basis-Hook memoisiert; das umgebende Objekt entsteht
    // bei jedem Render neu und taugt nicht als Abhängigkeit.
    const { config: filtered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityFieldConfig"])(entityType, userContext, recordData);
    const entityText = useEntityText();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLocalizedEntityFieldConfig.useMemo": ()=>{
            if (!filtered) {
                return {
                    config: null,
                    sections: [],
                    tabGroups: [],
                    relatedLists: [],
                    relatedListTabGroups: [],
                    visibleFields: [],
                    systemFields: [],
                    originalConfig: null,
                    hasConfig: false
                };
            }
            const originalConfig = entityText.config(filtered.originalConfig);
            const config = {
                ...filtered,
                entityLabel: entityText.text(filtered.entityLabel, filtered.originalConfig.entityLabelKey),
                sections: filtered.sections.map(entityText.section),
                tabGroups: filtered.tabGroups.map(entityText.tabGroup),
                relatedLists: filtered.relatedLists.map(entityText.relatedList),
                originalConfig
            };
            return {
                config,
                sections: config.sections,
                tabGroups: config.tabGroups,
                relatedLists: config.relatedLists,
                relatedListTabGroups: originalConfig.relatedListTabGroups ?? [],
                visibleFields: filtered.visibleFieldNames,
                systemFields: filtered.systemFields,
                originalConfig,
                hasConfig: true
            };
        // `entityText` ist je Sprache und Ladezustand stabil.
        }
    }["useLocalizedEntityFieldConfig.useMemo"], [
        filtered,
        entityText
    ]);
}
_s2(useLocalizedEntityFieldConfig, "fCG7t5Ya/gucdg8whMC6pxnPCNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityFieldConfig"],
        useEntityText
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormatters",
    ()=>useFormatters
]);
/**
 * #1640: Datum, Uhrzeit, Zahl, Währung, Prozent und relative Zeit in der
 * Sprache, die der Nutzer gewählt hat. Bindet `formattersFor`
 * (`app/lib/formatters`) an `i18n.language` von `useClientTranslation()`;
 * je Sprache dasselbe Objekt, die Funktionen sind also stabil und taugen als
 * Abhängigkeit für `useMemo`/`useCallback`.
 *
 *   const fmt = useFormatters()
 *   fmt.date(record.CreatedDate)      // 06.10.2026 · 06/10/2026
 *   fmt.currency(1234.5)              // 1.234,50 € · €1,234.50
 *   fmt.relativeTime(issue.lastSeen)  // vor 5 Minuten · 5 minutes ago
 *
 * Außerhalb von React-Hooks: `formattersFor(currentLanguage())`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatters.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useFormatters() {
    _s();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formattersFor"])(i18n?.language);
}
_s(useFormatters, "cKGYGdtan8/tqyDjC6zXsSTP+Zo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecordLabel",
    ()=>useRecordLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useRecordLabel() {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRecordLabel.useCallback[label]": (...candidates)=>{
            const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLabel"])(...candidates);
            return text !== null ? {
                text,
                unnamed: false
            } : {
                text: tr('common.unnamedRecord', {
                    defaultValue: 'Unnamed'
                }),
                unnamed: true
            };
        }
    }["useRecordLabel.useCallback[label]"], [
        tr
    ]);
    return {
        label
    };
}
_s(useRecordLabel, "9yG2HL3UEFhPX0IicCAPuq8cflk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionComplete",
    ()=>useSessionComplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$authGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/authGates.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useSessionComplete() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    return status === 'authenticated' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$authGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionComplete"])(session?.user);
}
_s(useSessionComplete, "ujwIunAD3hlHFoJLG3BNiDLiMqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHELL_BOOTSTRAP_KEY",
    ()=>SHELL_BOOTSTRAP_KEY,
    "useShellBootstrap",
    ()=>useShellBootstrap,
    "useUpdateShellBootstrap",
    ()=>useUpdateShellBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
const SHELL_BOOTSTRAP_KEY = [
    'me',
    'bootstrap'
];
function useShellBootstrap() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const email = session?.user?.email ?? null;
    // #1548: erst mit vollständiger Sitzung — davor antwortet der Endpunkt 401
    const sessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            ...SHELL_BOOTSTRAP_KEY,
            email
        ],
        queryFn: {
            "useShellBootstrap.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/me/bootstrap/')).data
        }["useShellBootstrap.useQuery"],
        enabled: sessionComplete && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])(),
        staleTime: Infinity,
        refetchOnWindowFocus: false
    });
}
_s(useShellBootstrap, "Ush9icAC2Tb4AOzJT8kESZTd6UM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUpdateShellBootstrap() {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUpdateShellBootstrap.useCallback": (patch)=>{
            const vorhanden = queryClient.getQueriesData({
                queryKey: SHELL_BOOTSTRAP_KEY
            }).some({
                "useUpdateShellBootstrap.useCallback.vorhanden": ([, data])=>data !== undefined
            }["useUpdateShellBootstrap.useCallback.vorhanden"]);
            if (!vorhanden) {
                void queryClient.invalidateQueries({
                    queryKey: SHELL_BOOTSTRAP_KEY
                });
                return;
            }
            queryClient.setQueriesData({
                queryKey: SHELL_BOOTSTRAP_KEY
            }, {
                "useUpdateShellBootstrap.useCallback": (current)=>current ? patch(current) : current
            }["useUpdateShellBootstrap.useCallback"]);
        }
    }["useUpdateShellBootstrap.useCallback"], [
        queryClient
    ]);
}
_s1(useUpdateShellBootstrap, "esWUSkX5QYGu6HykoNvE/x3w070=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserContext",
    ()=>useUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserContextContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserContextContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useUserContext() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSharedUserContext"])();
}
_s(useUserContext, "lxGWexjcHfjnyyw+QkRlk98bzV0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSharedUserContext"]
    ];
});
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
]})(),
"[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_13l6flo10vi1c._.js.map