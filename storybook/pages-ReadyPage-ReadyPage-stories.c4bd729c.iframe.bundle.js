"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[949],{"./src/pages/ReadyPage/ReadyPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReadyPage_stories,게임_대기_화면:()=>게임_대기_화면});var CategoryContainer=__webpack_require__("./src/components/CategoryContainer/CategoryContainer.tsx"),AsyncErrorBoundary=__webpack_require__("./src/components/common/ErrorBoundary/AsyncErrorBoundary.tsx"),ReadySkeleton=__webpack_require__("./src/components/common/Skeleton/ReadySkeleton/ReadySkeleton.tsx"),Content=__webpack_require__("./src/components/layout/Content/Content.tsx"),ReadyMembersContainer=__webpack_require__("./src/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),Countdown=__webpack_require__("./src/components/StartButtonContainer/Countdown/Countdown.tsx"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),room=__webpack_require__("./src/apis/room.ts"),AlertModal=__webpack_require__("./src/components/common/AlertModal/AlertModal.tsx"),useModal=__webpack_require__("./src/hooks/useModal.ts"),useToast=__webpack_require__("./src/hooks/useToast.ts"),atom=__webpack_require__("./src/recoil/atom.ts"),utils_error=__webpack_require__("./src/utils/error.ts");var Button=__webpack_require__("./src/components/common/Button/Button.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const StartButton=()=>{const{memberInfo,handleGameStart}=(()=>{const[memberInfo,setMemberInfo]=(0,es.L4)(atom.u),{roomId}=(0,dist.g)(),{show}=(0,useToast.A)(),{show:showModal}=(0,useModal.A)(),startGameMutation=(0,useMutation.n)({mutationFn:()=>(0,room.zj)(Number(roomId)),onError:error=>{error instanceof utils_error.D?show(error.message):showModal(AlertModal.A,{title:"게임 시작 에러",message:error.message})},networkMode:"always",throwOnError:error=>{return(status=error.status)>=500&&555!==status;var status}});return{memberInfo,handleGameStart:()=>{memberInfo.isMaster&&startGameMutation.mutate()},setMemberInfo}})();return(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{text:memberInfo.isMaster?"시작":"방장이 시작해 주세요",disabled:!memberInfo.isMaster,onClick:handleGameStart,bottom:!0})},StartButton_StartButton=StartButton;StartButton.__docgenInfo={description:"",methods:[],displayName:"StartButton"};var react=__webpack_require__("./node_modules/react/index.js"),routes=__webpack_require__("./src/constants/routes.ts");const hooks_useCountdown=({isGameStart})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),[isCountdownStart,setIsCountdownStart]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{isGameStart&&setIsCountdownStart(!0)}),[isGameStart]),{isCountdownStart,goToGame:()=>{navigate(routes.b.game(Number(roomId)))}}};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const StartButtonContainer=()=>{const{isGameStart}=(0,useGetRoomInfo.$)(),{isCountdownStart,goToGame}=hooks_useCountdown({isGameStart});return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[isCountdownStart&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Countdown.A,{goToGame}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButton_StartButton,{})]})},StartButtonContainer_StartButtonContainer=StartButtonContainer;StartButtonContainer.__docgenInfo={description:"",methods:[],displayName:"StartButtonContainer"};const ReadyPage=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)(AsyncErrorBoundary.A,{pendingFallback:(0,emotion_react_jsx_runtime_browser_esm.Y)(ReadySkeleton.A,{}),children:(0,emotion_react_jsx_runtime_browser_esm.FD)(Content.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CategoryContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ReadyMembersContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButtonContainer_StartButtonContainer,{})]})}),ReadyPage_ReadyPage=ReadyPage;ReadyPage.__docgenInfo={description:"",methods:[],displayName:"ReadyPage"};const ReadyPage_stories={title:"page/ReadyPage",component:ReadyPage_ReadyPage},게임_대기_화면={},__namedExportsOrder=["게임_대기_화면"];게임_대기_화면.parameters={...게임_대기_화면.parameters,docs:{...게임_대기_화면.parameters?.docs,source:{originalSource:"{}",...게임_대기_화면.parameters?.docs?.source}}}},"./src/components/CategoryContainer/CategoryContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CategoryContainer_CategoryContainer});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const categoryContainerLayout=(0,emotion_react_browser_esm.AH)("display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:10rem;padding:1.6rem 0 2.4rem;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.S.color.peanut400,";",""),title={name:"whr9hd",styles:"font-weight:800;font-size:2.8rem"},subtitle={name:"16ceglb",styles:"font-weight:600"};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const CategoryContainer=()=>{const{roomSetting}=(0,useGetRoomInfo.$)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:categoryContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:subtitle,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:title,children:roomSetting.category.label})]})},CategoryContainer_CategoryContainer=CategoryContainer;CategoryContainer.__docgenInfo={description:"",methods:[],displayName:"CategoryContainer"}},"./src/components/common/AlertModal/AlertModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlertModal_AlertModal});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const alertModalTitle=(0,emotion_react_browser_esm.AH)(Theme.S.typography.headline3,";",""),messageContainer={name:"1azakc",styles:"text-align:center"},alertText={name:"255c6r",styles:"word-break:keep-all"};var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const AlertModal=({isOpen,onClose,onConfirm,message,title})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:alertModalTitle,children:title||"알림"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{css:messageContainer,children:message&&message.split("\n").map((text=>(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:alertText,children:text}),(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})]},text)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:()=>{onConfirm&&onConfirm(),onClose()},buttonWidth:"60%",children:"확인"})})]}),AlertModal_AlertModal=AlertModal;AlertModal.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},message:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}}}]);