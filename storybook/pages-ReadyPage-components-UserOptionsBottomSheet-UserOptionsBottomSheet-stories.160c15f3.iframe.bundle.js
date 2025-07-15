"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[963],{"./src/pages/ReadyPage/components/UserOptionsBottomSheet/UserOptionsBottomSheet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본:()=>기본});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"BottomSheet/UserOptionsBottomSheet",component:__webpack_require__("./src/pages/ReadyPage/components/UserOptionsBottomSheet/UserOptionsBottomSheet.tsx").A,argTypes:{isOpen:{control:"boolean",description:"바텀 시트가 열렸는지 여부를 나타냅니다.",table:{type:{summary:"boolean"}}},onClose:{description:"바텀 시트를 닫기 위한 핸들러 함수입니다."},memberId:{description:"유저 아이디"},nickname:{description:"유저 닉네임"}},args:{onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},기본={parameters:{docs:{description:{story:"사용자 옵션 바텀 시트"}}},args:{isOpen:!0,memberId:1,nickname:"썬데이",onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},__namedExportsOrder=["기본"];기본.parameters={...기본.parameters,docs:{...기본.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: '사용자 옵션 바텀 시트'\n      }\n    }\n  },\n  args: {\n    isOpen: true,\n    memberId: 1,\n    nickname: '썬데이',\n    onClose: fn()\n  }\n}",...기본.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/components/common/BottomSheet/BottomSheet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomSheet_BottomSheet});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const slideUp=emotion_react_browser_esm.i7`
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, 0);
  }
`,bottomSheetBackdropLayout=emotion_react_browser_esm.AH`
  position: fixed;
  inset: 0;

  background-color: rgb(0 0 0 / 50%);
`,bottomSheetContentWrapper=emotion_react_browser_esm.AH`
  position: fixed;
  bottom: 0;
  left: 50%;

  width: 100%;
  padding: 1.2rem 1.6rem 3.2rem;

  background-color: white;

  animation: ${slideUp} 0.3s ease-out;
  transform: translateX(-50%);
  border-top-left-radius: ${Theme.S.borderRadius.radius10};
  border-top-right-radius: ${Theme.S.borderRadius.radius10};

  max-height: 70vh;
  overflow-y: auto;
`,bottomSheetHeaderLayout=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.6rem;
  margin-bottom: 2rem;
`,bottomSheetHandle=emotion_react_browser_esm.AH`
  width: 4rem;
  height: 0.4rem;
  padding: 0;
  border: none;
  border-radius: 0.2rem;

  background-color: ${Theme.S.color.gray300};
  cursor: pointer;
`,BottomSheet_BottomSheet=(emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,({children,isOpen,onClose})=>{const contentRef=(0,react.useRef)(null);if((({isOpen,onClose,ref})=>{(0,react.useEffect)((()=>{const handleKeyDown=e=>{"Escape"===e.key&&onClose()},handleClickOutside=e=>{ref.current&&!ref.current.contains(e.target)&&onClose()};return document.addEventListener("keydown",handleKeyDown),document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("keydown",handleKeyDown),document.removeEventListener("mousedown",handleClickOutside)}}),[isOpen,onClose,ref])})({isOpen,onClose,ref:contentRef}),!isOpen)return null;const bottomSheetContent=(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:bottomSheetBackdropLayout,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{ref:contentRef,css:bottomSheetContentWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:bottomSheetHeaderLayout,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{type:"button",css:bottomSheetHandle})}),children]})});return(0,react_dom.createPortal)(bottomSheetContent,document.body)})},"./src/components/common/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Dropdown_Dropdown});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const dropdownLayout=emotion_react_browser_esm.AH`
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
`;var arrowDown=__webpack_require__("./src/assets/images/arrowDown.svg"),arrowUp=__webpack_require__("./src/assets/images/arrowUp.svg");const Dropdown=({text,optionList,handleClickOption})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),handleToggleDropdown=()=>{setIsOpen((prev=>!prev)),triggerRef.current?.focus()},handleSelectOption=e=>{handleClickOption(e),handleToggleDropdown()};return(0,react.useEffect)((()=>{const handleOutsideClose=e=>{isOpen&&dropdownRef.current&&!dropdownRef.current.contains(e.target)&&setIsOpen(!1)};return document.addEventListener("click",handleOutsideClose),()=>{document.removeEventListener("click",handleOutsideClose)}}),[isOpen]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:dropdownLayout,ref:dropdownRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{ref:triggerRef,onClick:handleToggleDropdown,"aria-haspopup":"listbox","aria-expanded":isOpen,"aria-controls":"dropdown-listbox","aria-label":`카테고리 선택 목록, 현재 선택: ${text||"선택해주세요"}`,css:dropdownTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:emptyWrapper}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:dropdownText,children:text||"선택해주세요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:isOpen?arrowUp:arrowDown,alt:"",css:arrowImage})})]}),isOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{id:"dropdown-listbox",role:"listbox","aria-labelledby":"dropdown-button",css:selectOptionList(isOpen,optionList.length),children:optionList.map((option=>{return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{role:"option","aria-selected":text===option.label,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:(isSelected=text===option.label,emotion_react_browser_esm.AH`
  width: 100%;
  height: 3.6rem;

  ${Theme.S.typography.caption}
  background-color: ${isSelected?Theme.S.color.gray300:"white"};

  color: black;

  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${Theme.S.color.gray200};
  }
