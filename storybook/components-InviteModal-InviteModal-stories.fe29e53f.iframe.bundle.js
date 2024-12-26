"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[83],{"./src/components/InviteModal/InviteModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,초대_모달:()=>초대_모달});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"modal/InviteModal",component:__webpack_require__("./src/components/InviteModal/InviteModal.tsx").A,argTypes:{isOpen:{control:"boolean",default:!0,description:"모달이 열렸는지 여부를 나타냅니다.",table:{type:{summary:"boolean"}}},onClose:{description:"모달을 열고 닫기 위한 핸들러 함수입니다."}},args:{onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},초대_모달={parameters:{docs:{description:{story:"초대 모달"}}},args:{isOpen:!0}},__namedExportsOrder=["초대_모달"];초대_모달.parameters={...초대_모달.parameters,docs:{...초대_모달.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: '초대 모달'\n      }\n    }\n  },\n  args: {\n    isOpen: true\n  }\n}",...초대_모달.parameters?.docs?.source}}}},"./src/assets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Td:()=>copyIcon_namespaceObject,pw:()=>crownIcon_namespaceObject,Gq:()=>exitIcon_namespaceObject,sY:()=>settingIcon_namespaceObject,cI:()=>sillyDdangkongMedium});__webpack_require__("./src/assets/images/angryDdangkong.webp"),__webpack_require__("./src/assets/images/arrowDown.svg");__webpack_require__.p;__webpack_require__("./src/assets/images/arrowUp.svg"),__webpack_require__("./src/assets/images/closeIcon.png");const copyIcon_namespaceObject=__webpack_require__.p+"static/media/copyIcon.d9b466b1.png",crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp";__webpack_require__.p;__webpack_require__("./src/assets/images/ddangkongTimer.webp"),__webpack_require__("./src/assets/images/errorDdangkong.webp");const exitIcon_namespaceObject=__webpack_require__.p+"static/media/exitIcon.58b68e72.svg",settingIcon_namespaceObject=(__webpack_require__.p,__webpack_require__.p,__webpack_require__.p+"static/media/settingIcon.489dd149.svg");__webpack_require__.p;var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp");__webpack_require__.p;__webpack_require__("./src/assets/images/spinDdangkong.webp")},"./src/components/InviteModal/InviteModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InviteModal_InviteModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),lib=__webpack_require__("./node_modules/react-qr-code/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useClipBoard=()=>{const[isCopied,setIsCopied]=(0,react.useState)(!1);return{isCopied,copyToClipboard:async text=>{await navigator.clipboard.writeText(text),setIsCopied(!0),setTimeout((()=>setIsCopied(!1)),2e3)}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const inviteModalLayout=emotion_react_browser_esm.AH`
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
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),url=__webpack_require__("./src/constants/url.ts"),assets=__webpack_require__("./src/assets/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const InviteModal=({isOpen,onClose,returnFocusRef})=>{const{roomUuid}=(0,hooks.z6)(),inviteUrl=(0,url.MY)(roomUuid),{copyToClipboard}=hooks_useClipBoard(),{showToast}=(0,hooks.dj)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,css:inviteModalLayout,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:inviteModalTitle,children:"초대하기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:inviteModalUl,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:qrcodeWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(lib.Ay,{style:{width:"50%",height:"50%"},value:inviteUrl})})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:inviteModalLi,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{copyToClipboard(inviteUrl),showToast("링크가 복사되었습니다!")},css:inviteModalLinkButton,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:inviteModalLinkButtonInfoWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:inviteModalText,children:"초대 링크 복사"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.Td,alt:"복사하기 이미지",css:inviteModalCopyIcon})]})})})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{buttonWidth:"100%",onClick:onClose,children:"닫기"})})]})},InviteModal_InviteModal=InviteModal;InviteModal.__docgenInfo={description:"",methods:[],displayName:"InviteModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/assets/images/angryDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/angryDdangkong.29469aa8.webp"},"./src/assets/images/arrowDown.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/arrowDown.4cfc739e.svg"},"./src/assets/images/arrowUp.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/arrowUp.ffc96fce.svg"},"./src/assets/images/ddangkongTimer.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/ddangkongTimer.096a16e3.webp"},"./src/assets/images/errorDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/errorDdangkong.e152d36b.webp"},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"},"./src/assets/images/spinDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/spinDdangkong.f92ff614.webp"}}]);
//# sourceMappingURL=components-InviteModal-InviteModal-stories.fe29e53f.iframe.bundle.js.map