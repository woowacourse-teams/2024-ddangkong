"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[259],{"./src/components/common/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본_드랍다운:()=>기본_드랍다운});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Dropdown/Dropdown.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Dropdown",component:_Dropdown__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{text:{description:"드랍다운이 선택된 옵션을 나타냅니다."},optionList:{description:"드랍다운 내에 들어갈 옵션 배열을 넘겨줄 수 있습니다."},handleClickOption:{description:"옵션을 선택했을 때 동작하는 이벤트 핸들러입니다."}},args:{handleClickOption:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},기본_드랍다운={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("연애");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__.A,{text,optionList:[{value:"ROMANCE",label:"연애"},{value:"IF",label:"만약에"},{value:"MBTI",label:"MBTI"},{value:"FOOD",label:"음식"}],handleClickOption:e=>setText(e.currentTarget.value)})}},__namedExportsOrder=["기본_드랍다운"];기본_드랍다운.parameters={...기본_드랍다운.parameters,docs:{...기본_드랍다운.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [text, setText] = useState('연애');\n    return <Dropdown text={text} optionList={[{\n      value: 'ROMANCE',\n      label: '연애'\n    }, {\n      value: 'IF',\n      label: '만약에'\n    }, {\n      value: 'MBTI',\n      label: 'MBTI'\n    }, {\n      value: 'FOOD',\n      label: '음식'\n    }]} handleClickOption={e => setText(e.currentTarget.value)} />;\n  }\n}",...기본_드랍다운.parameters?.docs?.source}}}},"./src/components/common/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Dropdown_Dropdown});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const dropdownLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: relative;
  align-items: center;

  width: 16rem;
  height: 3.6rem;
  padding: 0.8rem;
  border: 1px solid black;
  border-radius: 0.8rem;

  background-color: white;

  cursor: pointer;
`,dropdownTextContainer=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  user-select: none;
`,emptyWrapper=emotion_react_browser_esm.AH`
  width: 1.2rem;
  height: 1.2rem;
`,arrowImage=emotion_react_browser_esm.AH`
  width: 1.2rem;
  height: 1.2rem;
`,dropdownText=emotion_react_browser_esm.AH`
  text-align: center;

  ${Theme.S.typography.body2}

  user-select: none;
  cursor: pointer;
`,selectOptionList=(isOpen,count)=>emotion_react_browser_esm.AH`
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 3.6rem;
  left: 0;
  flex-direction: column;

  width: 100%;
  height: ${isOpen?3.6*count+"rem":0};
  border: ${isOpen?`1px solid ${Theme.S.color.gray200}`:"none"};
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;

  color: black;

  list-style: none;
  transition: height 0.3s;
  user-select: none;
`,arrowDown_namespaceObject=__webpack_require__.p+"static/media/arrowDown.4cfc739e.svg",arrowUp_namespaceObject=__webpack_require__.p+"static/media/arrowUp.ffc96fce.svg",Dropdown=({text,optionList,handleClickOption})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),handleToggleDropdown=()=>{setIsOpen((prev=>!prev)),triggerRef.current?.focus()},handleSelectOption=e=>{handleClickOption(e),handleToggleDropdown()};return(0,react.useEffect)((()=>{const handleOutsideClose=e=>{isOpen&&dropdownRef.current&&!dropdownRef.current.contains(e.target)&&setIsOpen(!1)};return document.addEventListener("click",handleOutsideClose),()=>{document.removeEventListener("click",handleOutsideClose)}}),[isOpen]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:dropdownLayout,ref:dropdownRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{ref:triggerRef,onClick:handleToggleDropdown,"aria-haspopup":"listbox","aria-expanded":isOpen,"aria-controls":"dropdown-listbox","aria-label":`카테고리 선택 목록, 현재 선택: ${text||"선택해주세요"}`,css:dropdownTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:emptyWrapper}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:dropdownText,children:text||"선택해주세요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:isOpen?arrowUp_namespaceObject:arrowDown_namespaceObject,alt:"",css:arrowImage})})]}),isOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{id:"dropdown-listbox",role:"listbox","aria-labelledby":"dropdown-button",css:selectOptionList(isOpen,optionList.length),children:optionList.map((option=>{return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{role:"option","aria-selected":text===option.label,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:(isSelected=text===option.label,emotion_react_browser_esm.AH`
  width: 100%;
  height: 3.6rem;

  ${Theme.S.typography.caption}
  background-color: ${isSelected?Theme.S.color.gray300:"white"};

  color: black;

  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${Theme.S.color.gray200};
  }
`),value:option.value,onClick:handleSelectOption,children:option.label})},option.value);var isSelected}))})]})},Dropdown_Dropdown=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{text:{required:!0,tsType:{name:"string"},description:""},optionList:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=components-common-Dropdown-Dropdown-stories.73d2fd8a.iframe.bundle.js.map