(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,364117,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(653145),l=e.i(510665),n=e.i(997053),a=e.i(655171);let o=n.U.div.withConfig({displayName:"InputFile.styles__Root",componentId:"sc-6e216138-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-bottom: ${e=>e.$noMargin?"0":e.theme.margin.default};
`,s=(0,n.U)(a.f).withConfig({displayName:"InputFile.styles__StyledInputLabel",componentId:"sc-6e216138-1"})`
  color: ${({error:e,theme:t})=>e?t.palette.default.error:t.palette.default.black};
  opacity: ${({disabled:e})=>e?.5:1};
`,d=n.U.div.withConfig({displayName:"InputFile.styles__DropzoneContainer",componentId:"sc-6e216138-2"})`
  /* border-box: ohne das ist das Feld um Innenabstand und Rahmen breiter als
     seine Spalte und überlappt, was daneben steht (Medienbibliothek, #1330). */
  box-sizing: border-box;
  width: 100%;
  padding: ${({theme:e})=>e.padding.large};
  border: 2px dashed
    ${({$error:e,$isDragActive:t,theme:i})=>e?i.palette.default.error:t?i.palette.default.primary:i.palette.default.greyDark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  background-color: ${({$disabled:e,$isDragActive:t,theme:i})=>e?i.palette.default.grey:t?i.palette.default.primary+"10":i.palette.default.white};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  opacity: ${({$disabled:e})=>e?.5:1};

  &:hover {
    border-color: ${({$error:e,$disabled:t,theme:i})=>t?i.palette.default.greyDark:e?i.palette.default.error:i.palette.default.primary};
    background-color: ${({$disabled:e,theme:t})=>e?t.palette.default.grey:t.palette.default.primary+"05"};
  }
`,p=n.U.div.withConfig({displayName:"InputFile.styles__DropzoneContent",componentId:"sc-6e216138-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.small};
  text-align: center;

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.default.greyDark};
    font-size: 0.875rem;
  }
`,u=n.U.div.withConfig({displayName:"InputFile.styles__UploadIconWrapper",componentId:"sc-6e216138-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.margin.small};

  svg {
    width: 48px;
    height: 48px;
  }
`,c=n.U.span.withConfig({displayName:"InputFile.styles__HelperText",componentId:"sc-6e216138-5"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-style: italic;
`,m=n.U.ul.withConfig({displayName:"InputFile.styles__FileList",componentId:"sc-6e216138-6"})`
  list-style: none;
  padding: 0;
  margin: ${({theme:e})=>e.margin.small} 0 0 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
`,f=n.U.li.withConfig({displayName:"InputFile.styles__FileItem",componentId:"sc-6e216138-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.padding.small};
  background-color: ${({theme:e})=>e.palette.default.greyLight};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  font-size: 0.875rem;

  span {
    color: ${({theme:e})=>e.palette.default.black};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,h=n.U.button.withConfig({displayName:"InputFile.styles__RemoveButton",componentId:"sc-6e216138-8"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({theme:e})=>e.palette.default.error};
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
  transition: opacity 0.2s;

  svg {
    display: block;
    width: 0.875rem;
    height: 0.875rem;
  }

  /* IconClose hardcodes its stroke color via attribute — retint to the
     button's error color (CSS wins over presentation attributes). */
  svg line {
    stroke: currentColor;
  }

  &:hover {
    opacity: 0.7;
  }
`;var g=e.i(982993),y=e.i(927625),x=e.i(616789),b=e.i(696984);function $({currentValue:e,emit:r,label:n,error:a,errorText:w,disabled:j,required:I,forId:v,dataTestId:k,className:C,infoTextTitle:F,infoTextContent:_,accept:z,maxSize:U=0xa00000,maxFiles:D=1,multiple:M=!1,helperText:T,noMargin:N}){let{tr:A}=(0,b.w)(),B=k||"input-file",R=(0,i.useMemo)(()=>Array.isArray(e)?e:e?[e]:[],[e]),V=(0,i.useCallback)(e=>{r(M?[...R,...e].slice(0,D):e.slice(0,D))},[r,R,M,D]),{getRootProps:S,getInputProps:H,isDragActive:K}=(0,l.f)({onDrop:V,accept:z,maxSize:U,maxFiles:D,multiple:M,disabled:j});return(0,t.jsxs)(o,{className:C,$noMargin:!!N,"data-testid":`${B}-root`,children:[n&&(0,t.jsx)(s,{error:!!a,disabled:!!j,required:I,htmlFor:v,"data-testid":`${B}-label`,infoTextTitle:F,infoTextContent:_,children:n}),(0,t.jsxs)(d,{...S(),$error:!!a,$disabled:!!j,$isDragActive:K,"data-testid":`${B}-dropzone`,children:[(0,t.jsx)("input",{...H(),id:v,"data-testid":`${B}-input`}),(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(y.f,{})}),K?(0,t.jsx)("p",{children:A("form.inputFile.dropActive",{defaultValue:"Dateien hier ablegen..."})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:M?A("form.inputFile.dropzoneHintMultiple",{defaultValue:"Dateien hierher ziehen oder klicken zum Auswählen"}):A("form.inputFile.dropzoneHint",{defaultValue:"Datei hierher ziehen oder klicken zum Auswählen"})}),T&&(0,t.jsx)(c,{children:T})]})]})]}),R.length>0&&(0,t.jsx)(m,{"data-testid":`${B}-file-list`,children:R.map((e,i)=>(0,t.jsxs)(f,{"data-testid":`${B}-file-item-${i}`,children:[(0,t.jsxs)("span",{children:[e.name," (",(e=>{if(0===e)return"0 Bytes";let t=Math.floor(Math.log(e)/Math.log(1024));return Math.round(e/Math.pow(1024,t)*100)/100+" "+["Bytes","KB","MB","GB"][t]})(e.size),")"]}),!j&&(0,t.jsx)(h,{onClick:()=>{r(R.filter((e,t)=>t!==i))},type:"button","aria-label":A("form.inputFile.removeFile",{defaultValue:"Datei entfernen"}),"data-testid":`${B}-remove-${i}`,children:(0,t.jsx)(x.f,{})})]},`${e.name}-${i}`))}),a&&w&&(0,t.jsx)(g.f,{dataTestId:`${B}-error`,children:w})]})}e.s(["InputFile",0,function({name:e,control:i,value:l,onChange:n,error:a,errorText:o,multiple:s=!1,...d}){return i&&e?(0,t.jsx)(r.e,{name:e,control:i,render:({field:e,fieldState:i})=>(0,t.jsx)($,{...d,multiple:s,currentValue:e.value,emit:t=>{e.onChange(s?t:t[0]||null),n?.(t)},error:a||i.error,errorText:o||i.error?.message})}):(0,t.jsx)($,{...d,multiple:s,currentValue:l??null,emit:e=>n?.(e),error:a,errorText:o})}],364117)},64010,function(e){e.n(e.i(364117))}]);