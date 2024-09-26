"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[623],{"./src/components/CategoryContainer/CategoryContainer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});const meta={title:"CategoryContainer",component:__webpack_require__("./src/components/CategoryContainer/CategoryContainer.tsx").A},기본값={args:{category:"재미"}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    category: '재미'\n  }\n}",...기본값.parameters?.docs?.source}}}},"./src/components/CategoryContainer/CategoryContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CategoryContainer_CategoryContainer});var es=__webpack_require__("./node_modules/recoil/es/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const categoryContainerLayout=(0,emotion_react_browser_esm.AH)("display:flex;justify-content:space-evenly;align-items:center;width:100%;height:10rem;padding:1.6rem 0 2.4rem;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.S.color.peanut400,";cursor:pointer;",""),roomSettingBox={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},bigTitle={name:"whr9hd",styles:"font-weight:800;font-size:2.8rem"},smallTitle={name:"9mlb8s",styles:"font-weight:800;font-size:2rem"},roomSettingLabel={name:"16ceglb",styles:"font-weight:600"};var RoomSettingModal=__webpack_require__("./src/components/common/RoomSettingModal/RoomSettingModal.tsx"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),atom=__webpack_require__("./src/recoil/atom.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const CategoryContainer=()=>{const{roomSetting}=(0,useGetRoomInfo.$)(),{isMaster}=(0,es.vc)(atom.u),{show}=(0,useModal.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"카테고리 설정",css:categoryContainerLayout,onClick:isMaster?()=>{show(RoomSettingModal.A)}:()=>{},children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingLabel,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingLabel,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingLabel,children:"타이머"}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})},CategoryContainer_CategoryContainer=CategoryContainer;CategoryContainer.__docgenInfo={description:"",methods:[],displayName:"CategoryContainer"}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./src/recoil/atom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>roomUuidState,u:()=>memberInfoState});var recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js");const memberInfoState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.eU)({key:"memberInfo",default:{memberId:null,nickname:null,isMaster:!1}}),roomUuidState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.eU)({key:"roomUuid",default:""})},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}}}]);