"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[895],{"./src/components/common/BottomSheet/BottomSheet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본:()=>기본});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"BottomSheet/BottomSheet",component:__webpack_require__("./src/components/common/BottomSheet/BottomSheet.tsx").A,argTypes:{isOpen:{control:"boolean",description:"바텀 시트가 열렸는지 여부를 나타냅니다.",table:{type:{summary:"boolean"}}},onClose:{description:"바텀 시트를 닫기 위한 핸들러 함수입니다."},children:{control:"text",description:"바텀 시트 내부에 렌더링될 내용입니다.",table:{type:{summary:"React.ReactNode"}}}},args:{onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},기본={parameters:{docs:{description:{story:"기본 바텀 시트"}}},args:{isOpen:!0,children:"바텀 시트 내용입니다.",onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},__namedExportsOrder=["기본"];기본.parameters={...기본.parameters,docs:{...기본.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: '기본 바텀 시트'\n      }\n    }\n  },\n  args: {\n    isOpen: true,\n    children: '바텀 시트 내용입니다.',\n    onClose: fn()\n  }\n}",...기본.parameters?.docs?.source}}}},"./src/components/common/BottomSheet/BottomSheet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomSheet_BottomSheet});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const slideUp=emotion_react_browser_esm.i7`
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
`,({children,isOpen,onClose})=>{const contentRef=(0,react.useRef)(null);if((({isOpen,onClose,ref})=>{(0,react.useEffect)((()=>{const handleKeyDown=e=>{"Escape"===e.key&&onClose()},handleClickOutside=e=>{ref.current&&!ref.current.contains(e.target)&&onClose()};return document.addEventListener("keydown",handleKeyDown),document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("keydown",handleKeyDown),document.removeEventListener("mousedown",handleClickOutside)}}),[isOpen,onClose,ref])})({isOpen,onClose,ref:contentRef}),!isOpen)return null;const bottomSheetContent=(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:bottomSheetBackdropLayout,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{ref:contentRef,css:bottomSheetContentWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:bottomSheetHeaderLayout,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{type:"button",css:bottomSheetHandle})}),children]})});return(0,react_dom.createPortal)(bottomSheetContent,document.body)})}}]);
//# sourceMappingURL=components-common-BottomSheet-BottomSheet-stories.625ac9d7.iframe.bundle.js.map