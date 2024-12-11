"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[845],{"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});const a11yOnlyLayout={name:"90pyz3",styles:"overflow:hidden;position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;white-space:nowrap;clip:rect(0, 0, 0, 0)"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadyMembersContainer_ReadyMembersContainer});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout={name:"ch4q08",styles:"display:flex;flex-direction:column;gap:2rem;width:100%"},membersContainer=(0,emotion_react_browser_esm.AH)("position:relative;height:25rem;padding:2rem 3rem 0;border-radius:2rem;background-color:",Theme.S.color.peanut300,";font-weight:600;font-size:1rem;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}",""),totalNumber={name:"eu54mg",styles:"display:flex;justify-content:space-between;align-items:center;padding-left:2rem;font-weight:900;font-size:2rem"},memberList={name:"10zw2ye",styles:"display:flex;flex-direction:column;gap:2rem"},inviteButton=(0,emotion_react_browser_esm.AH)("width:12rem;height:4rem;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.S.color.peanut400,";font-weight:700;",""),memberItem={name:"15umcqw",styles:"display:flex;align-items:center;gap:2rem"},profileBox={name:"1bezcfz",styles:"display:flex;justify-content:center;align-items:center;width:3.6rem;height:3.6rem;border-radius:50%;background-color:white"},profileImage={name:"xjt14x",styles:"width:60%"},memberStatus={name:"mk4uq1",styles:"display:flex;flex:1;justify-content:space-between;align-items:center"},crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp";var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp"),A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),InviteModal=__webpack_require__("./src/components/InviteModal/InviteModal.tsx"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ReadyMembersContainer=()=>{const{members,master}=(0,useGetRoomInfo.$)(),{showModal}=(0,useModal.A)(),queryClient=(0,QueryClientProvider.jE)(),returnFocusRef=(0,react.useRef)(null),memberCountMessage=`총 인원 ${members.length}명`;return(0,react.useEffect)((()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.getUserInfo]})}),[master.memberId]),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:totalNumber,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{role:"status",children:memberCountMessage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:inviteButton,onClick:()=>{showModal(InviteModal.A,{returnFocusRef})},ref:returnFocusRef,children:"초대하기"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:memberList,children:members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:`${member.isMaster?"방장":""} ${member.nickname}`}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:sillyDdangkongMedium,alt:"",css:profileImage})}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:crownIcon_namespaceObject,alt:""})]})]},member.memberId)))})})]})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer"}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"}}]);