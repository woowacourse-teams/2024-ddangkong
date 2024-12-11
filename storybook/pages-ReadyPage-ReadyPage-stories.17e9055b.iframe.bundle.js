"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[949],{"./src/pages/ReadyPage/ReadyPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReadyPage_stories,게임_대기_화면:()=>게임_대기_화면});var ReadyMembersContainer=__webpack_require__("./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),RoomSetting=__webpack_require__("./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx"),Countdown=__webpack_require__("./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),routes=__webpack_require__("./src/constants/routes.ts");const hooks_useCountdown=({isGameStart})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),[isCountdownStart,setIsCountdownStart]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{isGameStart&&setIsCountdownStart(!0)}),[isGameStart]),{isCountdownStart,goToGame:()=>{navigate(routes.b.game(Number(roomId)),{replace:!0})}}};var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),room=__webpack_require__("./src/apis/room.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts");const hooks_useGameStart=()=>{const{member:{isMaster}}=(0,useGetUserInfo.A)(),{roomId}=(0,dist.g)(),startGameMutation=(0,useMutation.n)({mutationFn:()=>(0,room.zj)(Number(roomId))});return{isMaster,handleGameStart:()=>{isMaster&&startGameMutation.mutate()},...startGameMutation}},StartButton_utils=(isMaster,isPending)=>isMaster&&isPending?"시작중...":isMaster?"시작":"방장이 진행해 주세요";var Button=__webpack_require__("./src/components/common/Button/Button.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const StartButton=()=>{const{isMaster,handleGameStart,isPending,isSuccess}=hooks_useGameStart();return(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{text:StartButton_utils(isMaster,isPending||isSuccess),disabled:!isMaster||isPending||isSuccess,onClick:handleGameStart,bottom:!0})},StartButton_StartButton=StartButton;StartButton.__docgenInfo={description:"",methods:[],displayName:"StartButton"};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const StartButtonContainer=()=>{const{isGameStart}=(0,useGetRoomInfo.$)(),{isCountdownStart,goToGame}=hooks_useCountdown({isGameStart});return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[isCountdownStart&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Countdown.A,{goToGame}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButton_StartButton,{})]})},StartButtonContainer_StartButtonContainer=StartButtonContainer;StartButtonContainer.__docgenInfo={description:"",methods:[],displayName:"StartButtonContainer"};var Content=__webpack_require__("./src/components/layout/Content/Content.tsx");const ReadyPage=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Content.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSetting.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ReadyMembersContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButtonContainer_StartButtonContainer,{})]}),ReadyPage_ReadyPage=ReadyPage;ReadyPage.__docgenInfo={description:"",methods:[],displayName:"ReadyPage"};const ReadyPage_stories={title:"page/ReadyPage",component:ReadyPage_ReadyPage},게임_대기_화면={},__namedExportsOrder=["게임_대기_화면"];게임_대기_화면.parameters={...게임_대기_화면.parameters,docs:{...게임_대기_화면.parameters?.docs,source:{originalSource:"{}",...게임_대기_화면.parameters?.docs?.source}}}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}};var _ref={name:"10t0zvp",styles:"width:32rem;padding:2rem 0"},_ref2={name:"10t0zvp",styles:"width:32rem;padding:2rem 0"},_ref3={name:"1d06pcm",styles:"width:12rem;padding:1.6rem 0"},_ref4={name:"g089ls",styles:"width:6.8rem;padding:0.8rem 0"};const utils_getSizeStyles=size=>{switch(size){case"small":return _ref4;case"medium":return _ref3;case"large":return _ref2;default:return _ref}};var Button_styled_ref={name:"1wsejju",styles:"position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%"};const buttonLayout=({disabled,size,radius,fontSize,bottom})=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;",utils_getSizeStyles(size),";border:none;border-radius:",(0,getBorderRadius.A)(radius),";background-color:",disabled?Theme.S.color.peanut300:Theme.S.color.peanut400,";font-weight:bold;font-size:",utils_getFontSize(fontSize),";cursor:",disabled?"not-allowed":"pointer",";",bottom&&Button_styled_ref,";",""),bottomButtonLayout={name:"o8a8jf",styles:"position:fixed;bottom:0;width:100%"}},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({text,onClick,disabled,size,radius,fontSize,bottom,...props},ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{ref,onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button"}},"./src/components/layout/Content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Content_Content});const contentLayout={name:"1d8r4ee",styles:"display:flex;flex-direction:column;align-items:center;gap:1.6rem;height:88vh;padding:0 2.4rem"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}},"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const roomSettingLayout=(0,emotion_react_browser_esm.AH)("display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:10rem;padding:1.6rem 0 2.4rem;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.S.color.peanut400,";cursor:pointer;",""),bigTitle={name:"1dpu5sy",styles:"width:10rem;font-weight:800;font-size:2.8rem"},smallTitle={name:"1akcmdn",styles:"width:10rem;font-weight:800;font-size:2rem"},roomSettingKey={name:"y9jx00",styles:"width:10rem"},roomSettingKeyBox={name:"uil93d",styles:"display:flex;justify-content:space-between;width:80%;font-weight:600"},roomSettingValueBox={name:"1smtutx",styles:"display:flex;justify-content:space-between;align-items:center;width:80%"};var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),RoomSettingModal=__webpack_require__("./src/components/RoomSettingModal/RoomSettingModal.tsx"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const RoomSetting=()=>{const returnFocusRef=(0,react.useRef)(null),{roomSetting}=(0,useGetRoomInfo.$)(),{member:{isMaster}}=(0,useGetUserInfo.A)(),{showModal}=(0,useModal.A)(),screenReaderRoomSetting=`\n        방 정보.\n        카테고리 ${roomSetting.category.label}. \n        라운드 ${roomSetting.totalRound}. \n        제한시간 ${roomSetting.timeLimit/1e3}초.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{"aria-live":"polite",children:screenReaderRoomSetting}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"방 설정",css:roomSettingLayout,onClick:isMaster?()=>{showModal(RoomSettingModal.A,{returnFocusRef})}:()=>{},ref:returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingKeyBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"제한 시간"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingValueBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}}}]);