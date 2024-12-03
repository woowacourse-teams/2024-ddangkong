"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[949],{"./src/pages/ReadyPage/ReadyPage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReadyPage_stories,게임_대기_화면:()=>게임_대기_화면});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ReadyMembersContainer=__webpack_require__("./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),RoomSetting=__webpack_require__("./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx"),Countdown=__webpack_require__("./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),routes=__webpack_require__("./src/constants/routes.ts");const hooks_useCountdown=({isGameStart})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),[isCountdownStart,setIsCountdownStart]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{isGameStart&&setIsCountdownStart(!0)}),[isGameStart]),{isCountdownStart,goToGame:()=>{navigate(routes.b.game(Number(roomId)))}}};var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),room=__webpack_require__("./src/apis/room.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts");const hooks_useGameStart=()=>{const{member:{isMaster}}=(0,useGetUserInfo.A)(),{roomId}=(0,dist.g)(),startGameMutation=(0,useMutation.n)({mutationFn:()=>(0,room.zj)(Number(roomId))});return{isMaster,handleGameStart:()=>{isMaster&&startGameMutation.mutate()},...startGameMutation}},StartButton_utils=(isMaster,isPending)=>isMaster&&isPending?"시작중...":isMaster?"시작":"방장이 진행해 주세요";var Button=__webpack_require__("./src/components/common/Button/Button.tsx");const StartButton=()=>{const{isMaster,handleGameStart,isPending,isSuccess}=hooks_useGameStart();return(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{text:StartButton_utils(isMaster,isPending||isSuccess),disabled:!isMaster||isPending||isSuccess,onClick:handleGameStart,bottom:!0})},StartButton_StartButton=StartButton;StartButton.__docgenInfo={description:"",methods:[],displayName:"StartButton"};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const StartButtonContainer=()=>{const{isGameStart}=(0,useGetRoomInfo.$)(),{isCountdownStart,goToGame}=hooks_useCountdown({isGameStart});return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[isCountdownStart&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Countdown.A,{goToGame}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButton_StartButton,{})]})},StartButtonContainer_StartButtonContainer=StartButtonContainer;StartButtonContainer.__docgenInfo={description:"",methods:[],displayName:"StartButtonContainer"};var Content=__webpack_require__("./src/components/layout/Content/Content.tsx");const ReadyPage=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Content.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSetting.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ReadyMembersContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StartButtonContainer_StartButtonContainer,{})]}),ReadyPage_ReadyPage=ReadyPage;ReadyPage.__docgenInfo={description:"",methods:[],displayName:"ReadyPage"};const ReadyPage_stories={title:"page/ReadyPage",component:ReadyPage_ReadyPage},게임_대기_화면={},__namedExportsOrder=["게임_대기_화면"];게임_대기_화면.parameters={...게임_대기_화면.parameters,docs:{...게임_대기_화면.parameters?.docs,source:{originalSource:"{}",...게임_대기_화면.parameters?.docs?.source}}}},"./src/components/InviteModal/InviteModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InviteModal_InviteModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),lib=__webpack_require__("./node_modules/react-qr-code/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useClipBoard=()=>{const[isCopied,setIsCopied]=(0,react.useState)(!1);return{isCopied,copyToClipboard:async text=>{await navigator.clipboard.writeText(text),setIsCopied(!0),setTimeout((()=>setIsCopied(!1)),2e3)}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const inviteModalLayout=emotion_react_browser_esm.AH`
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
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx");const copyIcon_namespaceObject=__webpack_require__.p+"static/media/copyIcon.d9b466b1.png";var url=__webpack_require__("./src/constants/url.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts"),useToast=__webpack_require__("./src/hooks/useToast.ts");const InviteModal=({isOpen,onClose,returnFocusRef})=>{const{roomUuid}=(0,useGetUserInfo.A)(),inviteUrl=(0,url.MY)(roomUuid),{copyToClipboard}=hooks_useClipBoard(),{show}=(0,useToast.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,css:inviteModalLayout,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:inviteModalTitle,children:"초대하기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:inviteModalUl,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:qrcodeWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(lib.Ay,{style:{width:"50%",height:"50%"},value:inviteUrl})})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:inviteModalLi,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{copyToClipboard(inviteUrl),show("링크가 복사되었습니다!")},css:inviteModalLinkButton,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:inviteModalLinkButtonInfoWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:inviteModalText,children:"초대 링크 복사"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:copyIcon_namespaceObject,alt:"복사하기 이미지",css:inviteModalCopyIcon})]})})})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{buttonWidth:"100%",onClick:onClose,children:"닫기"})})]})},InviteModal_InviteModal=InviteModal;InviteModal.__docgenInfo={description:"",methods:[],displayName:"InviteModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}},utils_getSizeStyles=size=>{switch(size){case"small":return emotion_react_browser_esm.AH`
        width: 6.8rem;
        padding: 0.8rem 0;
      `;case"medium":return emotion_react_browser_esm.AH`
        width: 12rem;
        padding: 1.6rem 0;
      `;default:return emotion_react_browser_esm.AH`
        width: 32rem;
        padding: 2rem 0;
      `}},buttonLayout=({disabled,size,radius,fontSize,bottom})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;

  ${utils_getSizeStyles(size)};

  border: none;
  border-radius: ${(0,getBorderRadius.A)(radius)};

  background-color: ${disabled?Theme.S.color.peanut300:Theme.S.color.peanut400};

  font-weight: bold;
  font-size: ${utils_getFontSize(fontSize)};
  cursor: ${disabled?"not-allowed":"pointer"};

  ${bottom&&emotion_react_browser_esm.AH`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  `}
`,bottomButtonLayout=emotion_react_browser_esm.AH`
  position: fixed;
  bottom: 0;
  width: 100%;
`},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({text,onClick,disabled,size,radius,fontSize,bottom,...props},ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{ref,onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button"}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const a11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/components/layout/Content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Content_Content});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const contentLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  height: 88vh;
  padding: 0 2.4rem;
`,Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}},"./src/hooks/useGetUserInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.getUserInfo],queryFn:_apis_room__WEBPACK_IMPORTED_MODULE_0__.ug,staleTime:72e5});return{roomId:data?.roomId||0,roomUuid:data?.roomUuid||"",member:{memberId:data?.member?.memberId||0,nickname:data?.member?.nickname||"",isMaster:data?.member?.isMaster||!1}}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./src/hooks/useToast.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ToastProvider/ToastProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__.$);if(!toast)throw new Error("ToastContext를 찾을 수 없습니다.");return toast}},"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadyMembersContainer_ReadyMembersContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout=emotion_react_browser_esm.AH`
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
`,crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp";var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp"),A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),InviteModal=__webpack_require__("./src/components/InviteModal/InviteModal.tsx"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts");const ReadyMembersContainer=()=>{const{members,master}=(0,useGetRoomInfo.$)(),{show}=(0,useModal.A)(),queryClient=(0,QueryClientProvider.jE)(),returnFocusRef=(0,react.useRef)(null),memberCountMessage=`총 인원 ${members.length}명`;return(0,react.useEffect)((()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.getUserInfo]})}),[master.memberId]),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:totalNumber,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{role:"status",children:memberCountMessage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:inviteButton,onClick:()=>{show(InviteModal.A,{returnFocusRef})},ref:returnFocusRef,children:"초대하기"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:memberList,children:members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:`${member.isMaster?"방장":""} ${member.nickname}`}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:sillyDdangkongMedium,alt:"",css:profileImage})}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:crownIcon_namespaceObject,alt:""})]})]},member.memberId)))})})]})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer"}},"./src/pages/ReadyPage/components/RoomSetting/RoomSetting.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSetting_RoomSetting});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const roomSettingLayout=emotion_react_browser_esm.AH`
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
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),RoomSettingModal=__webpack_require__("./src/components/RoomSettingModal/RoomSettingModal.tsx"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts");const RoomSetting=()=>{const returnFocusRef=(0,react.useRef)(null),{roomSetting}=(0,useGetRoomInfo.$)(),{member:{isMaster}}=(0,useGetUserInfo.A)(),{show}=(0,useModal.A)(),screenReaderRoomSetting=`\n        방 정보.\n        카테고리 ${roomSetting.category.label}. \n        라운드 ${roomSetting.totalRound}. \n        제한시간 ${roomSetting.timeLimit/1e3}초.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{"aria-live":"polite",children:screenReaderRoomSetting}),(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{"aria-label":"방 설정",css:roomSettingLayout,onClick:isMaster?()=>{show(RoomSettingModal.A,{returnFocusRef})}:()=>{},ref:returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingKeyBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"라운드"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"카테고리"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingKey,children:"제한 시간"})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingValueBox,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:smallTitle,children:roomSetting.totalRound}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:bigTitle,children:roomSetting.category.label}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:smallTitle,children:[roomSetting.timeLimit/1e3,"초"]})]})]})]})},RoomSetting_RoomSetting=RoomSetting;RoomSetting.__docgenInfo={description:"",methods:[],displayName:"RoomSetting"}},"./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Countdown_Countdown});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const glowAnimation=emotion_react_browser_esm.i7`
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
`;var spinDdangkong=__webpack_require__("./src/assets/images/spinDdangkong.webp");const imageCountMapper={3:1,2:2,1:3},Countdown=({goToGame})=>{const[count,setCount]=(0,react.useState)(3),timeout=(0,react.useRef)();return(0,react.useEffect)((()=>{count<=0&&(clearInterval(timeout.current),goToGame())}),[count]),(0,react.useEffect)((()=>(timeout.current=setInterval((()=>{setCount((prev=>prev-1))}),1e3),()=>clearInterval(timeout.current))),[]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:countdownLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:dimmed}),count>0&&(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:countdown,"aria-label":`게임 시작 ${count}초 전`,"aria-live":"polite",children:count}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:imageContainer,children:imageCountMapper[count]&&Array.from({length:imageCountMapper[count]},((_,idx)=>(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:spinDdangkong,css:peanut(idx+1),alt:`${idx+1}번째 카운트다운 땅콩`},idx+1)))})]})},Countdown_Countdown=Countdown;Countdown.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{goToGame:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"},"./src/assets/images/spinDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/spinDdangkong.f92ff614.webp"}}]);
//# sourceMappingURL=pages-ReadyPage-ReadyPage-stories.a67f2b0e.iframe.bundle.js.map