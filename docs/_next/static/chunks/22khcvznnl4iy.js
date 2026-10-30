(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,510965,409643,e=>{var t=e.i(997053);e.i(882006);var a=e.i(594339),l=e.i(387506),i=e.i(596804);let r=t.m`
  &[readonly],
  &:disabled {
    color: ${({theme:e})=>e.palette.default.greyDark};
    background-color: ${({theme:e})=>e.palette.default.greyLight};
  }

  &[readonly] {
    cursor: default;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,n=t.m`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:disabled[data-readonly='true'] {
    cursor: default;
  }
`,o=t.U.div.withConfig({displayName:"EditableField.styles__Root",componentId:"sc-d667ae15-0"})`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: ${({$compact:e,theme:t})=>e?"0.25rem 0":t.padding.extrasmall};
  background-color: ${({theme:e})=>e.palette.default.white};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  width: 100%;
  box-sizing: border-box;
`,d=t.U.label.withConfig({displayName:"EditableField.styles__FieldLabel",componentId:"sc-d667ae15-1"})`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin-bottom: ${({theme:e})=>e.margin.extrasmall};
`,s=t.U.button.withConfig({displayName:"EditableField.styles__FieldLabelLink",componentId:"sc-d667ae15-2"})`
  display: block;
  border: none;
  background: transparent;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.primary};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  margin-bottom: ${({theme:e})=>e.margin.extrasmall};

  &:hover {
    text-decoration: underline;
  }
`,u=t.U.span.withConfig({displayName:"EditableField.styles__ValueDisplay",componentId:"sc-d667ae15-3"})`
  font-size: 0.9rem;
  color: ${({$isEmpty:e,theme:t})=>e?t.palette.default.greyDark:t.palette.default.black};
  font-style: ${({$isEmpty:e})=>e?"italic":"normal"};
  padding: 0.25rem ${({theme:e})=>e.padding.extrasmall};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
  box-sizing: border-box;
  min-height: 38px;
  display: flex;
  align-items: center;
  width: 100%;

  ${({$isEditable:e,$isEditing:a,theme:l})=>e&&!a&&t.m`
      cursor: pointer;
      border-bottom: 1px solid ${l.palette.default.grey};
      border-top: 1px solid transparent;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;

      &:hover {
        background-color: ${l.palette.default.greyLight};
        border-color: ${l.palette.default.greyDark};
      }
    `}

  ${({$isEditable:e,$isEditing:a,theme:l})=>!e&&!a&&t.m`
      color: ${l.palette.default.greyDark};
      background-color: ${l.palette.default.greyLight};
      cursor: not-allowed;
    `}

  ${({$isDirty:e,theme:a})=>e&&t.m`
      background-color: ${a.palette.default.warning}33;
      border-color: ${a.palette.default.warning};
    `}
`,c=t.U.div.withConfig({displayName:"EditableField.styles__EditContainer",componentId:"sc-d667ae15-4"})`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  width: 100%;
`,p=t.U.div.withConfig({displayName:"EditableField.styles__EditInputColumn",componentId:"sc-d667ae15-5"})`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
`,m=t.U.div.withConfig({displayName:"EditableField.styles__InputWrapper",componentId:"sc-d667ae15-6"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
  align-items: center;
  width: 100%;
`,f=t.m`
  ${(0,i.B)()}
  ${r}
  /* layout: inputBase's width: 100% is inert inside flex rows (flex-basis 0% wins) */
  flex: 1;
  min-width: 0;
`,h=t.U.input.withConfig({displayName:"EditableField.styles__StyledInput",componentId:"sc-d667ae15-7"})`
  ${f}
`,g=(0,t.U)(m).withConfig({displayName:"EditableField.styles__PlacesWrapper",componentId:"sc-d667ae15-8"})`
  position: relative;
`,y=t.U.ul.withConfig({displayName:"EditableField.styles__PlacesList",componentId:"sc-d667ae15-9"})`
  ${l.f}
`,b=t.U.textarea.withConfig({displayName:"EditableField.styles__StyledTextarea",componentId:"sc-d667ae15-10"})`
  ${(0,i.B)()}
  ${r}
  flex: 1;
  min-width: 0;
  min-height: 80px;
  resize: vertical;
`,x=t.U.div.withConfig({displayName:"EditableField.styles__SwitchShell",componentId:"sc-d667ae15-11"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,w=t.U.input.withConfig({displayName:"EditableField.styles__StyledCheckbox",componentId:"sc-d667ae15-12"})`
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
    ${(0,i.a)()}
  }
`,$=t.U.div.withConfig({displayName:"EditableField.styles__EditActions",componentId:"sc-d667ae15-13"})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;t.U.button.withConfig({displayName:"EditableField.styles__ActionButton",componentId:"sc-d667ae15-14"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.25rem ${({theme:e})=>e.padding.extrasmall};
  font-size: 0.75rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  min-width: 50px;

  ${({$variant:e,$isSuccess:a,theme:l})=>"confirm"===e?t.m`
          background-color: ${l.palette.default.success};
          color: ${l.palette.default.white};

          &:hover:not(:disabled) {
            background-color: ${l.palette.default.success};
            filter: brightness(0.9);
          }
        `:t.m`
          background-color: ${l.palette.default.greyDark};
          color: ${l.palette.default.white};

          &:hover:not(:disabled) {
            background-color: ${l.palette.default.greyDark};
            filter: brightness(0.85);
          }
        `}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,t.U.span.withConfig({displayName:"EditableField.styles__ButtonSpinner",componentId:"sc-d667ae15-15"})`
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
`,t.U.span.withConfig({displayName:"EditableField.styles__ButtonCheckmark",componentId:"sc-d667ae15-16"})`
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
`;let v=t.U.span.withConfig({displayName:"EditableField.styles__HelperText",componentId:"sc-d667ae15-17"})`
  font-size: 0.75rem;
  color: ${({$hasError:e,theme:t})=>e?t.palette.default.error:t.palette.default.greyDark};
  margin-top: 0.125rem;
  font-weight: ${({$hasError:e})=>e?"500":"normal"};
`,k=(0,t.U)(a.h).withConfig({displayName:"EditableField.styles__CurrencyWrapper",componentId:"sc-d667ae15-18"})``,C=(0,t.U)(a.f).attrs({$position:"end"}).withConfig({displayName:"EditableField.styles__CurrencySymbol",componentId:"sc-d667ae15-19"})``,j=t.U.input.withConfig({displayName:"EditableField.styles__CurrencyInput",componentId:"sc-d667ae15-20"})`
  ${f}
  text-align: right;
  padding-right: ${a.d};
`,I=(0,t.U)(a.h).withConfig({displayName:"EditableField.styles__PercentWrapper",componentId:"sc-d667ae15-21"})``,_=(0,t.U)(a.f).attrs({$position:"end"}).withConfig({displayName:"EditableField.styles__PercentSymbol",componentId:"sc-d667ae15-22"})``,E=t.U.input.withConfig({displayName:"EditableField.styles__PercentInput",componentId:"sc-d667ae15-23"})`
  ${f}
  text-align: right;
  padding-right: ${a.d};
`,F=(0,t.U)(a.h).withConfig({displayName:"EditableField.styles__FormattedInputWrapper",componentId:"sc-d667ae15-24"})``,S=t.U.input.withConfig({displayName:"EditableField.styles__CardNumberInput",componentId:"sc-d667ae15-25"})`
  ${(0,i.B)()}
  ${r}
  flex: 1;
  min-width: 0;
  /* room for the brand name + validity badge */
  padding-right: 6.5rem;
  font-variant-numeric: tabular-nums;
`,N=t.U.input.withConfig({displayName:"EditableField.styles__IbanInput",componentId:"sc-d667ae15-26"})`
  ${(0,i.B)()}
  ${r}
  flex: 1;
  min-width: 0;
  padding-right: ${a.d};
  font-variant-numeric: tabular-nums;
`,D=(0,t.U)(a.f).attrs({$position:"end"}).withConfig({displayName:"EditableField.styles__ValidityAdornment",componentId:"sc-d667ae15-27"})`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  pointer-events: none;
`,U=t.U.span.withConfig({displayName:"EditableField.styles__CardBrandName",componentId:"sc-d667ae15-28"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,M=t.U.span.withConfig({displayName:"EditableField.styles__ValidityMark",componentId:"sc-d667ae15-29"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0.9rem;
  font-weight: 700;
  line-height: 1;
  color: ${({$valid:e,theme:t})=>e?t.palette.default.success:t.palette.default.error};

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`,V=t.U.div.withConfig({displayName:"EditableField.styles__DurationWrapper",componentId:"sc-d667ae15-30"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
  width: 100%;
  align-items: center;
`,A=t.U.div.withConfig({displayName:"EditableField.styles__DurationField",componentId:"sc-d667ae15-31"})`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
`,T=t.U.label.withConfig({displayName:"EditableField.styles__DurationLabel",componentId:"sc-d667ae15-32"})`
  font-size: 0.7rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  text-transform: uppercase;
`,R=t.U.input.withConfig({displayName:"EditableField.styles__DurationInput",componentId:"sc-d667ae15-33"})`
  ${(0,i.B)()}
  ${r}
  width: 100%;
`,L=t.U.div.withConfig({displayName:"EditableField.styles__ColorWrapper",componentId:"sc-d667ae15-34"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
  align-items: center;
  width: 100%;
`,B=t.U.input.withConfig({displayName:"EditableField.styles__ColorPickerInput",componentId:"sc-d667ae15-35"})`
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  min-height: 38px;
  padding: 0.125rem;
  flex-shrink: 0;
  background-color: ${({theme:e})=>e.palette.default.white};
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  cursor: pointer;
  outline: none;

  &:focus-visible {
    ${(0,i.a)()}
  }

  ${n}
`,z=t.U.input.withConfig({displayName:"EditableField.styles__ColorTextInput",componentId:"sc-d667ae15-36"})`
  ${(0,i.B)()}
  ${r}
  flex: 1;
  min-width: 0;

  ${({$invalid:e,theme:a})=>e&&t.m`
      border-color: ${a.palette.default.error};

      &:focus {
        ${(0,i.a)(!0)}
      }
    `}
`,K=t.U.span.withConfig({displayName:"EditableField.styles__ColorSwatch",componentId:"sc-d667ae15-37"})`
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  flex-shrink: 0;
  margin-right: 0.375rem;
  background-color: ${({$color:e})=>e};
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: 3px;
`,P=t.U.div.withConfig({displayName:"EditableField.styles__SliderWrapper",componentId:"sc-d667ae15-38"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
  align-items: center;
  width: 100%;
  min-height: 38px;
`,O=t.U.input.withConfig({displayName:"EditableField.styles__SliderInput",componentId:"sc-d667ae15-39"})`
  -webkit-appearance: none;
  appearance: none;
  flex: 1;
  min-width: 0;
  height: 0.375rem;
  margin: 0;
  border-radius: 999px;
  background: ${({$percent:e,theme:t})=>`linear-gradient(to right, ${t.palette.default.primary} ${e}%, ${t.palette.default.grey} ${e}%)`};
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    background: ${({theme:e})=>e.palette.default.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    background: ${({theme:e})=>e.palette.default.primary};
    cursor: pointer;
  }

  &:focus-visible {
    ${(0,i.a)()}
  }

  ${n}

  &:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  &:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
`,W=t.U.span.withConfig({displayName:"EditableField.styles__SliderReadout",componentId:"sc-d667ae15-40"})`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.palette.default.black};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  min-width: 2.5rem;
  text-align: right;
`,H=t.m`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({$filled:e,theme:t})=>e?t.palette.default.warning:t.palette.default.grey};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  ${({$filled:e})=>e&&t.m`
      svg polygon {
        fill: currentColor;
      }
    `}
`,q=t.U.div.withConfig({displayName:"EditableField.styles__RatingGroup",componentId:"sc-d667ae15-41"})`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  min-height: 38px;
`,G=t.U.button.withConfig({displayName:"EditableField.styles__RatingStarButton",componentId:"sc-d667ae15-42"})`
  ${H}
  background: none;
  border: none;
  margin: 0;
  padding: 0.125rem;
  border-radius: 4px;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    ${(0,i.a)()}
  }

  ${n}
`,Z=t.U.span.withConfig({displayName:"EditableField.styles__RatingDisplayRow",componentId:"sc-d667ae15-43"})`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  margin-right: 0.375rem;
`,Y=t.U.span.withConfig({displayName:"EditableField.styles__RatingDisplayStar",componentId:"sc-d667ae15-44"})`
  ${H}

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Q=t.U.div.withConfig({displayName:"EditableField.styles__AddressGrid",componentId:"sc-d667ae15-45"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.margin.extrasmall};
  width: 100%;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,J=t.U.div.withConfig({displayName:"EditableField.styles__AddressField",componentId:"sc-d667ae15-46"})`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`,X=t.U.label.withConfig({displayName:"EditableField.styles__AddressLabel",componentId:"sc-d667ae15-47"})`
  font-size: 0.7rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  text-transform: uppercase;
`,ee=t.U.input.withConfig({displayName:"EditableField.styles__AddressInput",componentId:"sc-d667ae15-48"})`
  ${f}
  width: 100%;
`,et=t.U.div.withConfig({displayName:"EditableField.styles__AddressFullWidth",componentId:"sc-d667ae15-49"})`
  grid-column: 1 / -1;
`,ea=t.U.div.withConfig({displayName:"EditableField.styles__LocationWrapper",componentId:"sc-d667ae15-50"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
  width: 100%;
  align-items: center;
`,el=t.U.div.withConfig({displayName:"EditableField.styles__LocationField",componentId:"sc-d667ae15-51"})`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
`,ei=t.U.label.withConfig({displayName:"EditableField.styles__LocationLabel",componentId:"sc-d667ae15-52"})`
  font-size: 0.7rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  text-transform: uppercase;
`,er=t.U.input.withConfig({displayName:"EditableField.styles__LocationInput",componentId:"sc-d667ae15-53"})`
  ${f}
  width: 100%;
`,en=t.U.div.withConfig({displayName:"EditableField.styles__FileFieldPlaceholder",componentId:"sc-d667ae15-54"})`
  box-sizing: border-box;
  width: 100%;
  min-height: calc(
    2 * ${({theme:e})=>e.padding.large} + 4px + 48px + 2 * ${({theme:e})=>e.margin.small} +
      1.3125rem
  );
  border: 2px dashed ${({theme:e})=>e.palette.default.greyDark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  background-color: ${({theme:e})=>e.palette.default.white};
`;e.s(["b",0,J,"X",0,et,"K",0,Q,"N",0,ee,"s",0,X,"Y",0,U,"A",0,S,"Z",0,B,"U",0,K,"f",0,z,"L",0,L,"V",0,j,"w",0,C,"W",0,k,"a",0,A,"q",0,R,"z",0,T,"t",0,V,"x",0,$,"v",0,c,"C",0,p,"u",0,d,"e",0,s,"g",0,en,"c",0,F,"Q",0,v,"d",0,N,"y",0,m,"h",0,el,"i",0,er,"_",0,ei,"O",0,ea,"M",0,E,"m",0,_,"j",0,I,"P",0,y,"R",0,g,"n",0,Z,"S",0,Y,"$",0,q,"o",0,G,"F",0,o,"B",0,O,"D",0,W,"k",0,P,"l",0,w,"E",0,h,"G",0,b,"H",0,x,"T",0,D,"p",0,M,"I",0,u],510965),e.s(["d",0,function(e,t){let a=e.dependsOn;if(!a||!t)return;let l=t[a.field];if("string"==typeof l&&""!==l.trim())return{field:a.matchField,value:l}},"n",0,function(e){return e?`&filterField=${encodeURIComponent(e.field)}&filterValue=${encodeURIComponent(e.value)}`:""}],409643)},730235,69318,e=>{var t=e.i(843476),a=e.i(271645),l=e.i(770703),i=e.i(510965);e.i(882006);var r=e.i(387506),n=e.i(409643),o=e.i(696984),d=e.i(145896),s=e.i(858350),u=e.i(164223),c=e.i(943962),p=e.i(302312),m=e.i(962818),f=e.i(982993),h=e.i(997053),g=e.i(994244),y=e.i(573236),b=e.i(634146),x=e.i(596804);let w=h.U.div.withConfig({displayName:"InputMultiSelect.styles__Root",componentId:"sc-75126dac-0"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${e=>e.$noMargin?"0":e.theme.margin.default};
`,$=(0,h.U)(b.f).attrs(e=>({...e})).withConfig({displayName:"InputMultiSelect.styles__StyledInputLabel",componentId:"sc-75126dac-1"})`
  color: ${({error:e,theme:t})=>e?t.palette.default.error:t.palette.default.black};
  opacity: ${({disabled:e})=>e?.5:1};
`,v=h.U.div.withConfig({displayName:"InputMultiSelect.styles__SelectedTags",componentId:"sc-75126dac-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`,k=h.U.span.withConfig({displayName:"InputMultiSelect.styles__SelectedTag",componentId:"sc-75126dac-3"})`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background-color: #e3f2fd;
  border: 1px solid ${({theme:e})=>e.palette.default.primary};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  font-size: 0.8rem;
  color: ${({theme:e})=>e.palette.default.primary};
`,C=h.U.button.withConfig({displayName:"InputMultiSelect.styles__RemoveTagButton",componentId:"sc-75126dac-4"})`
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
`,j=h.U.div.withConfig({displayName:"InputMultiSelect.styles__OptionsList",componentId:"sc-75126dac-5"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  background-color: ${({theme:e})=>e.palette.default.white};
  max-height: 240px;
  overflow-y: auto;
`,I=h.U.label.withConfig({displayName:"InputMultiSelect.styles__OptionItem",componentId:"sc-75126dac-6"})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${({theme:e})=>e.borderRadius.input};
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
  background-color: ${({$isSelected:e,theme:t})=>e?"#e3f2fd":t.palette.default.greyLight};
  border: 1px solid
    ${({$isSelected:e,theme:t})=>e?t.palette.default.primary:t.palette.default.grey};

  &:hover {
    background-color: ${({$isSelected:e,theme:t})=>e?"#bbdefb":t.palette.default.grey};
  }

  input {
    margin: 0;
  }
`,_=h.U.div.withConfig({displayName:"InputMultiSelect.styles__TriggerWrap",componentId:"sc-75126dac-7"})`
  position: relative;
  display: flex;
  max-width: 100%;
  min-height: 38px;
`,E=h.U.div.withConfig({displayName:"InputMultiSelect.styles__Trigger",componentId:"sc-75126dac-8"})`
  ${({$error:e})=>(0,x.B)({error:!!e})}
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${e=>e.$disabled||e.$readOnly?"not-allowed":"pointer"};
  /* Trigger is a div — :disabled never fires, so the disabled bg stays explicit */
  background-color: ${e=>e.$disabled?e.theme.palette.default.grey:e.theme.palette.default.white};
  ${e=>e.$isopen&&!e.$disabled&&!e.$readOnly&&h.m`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: ${e=>e.theme.palette.default.primary};
    `}
`,F=h.U.span.withConfig({displayName:"InputMultiSelect.styles__TriggerText",componentId:"sc-75126dac-9"})`
  flex: 1;
  font-size: 0.9rem;
  color: ${e=>e.theme.palette.default.black};
  margin-right: 1.5rem;
`,S=h.U.span.withConfig({displayName:"InputMultiSelect.styles__TriggerPlaceholder",componentId:"sc-75126dac-10"})`
  flex: 1;
  font-size: 0.9rem;
  color: ${e=>e.theme.palette.default.black};
  opacity: 0.5;
`,N=(0,h.U)(y.f).withConfig({displayName:"InputMultiSelect.styles__StyledIconArrowLeft",componentId:"sc-75126dac-11"})`
  position: absolute;
  right: 0.625rem;
  top: 0.7rem;
  transform: rotate(90deg) ${e=>e.$isopen?"rotateY(0deg)":"rotateY(180deg)"};
  transform-origin: 50% 50%;
  transition: 200ms ease-in-out;
`,D=h.U.div.withConfig({displayName:"InputMultiSelect.styles__DropdownPanel",componentId:"sc-75126dac-12"})`
  ${r.f}
  display: ${e=>e.$isopen?"block":"none"};
  padding: 0.5rem;
  ${(0,g.m)()}
`,U=h.U.div.withConfig({displayName:"InputMultiSelect.styles__InlineContainer",componentId:"sc-75126dac-13"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;function M({value:e,onChange:l,onChangeArray:i,options:r,separator:n=";",inline:d=!1,label:s,placeholder:u,forId:c,required:p,disabled:m,readOnly:h,error:g,errorText:y,dataTestId:b,noMargin:x,clearable:V=!1,clearAllLabel:A,renderTriggerSummary:T}){let{tr:R}=(0,o.w)(),L=u??R("form.inputMultiSelect.placeholder",{defaultValue:"Bitte auswählen"}),B=A??R("form.inputMultiSelect.clearAll",{defaultValue:"Alle löschen"}),z=b||"InputMultiSelect",K=!!g,[P,O]=(0,a.useState)(!1),W=(0,a.useRef)(null),H=(0,a.useMemo)(()=>Array.isArray(e)?e.filter(Boolean):"string"==typeof e&&e.length>0?e.split(n).map(e=>e.trim()).filter(Boolean):[],[e,n]),q=(0,a.useMemo)(()=>r.filter(e=>H.includes(e.value)),[r,H]);(0,a.useEffect)(()=>{if(d)return;let e=e=>{W.current&&!W.current.contains(e.target)&&O(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]);let G=(0,a.useCallback)(e=>{l(e.join(n)),i?.(e)},[l,i,n]),Z=(0,a.useCallback)(e=>{m||h||G(H.includes(e)?H.filter(t=>t!==e):[...H,e])},[H,m,h,G]),Y=(0,a.useCallback)(()=>{m||h||G([])},[m,h,G]),Q=()=>(0,t.jsx)(j,{"data-testid":`${z}-options`,children:r.map(e=>{let a=H.includes(e.value);return(0,t.jsxs)(I,{$isSelected:a,children:[(0,t.jsx)("input",{type:"checkbox",checked:a,disabled:m||h,onChange:()=>Z(e.value),"data-testid":`${z}-option-${e.value}`}),e.label]},e.value)})});return(0,t.jsxs)(w,{$noMargin:!!x,"data-testid":`${z}-root`,children:[s&&(0,t.jsx)($,{error:K,disabled:!!m,required:p,htmlFor:c,children:s}),d?(0,t.jsxs)(U,{children:[q.length>0&&(0,t.jsxs)(v,{"data-testid":`${z}-tags`,children:[q.map(e=>(0,t.jsxs)(k,{"data-testid":`${z}-tag-${e.value}`,children:[e.label,!m&&!h&&(0,t.jsx)(C,{type:"button","aria-label":R("form.inputMultiSelect.removeOption",{defaultValue:"{label} entfernen"}).replace("{label}",e.label),onClick:()=>Z(e.value),children:"×"})]},e.value)),V&&(0,t.jsx)("button",{type:"button",onClick:Y,"data-testid":`${z}-clear`,style:{background:"none",border:"none",cursor:"pointer",fontSize:"0.8rem",textDecoration:"underline",color:"inherit"},children:B})]}),Q()]}):(0,t.jsxs)("div",{ref:W,style:{position:"relative"},children:[(0,t.jsx)(_,{children:(0,t.jsxs)(E,{$disabled:!!m,$error:K,$isopen:P,$readOnly:!!h,onClick:()=>!m&&!h&&O(e=>!e),tabIndex:m||h?-1:0,role:"button","aria-haspopup":"listbox","aria-expanded":P,"data-testid":`${z}-trigger`,onKeyDown:e=>{m||h||("Enter"===e.key||" "===e.key?(e.preventDefault(),O(e=>!e)):"Escape"===e.key&&O(!1))},children:[0===q.length?(0,t.jsx)(S,{children:L}):T?(0,t.jsx)(F,{children:T(q)}):q.length<=2?(0,t.jsx)(F,{children:q.map(e=>e.label).join(", ")}):(0,t.jsxs)(F,{children:[q.slice(0,2).map(e=>e.label).join(", "),` +${q.length-2}`]}),(0,t.jsx)(N,{$isopen:P})]})}),(0,t.jsxs)(D,{$isopen:P,role:"listbox","data-testid":`${z}-panel`,children:[Q(),V&&q.length>0&&(0,t.jsx)("div",{style:{marginTop:"0.5rem",textAlign:"right"},children:(0,t.jsx)("button",{type:"button",onClick:Y,"data-testid":`${z}-clear`,style:{background:"none",border:"none",cursor:"pointer",fontSize:"0.8rem",textDecoration:"underline",color:"inherit"},children:B})})]})]}),K&&y&&(0,t.jsx)(f.f,{dataTestId:`${z}-error`,children:y})]})}var V=e.i(174080);e.i(17523);var A=e.i(932908),T=e.i(898560);let R=(0,h.U)(r.i).withConfig({displayName:"InputSelect.styles__SelectDropdownList",componentId:"sc-8932dfcc-0"})`
  ${({$maxHeight:e})=>void 0!==e&&h.m`
      max-height: ${e}px;
    `}
`,L=h.U.div.withConfig({displayName:"InputSelect.styles__Root",componentId:"sc-8932dfcc-1"})`
  position: relative;
  width: 100%;
`,B=h.U.button.withConfig({displayName:"InputSelect.styles__TriggerButton",componentId:"sc-8932dfcc-2"})`
  ${({$error:e})=>(0,x.B)({error:e})}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-width: 0;
  text-align: left;
  cursor: pointer;
`,z=h.U.span.withConfig({displayName:"InputSelect.styles__TriggerLabel",componentId:"sc-8932dfcc-3"})`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({$placeholder:e,theme:t})=>e?t.palette.default.greyDark:"inherit"};
  font-style: ${({$placeholder:e})=>e?"italic":"normal"};
`,K=(0,h.U)(A.f).withConfig({displayName:"InputSelect.styles__StyledChevron",componentId:"sc-8932dfcc-4"})`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: ${({theme:e})=>e.palette.default.greyDark};
  transition: transform 200ms ease-in-out;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,P=(0,h.U)(r.z).withConfig({displayName:"InputSelect.styles__OptionItem",componentId:"sc-8932dfcc-5"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({$selected:e})=>e?500:300};
`,O=h.U.span.withConfig({displayName:"InputSelect.styles__OptionLabel",componentId:"sc-8932dfcc-6"})`
  flex: 1;
  min-width: 0;
`,W=h.U.span.withConfig({displayName:"InputSelect.styles__OptionSecondary",componentId:"sc-8932dfcc-7"})`
  display: block;
  font-size: 0.8em;
  color: ${({theme:e})=>e.palette.text.secondary};
  overflow-wrap: anywhere;
`,H=(0,h.U)(T.f).withConfig({displayName:"InputSelect.styles__StyledCheck",componentId:"sc-8932dfcc-8"})`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`,q=h.U.li.withConfig({displayName:"InputSelect.styles__NoOptionsRow",componentId:"sc-8932dfcc-9"})`
  ${r.o}
  cursor: default;
`,G=a.default.forwardRef(function({value:e,onChange:l,options:i,placeholder:r,allowEmpty:n=!0,disabled:d,error:s,dataTestId:u,onKeyDown:c,id:p,ariaInvalid:m,ariaDescribedBy:f,listMaxHeight:h},g){let{tr:y}=(0,o.w)(),b=r??y("form.inputSelect.placeholder",{defaultValue:"-- Bitte wählen --"}),[x,w]=(0,a.useState)(!1),[$,v]=(0,a.useState)(0),[k,C]=(0,a.useState)(null),j=(0,a.useRef)(null),I=(0,a.useRef)(null),_=(0,a.useRef)(null),E=(0,a.useRef)(""),F=(0,a.useRef)(null),S=(0,a.useMemo)(()=>{let e=i.some(e=>""===e.value);return n&&!e?[{value:"",label:b},...i]:i},[n,b,i]),N=(0,a.useCallback)(e=>{_.current=e,"function"==typeof g?g(e):g&&(g.current=e)},[g]),D=e??"",U=i.find(t=>t.value===e),M=void 0!==e&&""!==e,A=M?U?U.label:String(e):b,T=()=>{if(d)return;let e=S.findIndex(e=>e.value===D);v(e>=0?e:0),w(!0)},G=e=>{l(e.value),w(!1),_.current?.focus()},Z=e=>{E.current+=e.toLowerCase(),F.current&&clearTimeout(F.current),F.current=setTimeout(()=>{E.current=""},500);let t=S.findIndex(e=>e.label.toLowerCase().startsWith(E.current));t>=0&&(w(!0),v(t))},Y=e=>1===e.key.length&&!e.ctrlKey&&!e.metaKey&&!e.altKey,Q=(0,a.useCallback)(()=>{let e=_.current?.getBoundingClientRect();if(!e)return;let t=h??300,a=window.innerHeight-e.bottom,l=a<t&&e.top>a;C({left:e.left,width:e.width,...l?{bottom:window.innerHeight-e.top}:{top:e.bottom}})},[h]);(0,a.useLayoutEffect)(()=>x?(Q(),window.addEventListener("scroll",Q,!0),window.addEventListener("resize",Q),()=>{window.removeEventListener("scroll",Q,!0),window.removeEventListener("resize",Q)}):void C(null),[x,Q]),(0,a.useEffect)(()=>{if(!x)return;let e=e=>{let t=e.target,a=j.current?.contains(t),l=I.current?.contains(t);a||l||w(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[x]),(0,a.useEffect)(()=>{if(!x)return;let e=I.current?.children[$];e?.scrollIntoView?.({block:"nearest"})},[$,x]),(0,a.useEffect)(()=>()=>{F.current&&clearTimeout(F.current)},[]);let J=e=>p?`${p}-option-${e}`:void 0;return(0,t.jsxs)(L,{ref:j,children:[(0,t.jsxs)(B,{ref:N,type:"button",id:p,disabled:d,$error:s,onClick:()=>{d||(x?w(!1):T())},onKeyDown:e=>{if(!x){if("ArrowDown"===e.key||"ArrowUp"===e.key||" "===e.key){e.preventDefault(),T();return}if(Y(e)){e.preventDefault(),Z(e.key);return}c?.(e);return}switch(e.key){case"ArrowDown":e.preventDefault(),v(e=>Math.min(e+1,S.length-1));break;case"ArrowUp":e.preventDefault(),v(e=>Math.max(e-1,0));break;case"Home":e.preventDefault(),v(0);break;case"End":e.preventDefault(),v(Math.max(S.length-1,0));break;case"Enter":e.preventDefault(),e.stopPropagation(),S[$]?G(S[$]):w(!1);break;case"Escape":e.preventDefault(),e.stopPropagation(),w(!1);break;case"Tab":w(!1);break;default:Y(e)&&(e.preventDefault(),Z(e.key))}},role:"combobox","aria-haspopup":"listbox","aria-expanded":x,"aria-controls":p?`${p}-listbox`:void 0,"aria-activedescendant":x?J($):void 0,"aria-invalid":m||void 0,"aria-describedby":f,"data-testid":u,children:[(0,t.jsx)(z,{$placeholder:!M,suppressHydrationWarning:!0,children:A}),(0,t.jsx)(K,{$open:x})]}),x&&k&&(0,V.createPortal)((0,t.jsx)(R,{ref:I,$maxHeight:h,role:"listbox",id:p?`${p}-listbox`:void 0,"data-testid":u?`${u}-dropdown`:void 0,style:{position:"fixed",top:k.top??"auto",bottom:k.bottom??"auto",left:k.left,right:"auto",width:k.width,margin:void 0!==k.top?"0.25rem 0 0 0":"0 0 0.25rem 0"},children:0===S.length?(0,t.jsx)(q,{"data-testid":u?`${u}-no-options`:void 0,children:y("form.inputSelect.noOptions",{defaultValue:"Keine Optionen"})}):S.map((e,a)=>{let l=e.value===D;return(0,t.jsxs)(P,{id:J(a),role:"option","aria-selected":l,$active:a===$,$selected:l,onClick:()=>G(e),onMouseEnter:()=>v(a),"data-testid":u?""===e.value?`${u}-option-empty`:`${u}-option-${e.value}`:void 0,children:[l&&(0,t.jsx)(H,{color:"currentColor"}),(0,t.jsxs)(O,{children:[e.label,e.secondaryLabel&&(0,t.jsx)(W,{"data-testid":u?`${u}-option-${e.value}-secondary`:void 0,children:e.secondaryLabel})]})]},""===e.value?"__empty__":e.value)})}),document.body)]})}),Z=h.U.div.withConfig({displayName:"InputOtp.styles__Root",componentId:"sc-f69a5d61-0"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Y=h.U.input.withConfig({displayName:"InputOtp.styles__DigitBox",componentId:"sc-f69a5d61-1"})`
  ${({$error:e})=>(0,x.B)({error:e})}
  /* Square-ish per-digit box: override inputBase's full-width metrics */
  width: 2.5rem;
  flex: 0 0 auto;
  padding: 0.375rem 0.25rem;
  text-align: center;
  font-size: 1.25rem;
`,Q=/\D+/g,J=({value:e,onChange:l,length:i=6,disabled:r,error:n,dataTestId:d,onKeyDown:s,ariaLabel:u,id:c})=>{let{tr:p}=(0,o.w)(),m=u??p("form.inputOtp.ariaLabel",{defaultValue:"Einmalcode"}),f=(0,a.useRef)([]),h=(0,a.useMemo)(()=>{let t=(e??"").replace(Q,"").slice(0,i);return Array.from({length:i},(e,a)=>t[a]??"")},[e,i]),g=h.join(""),y=e=>{l(e.join(""))},b=e=>{let t=Math.max(0,Math.min(e,i-1)),a=f.current[t];a?.focus(),a?.select?.()},x=(e,t)=>{let a=[...h];a[e]=t,y(a)},w=(e,t)=>{let a=[...h],l=e;for(let e of t){if(l>=i)break;a[l]=e,l+=1}y(a),b(l)},$=e=>{if(r)return;e.preventDefault();let t=e.clipboardData.getData("text").replace(Q,"");t&&w(0,t)};return(0,t.jsxs)(Z,{role:"group","aria-label":m,children:[h.map((e,a)=>(0,t.jsx)(Y,{ref:e=>{f.current[a]=e},type:"text",maxLength:1,inputMode:"numeric",pattern:"[0-9]*",autoComplete:0===a?"one-time-code":"off",id:c?0===a?c:`${c}-${a}`:void 0,value:e,disabled:r,$error:n,onChange:e=>{if(r)return;let t=e.target.value;if(""===t)return void x(a,"");let l=t.replace(Q,"");if(""===l)return;if(1===l.length){x(a,l),b(a+1);return}let i=h[a];w(a,i&&l.startsWith(i)&&l.length>1?l.slice(i.length):l)},onKeyDown:e=>{if(!r)switch(e.key){case"Backspace":e.preventDefault(),h[a]?x(a,""):a>0&&(x(a-1,""),b(a-1));return;case"ArrowLeft":e.preventDefault(),b(a-1);return;case"ArrowRight":e.preventDefault(),b(a+1);return;default:/^[0-9]$/.test(e.key)||s?.(e)}},onPaste:$,onFocus:e=>e.target.select(),"aria-label":p("form.inputOtp.digitOfTotal",{defaultValue:"Ziffer {index} von {total}"}).replace("{index}",String(a+1)).replace("{total}",String(i)),"data-testid":d?`${d}-${a}`:void 0},a)),(0,t.jsx)("input",{type:"hidden",value:g,"data-testid":d})]})};var X=e.i(616789);let ee=h.U.div.withConfig({displayName:"InputTags.styles__Root",componentId:"sc-ca252c6e-0"})`
  ${({$error:e})=>(0,x.B)({error:e})}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  background-color: ${({$disabled:e,theme:t})=>e?t.palette.default.greyLight:t.palette.default.white};

  &:focus-within {
    ${({$error:e})=>(0,x.a)(e)}
  }
`,et=h.U.span.withConfig({displayName:"InputTags.styles__Tag",componentId:"sc-ca252c6e-1"})`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  background-color: #e3f2fd;
  border: 1px solid ${({theme:e})=>e.palette.default.primary};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  font-size: 0.8rem;
  color: ${({theme:e})=>e.palette.default.primary};
  max-width: 100%;
`,ea=h.U.span.withConfig({displayName:"InputTags.styles__TagLabel",componentId:"sc-ca252c6e-2"})`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,el=h.U.button.withConfig({displayName:"InputTags.styles__RemoveTagButton",componentId:"sc-ca252c6e-3"})`
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
`,ei=(0,h.U)(X.f).withConfig({displayName:"InputTags.styles__StyledIconClose",componentId:"sc-ca252c6e-4"})`
  display: block;
  width: 0.7rem;
  height: 0.7rem;

  line {
    stroke: currentColor;
  }
`,er=h.U.input.withConfig({displayName:"InputTags.styles__TagInput",componentId:"sc-ca252c6e-5"})`
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
    color: ${({theme:e})=>e.palette.default.greyDark};
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,en=a.default.forwardRef(function({value:e,onChange:l,separator:i=";",placeholder:r,disabled:n,error:d,dataTestId:s,onKeyDown:u,id:c,removeTagLabel:p},m){let{tr:f}=(0,o.w)(),h=r??f("form.inputTags.placeholder",{defaultValue:"Tag hinzufügen..."}),g=p??(e=>f("form.inputTags.removeTag",{defaultValue:"Tag {tag} entfernen"}).replace("{tag}",e)),[y,b]=(0,a.useState)(""),x=(0,a.useRef)(null),w=(0,a.useMemo)(()=>(function(e,t){let a=Array.isArray(e)?e:"string"==typeof e?[e]:[],l=[];for(let e of a)for(let a of String(e).split(t)){let e=a.trim();e&&!l.includes(e)&&l.push(e)}return l})(e,i),[e,i]),$=(0,a.useCallback)(e=>{x.current=e,"function"==typeof m?m(e):m&&(m.current=e)},[m]),v=e=>{l(e.join(i))},k=e=>{let t=[...w];for(let a of e)for(let e of a.split(i)){let a=e.trim();a&&!t.includes(a)&&t.push(a)}t.length!==w.length&&v(t)};return(0,t.jsxs)(ee,{$error:d,$disabled:n,onClick:()=>!n&&x.current?.focus(),"data-testid":s,children:[w.map(e=>(0,t.jsxs)(et,{"data-testid":s?`${s}-tag-${e}`:void 0,children:[(0,t.jsx)(ea,{children:e}),!n&&(0,t.jsx)(el,{type:"button","aria-label":g(e),onClick:t=>{t.stopPropagation(),n||v(w.filter(t=>t!==e))},"data-testid":s?`${s}-tag-${e}-remove`:void 0,children:(0,t.jsx)(ei,{color:"currentColor"})})]},e)),(0,t.jsx)(er,{ref:$,type:"text",id:c,value:y,placeholder:h,disabled:n,onChange:e=>{let t=e.target.value,a=","===i?t:t.split(",").join(i);if(a.includes(i)){let e=a.split(i),t=e.pop()??"";k(e),b(t)}else b(t)},onKeyDown:e=>{let t=y.trim().length>0;if("Enter"===e.key)return void(t?(e.preventDefault(),e.stopPropagation(),k([y]),b("")):u?.(e));if("Escape"===e.key)return void(t||y.length>0?(e.preventDefault(),e.stopPropagation(),b("")):u?.(e));if("Backspace"===e.key&&0===y.length&&w.length>0){e.preventDefault(),v(w.slice(0,-1));return}u?.(e)},onBlur:()=>{y.trim().length>0&&k([y]),b("")},autoComplete:"off","data-testid":s?`${s}-input`:void 0})]})});var eo=e.i(523853);e.i(805885);var ed=e.i(535004),es=e.i(3338),eu=e.i(118410),ec=e.i(196634);let ep=["car","train","bus","walk","plane"],em={queryMin:2,queryMax:200,resultsMax:8,routePointsMax:5};e.s(["M",0,em,"$",0,function(e){return"string"==typeof e&&ep.includes(e)}],69318);let ef=e=>String(e).padStart(2,"0");function eh(e){if(/^(34|37)/.test(e))return"amex";if(e.startsWith("4"))return"visa";if(e.length>=2){let t=parseInt(e.slice(0,2),10);if(t>=51&&t<=55)return"mastercard"}if(e.length>=4){let t=parseInt(e.slice(0,4),10);if(t>=2221&&t<=2720)return"mastercard"}return"unknown"}function eg(e){return e.toUpperCase().replace(/[^A-Z0-9]/g,"")}let ey=e=>e>="0"&&e<="9"||e>="A"&&e<="Z"||e>="a"&&e<="z";function eb(e){return e.replace(/(.{4})(?=.)/g,"$1 ")}let ex={DE:22,AT:20,BE:16,CH:21,ES:24,FR:27,GB:22,IT:27,LU:20,NL:18,PL:28,DK:18};function ew(e){let t=e.trim();if(!/^-?\d*[.,]?\d*$/.test(t))return;if(!/\d/.test(t))return null;let a=Number(t.replace(",","."));return Number.isFinite(a)?a:void 0}function e$(e,t="de-DE"){let a="string"==typeof e?ew(e):e;return"number"==typeof a&&Number.isFinite(a)?a.toLocaleString(t,{useGrouping:!1,maximumFractionDigits:20}):""}function ev(e){let t=e.trim().replace(/^#/,"");return/^[0-9a-fA-F]{3}$/.test(t)?`#${t.split("").map(e=>e+e).join("").toUpperCase()}`:/^[0-9a-fA-F]{6}$/.test(t)?`#${t.toUpperCase()}`:null}var ek=e.i(555508),eC=e.i(207848),ej=e.i(225120);let eI=(0,l.default)(()=>e.A(385437).then(e=>e.MarkdownRenderer),{loadableGenerated:{modules:[830042]}}),e_=(0,l.default)(()=>e.A(779448).then(e=>e.InputFile),{loadableGenerated:{modules:[64010]},loading:()=>(0,t.jsx)(i.g,{"aria-hidden":"true","data-testid":"editable-field-file-loading"})}),eE=new Set(["number","currency","percent"]),eF=new Set(["text","number","email","url","phone","password","date","datetime","time","textarea","currency","percent","places","file","boolean","picklist","lookup","creditcard","iban","color","otp","tags","slider"]),eS=new Set(["text","number","date","datetime","time","boolean","picklist","email","url","phone","currency","percent","lookup","color","slider","rating","duration","tags"]);e.s(["f",0,({fieldName:l,label:f,hideLabel:h=!1,value:g,fieldType:y="text",isEditing:b=!1,isEditable:x=!1,isDirty:w=!1,onChange:$,onConfirm:v,onCancel:k,onStartEdit:C,readOnly:j=!1,disabled:I=!1,options:_=[],listMaxHeight:E,lookupObjectType:F,lookupFilter:S,initialLookupDisplay:N,lookupStaticOptions:D,onLabelClick:U,placeholder:V,helperText:A,hasError:R=!1,hideEditActions:L=!1,onEnterKey:B,autoComplete:z,maxLength:K,ariaInvalid:P,ariaDescribedBy:O,dataAutofocus:W,dataTestId:H,currencySymbol:q="€",currencyCode:Z="EUR",compact:Y=!1,multipicklistSeparator:Q=";",accept:ee,maxFiles:et,multiple:ea=!1,maxSize:el,otpLength:ei,sliderMin:er,sliderMax:ep,sliderStep:eN,sliderUnit:eD,ratingMax:eU,tagsSeparator:eM})=>{let{tr:eV,i18n:eA}=(0,o.w)(),{revision:eT}=(0,d.V)(),eR=(0,ek.f)(),{label:eL}=(0,s.f)(),[eB,ez]=(0,a.useState)(g),[eK,eP]=(0,a.useState)([]),[eO,eW]=(0,a.useState)(!1),[eH,eq]=(0,a.useState)(N??""),[eG,eZ]=(0,a.useState)(!1),[eY,eQ]=(0,a.useState)(0),[eJ,eX]=(0,a.useState)(!1),[e0,e1]=(0,a.useState)(!1),[e5,e6]=(0,a.useState)("team"),{userContext:e2}=(0,ej.U)(),e7=e2?.role==="admin",[e3,e9]=(0,a.useState)(""),[e4,e8]=(0,a.useState)([]),[te,tt]=(0,a.useState)(!1),[ta,tl]=(0,a.useState)(""),ti=(0,a.useRef)(null),tr=(0,a.useRef)([]),tn=(0,a.useRef)(null),to=(0,a.useRef)(null),td=(0,a.useRef)(""),ts=H||`editable-field-${l}`,tu=`${ts}-input-el`,tc={"aria-invalid":P||void 0,"aria-describedby":O,"data-autofocus":W?"":void 0},tp=b&&eF.has(y)?tu:void 0,tm=x&&!j&&!I,tf=I?"disabled":j?"readonly":"editable",th="editable"!==tf,tg="readonly"===tf,ty={disabled:I||void 0,readOnly:tg||void 0,"aria-disabled":I||void 0,"aria-readonly":tg||void 0,"data-disabled":I?"true":void 0,"data-readonly":tg?"true":void 0},tb={disabled:th||void 0,"aria-disabled":th||void 0,"aria-readonly":tg||void 0,"data-disabled":th?"true":void 0,"data-readonly":tg?"true":void 0},tx="multipicklist"===y?Array.isArray(g)?g.join(";"):"string"==typeof g&&""!==g?g:void 0:eS.has(y)&&null!=g?String(g):void 0,tw=(0,a.useRef)(g);(0,a.useEffect)(()=>{tw.current!==g&&(ez(g),tw.current=g)},[g]);let[t$,tv]=(0,a.useState)({h:"",m:""});(0,a.useEffect)(()=>{if("duration"!==y)return;let e="number"==typeof g&&Number.isFinite(g)?Math.max(0,Math.round(g)):null;tv(null===e?{h:"",m:""}:{h:String(Math.floor(e/60)),m:String(e%60)})},[y,g,b]);let[tk,tC]=(0,a.useState)(""),[tj,tI]=(0,a.useState)(!1);(0,a.useEffect)(()=>{"color"===y&&(tC("string"==typeof g?g:""),tI(!1))},[y,g,b]);let t_=eE.has(y),[tE,tF]=(0,a.useState)(()=>t_?e$(eB,eR.locale):"");(0,a.useEffect)(()=>{if(!t_)return;let e="string"==typeof eB?ew(eB)??null:eB;tF(t=>ew(t)===("number"==typeof e?e:null)?t:e$(e,eR.locale))},[t_,eB,eR.locale]);let tS=(0,a.useRef)(null);(0,a.useLayoutEffect)(()=>{if(!b||"creditcard"!==y&&"iban"!==y)return;let e=tS.current;tS.current=null;let t=ti.current;if(null===e||!(t instanceof HTMLInputElement))return;let a="creditcard"===y?function(e,t){if(t<=0)return 0;let a=0;for(let l=0;l<e.length;l++){let i=e[l];if(i>="0"&&i<="9"&&++a===t)return l+1}return e.length}(t.value,e):function(e,t){if(t<=0)return 0;let a=0;for(let l=0;l<e.length;l++)if(ey(e[l])&&++a===t)return l+1;return e.length}(t.value,e);t.setSelectionRange(a,a)},[eB,y,b]);let tN=(0,a.useRef)(b);(0,a.useEffect)(()=>{let e=tN.current;tN.current=b,e||!b||"otp"!==y&&"tags"!==y&&"rating"!==y&&ti.current&&(ti.current.focus(),ti.current instanceof HTMLInputElement&&"boolean"!==y&&"slider"!==y&&ti.current.select())},[b,y]);let tD=(0,a.useRef)(g);(0,a.useEffect)(()=>{tD.current=g},[N]),(0,a.useEffect)(()=>{"lookup"===y&&N&&g&&g===tD.current&&(eq(N),td.current=N)},[y,N,g]);let tU=(0,a.useRef)(g);(0,a.useEffect)(()=>{let e=tU.current;tU.current=g,"lookup"!==y||(""===g||null==g)&&"string"==typeof e&&""!==e&&(eq(""),td.current="")},[y,g]),(0,a.useEffect)(()=>{if("lookup"===y&&F&&g&&"string"==typeof g&&!N){let t=D?.find(e=>e.value===g);if(t){eq(t.label),td.current=t.label;return}(async()=>{eZ(!0);try{let{api:t}=await e.A(225496),a=(await t.get(`/salesforce/lookup?objectType=${F}&q=${g}&limit=1`)).data;if(a.records&&a.records.length>0){let e=a.records[0].label??"";eq(e),td.current=e}}catch(e){console.error("Error fetching lookup display value:",e)}finally{eZ(!1)}})()}},[y,F,g,N,D]);let tM=(0,c.f)(async t=>{if(!F)return;tn.current&&tn.current.abort();let a=(D??[]).filter(e=>e.label.toLowerCase().includes(t.toLowerCase()));if(t.length<2&&!S){eP(a),eW(!1);return}eW(!0),tn.current=new AbortController;try{let{api:l}=await e.A(225496),i=((await l.get(`/salesforce/lookup?objectType=${F}&q=${encodeURIComponent(t)}&limit=10${(0,n.n)(S)}`,{signal:tn.current.signal})).data.records||[]).map(e=>({...e,label:e.label??""}));eP([...a,...i])}catch(e){e?.__CANCEL__!==!0&&console.error("Error searching lookup:",e)}finally{eW(!1)}},300),tV=(0,a.useMemo)(()=>[{value:"team",label:eV("editableField.audience.typeTeam",{defaultValue:"Team (Staff und Admin)"})},...e7?[{value:"all",label:eV("editableField.audience.typeAllAdminOnly",{defaultValue:"Alle Benutzer (auch Kunden, nur Admin)"})}]:[],{value:"role",label:eV("editableField.audience.typeRole",{defaultValue:"Nach Rolle"})},{value:"user",label:eV("editableField.audience.typeUser",{defaultValue:"Einzelner Benutzer"})}],[eV,eT,e7]),tA=(0,a.useMemo)(()=>(0,eC.r)(eV),[eV,eT]);(0,a.useEffect)(()=>{if("audience"!==y)return;let t=String(g||"team");if("all"===t)e6("all");else if(t.startsWith("role:"))e6("role"),e9(t.replace("role:",""));else if(t.startsWith("user:")){e6("user");let a=t.replace("user:","");a&&(async()=>{try{let{api:t}=await e.A(225496),l=(await t.get(`/users/search?q=${encodeURIComponent(a)}&limit=1`)).data.data.find(e=>e.id===a);l&&tl(l.name||l.email)}catch{}})()}else e6("team")},[y,g]);let tT=(0,c.f)(async t=>{if(t.length<2)return void e8([]);tt(!0);try{let{api:a}=await e.A(225496),l=await a.get(`/users/search?q=${encodeURIComponent(t)}&limit=10`);e8(l.data.data.map(e=>({value:e.id,label:e.name||e.email,secondaryLabel:e.email})))}catch(e){console.error("Error searching users:",e)}finally{tt(!1)}},300),tR=(0,a.useCallback)(()=>{tm&&!b&&C&&C(l)},[tm,b,C,l]),tL=(0,a.useCallback)(e=>{th||(ez(e),$?.(l,e))},[l,$,th]),tB=(0,a.useCallback)(e=>{if(th)return;let t=ew(e);void 0!==t&&(tF(e),tL(t))},[tL,th]),tz=(0,a.useCallback)((e,t)=>{if(""===e.trim()&&""===t.trim())return void tL(null);let a=parseInt(e,10),l=parseInt(t,10);tL(60*(Number.isFinite(a)?Math.max(0,a):0)+(Number.isFinite(l)?Math.max(0,l):0))},[tL]),tK=(0,a.useCallback)(e=>{if(!th)if(e6(e),tl(""),e8([]),"team"===e||"all"===e)tL(e);else if("role"===e){let e=e3||"admin";e9(e),tL(`role:${e}`)}else tL("user:")},[tL,e3,th]),tP=(0,a.useCallback)(async()=>{if(!eJ){to.current&&clearTimeout(to.current),eX(!0),e1(!1);try{await v?.(l,eB),e1(!0),to.current=setTimeout(()=>{e1(!1)},1500)}finally{eX(!1)}}},[l,eB,v,eJ]),tO=(0,a.useCallback)(()=>{eJ||(ez(g),tw.current=g,e1(!1),"lookup"===y&&(eq(td.current),eQ(e=>e+1)),k?.(l))},[l,g,k,eJ,y]);(0,a.useEffect)(()=>()=>{to.current&&clearTimeout(to.current)},[]);let tW=(0,a.useCallback)(e=>{"Escape"===e.key?(e.preventDefault(),tO()):"Enter"===e.key&&"textarea"!==y&&(e.preventDefault(),B?B():tP())},[tO,tP,y,B]),tH=function({enabled:e,lang:t}){let[l,i]=(0,a.useState)([]),[r,n]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1),s=(0,a.useRef)(null),u=(0,a.useRef)(null),c=(0,a.useRef)(0),p=(0,a.useCallback)(()=>{s.current&&clearTimeout(s.current),s.current=null,u.current?.abort(),u.current=null},[]),m=(0,a.useCallback)(()=>{p(),c.current++,i([]),n(!1)},[p]);return(0,a.useEffect)(()=>{e||m()},[e,m]),(0,a.useEffect)(()=>p,[p]),{results:l,loading:r,unavailable:o,search:(0,a.useCallback)(a=>{if(!e)return;let l=a.trim();if(l.length<em.queryMin)return void m();p();let r=++c.current;n(!0),s.current=setTimeout(()=>{let e=new AbortController;u.current=e,(0,ec.w)(l.slice(0,em.queryMax),{lang:t,signal:e.signal}).then(e=>{r===c.current&&(i(e),d(!1))}).catch(()=>{r===c.current&&(i([]),d(!0))}).finally(()=>{r===c.current&&n(!1)})},250)},[e,t,p,m]),clear:m}}({enabled:"places"===y&&b&&!th,lang:eA?.language}),[tq,tG]=(0,a.useState)(!1),[tZ,tY]=(0,a.useState)(-1),tQ=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{tQ.current&&clearTimeout(tQ.current)},[]);let tJ=tq&&tH.results.length>0,tX=(0,a.useCallback)(e=>{let t=tH.results[e];t&&(tL({address:t.label,lat:t.lat,lng:t.lng}),tG(!1),tY(-1),tH.clear())},[tH,tL]),t0=(0,a.useCallback)(e=>{if(!tJ)return void tW(e);let t=tH.results.length;"ArrowDown"===e.key?(e.preventDefault(),tY(e=>Math.min(e+1,t-1))):"ArrowUp"===e.key?(e.preventDefault(),tY(e=>Math.max(e-1,0))):"Enter"===e.key?(e.preventDefault(),e.stopPropagation(),tZ>=0?tX(tZ):tG(!1)):"Escape"===e.key?(e.preventDefault(),e.stopPropagation(),tG(!1)):tW(e)},[tJ,tH.results.length,tZ,tX,tW]),t1=(0,a.useCallback)(e=>{eq(e),tM(e)},[tM]),t5=(0,a.useCallback)(e=>{tL(e.value),eq(eK.find(t=>t.value===e.value)?.label??"")},[tL,eK]),t6=eL(null).text,t2=(0,a.useMemo)(()=>eK.map(e=>({value:e.value,label:(0,u.f)(e.label)??t6,secondaryLabel:e.details??e.secondaryLabel??void 0})),[eK,t6]),t7=eG?{text:eV("editableField.lookup.resolving",{defaultValue:"…"}),unnamed:!1}:eL(eH),t3=eL(ta),t9=null!=g&&""!==g&&("lookup"===y&&t7.unnamed||"audience"===y&&"string"==typeof g&&g.startsWith("user:")&&t3.unnamed),t4=(0,a.useCallback)(()=>{if(null==g||""===g)return eV("editableField.display.empty",{defaultValue:"(leer)"});switch(y){case"boolean":return g?eV("editableField.boolean.yes",{defaultValue:"Ja"}):eV("editableField.boolean.no",{defaultValue:"Nein"});case"password":return"••••••••";case"file":if(Array.isArray(g)){if(0===g.length)return eV("editableField.file.none",{defaultValue:"(keine Datei)"});if(1===g.length)return g[0].name;return eV("editableField.file.count",{defaultValue:"{{n}} Dateien",n:g.length})}if(g instanceof File)return g.name;if("string"==typeof g&&g)return g;return eV("editableField.file.none",{defaultValue:"(keine Datei)"});case"places":if(g&&"object"==typeof g)return g.address||eV("editableField.display.empty",{defaultValue:"(leer)"});if("string"==typeof g&&g)return g;return eV("editableField.display.empty",{defaultValue:"(leer)"});case"date":if("string"==typeof g)return eR.date(g);return String(g);case"datetime":if("string"==typeof g)return eR.dateTime(g);return String(g);case"time":return"string"==typeof g?g:String(g);case"picklist":{let e=_.find(e=>e.value===g);return e?.label||String(g)}case"multipicklist":{let e=(Array.isArray(g)?g:"string"==typeof g?g.split(";").filter(Boolean):[]).map(e=>{let t=_.find(t=>t.value===e);return t?.label||e});return e.length>0?e.join(", "):eV("editableField.display.empty",{defaultValue:"(leer)"})}case"lookup":return t7.text;case"number":if("number"==typeof g)return eR.number(g,{maximumFractionDigits:3});return String(g);case"currency":if("number"==typeof g)return eR.number(g,{style:"currency",currency:Z});return String(g);case"percent":if("number"==typeof g)return eR.percent(g);return String(g);case"address":{let e=[g.street,g.postalCode,g.city,g.state,g.country].filter(Boolean);return e.length>0?e.join(", "):eV("editableField.display.empty",{defaultValue:"(leer)"})}case"location":if(void 0!==g.latitude&&void 0!==g.longitude)return`${g.latitude.toFixed(6)}, ${g.longitude.toFixed(6)}`;return eV("editableField.display.empty",{defaultValue:"(leer)"});case"creditcard":let e=String(g).replace(/\D/g,"");if(0===e.length)return"";let t=e.slice(-4);return"amex"===eh(e)?`•••• •••••• •${t}`:`•••• •••• •••• ${t}`;case"iban":return eb(eg(String(g)));case"duration":{let e,t,a,l="number"==typeof g?g:Number(g);return Number.isFinite(l)?(t=Math.floor((e=Number.isFinite(l)?Math.max(0,Math.round(l)):0)/60),a=e%60,0===t?`${a} min`:0===a?`${t} h`:`${t} h ${a} min`):String(g)}case"color":default:return String(g);case"otp":return"•".repeat(ei??6);case"tags":{let e=(Array.isArray(g)?g.map(String):String(g).split(eM??";")).map(e=>e.trim()).filter(Boolean);return e.length>0?e.join(", "):eV("editableField.display.empty",{defaultValue:"(leer)"})}case"slider":{let e="number"==typeof g?g:Number(g);if(!Number.isFinite(e))return String(g);return eD?`${eR.number(e,{maximumFractionDigits:3})} ${eD}`:eR.number(e,{maximumFractionDigits:3})}case"rating":{let e="number"==typeof g?g:Number(g);return Number.isFinite(e)?`${e} / ${eU??5}`:String(g)}case"audience":{let e=String(g);if("team"===e)return eV("editableField.audience.typeTeam",{defaultValue:"Team (Staff und Admin)"});if("all"===e)return eV("editableField.audience.typeAllAdminOnly",{defaultValue:"Alle Benutzer (auch Kunden, nur Admin)"});if(e.startsWith("role:")){let t=e.replace("role:","");return eV("editableField.audience.displayRole",{defaultValue:"Rolle: {{role}}",role:tA.find(e=>e.value===t)?.label||t})}if(e.startsWith("user:"))return eV("editableField.audience.displayUser",{defaultValue:"Benutzer: {{user}}",user:t3.text});return String(g)}}},[g,y,_,t7,Z,tA,t3,ei,eM,eD,eU,eV,eR]);return(0,t.jsxs)(i.F,{$compact:Y,"data-testid":ts,"data-state":b?tf:void 0,children:[!h&&(U?(0,t.jsxs)(i.e,{type:"button",onClick:U,"data-testid":`${ts}-label-link`,children:[f||l,":"]}):(0,t.jsxs)(i.u,{htmlFor:tp,children:[f||l,":"]})),b?(0,t.jsxs)(i.v,{onKeyDown:e=>{"Escape"!==e.key||e.defaultPrevented||(e.preventDefault(),tO())},children:[(0,t.jsxs)(i.C,{children:[(()=>{switch(y){case"boolean":return(0,t.jsxs)(i.y,{children:[(0,t.jsxs)(i.H,{children:[(0,t.jsx)(i.l,{ref:ti,id:tu,type:"checkbox",checked:!!eB,onChange:e=>tL(e.target.checked),onKeyDown:tW,...tb,"data-testid":`${ts}-checkbox`}),(0,t.jsx)(eo.Z,{$checked:!!eB,$disabled:th,children:(0,t.jsx)(eo.k,{$checked:!!eB,$disabled:th})})]}),(0,t.jsx)("span",{children:eB?eV("editableField.boolean.yes",{defaultValue:"Ja"}):eV("editableField.boolean.no",{defaultValue:"Nein"})})]});case"picklist":return(0,t.jsx)(i.y,{children:(0,t.jsx)(G,{ref:ti,id:tu,value:String(eB||""),onChange:tL,options:_,placeholder:V||eV("editableField.picklist.placeholder",{defaultValue:"-- Bitte wählen --"}),allowEmpty:!0,disabled:th,onKeyDown:tW,ariaInvalid:P,ariaDescribedBy:O,listMaxHeight:E,dataTestId:`${ts}-select`})});case"textarea":return(0,t.jsx)(i.v,{children:(0,t.jsx)(i.G,{ref:ti,id:tu,value:String(eB||""),onChange:e=>tL(e.target.value),onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),tO())},placeholder:V,maxLength:K,...tc,...ty,"data-testid":`${ts}-textarea`})});case"markdown":return(0,t.jsx)(i.v,{children:(0,t.jsx)(p.f,{htmlFor:`${ts}-markdown`,value:String(eB??""),onChange:e=>tL(e),placeholder:V,disabled:th,dataTestId:`${ts}-markdown`})});case"audience":return(0,t.jsx)(i.v,{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},"data-testid":`${ts}-audience`,children:[(0,t.jsx)(G,{value:e5,onChange:e=>tK(e),options:tV,allowEmpty:!1,disabled:th,dataTestId:`${ts}-audience-type`}),"role"===e5&&(0,t.jsx)(G,{value:e3,onChange:e=>{e9(e),tL(`role:${e}`)},options:tA,allowEmpty:!1,disabled:th,dataTestId:`${ts}-audience-role`}),"user"===e5&&(0,t.jsx)(m.f,{placeholder:eV("editableField.audience.userSearchPlaceholder",{defaultValue:"Benutzer suchen..."}),displayValue:ta,options:e4,loading:te,minChars:2,disabled:th,noResultsText:eV("editableField.audience.userNoResults",{defaultValue:"Kein Benutzer gefunden"}),noMargin:!0,onSearch:e=>tT(e),onSelect:e=>{tl(e.label),tL(`user:${e.value}`)},onClear:()=>{tl(""),tL("user:")},dataTestId:`${ts}-audience-user`})]})});case"lookup":return(0,t.jsx)(m.f,{dataTestId:ts,forId:tu,placeholder:V||eV("editableField.lookup.searchPlaceholder",{defaultValue:"Suchen..."}),displayValue:eH,options:t2,loading:eO,minChars:2*!S,disabled:!tm,noResultsText:eV("editableField.lookup.noResults",{defaultValue:"Keine Ergebnisse"}),noMargin:!0,autoFocus:!0,onSearch:t1,onSelect:t5,onKeyDown:tW},`${ts}-lookup-${eY}`);case"date":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"date",value:"string"==typeof eB?eB.split("T")[0]:"",onChange:e=>tL(e.target.value),onKeyDown:tW,...ty,"data-testid":`${ts}-date`})});case"datetime":let e;return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"datetime-local",value:"string"==typeof eB?isNaN((e=new Date(eB)).getTime())?eB.replace("Z","").slice(0,16):`${e.getFullYear()}-${ef(e.getMonth()+1)}-${ef(e.getDate())}T${ef(e.getHours())}:${ef(e.getMinutes())}`:"",onChange:e=>tL(e.target.value),onKeyDown:tW,...ty,"data-testid":`${ts}-datetime`})});case"time":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"time",step:60,value:"string"==typeof eB?eB.slice(0,5):"",onChange:e=>tL(e.target.value),onKeyDown:tW,placeholder:V,...ty,"data-testid":`${ts}-time`})});case"number":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"text",inputMode:"decimal",value:tE,onChange:e=>tB(e.target.value),onKeyDown:tW,placeholder:V,...ty,"data-testid":`${ts}-number`})});case"email":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"email",value:String(eB||""),onChange:e=>tL(e.target.value),onKeyDown:tW,placeholder:V,...tc,...ty,"data-testid":`${ts}-email`})});case"url":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"url",value:String(eB||""),onChange:e=>tL(e.target.value),onKeyDown:tW,placeholder:V,...tc,...ty,"data-testid":`${ts}-url`})});case"phone":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"tel",value:String(eB||""),onChange:e=>tL(e.target.value),onKeyDown:tW,placeholder:V,...tc,...ty,"data-testid":`${ts}-phone`})});case"password":return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"password",autoComplete:z??"current-password",value:String(eB||""),onChange:e=>tL(e.target.value),onKeyDown:tW,placeholder:V,...tc,...ty,"data-testid":`${ts}-password`})});case"file":return(0,t.jsx)(e_,{forId:tu,dataTestId:`${ts}-file`,value:eB,multiple:ea,accept:ee,maxFiles:et,maxSize:el,disabled:th,noMargin:!0,onChange:e=>tL(ea?e:e[0]??null)});case"places":{let e=eB||{},a=`${tu}-places-list`;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.R,{children:[(0,t.jsx)(i.E,{id:tu,type:"text",value:"string"==typeof e?e:e.address||"",onChange:e=>{tL({address:e.target.value}),tG(!0),tY(-1),tH.search(e.target.value)},onFocus:()=>tG(!0),onBlur:()=>{tQ.current=setTimeout(()=>tG(!1),150)},onKeyDown:t0,placeholder:V,autoComplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":tJ,"aria-controls":a,...ty,"data-testid":`${ts}-places`,"data-state":tH.loading?"loading":"idle"}),tJ&&(0,t.jsx)(i.P,{id:a,role:"listbox","data-testid":`${ts}-places-list`,children:tH.results.map((e,a)=>(0,t.jsx)(r.z,{role:"option",$active:a===tZ,"aria-selected":a===tZ,onMouseDown:e=>{e.preventDefault(),tX(a)},onMouseEnter:()=>tY(a),"data-testid":`${ts}-places-option-${a}`,children:(0,t.jsx)(r.u,{children:e.label})},`${e.label}-${a}`))})]}),tH.unavailable&&(0,t.jsx)(i.Q,{"data-testid":`${ts}-places-hint`,children:eV("editableField.places.unavailable",{defaultValue:"Adresssuche nicht verfügbar"})})]})}case"multipicklist":return(0,t.jsx)(M,{value:eB,onChange:tL,options:_,inline:!0,separator:Q,disabled:"disabled"===tf,readOnly:tg,dataTestId:`${ts}-multipicklist`,noMargin:!0});case"currency":return(0,t.jsxs)(i.W,{children:[(0,t.jsx)(i.w,{children:q}),(0,t.jsx)(i.V,{ref:ti,id:tu,type:"text",inputMode:"decimal",value:tE,onChange:e=>tB(e.target.value),onKeyDown:tW,placeholder:V||eR.number(0,{minimumFractionDigits:2,maximumFractionDigits:2}),...ty,"data-testid":`${ts}-currency`})]});case"percent":return(0,t.jsxs)(i.j,{children:[(0,t.jsx)(i.M,{ref:ti,id:tu,type:"text",inputMode:"decimal",value:tE,onChange:e=>tB(e.target.value),onKeyDown:tW,placeholder:V||"0",...ty,"data-testid":`${ts}-percent`}),(0,t.jsx)(i.m,{children:"%"})]});case"address":{let e=eB||{},a=(t,a)=>{tL({...e,[t]:a||void 0})};return(0,t.jsxs)(i.K,{children:[(0,t.jsx)(i.X,{children:(0,t.jsxs)(i.b,{children:[(0,t.jsx)(i.s,{htmlFor:`${ts}-address-street-el`,children:eV("editableField.address.street",{defaultValue:"Straße"})}),(0,t.jsx)(i.N,{id:`${ts}-address-street-el`,type:"text",value:e.street||"",onChange:e=>a("street",e.target.value),placeholder:eV("editableField.address.street",{defaultValue:"Straße"}),...ty,"data-testid":`${ts}-address-street`})]})}),(0,t.jsxs)(i.b,{children:[(0,t.jsx)(i.s,{htmlFor:`${ts}-address-postalCode-el`,children:eV("editableField.address.postalCode",{defaultValue:"PLZ"})}),(0,t.jsx)(i.N,{id:`${ts}-address-postalCode-el`,type:"text",value:e.postalCode||"",onChange:e=>a("postalCode",e.target.value),placeholder:eV("editableField.address.postalCode",{defaultValue:"PLZ"}),...ty,"data-testid":`${ts}-address-postalCode`})]}),(0,t.jsxs)(i.b,{children:[(0,t.jsx)(i.s,{htmlFor:`${ts}-address-city-el`,children:eV("editableField.address.city",{defaultValue:"Stadt"})}),(0,t.jsx)(i.N,{id:`${ts}-address-city-el`,type:"text",value:e.city||"",onChange:e=>a("city",e.target.value),placeholder:eV("editableField.address.city",{defaultValue:"Stadt"}),...ty,"data-testid":`${ts}-address-city`})]}),(0,t.jsxs)(i.b,{children:[(0,t.jsx)(i.s,{htmlFor:`${ts}-address-state-el`,children:eV("editableField.address.state",{defaultValue:"Bundesland"})}),(0,t.jsx)(i.N,{id:`${ts}-address-state-el`,type:"text",value:e.state||"",onChange:e=>a("state",e.target.value),placeholder:eV("editableField.address.state",{defaultValue:"Bundesland"}),...ty,"data-testid":`${ts}-address-state`})]}),(0,t.jsxs)(i.b,{children:[(0,t.jsx)(i.s,{htmlFor:`${ts}-address-country-el`,children:eV("editableField.address.country",{defaultValue:"Land"})}),(0,t.jsx)(i.N,{id:`${ts}-address-country-el`,type:"text",value:e.country||"",onChange:e=>a("country",e.target.value),placeholder:eV("editableField.address.country",{defaultValue:"Land"}),...ty,"data-testid":`${ts}-address-country`})]})]})}case"location":{let e=eB||{},a=(t,a)=>{tL({...e,[t]:a?Number(a):void 0})};return(0,t.jsxs)(i.O,{children:[(0,t.jsxs)(i.h,{children:[(0,t.jsx)(i._,{htmlFor:`${ts}-location-latitude-el`,children:eV("editableField.location.latitude",{defaultValue:"Breitengrad"})}),(0,t.jsx)(i.i,{id:`${ts}-location-latitude-el`,type:"number",step:"0.000001",min:-90,max:90,value:void 0!==e.latitude?String(e.latitude):"",onChange:e=>a("latitude",e.target.value),placeholder:eV("editableField.location.latitudePlaceholder",{defaultValue:"z.B. 52.520008"}),...ty,"data-testid":`${ts}-location-latitude`})]}),(0,t.jsxs)(i.h,{children:[(0,t.jsx)(i._,{htmlFor:`${ts}-location-longitude-el`,children:eV("editableField.location.longitude",{defaultValue:"Längengrad"})}),(0,t.jsx)(i.i,{id:`${ts}-location-longitude-el`,type:"number",step:"0.000001",min:-180,max:180,value:void 0!==e.longitude?String(e.longitude):"",onChange:e=>a("longitude",e.target.value),placeholder:eV("editableField.location.longitudePlaceholder",{defaultValue:"z.B. 13.404954"}),...ty,"data-testid":`${ts}-location-longitude`})]})]})}case"creditcard":{let e=String(eB||"").replace(/\D/g,""),a=eh(e),l="visa"===a?"Visa":"mastercard"===a?"Mastercard":"amex"===a?"Amex":null,r="amex"===a?15===e.length:e.length>=16&&e.length<=19,n=function(e){if(!/^\d+$/.test(e))return!1;let t=0,a=!1;for(let l=e.length-1;l>=0;l--){let i=e.charCodeAt(l)-48;a&&(i*=2)>9&&(i-=9),t+=i,a=!a}return t%10==0}(e);return(0,t.jsxs)(i.c,{children:[(0,t.jsx)(i.A,{ref:ti,id:tu,type:"text",inputMode:"numeric",autoComplete:"cc-number",spellCheck:!1,maxLength:23,value:function(e,t){let a=e.replace(/\D/g,"");if("amex"===t){let e=a.slice(0,15);return[e.slice(0,4),e.slice(4,10),e.slice(10,15)].filter(Boolean).join(" ")}return a.slice(0,19).replace(/(\d{4})(?=\d)/g,"$1 ")}(e,a),onChange:e=>{let t=e.target,a=function(e,t){let a=0,l=Math.min(Math.max(0,t),e.length);for(let t=0;t<l;t++){let l=e[t];l>="0"&&l<="9"&&a++}return a}(t.value,t.selectionStart??t.value.length),l=t.value.replace(/\D/g,""),i=l.slice(0,"amex"===eh(l)?15:19);tS.current=Math.min(a,i.length),tL(i)},onKeyDown:tW,placeholder:V,...ty,"data-testid":`${ts}-creditcard`}),(0,t.jsxs)(i.T,{children:[l&&(0,t.jsx)(i.Y,{"data-testid":`${ts}-creditcard-brand`,children:l}),r&&(0,t.jsx)(i.p,{$valid:n,"data-valid":n?"true":"false","data-testid":`${ts}-creditcard-valid`,children:n?(0,t.jsx)(T.f,{color:eu.h.SUCCESS}):"!"})]})]})}case"iban":{let e,a=eg(String(eB||"")),l=(void 0!==(e=ex[a.slice(0,2)])?a.length===e:a.length>=15&&a.length<=34)&&function(e){if(!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(e))return!1;let t=e.slice(4)+e.slice(0,4),a=0;for(let e=0;e<t.length;e++){let l=t.charCodeAt(e);if(l>=65&&l<=90){let e=l-55;a=(10*(a=(10*a+Math.floor(e/10))%97)+e%10)%97}else a=(10*a+(l-48))%97}return 1===a}(a);return(0,t.jsxs)(i.c,{children:[(0,t.jsx)(i.d,{ref:ti,id:tu,type:"text",autoComplete:"off",spellCheck:!1,maxLength:42,value:eb(a),onChange:e=>{let t=e.target,a=function(e,t){let a=0,l=Math.min(Math.max(0,t),e.length);for(let t=0;t<l;t++)ey(e[t])&&a++;return a}(t.value,t.selectionStart??t.value.length),l=eg(t.value).slice(0,34);tS.current=Math.min(a,l.length),tL(l)},onKeyDown:tW,placeholder:V,...ty,"data-testid":`${ts}-iban`}),a.length>=15&&(0,t.jsx)(i.T,{children:(0,t.jsx)(i.p,{$valid:l,"data-valid":l?"true":"false","data-testid":`${ts}-iban-valid`,children:l?(0,t.jsx)(T.f,{color:eu.h.SUCCESS}):"!"})})]})}case"duration":return(0,t.jsxs)(i.t,{children:[(0,t.jsxs)(i.a,{children:[(0,t.jsx)(i.z,{htmlFor:`${ts}-duration-hours-el`,children:eV("editableField.duration.hours",{defaultValue:"Stunden"})}),(0,t.jsx)(i.q,{id:`${ts}-duration-hours-el`,type:"number",min:0,value:t$.h,...ty,onChange:e=>{if(th)return;let t=e.target.value;tv(e=>({...e,h:t})),tz(t,t$.m)},onKeyDown:tW,placeholder:"0","data-testid":`${ts}-duration-hours`})]}),(0,t.jsxs)(i.a,{children:[(0,t.jsx)(i.z,{htmlFor:`${ts}-duration-minutes-el`,children:eV("editableField.duration.minutes",{defaultValue:"Minuten"})}),(0,t.jsx)(i.q,{id:`${ts}-duration-minutes-el`,type:"number",min:0,max:59,value:t$.m,...ty,onChange:e=>{if(th)return;let t=e.target.value;tv(e=>({...e,m:t})),tz(t$.h,t)},onBlur:()=>{let e=parseInt(t$.m,10);if(Number.isFinite(e)&&(e<0||e>59)){let t=String(Math.min(59,Math.max(0,e)));tv(e=>({...e,m:t})),tz(t$.h,t)}},onKeyDown:tW,placeholder:"0","data-testid":`${ts}-duration-minutes`})]})]});case"color":{let e=ev("string"==typeof eB?eB:"")??"#000000";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.L,{children:[(0,t.jsx)(i.Z,{type:"color",value:e,...tb,onChange:e=>{if(th)return;let t=ev(e.target.value);null!==t&&(tL(t),tC(t),tI(!1))},"aria-label":eV("editableField.color.pickerAria",{defaultValue:"Farbe wählen"}),"data-testid":`${ts}-color-picker`}),(0,t.jsx)(i.f,{ref:ti,id:tu,type:"text",spellCheck:!1,maxLength:7,$invalid:tj,value:tk,...ty,onChange:e=>{if(th)return;let t=e.target.value;tC(t);let a=ev(t);null!==a&&(tL(a),tI(!1))},onBlur:()=>{tI(""!==tk.trim()&&null===ev(tk))},onKeyDown:tW,placeholder:V||"#RRGGBB","data-testid":`${ts}-color-text`})]}),tj&&(0,t.jsx)(i.Q,{$hasError:!0,"data-testid":`${ts}-color-error`,children:eV("editableField.color.invalid",{defaultValue:"Ungültiger Farbwert (#RRGGBB)"})})]})}case"otp":return(0,t.jsx)(i.y,{children:(0,t.jsx)(J,{value:String(eB??""),onChange:tL,length:ei??6,disabled:th,dataTestId:`${ts}-otp`,onKeyDown:tW,id:tu})});case"tags":return(0,t.jsx)(en,{value:eB,onChange:tL,separator:eM??";",disabled:th,dataTestId:`${ts}-tags`,onKeyDown:tW,id:tu});case"slider":{let e=er??0,a=ep??100,l="number"==typeof eB&&Number.isFinite(eB)?eB:null,r=l??e,n=Math.min(Math.max(r,e),a),o=a>e?(n-e)/(a-e)*100:0;return(0,t.jsxs)(i.k,{children:[(0,t.jsx)(i.B,{ref:ti,id:tu,type:"range",min:e,max:a,step:eN??1,$percent:o,value:r,onChange:e=>tL(Number(e.target.value)),onKeyDown:tW,...tb,"data-testid":`${ts}-slider`}),(0,t.jsx)(i.D,{"data-testid":`${ts}-slider-value`,children:null===l?"–":`${eR.number(l,{maximumFractionDigits:3})}${eD?` ${eD}`:""}`})]})}case"rating":{let e=eU??5,a="number"==typeof eB&&Number.isFinite(eB)&&eB>=1?Math.min(Math.round(eB),e):null,l=a??1,r=e=>{tL(e),tr.current[e-1]?.focus()};return(0,t.jsx)(i.$,{role:"radiogroup","aria-label":f||eV("editableField.rating.label",{defaultValue:"Bewertung"}),"aria-disabled":th||void 0,"aria-readonly":tg||void 0,"data-disabled":th?"true":void 0,"data-testid":`${ts}-rating`,onKeyDown:t=>{if(th)return void tW(t);switch(t.key){case"ArrowRight":case"ArrowUp":t.preventDefault(),r(Math.min((a??0)+1,e));return;case"ArrowLeft":case"ArrowDown":t.preventDefault(),r(Math.max((a??2)-1,1));return;case"Home":t.preventDefault(),r(1);return;case"End":t.preventDefault(),r(e);return;default:tW(t)}},children:Array.from({length:e},(r,n)=>{let o=n+1;return(0,t.jsx)(i.o,{ref:e=>{tr.current[n]=e},type:"button",role:"radio","aria-checked":o===a,"aria-label":eV("editableField.rating.starAria",{defaultValue:"{{star}} von {{max}} Sternen",star:o,max:e}),tabIndex:o===l?0:-1,disabled:th||void 0,$filled:null!==a&&o<=a,onClick:()=>tL(o===a?null:o),"data-testid":`${ts}-rating-star-${o}`,children:(0,t.jsx)(es.f,{})},o)})})}default:return(0,t.jsx)(i.y,{children:(0,t.jsx)(i.E,{ref:ti,id:tu,type:"text",value:String(eB||""),onChange:e=>tL(e.target.value),onKeyDown:tW,placeholder:V,...tc,...ty,"data-testid":`${ts}-input`})})}})(),A&&(0,t.jsx)(i.Q,{$hasError:R,children:A})]}),!L&&(0,t.jsxs)(i.x,{children:[(0,t.jsx)(ed._,{icon:(0,t.jsx)(T.f,{color:"white"}),onClick:tP,isDisabled:eJ,size:"small",color:eu.h.SUCCESS,tooltip:eV("editableField.actions.save",{defaultValue:"Speichern"}),dataTestId:`${ts}-confirm`}),(0,t.jsx)(ed._,{icon:(0,t.jsx)(X.f,{color:"white"}),onClick:tO,isDisabled:eJ,size:"small",color:eu.h.GREY,tooltip:eV("editableField.actions.cancel",{defaultValue:"Abbrechen"}),dataTestId:`${ts}-cancel`})]})]}):(0,t.jsx)(i.I,{$isEmpty:null==g||""===g,$isEditing:b,$isEditable:tm,$isDirty:w,onClick:tR,"data-testid":`${ts}-display`,"data-editable":tm?"true":"false","data-value":tx,"data-unnamed":t9||void 0,"data-resolving":"lookup"===y&&eG||void 0,children:(()=>{if("markdown"===y&&g)return(0,t.jsx)(eI,{content:String(g),dataTestId:`${ts}-markdown-preview`});if("color"===y&&"string"==typeof g&&""!==g)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.U,{$color:g,"aria-hidden":"true","data-testid":`${ts}-color-swatch`}),t4()]});if("rating"===y&&"number"==typeof g&&Number.isFinite(g)){let e=eU??5,a=Math.min(Math.max(Math.round(g),0),e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.n,{"aria-hidden":"true","data-testid":`${ts}-rating-display`,children:Array.from({length:e},(e,l)=>(0,t.jsx)(i.S,{$filled:l<a,children:(0,t.jsx)(es.f,{})},l))}),t4()]})}return t4()})()})]})}],730235)},962818,e=>{var t=e.i(843476),a=e.i(271645),l=e.i(174080),i=e.i(997053);e.i(882006);var r=e.i(596804),n=e.i(634146);let o=i.U.div.withConfig({displayName:"InputAutocomplete.styles__Root",componentId:"sc-9aeec050-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${e=>e.$noMargin?"0":e.theme.margin.default};
  position: relative;
`,d=(0,i.U)(n.f).withConfig({displayName:"InputAutocomplete.styles__StyledInputLabel",componentId:"sc-9aeec050-1"})`
  color: ${({error:e,theme:t})=>e?t.palette.default.error:t.palette.default.black};
  opacity: ${({disabled:e})=>e?.5:1};
`,s=i.U.div.withConfig({displayName:"InputAutocomplete.styles__InputWrapper",componentId:"sc-9aeec050-2"})`
  position: relative;
  z-index: 100;
`,u=i.U.input.withConfig({displayName:"InputAutocomplete.styles__StyledInput",componentId:"sc-9aeec050-3"})`
  ${({$error:e})=>(0,r.B)({error:!!e})}
`,c=i.U.div.withConfig({displayName:"InputAutocomplete.styles__LoadingIndicator",componentId:"sc-9aeec050-4"})`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;var p=e.i(387506),m=e.i(982993);e.i(867428);var f=e.i(793300),h=e.i(696984);e.s(["f",0,function({label:e,forId:i,placeholder:r,value:n,displayValue:g="",options:y,onSearch:b,onSelect:x,onClear:w,required:$,disabled:v,loading:k,error:C,errorText:j,minChars:I=1,noResultsText:_,noMargin:E,autoFocus:F,onKeyDown:S,dataTestId:N,infoTextTitle:D,infoTextContent:U}){let{tr:M}=(0,h.w)(),V=r??M("form.inputAutocomplete.placeholder",{defaultValue:"Suchen..."}),A=_??M("form.inputAutocomplete.noResults",{defaultValue:"Keine Ergebnisse gefunden"}),[T,R]=(0,a.useState)(g),[L,B]=(0,a.useState)(!1),[z,K]=(0,a.useState)(-1),[P,O]=(0,a.useState)(null),W=(0,a.useRef)(null),H=(0,a.useRef)(null),q=(0,a.useRef)(!1);(0,a.useEffect)(()=>{R(g)},[g]),(0,a.useEffect)(()=>{q.current&&y.length>0&&B(!0)},[y]);let G=(0,a.useCallback)(e=>{let t=e.target.value;R(t),K(-1),t.length>=I?(B(!0),b?.(t)):B(!1),""===t&&n&&w?.()},[I,b,w,n]),Z=(0,a.useCallback)(e=>{R(e.label),B(!1),K(-1),x(e)},[x]),Y=(0,a.useCallback)(()=>{q.current=!0,y.length>0&&B(!0),b&&b(T)},[T,y.length,b]),Q=(0,a.useCallback)(()=>{q.current=!1,setTimeout(()=>B(!1),200)},[]),J=L&&!v&&(y.length>0||T.length>=I),X=L&&!v&&!k&&0===y.length&&T.length>=I,ee=J&&(y.length>0||X),et=(0,a.useCallback)(e=>{if(!ee){if("ArrowDown"===e.key&&y.length>0){B(!0),K(0),e.preventDefault();return}S?.(e);return}switch(e.key){case"ArrowDown":e.preventDefault(),K(e=>e<y.length-1?e+1:e);break;case"ArrowUp":e.preventDefault(),K(e=>e>0?e-1:0);break;case"Enter":e.preventDefault(),e.stopPropagation(),z>=0&&z<y.length?Z(y[z]):(B(!1),K(-1));break;case"Escape":e.preventDefault(),e.stopPropagation(),B(!1),K(-1)}},[ee,y,z,Z,S]),ea=(0,a.useCallback)(()=>{let e=W.current?.getBoundingClientRect();if(!e)return;let t=window.innerHeight-e.bottom,a=t<300&&e.top>t;O({left:e.left,width:e.width,...a?{bottom:window.innerHeight-e.top}:{top:e.bottom}})},[]);return(0,a.useLayoutEffect)(()=>ee?(ea(),window.addEventListener("scroll",ea,!0),window.addEventListener("resize",ea),()=>{window.removeEventListener("scroll",ea,!0),window.removeEventListener("resize",ea)}):void O(null),[ee,ea]),(0,a.useEffect)(()=>{if(z>=0&&H.current){let e=H.current.children[z];e?.scrollIntoView?.({block:"nearest"})}},[z]),(0,t.jsxs)(o,{$noMargin:E,"data-testid":N?`${N}-root`:void 0,children:[e&&(0,t.jsx)(d,{error:C,disabled:v,required:$,htmlFor:i,infoTextTitle:D,infoTextContent:U,children:e}),(0,t.jsxs)(s,{children:[(0,t.jsx)(u,{ref:W,id:i,type:"text",value:T,onChange:G,onFocus:Y,onBlur:Q,onKeyDown:et,placeholder:V,disabled:v,autoFocus:F,$error:C,$disabled:v,autoComplete:"off","aria-autocomplete":"list","aria-expanded":ee,"aria-controls":i?`${i}-listbox`:void 0,"data-testid":N?`${N}-input`:void 0}),k&&(0,t.jsx)(c,{children:(0,t.jsx)(f.f,{size:"small"})}),ee&&P&&(0,l.createPortal)((0,t.jsx)(p.i,{ref:H,$visible:ee,id:i?`${i}-listbox`:void 0,role:"listbox","data-testid":N?`${N}-dropdown`:void 0,style:{position:"fixed",top:P.top??"auto",bottom:P.bottom??"auto",left:P.left,right:"auto",width:P.width,margin:void 0!==P.top?"0.25rem 0 0 0":"0 0 0.25rem 0"},children:X?(0,t.jsx)(p.O,{children:A}):y.map((e,a)=>(0,t.jsxs)(p.z,{$active:a===z,role:"option","aria-selected":a===z,onMouseDown:()=>Z(e),onMouseEnter:()=>K(a),"data-testid":N?`${N}-option-${a}`:void 0,"data-value":e.value,children:[(0,t.jsx)(p.u,{children:e.label}),e.secondaryLabel&&(0,t.jsx)(p.N,{"data-testid":N?`${N}-secondary-${a}`:void 0,children:e.secondaryLabel})]},e.value))}),document.body)]}),C&&j&&(0,t.jsx)(m.f,{dataTestId:N?`${N}-error`:void 0,children:j})]})}],962818)},634146,e=>{let t=e.i(655171).f;e.s(["f",0,t])},302312,e=>{var t=e.i(843476),a=e.i(271645),l=e.i(770703);e.i(821194);var i=e.i(99222),r=e.i(145896),n=e.i(653145),o=e.i(997053),d=e.i(634146);let s=o.U.div.withConfig({displayName:"InputMarkdown.styles__Root",componentId:"sc-9b3128cd-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  width: 100%;
`,u=(0,o.U)(d.f).withConfig({displayName:"InputMarkdown.styles__StyledInputLabel",componentId:"sc-9b3128cd-1"})`
  color: ${({error:e,theme:t})=>e?t.palette.default.error:t.palette.default.black};
  opacity: ${({disabled:e})=>e?.5:1};
`,c=o.U.div.withConfig({displayName:"InputMarkdown.styles__EditorWrapper",componentId:"sc-9b3128cd-2"})`
  border: 1px solid
    ${e=>e.$error?e.theme.palette.default.error:e.theme.palette.default.grey};
  border-radius: ${e=>e.theme.borderRadius.box||"6px"};
  overflow: hidden;
  opacity: ${e=>e.$disabled?.5:1};
  pointer-events: ${e=>e.$disabled?"none":"auto"};

  /* Override @uiw/react-md-editor default styles to match app theme */
  .w-md-editor {
    border: none !important;
    box-shadow: none !important;
    background-color: ${e=>e.theme.palette.default.white} !important;
    font-family: ${e=>e.theme.font.secondaryFamily} !important;
  }

  .w-md-editor-toolbar {
    border-bottom: 1px solid ${e=>e.theme.palette.default.grey} !important;
    background-color: ${e=>e.theme.palette.default.greyLight} !important;
    padding: 4px 8px !important;
  }

  .w-md-editor-toolbar li > button {
    color: ${e=>e.theme.palette.text.secondary} !important;
    height: 28px !important;
    width: 28px !important;
  }

  .w-md-editor-toolbar li > button:hover {
    color: ${e=>e.theme.palette.default.primary} !important;
    background-color: ${e=>e.theme.palette.default.primary}15 !important;
  }

  .w-md-editor-content {
    font-family: ${e=>e.theme.font.secondaryFamily} !important;
  }

  .w-md-editor-text-pre > code,
  .w-md-editor-text-input,
  .w-md-editor-text textarea {
    font-family: ${e=>e.theme.font.secondaryFamily} !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
    color: ${e=>e.theme.palette.text.primary} !important;
  }

  .w-md-editor-preview {
    font-family: ${e=>e.theme.font.secondaryFamily} !important;
    font-size: 14px !important;
    padding: 12px 16px !important;
  }

  /* Preview styling — matches MarkdownRenderer block styles */
  .wmde-markdown {
    font-family: ${e=>e.theme.font.secondaryFamily} !important;
    font-size: 14px !important;
    color: ${e=>e.theme.palette.text.primary} !important;
    background-color: transparent !important;
  }

  .wmde-markdown h1,
  .wmde-markdown h2,
  .wmde-markdown h3 {
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .wmde-markdown a {
    color: ${e=>e.theme.palette.link?.primary||"#00416e"} !important;
  }

  .wmde-markdown code {
    font-family: 'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace !important;
    font-size: 13px !important;
    background-color: ${e=>e.theme.palette.default.greyLight} !important;
    padding: 1px 6px !important;
    border-radius: 3px !important;
  }

  .wmde-markdown blockquote {
    border-left: 3px solid ${e=>e.theme.palette.default.grey} !important;
    color: ${e=>e.theme.palette.default.greyDark} !important;
    background-color: ${e=>e.theme.palette.default.greyLight} !important;
  }
`;var p=e.i(982993);let m=(e,t)=>e.map(e=>{let a=e.name?t[e.name]:void 0,l=Array.isArray(e.children)?m(e.children,t):e.children;return{...e,...void 0!==l?{children:l}:{},...a?{buttonProps:{...e.buttonProps,title:a,"aria-label":a}}:{},...a&&"string"==typeof e.children?{children:a}:{}}}),f=(0,l.default)(async()=>{let l=await e.A(994547),i=l.default,{getCommands:r,getExtraCommands:n}=l.commands;return function({toolbarTexts:e,...l}){let o=(0,a.useMemo)(()=>m(r(),e),[e]),d=(0,a.useMemo)(()=>m(n(),e),[e]);return(0,t.jsx)(i,{...l,commands:o,extraCommands:d})}},{loadableGenerated:{modules:[893960]},ssr:!1});e.s(["f",0,function({error:e,errorText:l,disabled:o,label:d,htmlFor:m,required:h,name:g,control:y,value:b,onChange:x,placeholder:w,height:$=200,dataTestId:v="input-markdown",className:k}){let C=function(){let{tr:e}=(0,i.f)(),{revision:t}=(0,r.V)();return(0,a.useMemo)(()=>({bold:e("common.markdownEditor.bold",{defaultValue:"Add bold text (ctrl + b)"}),italic:e("common.markdownEditor.italic",{defaultValue:"Add italic text (ctrl + i)"}),strikethrough:e("common.markdownEditor.strikethrough",{defaultValue:"Add strikethrough text (ctrl + shift + x)"}),hr:e("common.markdownEditor.hr",{defaultValue:"Insert HR (ctrl + h)"}),title:e("common.markdownEditor.title",{defaultValue:"Insert title"}),heading1:e("common.markdownEditor.heading1",{defaultValue:"Heading 1"}),heading2:e("common.markdownEditor.heading2",{defaultValue:"Heading 2"}),heading3:e("common.markdownEditor.heading3",{defaultValue:"Heading 3"}),heading4:e("common.markdownEditor.heading4",{defaultValue:"Heading 4"}),heading5:e("common.markdownEditor.heading5",{defaultValue:"Heading 5"}),heading6:e("common.markdownEditor.heading6",{defaultValue:"Heading 6"}),link:e("common.markdownEditor.link",{defaultValue:"Add a link (ctrl + l)"}),quote:e("common.markdownEditor.quote",{defaultValue:"Insert a quote (ctrl + q)"}),code:e("common.markdownEditor.code",{defaultValue:"Insert code (ctrl + j)"}),codeBlock:e("common.markdownEditor.codeBlock",{defaultValue:"Insert Code Block (ctrl + shift + j)"}),comment:e("common.markdownEditor.comment",{defaultValue:"Insert comment (ctrl + /)"}),image:e("common.markdownEditor.image",{defaultValue:"Add image (ctrl + k)"}),table:e("common.markdownEditor.table",{defaultValue:"Add table"}),"unordered-list":e("common.markdownEditor.unorderedList",{defaultValue:"Add unordered list (ctrl + shift + u)"}),"ordered-list":e("common.markdownEditor.orderedList",{defaultValue:"Add ordered list (ctrl + shift + o)"}),"checked-list":e("common.markdownEditor.checkedList",{defaultValue:"Add checked list (ctrl + shift + c)"}),help:e("common.markdownEditor.help",{defaultValue:"Open help"}),edit:e("common.markdownEditor.edit",{defaultValue:"Edit code (ctrl + 7)"}),live:e("common.markdownEditor.live",{defaultValue:"Live code (ctrl + 8)"}),preview:e("common.markdownEditor.preview",{defaultValue:"Preview code (ctrl + 9)"}),fullscreen:e("common.markdownEditor.fullscreen",{defaultValue:"Toggle fullscreen (ctrl + 0)"})}),[e,t])}(),j=(a,l)=>(0,t.jsx)(c,{$error:!!e,$disabled:!!o,children:(0,t.jsx)(f,{toolbarTexts:C,value:a,onChange:e=>{o||l(e||"")},height:$,preview:o?"preview":"live",hideToolbar:!!o,textareaProps:{id:m,placeholder:w||"",disabled:!!o,"aria-disabled":o||void 0},"data-color-mode":"light"})});return(0,t.jsxs)(s,{className:k,"data-testid":`${v}-root`,children:[d&&(0,t.jsx)(u,{error:!!e,disabled:!!o,required:h,htmlFor:m,dataTestId:`${v}-label`,children:d}),y&&g?(0,t.jsx)(n.e,{name:g,control:y,render:({field:e})=>j(e.value||"",t=>{e.onChange(t),x?.(t)})}):j(b??"",e=>x?.(e)),e&&l&&(0,t.jsx)(p.f,{dataTestId:`${v}-error`,children:l})]})}],302312)}])})();