`),value:option.value,onClick:handleSelectOption,children:option.label})},option.value);var isSelected}))})]})},Dropdown_Dropdown=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{text:{required:!0,tsType:{name:"string"},description:""},optionList:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}}},"./src/hooks/useBottomSheet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useBottomSheet});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_BottomSheetProvider_BottomSheetProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/BottomSheetProvider/BottomSheetProvider.tsx");const useBottomSheet=()=>{const bottomSheet=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_BottomSheetProvider_BottomSheetProvider__WEBPACK_IMPORTED_MODULE_1__.a);if(!bottomSheet)throw new Error("BottomSheetContext를 찾을 수 없습니다.");return bottomSheet}},"./src/pages/ReadyPage/components/UserOptionsBottomSheet/UserOptionsBottomSheet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>UserOptionsBottomSheet_UserOptionsBottomSheet});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),room=__webpack_require__("./src/apis/room.ts");const hooks_usePassMaster=memberId=>{const{roomId}=(0,dist.g)();return(0,useMutation.n)({mutationFn:()=>(0,room.MU)(Number(roomId),memberId)})};var common=__webpack_require__("./src/components/common/index.ts"),useBottomSheet=__webpack_require__("./src/hooks/useBottomSheet.ts");const PassMasterButton=({nickname,memberId})=>{const{mutate:passMaster}=hooks_usePassMaster(memberId),{closeBottomSheet}=(0,useBottomSheet.g)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(common.$n,{text:`${nickname}님에게 방장 넘기기`,onClick:()=>{passMaster(),closeBottomSheet()},style:{width:"100%",fontSize:"medium"},radius:"medium"})},PassMasterButton_PassMasterButton=PassMasterButton;PassMasterButton.__docgenInfo={description:"",methods:[],displayName:"PassMasterButton",props:{memberId:{required:!0,tsType:{name:"number"},description:""},nickname:{required:!0,tsType:{name:"string"},description:""}}};const userOptionsButtonWrapper=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;var BottomSheet=__webpack_require__("./src/components/common/BottomSheet/BottomSheet.tsx");const UserOptionsBottomSheet=({isOpen,onClose,memberId,nickname})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(BottomSheet.A,{isOpen,onClose,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:userOptionsButtonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(PassMasterButton_PassMasterButton,{memberId,nickname})})}),UserOptionsBottomSheet_UserOptionsBottomSheet=UserOptionsBottomSheet;UserOptionsBottomSheet.__docgenInfo={description:"",methods:[],displayName:"UserOptionsBottomSheet",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},memberId:{required:!0,tsType:{name:"number"},description:""},nickname:{required:!0,tsType:{name:"string"},description:""}}}},"./src/assets/images/arrowDown.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/arrowDown.4cfc739e.svg"},"./src/assets/images/arrowUp.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/arrowUp.ffc96fce.svg"}}]);
//# sourceMappingURL=pages-ReadyPage-components-UserOptionsBottomSheet-UserOptionsBottomSheet-stories.160c15f3.iframe.bundle.js.map