(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[635],{"./src/components/common/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본:()=>기본,이미지_버튼과_텍스트_버튼이_있는_모달:()=>이미지_버튼과_텍스트_버튼이_있는_모달,이미지_버튼이_있는_모달:()=>이미지_버튼이_있는_모달,텍스트_버튼이_있는_모달:()=>텍스트_버튼이_있는_모달});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Modal/Modal.tsx"),_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/images/closeIcon.png"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{isOpen:{control:"boolean",default:!0,description:"모달이 열렸는지 여부를 나타냅니다.",table:{type:{summary:"boolean"}}},onClose:{description:"모달을 열고 닫기 위한 핸들러 함수입니다."},style:{control:"object",table:{type:{summary:"object"}},description:"모달 스타일을 자유롭게 커스텀 할 수 있습니다."},position:{control:{type:"radio"},options:["top","bottom","center"],description:"모달 위치를 페이지 상단, 중앙, 하단으로 선택할 수 있습니다."}},args:{onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},기본={parameters:{docs:{description:{story:"기본 모달"}}},args:{isOpen:!0,position:"center"},render:({style,...args})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{style,...args,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{style,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"기본 모달"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.TextButton,{onClick:args.onClose,children:"확인"})]})},이미지_버튼이_있는_모달={args:{isOpen:!0,position:"center"},parameters:{docs:{description:{story:"이미지 버튼이 있는 모달"}}},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen:args.isOpen,position:args.position,onClose:args.onClose,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Header,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.IconButton,{onClick:args.onClose,src:_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_2__})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"이미지 버튼이 있는 모달"})})]})},텍스트_버튼이_있는_모달={args:{isOpen:!0,position:"center"},parameters:{docs:{description:{story:"텍스트 버튼이 있는 모달"}}},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen:args.isOpen,position:args.position,onClose:args.onClose,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Header,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Title,{children:"제목"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"텍스트 버튼이 있는 모달"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Footer,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.TextButton,{onClick:args.onClose,children:"확인"})})]})},이미지_버튼과_텍스트_버튼이_있는_모달={args:{isOpen:!0,position:"center"},parameters:{docs:{description:{story:"이미지 버튼과 텍스트 버튼이 있는 모달"}}},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen:args.isOpen,position:args.position,onClose:args.onClose,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Header,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Title,{children:"제목"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.IconButton,{onClick:args.onClose,src:_assets_images_closeIcon_png__WEBPACK_IMPORTED_MODULE_2__})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Content,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("span",{children:"이미지 버튼과 텍스트 버튼이 있는 모달"})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.Footer,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_1__.A.TextButton,{onClick:args.onClose,children:"확인"})})]})},__namedExportsOrder=["기본","이미지_버튼이_있는_모달","텍스트_버튼이_있는_모달","이미지_버튼과_텍스트_버튼이_있는_모달"];기본.parameters={...기본.parameters,docs:{...기본.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: '기본 모달'\n      }\n    }\n  },\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  render: ({\n    style,\n    ...args\n  }) => {\n    return <Modal style={style} {...args}>\n        <Modal.Content style={style}>\n          <span>기본 모달</span>\n        </Modal.Content>\n        <Modal.TextButton onClick={args.onClose}>확인</Modal.TextButton>\n      </Modal>;\n  }\n}",...기본.parameters?.docs?.source}}},이미지_버튼이_있는_모달.parameters={...이미지_버튼이_있는_모달.parameters,docs:{...이미지_버튼이_있는_모달.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '이미지 버튼이 있는 모달'\n      }\n    }\n  },\n  render: args => <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>\n      <Modal.Header>\n        <Modal.IconButton onClick={args.onClose} src={CloseIcon} />\n      </Modal.Header>\n      <Modal.Content>\n        <span>이미지 버튼이 있는 모달</span>\n      </Modal.Content>\n    </Modal>\n}",...이미지_버튼이_있는_모달.parameters?.docs?.source}}},텍스트_버튼이_있는_모달.parameters={...텍스트_버튼이_있는_모달.parameters,docs:{...텍스트_버튼이_있는_모달.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '텍스트 버튼이 있는 모달'\n      }\n    }\n  },\n  render: args => <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>\n      <Modal.Header>\n        <Modal.Title>제목</Modal.Title>\n      </Modal.Header>\n      <Modal.Content>\n        <span>텍스트 버튼이 있는 모달</span>\n      </Modal.Content>\n      <Modal.Footer>\n        <Modal.TextButton onClick={args.onClose}>확인</Modal.TextButton>\n      </Modal.Footer>\n    </Modal>\n}",...텍스트_버튼이_있는_모달.parameters?.docs?.source}}},이미지_버튼과_텍스트_버튼이_있는_모달.parameters={...이미지_버튼과_텍스트_버튼이_있는_모달.parameters,docs:{...이미지_버튼과_텍스트_버튼이_있는_모달.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    position: 'center'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '이미지 버튼과 텍스트 버튼이 있는 모달'\n      }\n    }\n  },\n  render: args => <Modal isOpen={args.isOpen} position={args.position} onClose={args.onClose}>\n      <Modal.Header>\n        <Modal.Title>제목</Modal.Title>\n        <Modal.IconButton onClick={args.onClose} src={CloseIcon} />\n      </Modal.Header>\n      <Modal.Content>\n        <span>이미지 버튼과 텍스트 버튼이 있는 모달</span>\n      </Modal.Content>\n      <Modal.Footer>\n        <Modal.TextButton onClick={args.onClose}>확인</Modal.TextButton>\n      </Modal.Footer>\n    </Modal>\n}",...이미지_버튼과_텍스트_버튼이_있는_모달.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);