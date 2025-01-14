"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[949],{"./src/pages/ReadyPage/ReadyPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReadyPage_stories,게임_대기_화면:()=>게임_대기_화면});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ReadyMembersContainer=__webpack_require__("./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),RoomSetting=__webpack_require__("./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx"),Countdown=__webpack_require__("./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),routes=__webpack_require__("./src/constants/routes.ts");const hooks_useCountdown=({isGameStart})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),[isCountdownStart,setIsCountdownStart]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{isGameStart&&setIsCountdownStart(!0)}),[isGameStart]),{isCountdownStart,goToGame:()=>{navigate(routes.b.game(Number(roomId)),{replace:!0})}}};var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),room=__webpack_require__("./src/apis/room.ts"),useIsMaster=__webpack_require__("./src/hooks/useIsMaster.ts");const hooks_useGameStart=()=>{const isMaster=(0,useIsMaster.A)(),{roomId}=(0,dist.g)(),startGameMutation=(0,useMutation.n)({mutationFn:()=>(0,room.zj)(Number(roomId))});return{isMaster,handleGameStart:()=>{isMaster&&startGameMutation.mutate()},...startGameMutation}},StartButton_utils=(isMaster,isPending)=>isMaster&&isPending?"시작중...":isMaster?"시작":"방장이 진행해 주세요";var Button=__webpack_require__("./src/components/common/Button/Button.tsx"),react_ga4_dist=__webpack_require__("./node_modules/react-ga4/dist/index.js");var hooks=__webpack_require__("./src/hooks/index.ts");const StartButton=()=>{const{isMaster,handleGameStart,isPending,isSuccess}=hooks_useGameStart(),{members}=(0,hooks.$G)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{text:StartButton_utils(isMaster,isPending||isSuccess),disabled:!isMaster||isPending||isSuccess,onClick:()=>{var gameMemberNumber;handleGameStart(),gameMemberNumber=members.length,react_ga4_dist.Ay.event({category:"User Engagement",action:"game_member_number",label:"게임 참여 인원 수",value:gameMemberNumber})},bottom:!0})},StartButton_StartButton=StartButton;StartButton.__docgenInfo={description:"",methods:[],displayName:"StartButton"};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const StartButtonContainer=()=>{const{isGameStart}=(0,useGetRoomInfo.A)(),{isCountdownStart,goToGame}=hooks_useCountdown({isGameStart});return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[isCountdownStart&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Countdown.A,{goToGame}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButton_StartButton,{})]})},StartButtonContainer_StartButtonContainer=StartButtonContainer;StartButtonContainer.__docgenInfo={description:"",methods:[],displayName:"StartButtonContainer"};var Content=__webpack_require__("./src/components/layout/Content/Content.tsx"),usePageTimeSpentGA=__webpack_require__("./src/lib/googleAnalytics/hooks/usePageTimeSpentGA.ts");const ReadyPage=()=>((0,usePageTimeSpentGA.A)("준비 페이지"),(0,emotion_react_jsx_runtime_browser_esm.FD)(Content.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSetting.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ReadyMembersContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButtonContainer_StartButtonContainer,{})]})),ReadyPage_ReadyPage=ReadyPage;ReadyPage.__docgenInfo={description:"",methods:[],displayName:"ReadyPage"};const ReadyPage_stories={title:"page/ReadyPage",component:ReadyPage_ReadyPage},게임_대기_화면={},__namedExportsOrder=["게임_대기_화면"];게임_대기_화면.parameters={...게임_대기_화면.parameters,docs:{...게임_대기_화면.parameters?.docs,source:{originalSource:"{}",...게임_대기_화면.parameters?.docs?.source}}}},"./src/components/layout/Content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Content_Content});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const contentLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  height: 88vh;
  padding: 0 2.4rem;
