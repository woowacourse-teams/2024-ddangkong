(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[399],{"./src/components/AlertModal/AlertModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,알림_모달:()=>알림_모달});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_AlertModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AlertModal/AlertModal.tsx"),_common_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Button/Button.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"modal/AlertModal",component:_AlertModal__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{isOpen:{control:"boolean",default:!0,description:"모달이 열렸는지 여부를 나타냅니다.",table:{type:{summary:"boolean"}}},onClose:{description:"모달을 닫기 위한 핸들러 함수입니다."},onConfirm:{description:"확인을 통해 다음 동작을 수행하는 핸들러 함수입니다."}},args:{onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onConfirm:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},알림_모달={parameters:{docs:{description:{story:"안내 모달"}}},render:()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FK,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_common_Button_Button__WEBPACK_IMPORTED_MODULE_3__.A,{text:"알림 모달 열기",onClick:()=>setIsOpen(!0)}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_AlertModal__WEBPACK_IMPORTED_MODULE_2__.A,{isOpen,onClose:()=>setIsOpen(!1),title:"알림 모달 제목",message:"대화를 충분히 나누셨나요?\n확인을 누르면 다음 라운드로 진행됩니다 :)"})]})}},__namedExportsOrder=["알림_모달"];알림_모달.parameters={...알림_모달.parameters,docs:{...알림_모달.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: '안내 모달'\n      }\n    }\n  },\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <>\n        <Button text=\"알림 모달 열기\" onClick={() => setIsOpen(true)} />\n        <AlertModal isOpen={isOpen} onClose={() => setIsOpen(false)} title=\"알림 모달 제목\" message={'대화를 충분히 나누셨나요?\\n확인을 누르면 다음 라운드로 진행됩니다 :)'} />\n      </>;\n  }\n}",...알림_모달.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/AlertModal/AlertModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>AlertModal_AlertModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const alertModalTitle=emotion_react_browser_esm.AH`
  ${Theme.S.typography.headline3}
`,messageContainer=emotion_react_browser_esm.AH`
  text-align: center;
`,alertText=emotion_react_browser_esm.AH`
  word-break: keep-all;
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx");const AlertModal=({isOpen,onClose,onConfirm,message,title,returnFocusRef})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:alertModalTitle,children:title||"알림"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{css:messageContainer,children:message&&message.split("\n").map((text=>(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:alertText,children:text}),(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})]},text)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:()=>{onConfirm&&onConfirm(),onClose()},buttonWidth:"60%",children:"확인"})})]}),AlertModal_AlertModal=AlertModal;AlertModal.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},message:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}},utils_getSizeStyles=size=>{switch(size){case"small":return emotion_react_browser_esm.AH`
        width: 6.8rem;
        padding: 0.8rem 0;
      `;case"medium":return emotion_react_browser_esm.AH`
        width: 12rem;
        padding: 1.6rem 0;
      `;default:return emotion_react_browser_esm.AH`
        width: 32rem;
        padding: 2rem 0;
      `}},buttonLayout=({disabled,size,radius,fontSize,bottom})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;

  ${utils_getSizeStyles(size)};

  border: none;
  border-radius: ${(0,getBorderRadius.A)(radius)};

  background-color: ${disabled?Theme.S.color.peanut300:Theme.S.color.peanut400};

  font-weight: bold;
  font-size: ${utils_getFontSize(fontSize)};
  cursor: ${disabled?"not-allowed":"pointer"};

  ${bottom&&emotion_react_browser_esm.AH`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  `}
`,bottomButtonLayout=emotion_react_browser_esm.AH`
  position: fixed;
  bottom: 0;
  width: 100%;
`},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({text,onClick,disabled,size,radius,fontSize,bottom,...props},ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{ref,onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button"}},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Modal_Modal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const hooks_useModalEscClose=(isOpen,onModalClose)=>{(0,react.useEffect)((()=>{const handleKeyDown=event=>{isOpen&&"Escape"===event.key&&onModalClose()};return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[isOpen,onModalClose])};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const modalBackdropLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  background-color: rgb(0 0 0 / 50%);
  inset: 0;
`,modalContentWrapper=({position})=>emotion_react_browser_esm.AH`
  display: flex;
  position: fixed;
  left: 50%;
  flex-direction: column;
  gap: 1.6rem;
  width: 28rem;
  height: fit-content;
  max-height: 70vh;
  min-height: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
  padding: 2.4rem;
  border: none;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;
  box-sizing: border-box;

  ${(()=>{switch(position){case"top":return"\n          top: 0;\n          transform: translate(-50%, 0%);\n        ";case"bottom":return"\n          bottom: 0;\n          transform: translate(-50%, 0%);\n        ";default:return"\n          top: 50%;\n          transform: translate(-50%, -50%);\n        "}})()}
`,modalHeaderLayout=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  font-weight: bold;
`,modalHeaderEmptyBox=position=>emotion_react_browser_esm.AH`
  display: ${"center"===position?"block":"none"};
  width: 1.6rem;
`,modalTitle=({fontSize="bold",fontWeight="2rem"})=>emotion_react_browser_esm.AH`
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`,modalIconButton=({imgSize="1.6rem"})=>emotion_react_browser_esm.AH`
  width: ${imgSize};
  height: ${imgSize};
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }

  img {
    width: 100%;
  }
`,modalTextButton=({buttonWidth="100%",buttonHeight="100%",fontSize="1.6rem",backgroundColor=Theme.S.color.peanut400,fontColor="#000000"})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${buttonWidth};
  height: ${buttonHeight};
  padding: 1rem;
  border: none;
  border-radius: 0.8rem;

  background-color: ${backgroundColor};

  color: ${fontColor};
  font-weight: bold;
  font-size: ${fontSize};

  &:focus {
    outline: none;
  }
`,modalContentLayout=({fontSize="1.2rem"})=>emotion_react_browser_esm.AH`
  * {
    box-sizing: border-box;
  }

  font-size: ${fontSize};
`,modalInputLayout=emotion_react_browser_esm.AH`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #000;
`,modalFooter=({buttonPosition="center",buttonGap="1.2rem"})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: ${buttonPosition};
  gap: ${buttonGap};
`;var closeIcon=__webpack_require__("./src/assets/images/closeIcon.png"),useFocus=__webpack_require__("./src/hooks/useFocus.ts");const Modal=({children,isOpen,onClose,returnFocusRef,position="center",...restProps})=>{const modalRef=(0,react.useRef)(null),focusRef=(0,useFocus.A)();hooks_useModalEscClose(isOpen,onClose);const handleOutsideClick=event=>{isOpen&&modalRef.current&&!modalRef.current.contains(event.target)&&onClose()};if((0,react.useEffect)((()=>()=>{returnFocusRef?.current&&returnFocusRef.current.focus()}),[returnFocusRef?.current]),!isOpen)return null;const modalContent=(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{tabIndex:0,ref:focusRef,role:"dialog","aria-modal":!0,css:modalBackdropLayout,onClick:handleOutsideClick,onKeyDown:handleOutsideClick,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalContentWrapper({position}),ref:modalRef,...restProps,children})});return react_dom.createPortal(modalContent,document.body)};Modal.Header=({position="center",children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:modalHeaderLayout,...restProps,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalHeaderEmptyBox(position)}),children]}),Modal.Title=({fontSize,fontWeight,children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:modalTitle({fontSize,fontWeight}),...restProps,children}),Modal.IconButton=({type="button",src=closeIcon,imgSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalIconButton({imgSize}),type,...restProps,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src,alt:"닫기 버튼"})}),Modal.TextButton=({type="button",onConfirm,buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalTextButton({buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor}),type,onClick:onConfirm,...restProps}),Modal.Content=({children,fontSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:modalContentLayout({fontSize:"1.4rem"}),...restProps,children}),Modal.Input=({...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{css:modalInputLayout,...restProps}),Modal.Footer=({children,buttonPosition,buttonGap,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalFooter({buttonPosition,buttonGap}),...restProps,children});const Modal_Modal=Modal},"./src/hooks/useFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const focusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{focusRef.current&&focusRef.current.focus()}),[]),focusRef}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}},"./src/assets/images/closeIcon.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/closeIcon.cc1a712e.png"}}]);
//# sourceMappingURL=components-AlertModal-AlertModal-stories.f7737e9d.iframe.bundle.js.map