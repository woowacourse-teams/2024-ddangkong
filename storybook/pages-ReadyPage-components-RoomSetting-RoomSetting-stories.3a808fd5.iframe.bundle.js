"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[715],{"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});const meta={title:"RoomSetting",component:__webpack_require__("./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx").A},기본값={args:{category:"재미"}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    category: '재미'\n  }\n}",...기본값.parameters?.docs?.source}}}},"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const roomSettingLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 1.6rem 0 2.4rem;
  border-radius: ${(0,getBorderRadius.A)("medium")};

  background-color: ${Theme.S.color.peanut400};
  cursor: pointer;
`,bigTitle=emotion_react_browser_esm.AH`
  width: 10rem;

  font-weight: 800;
  font-size: 2.8rem;
`,smallTitle=emotion_react_browser_esm.AH`
  width: 10rem;

  font-weight: 800;
  font-size: 2rem;
`,roomSettingKey=emotion_react_browser_esm.AH`
  width: 10rem;
`,roomSettingKeyBox=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  width: 80%;

  font-weight: 600;
`,roomSettingValueBox=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;var components=__webpack_require__("./src/components/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const RoomSetting=()=>{const returnFocusRef=(0,react.useRef)(null),{roomSetting}=(0,hooks.$G)(),isMaster=(0,hooks.an)(),{showModal}=(0,hooks.hS)(),screenReaderRoomSetting=`\n        방 정보.\n        카테고리 ${roomSetting.category.label}. \n        라운드 ${roomSetting.totalRound}. \n        제한시간 ${roomSetting.timeLimit/1e3}초.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(components.PS,{"aria-live":"polite",children:screenReaderRoomSetting}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"방 설정",css:roomSettingLayout,onClick:isMaster?()=>{showModal(components.L4,{returnFocusRef})}:()=>{},ref:returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingKeyBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"제한 시간"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingValueBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}}}]);
//# sourceMappingURL=pages-ReadyPage-components-RoomSetting-RoomSetting-stories.3a808fd5.iframe.bundle.js.map