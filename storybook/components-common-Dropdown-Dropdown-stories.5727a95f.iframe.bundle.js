"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[259],{"./src/components/common/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본_드랍다운:()=>기본_드랍다운});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Dropdown/Dropdown.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Dropdown",component:_Dropdown__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{text:{description:"드랍다운이 선택된 옵션을 나타냅니다."},optionList:{description:"드랍다운 내에 들어갈 옵션 배열을 넘겨줄 수 있습니다."},handleClick:{description:"옵션을 선택했을 때 동작하는 이벤트 핸들러입니다."}},args:{handleClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},기본_드랍다운={render:()=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("연애");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__.A,{text,optionList:["음식","연애","MBTI","만약에"],handleClick:e=>setText(e.currentTarget.value)})}},__namedExportsOrder=["기본_드랍다운"];기본_드랍다운.parameters={...기본_드랍다운.parameters,docs:{...기본_드랍다운.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [text, setText] = useState('연애');\n    return <Dropdown text={text} optionList={['음식', '연애', 'MBTI', '만약에']} handleClick={e => setText(e.currentTarget.value)} />;\n  }\n}",...기본_드랍다운.parameters?.docs?.source}}}}}]);