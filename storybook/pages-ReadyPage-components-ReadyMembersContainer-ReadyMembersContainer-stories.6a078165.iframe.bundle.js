"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[379],{"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});var _ReadyMembersContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),_mocks_data_roomInfo_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/mocks/data/roomInfo.json");const meta={title:"ReadyMembersContainer",component:_ReadyMembersContainer__WEBPACK_IMPORTED_MODULE_0__.A},기본값={args:{members:_mocks_data_roomInfo_json__WEBPACK_IMPORTED_MODULE_1__.members}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    members: roomInfo.members\n  }\n}",...기본값.parameters?.docs?.source}}}},"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadyMembersContainer_ReadyMembersContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,membersContainer=emotion_react_browser_esm.AH`
  position: relative;
  height: 25rem;
  padding: 2rem 3rem 0;
  border-radius: 2rem;

  background-color: ${Theme.S.color.peanut300};

  font-weight: 600;
  font-size: 1rem;

  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`,totalNumber=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;

  font-weight: 900;
  font-size: 2rem;
`,memberList=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,inviteButton=emotion_react_browser_esm.AH`
  width: 12rem;
  height: 4rem;
  border-radius: ${(0,getBorderRadius.A)("medium")};

  background-color: ${Theme.S.color.peanut400};

  font-weight: 700;
`,memberItem=emotion_react_browser_esm.AH`
  display: flex;
  align-items: center;
  gap: 2rem;
`,profileBox=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;

  background-color: white;
`,profileImage=emotion_react_browser_esm.AH`
  width: 60%;
`,memberStatus=emotion_react_browser_esm.AH`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;var common=__webpack_require__("./src/components/common/index.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts"),assets=__webpack_require__("./src/assets/index.ts"),components=__webpack_require__("./src/components/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const ReadyMembersContainer=()=>{const{members,master}=(0,hooks.$G)(),{showModal}=(0,hooks.hS)(),queryClient=(0,QueryClientProvider.jE)(),returnFocusRef=(0,react.useRef)(null),memberCountMessage=`총 인원 ${members.length}명`;return(0,react.useEffect)((()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.getUserInfo]})}),[master.memberId,queryClient]),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:totalNumber,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{role:"status",children:memberCountMessage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:inviteButton,onClick:()=>{showModal(components.lq,{returnFocusRef})},ref:returnFocusRef,children:"초대하기"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:memberList,children:members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(common.PS,{children:`${member.isMaster?"방장":""} ${member.nickname}`}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.cI,alt:"",css:profileImage})}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.pw,alt:""})]})]},member.memberId)))})})]})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer"}}}]);
//# sourceMappingURL=pages-ReadyPage-components-ReadyMembersContainer-ReadyMembersContainer-stories.6a078165.iframe.bundle.js.map