`,Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"}},"./src/lib/googleAnalytics/hooks/usePageTimeSpentGA.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_ga4__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-ga4/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__=page=>{const startTimeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleVisibilityChange=()=>{if("visible"===document.visibilityState)startTimeRef.current=Date.now();else if("hidden"===document.visibilityState&&null!==startTimeRef.current){const timeSpent=Date.now()-startTimeRef.current;react_ga4__WEBPACK_IMPORTED_MODULE_1__.Ay.event({category:"User Engagement",action:"time_spent_per_page",label:page,value:timeSpent/1e3}),startTimeRef.current=0}};return document.addEventListener("visibilitychange",handleVisibilityChange),()=>{document.removeEventListener("visibilitychange",handleVisibilityChange)}}),[page])}},"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadyMembersContainer_ReadyMembersContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout=emotion_react_browser_esm.AH`
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
`;var common=__webpack_require__("./src/components/common/index.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts"),assets=__webpack_require__("./src/assets/index.ts"),components=__webpack_require__("./src/components/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const ReadyMembersContainer=()=>{const{members,master}=(0,hooks.$G)(),{showModal}=(0,hooks.hS)(),queryClient=(0,QueryClientProvider.jE)(),returnFocusRef=(0,react.useRef)(null),memberCountMessage=`총 인원 ${members.length}명`;return(0,react.useEffect)((()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.getUserInfo]})}),[master.memberId,queryClient]),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:totalNumber,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{role:"status",children:memberCountMessage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:inviteButton,onClick:()=>{showModal(components.lq,{returnFocusRef})},ref:returnFocusRef,children:"초대하기"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:memberList,children:members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(common.PS,{children:`${member.isMaster?"방장":""} ${member.nickname}`}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.cI,alt:"",css:profileImage})}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.pw,alt:""})]})]},member.memberId)))})})]})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer"}},"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const roomSettingLayout=emotion_react_browser_esm.AH`
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
`;var common=__webpack_require__("./src/components/common/index.ts"),components=__webpack_require__("./src/components/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const RoomSetting=()=>{const returnFocusRef=(0,react.useRef)(null),{roomSetting}=(0,hooks.$G)(),isMaster=(0,hooks.an)(),{showModal}=(0,hooks.hS)(),screenReaderRoomSetting=`\n        방 정보.\n        카테고리 ${roomSetting.category.label}. \n        라운드 ${roomSetting.totalRound}. \n        제한시간 ${roomSetting.timeLimit/1e3}초.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(common.PS,{"aria-live":"polite",children:screenReaderRoomSetting}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"방 설정",css:roomSettingLayout,onClick:isMaster?()=>{showModal(components.L4,{returnFocusRef})}:()=>{},ref:returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingKeyBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"제한 시간"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingValueBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}},"./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Countdown_Countdown});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const glowAnimation=emotion_react_browser_esm.i7`
0% {
    text-shadow: 0 0 5px ${Theme.S.color.peanut200}, 
                 0 0 15px ${Theme.S.color.peanut300}, 
                 0 0 25px ${Theme.S.color.peanut300}, 
                 0 0 35px ${Theme.S.color.peanut300}, 
                 0 0 45px ${Theme.S.color.peanut400}, 
                 0 0 55px ${Theme.S.color.peanut400}, 
                 0 0 65px ${Theme.S.color.peanut500};
  }
  30% {
    text-shadow: 0 0 10px ${Theme.S.color.peanut200}, 
                 0 0 20px ${Theme.S.color.peanut300}, 
                 0 0 30px ${Theme.S.color.peanut300}, 
                 0 0 40px ${Theme.S.color.peanut300}, 
                 0 0 50px ${Theme.S.color.peanut400}, 
                 0 0 60px ${Theme.S.color.peanut400}, 
                 0 0 70px ${Theme.S.color.peanut500};
  }
  70% {
    text-shadow: 0 0 10px ${Theme.S.color.peanut200}, 
                 0 0 20px ${Theme.S.color.peanut300}, 
                 0 0 60px ${Theme.S.color.peanut400}, 
                 0 0 70px ${Theme.S.color.peanut500};
  }
  100% {
    text-shadow: 0 0 10px ${Theme.S.color.peanut200}, 
                 0 0 20px ${Theme.S.color.peanut300},  
                 0 0 60px ${Theme.S.color.peanut400}, 
                 0 0 70px ${Theme.S.color.peanut500};
  }
`,countdownAnimation=emotion_react_browser_esm.i7`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1.5);
    opacity: 1;
  }
  70% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`,peanutAnimation=emotion_react_browser_esm.i7`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1) rotate(20deg);
    opacity: 1;
  }
  70% {
    transform: scale(1) rotate(-20deg);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`,countdownLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: fixed;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  color: ${Theme.S.color.peanut500};
  inset: 0;
`,dimmed=emotion_react_browser_esm.AH`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: rgb(0 0 0 / 50%);
`,countdown=emotion_react_browser_esm.AH`
  ${Theme.S.typography.countdown};
  animation:
    ${countdownAnimation} 1s ease-in-out infinite,
    ${glowAnimation} 1s infinite;
`,imageContainer=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  height: 10.8rem;
`,peanut=idx=>emotion_react_browser_esm.AH`
  width: ${2.4*idx}rem;
  height: ${3.6*idx}rem;

  animation: ${peanutAnimation} 1s ease-in-out infinite;
`;var spinDdangkong=__webpack_require__("./src/assets/images/spinDdangkong.webp");const imageCountMapper={3:1,2:2,1:3},Countdown=({goToGame})=>{const[count,setCount]=(0,react.useState)(3),timeout=(0,react.useRef)();return(0,react.useEffect)((()=>{count<=0&&(clearInterval(timeout.current),goToGame())}),[count,goToGame]),(0,react.useEffect)((()=>(timeout.current=setInterval((()=>{setCount((prev=>prev-1))}),1e3),()=>clearInterval(timeout.current))),[]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:countdownLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:dimmed}),count>0&&(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:countdown,"aria-label":`게임 시작 ${count}초 전`,"aria-live":"polite",children:count}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:imageContainer,children:imageCountMapper[count]&&Array.from({length:imageCountMapper[count]},((_,idx)=>(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:spinDdangkong,css:peanut(idx+1),alt:`${idx+1}번째 카운트다운 땅콩`},idx+1)))})]})},Countdown_Countdown=Countdown;Countdown.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{goToGame:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=pages-ReadyPage-ReadyPage-stories.e491dfa8.iframe.bundle.js.map