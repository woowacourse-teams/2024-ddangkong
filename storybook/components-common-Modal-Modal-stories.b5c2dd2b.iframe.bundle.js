(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[635],{"./src/components/common/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본:()=>기본,이미지_버튼과_텍스트_버튼이_있는_모달:()=>이미지_버튼과_텍스트_버튼이_있는_모달,이미지_버튼이_있는_모달:()=>이미지_버튼이_있는_모달,텍스트_버튼이_있는_모달:()=>텍스트_버튼이_있는_모달});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Modal/Modal.tsx"),_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/images/closeIcon.png");const __WEBPACK_DEFAULT_EXPORT__={title:"modal/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{isOpen:{control:"boolean",default:!0,description:"모달이 열렸는지 여부를 나타냅니다.",table:{type:{summary:"boolean"}}},onClose:{description:"모달을 열고 닫기 위한 핸들러 함수입니다."},style:{control:"object",table:{type:{summary:"object"}},description:"모달 스타일을 자유롭게 커스텀 할 수 있습니다."},position:{control:{type:"radio"},options:["top","bottom","center"],description:"모달 위치를 페이지 상단, 중앙, 하단으로 선택할 수 있습니다."}},args:{onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},기본={parameters:{docs:{description:{story:"기본 모달"}}},args:{isOpen:!0,position:"center"},render:({style,...args})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{style,...args,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{style,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"기본 모달"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.TextButton,{onClick:args.onClose,children:"확인"})]})},이미지_버튼이_있는_모달={args:{isOpen:!0,position:"center"},parameters:{docs:{description:{story:"이미지 버튼이 있는 모달"}}},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen:args.isOpen,position:args.position,onClose:args.onClose,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Header,{position:"center",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.IconButton,{onClick:args.onClose,src:_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_2__})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"이미지 버튼이 있는 모달"})})]})},텍스트_버튼이_있는_모달={args:{isOpen:!0,position:"center"},parameters:{docs:{description:{story:"텍스트 버튼이 있는 모달"}}},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen:args.isOpen,position:args.position,onClose:args.onClose,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Header,{position:"left",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Title,{children:"제목"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"텍스트 버튼이 있는 모달"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Footer,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.TextButton,{onClick:args.onClose,children:"확인"})})]})},이미지_버튼과_텍스트_버튼이_있는_모달={args:{isOpen:!0,position:"center"},parameters:{docs:{description:{story:"이미지 버튼과 텍스트 버튼이 있는 모달"}}},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen:args.isOpen,position:args.position,onClose:args.onClose,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Header,{position:"center",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Title,{children:"제목"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.IconButton,{onClick:args.onClose,src:_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_2__})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"이미지 버튼과 텍스트 버튼이 있는 모달"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Footer,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.TextButton,{onClick:args.onClose,children:"확인"})})]})},__namedExportsOrder=["기본","이미지_버튼이_있는_모달","텍스트_버튼이_있는_모달","이미지_버튼과_텍스트_버튼이_있는_모달"];기본.parameters={...기본.parameters,docs:{...기본.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: '기본 모달'\n      }\n    }\n  },\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  render: ({\n    style,\n    ...args\n  }) => {\n    return <Modal style={style} {...args}>\n        <Modal.Content style={style}>\n          <span>기본 모달</span>\n        </Modal.Content>\n        <Modal.TextButton onClick={args.onClose}>확인</Modal.TextButton>\n      </Modal>;\n  }\n}",...기본.parameters?.docs?.source}}},이미지_버튼이_있는_모달.parameters={...이미지_버튼이_있는_모달.parameters,docs:{...이미지_버튼이_있는_모달.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '이미지 버튼이 있는 모달'\n      }\n    }\n  },\n  render: args => <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>\n      <Modal.Header position=\"center\">\n        <Modal.IconButton onClick={args.onClose} src={CloseIcon} />\n      </Modal.Header>\n      <Modal.Content>\n        <span>이미지 버튼이 있는 모달</span>\n      </Modal.Content>\n    </Modal>\n}",...이미지_버튼이_있는_모달.parameters?.docs?.source}}},텍스트_버튼이_있는_모달.parameters={...텍스트_버튼이_있는_모달.parameters,docs:{...텍스트_버튼이_있는_모달.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '텍스트 버튼이 있는 모달'\n      }\n    }\n  },\n  render: args => <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>\n      <Modal.Header position=\"left\">\n        <Modal.Title>제목</Modal.Title>\n      </Modal.Header>\n      <Modal.Content>\n        <span>텍스트 버튼이 있는 모달</span>\n      </Modal.Content>\n      <Modal.Footer>\n        <Modal.TextButton onClick={args.onClose}>확인</Modal.TextButton>\n      </Modal.Footer>\n    </Modal>\n}",...텍스트_버튼이_있는_모달.parameters?.docs?.source}}},이미지_버튼과_텍스트_버튼이_있는_모달.parameters={...이미지_버튼과_텍스트_버튼이_있는_모달.parameters,docs:{...이미지_버튼과_텍스트_버튼이_있는_모달.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '이미지 버튼과 텍스트 버튼이 있는 모달'\n      }\n    }\n  },\n  render: args => <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>\n      <Modal.Header position=\"center\">\n        <Modal.Title>제목</Modal.Title>\n        <Modal.IconButton onClick={args.onClose} src={CloseIcon} />\n      </Modal.Header>\n      <Modal.Content>\n        <span>이미지 버튼과 텍스트 버튼이 있는 모달</span>\n      </Modal.Content>\n      <Modal.Footer>\n        <Modal.TextButton onClick={args.onClose}>확인</Modal.TextButton>\n      </Modal.Footer>\n    </Modal>\n}",...이미지_버튼과_텍스트_버튼이_있는_모달.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Modal_Modal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const hooks_useModalEscClose=(isOpen,onModalClose)=>{(0,react.useEffect)((()=>{const handleKeyDown=event=>{isOpen&&"Escape"===event.key&&onModalClose()};return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[isOpen,onModalClose])};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const modalBackdropLayout=emotion_react_browser_esm.AH`
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
`;var closeIcon=__webpack_require__("./src/assets/images/closeIcon.png"),useFocus=__webpack_require__("./src/hooks/useFocus.ts");const Modal=({children,isOpen,onClose,returnFocusRef,position="center",...restProps})=>{const modalRef=(0,react.useRef)(null),focusRef=(0,useFocus.A)();hooks_useModalEscClose(isOpen,onClose);const handleOutsideClick=event=>{isOpen&&modalRef.current&&!modalRef.current.contains(event.target)&&onClose()};if((0,react.useEffect)((()=>()=>{returnFocusRef?.current&&returnFocusRef.current.focus()}),[returnFocusRef?.current]),!isOpen)return null;const modalContent=(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{tabIndex:0,ref:focusRef,role:"dialog","aria-modal":!0,css:modalBackdropLayout,onClick:handleOutsideClick,onKeyDown:handleOutsideClick,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalContentWrapper({position}),ref:modalRef,...restProps,children})});return react_dom.createPortal(modalContent,document.body)};Modal.Header=({position="center",children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:modalHeaderLayout,...restProps,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalHeaderEmptyBox(position)}),children]}),Modal.Title=({fontSize,fontWeight,children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:modalTitle({fontSize,fontWeight}),...restProps,children}),Modal.IconButton=({type="button",src=closeIcon,imgSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalIconButton({imgSize}),type,...restProps,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src,alt:"닫기 버튼"})}),Modal.TextButton=({type="button",onConfirm,buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalTextButton({buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor}),type,onClick:onConfirm,...restProps}),Modal.Content=({children,fontSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:modalContentLayout({fontSize:"1.4rem"}),...restProps,children}),Modal.Input=({...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{css:modalInputLayout,...restProps}),Modal.Footer=({children,buttonPosition,buttonGap,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalFooter({buttonPosition,buttonGap}),...restProps,children});const Modal_Modal=Modal},"./src/hooks/useFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const focusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{focusRef.current&&focusRef.current.focus()}),[]),focusRef}},"./src/assets/images/closeIcon.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/closeIcon.cc1a712e.png"}}]);
//# sourceMappingURL=components-common-Modal-Modal-stories.b5c2dd2b.iframe.bundle.js.map