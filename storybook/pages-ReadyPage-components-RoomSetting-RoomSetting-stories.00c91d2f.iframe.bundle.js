"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[715],{"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});const meta={title:"RoomSetting",component:__webpack_require__("./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx").A},기본값={args:{category:"재미"}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    category: '재미'\n  }\n}",...기본값.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const a11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/hooks/useGetUserInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.getUserInfo,roomId],queryFn:_apis_room__WEBPACK_IMPORTED_MODULE_0__.ug,staleTime:72e5});return{roomId:data?.roomId||0,roomUuid:data?.roomUuid||"",member:{memberId:data?.member.memberId||0,nickname:data?.member.nickname||"",isMaster:Boolean(data?.member.isMaster&&Number(roomId)===data?.roomId)}}}},"./src/hooks/useIsMaster.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _hooks_useGetUserInfo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/useGetUserInfo.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{member:{isMaster}}=(0,_hooks_useGetUserInfo__WEBPACK_IMPORTED_MODULE_0__.A)();return isMaster}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const roomSettingLayout=emotion_react_browser_esm.AH`
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
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),RoomSettingModal=__webpack_require__("./src/components/RoomSettingModal/RoomSettingModal.tsx"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useIsMaster=__webpack_require__("./src/hooks/useIsMaster.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts");const RoomSetting=()=>{const returnFocusRef=(0,react.useRef)(null),{roomSetting}=(0,useGetRoomInfo.$)(),isMaster=(0,useIsMaster.A)(),{showModal}=(0,useModal.A)(),screenReaderRoomSetting=`\n        방 정보.\n        카테고리 ${roomSetting.category.label}. \n        라운드 ${roomSetting.totalRound}. \n        제한시간 ${roomSetting.timeLimit/1e3}초.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{"aria-live":"polite",children:screenReaderRoomSetting}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"방 설정",css:roomSettingLayout,onClick:isMaster?()=>{showModal(RoomSettingModal.A,{returnFocusRef})}:()=>{},ref:returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingKeyBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"제한 시간"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingValueBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}}}]);
//# sourceMappingURL=pages-ReadyPage-components-RoomSetting-RoomSetting-stories.00c91d2f.iframe.bundle.js.map