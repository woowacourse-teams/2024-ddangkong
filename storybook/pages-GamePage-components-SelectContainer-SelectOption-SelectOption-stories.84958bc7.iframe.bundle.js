"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[108],{"./src/pages/GamePage/components/SelectContainer/SelectOption/SelectOption.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,선택_완료된_옵션:()=>선택_완료된_옵션,클릭되지_않은_옵션:()=>클릭되지_않은_옵션,클릭된_옵션:()=>클릭된_옵션});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_SelectOption__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/pages/GamePage/components/SelectContainer/SelectOption/SelectOption.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"SelectOption",args:{handleClickOption:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},component:_SelectOption__WEBPACK_IMPORTED_MODULE_1__.A},클릭되지_않은_옵션={args:{option:{name:"100억 빚 송강",optionId:1},selectedOption:{id:0,isVoted:!1}}},클릭된_옵션={args:{option:{name:"100억 부자 송강호",optionId:2},selectedOption:{id:2,isVoted:!1}}},선택_완료된_옵션={args:{option:{name:"100억 부자 송강호",optionId:2},selectedOption:{id:2,isVoted:!0}}},__namedExportsOrder=["클릭되지_않은_옵션","클릭된_옵션","선택_완료된_옵션"];클릭되지_않은_옵션.parameters={...클릭되지_않은_옵션.parameters,docs:{...클릭되지_않은_옵션.parameters?.docs,source:{originalSource:"{\n  args: {\n    option: {\n      name: '100억 빚 송강',\n      optionId: 1\n    },\n    selectedOption: {\n      id: 0,\n      isVoted: false\n    }\n  }\n}",...클릭되지_않은_옵션.parameters?.docs?.source}}},클릭된_옵션.parameters={...클릭된_옵션.parameters,docs:{...클릭된_옵션.parameters?.docs,source:{originalSource:"{\n  args: {\n    option: {\n      name: '100억 부자 송강호',\n      optionId: 2\n    },\n    selectedOption: {\n      id: 2,\n      isVoted: false\n    }\n  }\n}",...클릭된_옵션.parameters?.docs?.source}}},선택_완료된_옵션.parameters={...선택_완료된_옵션.parameters,docs:{...선택_완료된_옵션.parameters?.docs,source:{originalSource:"{\n  args: {\n    option: {\n      name: '100억 부자 송강호',\n      optionId: 2\n    },\n    selectedOption: {\n      id: 2,\n      isVoted: true\n    }\n  }\n}",...선택_완료된_옵션.parameters?.docs?.source}}}},"./src/pages/GamePage/components/SelectContainer/SelectOption/SelectOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SelectOption_SelectOption});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const SelectOption=({option,selectedOption,handleClickOption})=>{const{id:selectedId,isVoted}=selectedOption;return(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{role:"radio",css:(selected=selectedId===option.optionId,isSelected=isVoted,emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.6rem;
  height: 16.8rem;
  padding: 1.6rem;
  border-radius: 3rem;

  background-color: ${selected?Theme.S.color.peanut500:Theme.S.color.peanut300};
  cursor: ${isSelected?"not-allowed":"pointer"};
  opacity: ${isSelected?Theme.S.opacity.disabled:Theme.S.opacity.default};

  color: #000;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  word-break: keep-all;

  transition: all 0.5s;
  scale: ${selected?1.1:1};
`),onClick:()=>handleClickOption(option.optionId),disabled:isVoted,"aria-checked":selectedId===option.optionId,children:option.name});var selected,isSelected},SelectOption_SelectOption=SelectOption;SelectOption.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{option:{required:!0,tsType:{name:"BalanceContent['firstOption']",raw:"BalanceContent['firstOption']"},description:""},selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedId: number) => void",signature:{arguments:[{type:{name:"number"},name:"selectedId"}],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=pages-GamePage-components-SelectContainer-SelectOption-SelectOption-stories.84958bc7.iframe.bundle.js.map