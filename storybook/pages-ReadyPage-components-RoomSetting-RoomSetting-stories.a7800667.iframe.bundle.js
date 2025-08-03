"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[715],{"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});const meta={title:"RoomSetting",component:__webpack_require__("./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx").A},기본값={args:{category:"재미"}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    category: '재미'\n  }\n}",...기본값.parameters?.docs?.source}}}},"./src/assets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Td:()=>copyIcon_namespaceObject,pw:()=>crownIcon_namespaceObject,Gq:()=>exitIcon_namespaceObject,sY:()=>settingIcon_namespaceObject,JT:()=>verticalMoreIcon_namespaceObject});__webpack_require__("./src/assets/images/angryDdangkong.webp"),__webpack_require__("./src/assets/images/arrowDown.svg");__webpack_require__.p;__webpack_require__("./src/assets/images/arrowUp.svg"),__webpack_require__("./src/assets/images/closeIcon.png");const copyIcon_namespaceObject=__webpack_require__.p+"static/media/copyIcon.d9b466b1.png",crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp";__webpack_require__.p;__webpack_require__("./src/assets/images/ddangkongTimer.webp"),__webpack_require__("./src/assets/images/errorDdangkong.webp");const exitIcon_namespaceObject=__webpack_require__.p+"static/media/exitIcon.58b68e72.svg",settingIcon_namespaceObject=(__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p+"static/media/settingIcon.489dd149.svg");__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;__webpack_require__("./src/assets/images/spinDdangkong.webp");const verticalMoreIcon_namespaceObject=__webpack_require__.p+"static/media/verticalMoreIcon.7d8c87fe.png"},"./src/components/InviteModal/InviteModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InviteModal_InviteModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),lib=__webpack_require__("./node_modules/react-qr-code/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useClipBoard=()=>{const[isCopied,setIsCopied]=(0,react.useState)(!1);return{isCopied,copyToClipboard:async text=>{await navigator.clipboard.writeText(text),setIsCopied(!0),setTimeout((()=>setIsCopied(!1)),2e3)}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const inviteModalLayout=emotion_react_browser_esm.AH`
  background-color: ${Theme.S.color.peanut300};
`,inviteModalTitle=emotion_react_browser_esm.AH`
  font-size: 1.6rem;
  text-align: center;
`,inviteModalUl=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`,qrcodeWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;
`,inviteModalLi=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: #ffff;
`,inviteModalLinkButton=emotion_react_browser_esm.AH`
  width: 100%;
  padding: 1.6rem 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
`,inviteModalLinkButtonInfoWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
`,inviteModalText=emotion_react_browser_esm.AH`
  overflow: hidden;
  width: 95%;

  font-size: 1.4rem;
  text-overflow: ellipsis;
`,inviteModalCopyIcon=emotion_react_browser_esm.AH`
  width: 10%;
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),url=__webpack_require__("./src/constants/url.ts"),assets=__webpack_require__("./src/assets/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const InviteModal=({isOpen,onClose,returnFocusRef})=>{const{roomUuid}=(0,hooks.z6)(),inviteUrl=(0,url.MY)(roomUuid),{copyToClipboard}=hooks_useClipBoard(),{showToast}=(0,hooks.dj)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,css:inviteModalLayout,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:inviteModalTitle,children:"초대하기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:inviteModalUl,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:qrcodeWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(lib.Ay,{style:{width:"50%",height:"50%"},value:inviteUrl})})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:inviteModalLi,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{copyToClipboard(inviteUrl),showToast("링크가 복사되었습니다!")},css:inviteModalLinkButton,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:inviteModalLinkButtonInfoWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:inviteModalText,children:"초대 링크 복사"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.Td,alt:"복사하기 이미지",css:inviteModalCopyIcon})]})})})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{buttonWidth:"100%",onClick:onClose,children:"닫기"})})]})},InviteModal_InviteModal=InviteModal;InviteModal.__docgenInfo={description:"",methods:[],displayName:"InviteModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/TopicContainer/TopicContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TopicContainer_TopicContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const topicContainerLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,categoryText=emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 1.2rem;
`,topicText=isGamePage=>emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2rem;

  ${!isGamePage&&emotion_react_browser_esm.AH`
    width: 85%;

    text-align: center;
    word-break: keep-all;
  `}
`;var A11yOnly=__webpack_require__("./src/components/common/A11yOnly/A11yOnly.tsx"),routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const TopicContainer=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),isGamePage=location.pathname===routes.b.game(Number(roomId)),screenReaderQuestion=`질문. ${balanceContent.question}.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderQuestion}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,"aria-hidden":!0,children:isGamePage&&balanceContent.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText(isGamePage),"aria-hidden":!0,children:balanceContent.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L4:()=>_RoomSettingModal_RoomSettingModal__WEBPACK_IMPORTED_MODULE_2__.A,WD:()=>_AlertModal_AlertModal__WEBPACK_IMPORTED_MODULE_0__.A,dT:()=>_TopicContainer_TopicContainer__WEBPACK_IMPORTED_MODULE_3__.A,lq:()=>_InviteModal_InviteModal__WEBPACK_IMPORTED_MODULE_1__.A});var _AlertModal_AlertModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/AlertModal/AlertModal.tsx"),_InviteModal_InviteModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/InviteModal/InviteModal.tsx"),_RoomSettingModal_RoomSettingModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/RoomSettingModal/RoomSettingModal.tsx"),_TopicContainer_TopicContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TopicContainer/TopicContainer.tsx")},"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const roomSettingLayout=emotion_react_browser_esm.AH`
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
`;var common=__webpack_require__("./src/components/common/index.ts"),components=__webpack_require__("./src/components/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const RoomSetting=()=>{const returnFocusRef=(0,react.useRef)(null),{roomSetting}=(0,hooks.$G)(),isMaster=(0,hooks.an)(),{showModal}=(0,hooks.hS)(),screenReaderRoomSetting=`\n        방 정보.\n        카테고리 ${roomSetting.category.label}. \n        라운드 ${roomSetting.totalRound}. \n        제한시간 ${roomSetting.timeLimit/1e3}초.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(common.PS,{"aria-live":"polite",children:screenReaderRoomSetting}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"방 설정",css:roomSettingLayout,onClick:isMaster?()=>{showModal(components.L4,{returnFocusRef})}:()=>{},ref:returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingKeyBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"제한 시간"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingValueBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}},"./src/assets/images/angryDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/angryDdangkong.29469aa8.webp"},"./src/assets/images/ddangkongTimer.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/ddangkongTimer.096a16e3.webp"}}]);
//# sourceMappingURL=pages-ReadyPage-components-RoomSetting-RoomSetting-stories.a7800667.iframe.bundle.js.map