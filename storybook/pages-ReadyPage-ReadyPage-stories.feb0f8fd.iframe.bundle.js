"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[949],{"./src/pages/ReadyPage/ReadyPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReadyPage_stories,게임_대기_화면:()=>게임_대기_화면});var Content=__webpack_require__("./src/components/layout/Content/Content.tsx"),ReadyMembersContainer=__webpack_require__("./src/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),RoomSetting=__webpack_require__("./src/components/RoomSetting/RoomSetting.tsx"),Countdown=__webpack_require__("./src/components/StartButtonContainer/Countdown/Countdown.tsx"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),room=__webpack_require__("./src/apis/room.ts"),AlertModal=__webpack_require__("./src/components/common/AlertModal/AlertModal.tsx"),useModal=__webpack_require__("./src/hooks/useModal.ts"),useToast=__webpack_require__("./src/hooks/useToast.ts"),atom=__webpack_require__("./src/recoil/atom.ts"),utils_error=__webpack_require__("./src/utils/error.ts");var Button=__webpack_require__("./src/components/common/Button/Button.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const StartButton=()=>{const{memberInfo,handleGameStart}=(()=>{const[memberInfo,setMemberInfo]=(0,es.L4)(atom.u),{roomId}=(0,dist.g)(),{show}=(0,useToast.A)(),{show:showModal}=(0,useModal.A)(),startGameMutation=(0,useMutation.n)({mutationFn:()=>(0,room.zj)(Number(roomId)),onError:error=>{error instanceof utils_error.D?show(error.message):showModal(AlertModal.A,{title:"게임 시작 에러",message:error.message})},networkMode:"always",throwOnError:error=>{return(status=error.status)>=500&&555!==status;var status}});return{memberInfo,handleGameStart:()=>{memberInfo.isMaster&&startGameMutation.mutate()},setMemberInfo}})();return(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{text:memberInfo.isMaster?"시작":"방장이 시작해 주세요",disabled:!memberInfo.isMaster,onClick:handleGameStart,bottom:!0})},StartButton_StartButton=StartButton;StartButton.__docgenInfo={description:"",methods:[],displayName:"StartButton"};var react=__webpack_require__("./node_modules/react/index.js"),routes=__webpack_require__("./src/constants/routes.ts");const hooks_useCountdown=({isGameStart})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),[isCountdownStart,setIsCountdownStart]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{isGameStart&&setIsCountdownStart(!0)}),[isGameStart]),{isCountdownStart,goToGame:()=>{navigate(routes.b.game(Number(roomId)))}}};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const StartButtonContainer=()=>{const{isGameStart}=(0,useGetRoomInfo.$)(),{isCountdownStart,goToGame}=hooks_useCountdown({isGameStart});return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[isCountdownStart&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Countdown.A,{goToGame}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButton_StartButton,{})]})},StartButtonContainer_StartButtonContainer=StartButtonContainer;StartButtonContainer.__docgenInfo={description:"",methods:[],displayName:"StartButtonContainer"};const ReadyPage=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Content.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSetting.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ReadyMembersContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButtonContainer_StartButtonContainer,{})]}),ReadyPage_ReadyPage=ReadyPage;ReadyPage.__docgenInfo={description:"",methods:[],displayName:"ReadyPage"};const ReadyPage_stories={title:"page/ReadyPage",component:ReadyPage_ReadyPage},게임_대기_화면={},__namedExportsOrder=["게임_대기_화면"];게임_대기_화면.parameters={...게임_대기_화면.parameters,docs:{...게임_대기_화면.parameters?.docs,source:{originalSource:"{}",...게임_대기_화면.parameters?.docs?.source}}}},"./src/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var es=__webpack_require__("./node_modules/recoil/es/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const RoomSettingLayout=(0,emotion_react_browser_esm.AH)("display:flex;justify-content:space-evenly;align-items:center;width:100%;height:10rem;padding:1.6rem 0 2.4rem;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.S.color.peanut400,";cursor:pointer;",""),roomSettingBox={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},bigTitle={name:"whr9hd",styles:"font-weight:800;font-size:2.8rem"},smallTitle={name:"9mlb8s",styles:"font-weight:800;font-size:2rem"},roomSettingLabel={name:"16ceglb",styles:"font-weight:600"};const a11yOnlyLayout={name:"90pyz3",styles:"overflow:hidden;position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;white-space:nowrap;clip:rect(0, 0, 0, 0)"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const A11yOnly=({as,role="text",children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,role,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:"",defaultValue:{value:"'text'",computed:!1}}}};var RoomSettingModal=__webpack_require__("./src/components/common/RoomSettingModal/RoomSettingModal.tsx"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),atom=__webpack_require__("./src/recoil/atom.ts");const RoomSetting=()=>{const{roomSetting}=(0,useGetRoomInfo.$)(),{isMaster}=(0,es.vc)(atom.u),{show}=(0,useModal.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(a11yOnly_A11yOnly,{"aria-label":`\n      방 정보\n      라운드 ${roomSetting.totalRound} \n      카테고리 ${roomSetting.category.label} \n      타이머 ${roomSetting.timeLimit/1e3}초`,"aria-live":"polite"}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"카테고리 설정",css:RoomSettingLayout,onClick:isMaster?()=>{show(RoomSettingModal.A)}:()=>{},children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingLabel,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingLabel,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingLabel,children:"타이머"}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}},"./src/components/common/AlertModal/AlertModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlertModal_AlertModal});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const alertModalTitle=(0,emotion_react_browser_esm.AH)(Theme.S.typography.headline3,";",""),messageContainer={name:"1azakc",styles:"text-align:center"},alertText={name:"255c6r",styles:"word-break:keep-all"};var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const AlertModal=({isOpen,onClose,onConfirm,message,title})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:alertModalTitle,children:title||"알림"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{css:messageContainer,children:message&&message.split("\n").map((text=>(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:alertText,children:text}),(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})]},text)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:()=>{onConfirm&&onConfirm(),onClose()},buttonWidth:"60%",children:"확인"})})]}),AlertModal_AlertModal=AlertModal;AlertModal.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},message:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}};var _ref={name:"10t0zvp",styles:"width:32rem;padding:2rem 0"},_ref2={name:"10t0zvp",styles:"width:32rem;padding:2rem 0"},_ref3={name:"1d06pcm",styles:"width:12rem;padding:1.6rem 0"},_ref4={name:"g089ls",styles:"width:6.8rem;padding:0.8rem 0"};const utils_getSizeStyles=size=>{switch(size){case"small":return _ref4;case"medium":return _ref3;case"large":return _ref2;default:return _ref}};var Button_styled_ref={name:"1wsejju",styles:"position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%"};const buttonLayout=({disabled,size,radius,fontSize,bottom})=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;",utils_getSizeStyles(size),";border:none;border-radius:",(0,getBorderRadius.A)(radius),";background-color:",disabled?Theme.S.color.peanut300:Theme.S.color.peanut400,";font-weight:bold;font-size:",utils_getFontSize(fontSize),";cursor:",disabled?"not-allowed":"pointer",";",bottom&&Button_styled_ref,";",""),bottomButtonLayout={name:"o8a8jf",styles:"position:fixed;bottom:0;width:100%"}},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Button=({text,onClick,disabled,size,radius,fontSize,bottom,...props})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text}),__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},bottom:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes"]}},"./src/components/layout/Content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Content_Content});const contentLayout={name:"v9f8bz",styles:"display:flex;flex-direction:column;align-items:center;gap:1.6rem;height:85vh;padding:0 2.4rem"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}}}]);