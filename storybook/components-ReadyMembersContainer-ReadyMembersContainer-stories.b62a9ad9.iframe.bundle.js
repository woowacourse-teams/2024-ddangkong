"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[167],{"./src/components/ReadyMembersContainer/ReadyMembersContainer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReadyMembersContainer_stories,기본값:()=>기본값});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout={name:"10zw2ye",styles:"display:flex;flex-direction:column;gap:2rem"},membersContainer=(0,emotion_react_browser_esm.AH)("position:relative;height:25rem;padding:2rem 3rem 0;border-radius:2rem;background-color:",Theme.Sx.color.peanut300,";font-weight:600;font-size:1rem;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}",""),totalNumber={name:"1r35y0",styles:"padding-left:2rem;font-weight:900;font-size:1.2rem"},memberList={name:"10zw2ye",styles:"display:flex;flex-direction:column;gap:2rem"},inviteButton=(0,emotion_react_browser_esm.AH)("display:flex;align-items:center;gap:2rem;width:100%;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.Sx.color.peanut400,";font-size:1rem;",""),memberItem={name:"15umcqw",styles:"display:flex;align-items:center;gap:2rem"},profileBox={name:"1bezcfz",styles:"display:flex;justify-content:center;align-items:center;width:3.6rem;height:3.6rem;border-radius:50%;background-color:white"},memberStatus={name:"mk4uq1",styles:"display:flex;flex:1;justify-content:space-between;align-items:center"};var InviteModal=__webpack_require__("./src/components/common/InviteModal/InviteModal.tsx");const crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.7f63c2cb.png",plusIcon_namespaceObject=__webpack_require__.p+"static/media/plusIcon.e7c40c3c.png";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ReadyMembersContainer=({members})=>{const[isModalOpen,setIsModalOpen]=(0,react.useState)(!1);return members?(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("p",{css:totalNumber,children:["총 인원 ",members.length,"명"]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:memberList,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{css:inviteButton,onClick:()=>{setIsModalOpen(!0)},children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:plusIcon_namespaceObject,alt:"추가 아이콘"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"초대하기"})]})}),members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:crownIcon_namespaceObject,alt:"왕관 아이콘"})]})]},member.memberId)))]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(InviteModal.A,{isOpen:isModalOpen,onClose:()=>{setIsModalOpen(!1)}})]}):(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"데이터가 없습니다."})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer",props:{members:{required:!0,tsType:{name:"Array",elements:[{name:"Member"}],raw:"Member[]"},description:""}}};const meta={component:ReadyMembersContainer_ReadyMembersContainer},기본값={args:{members:__webpack_require__("./src/mocks/data/roomInfo.json").members}},ReadyMembersContainer_stories=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    members: roomInfo.members\n  }\n}",...기본값.parameters?.docs?.source}}}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.Sx.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.Sx.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.Sx.borderRadius.radius30;default:return"0"}}}}]);