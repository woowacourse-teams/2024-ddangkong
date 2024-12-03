"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[993],{"./src/pages/GamePage/GamePage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>GamePage_stories,게임_화면:()=>게임_화면});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useSelectOption=()=>{const[selectedOption,setSelectedOption]=(0,react.useState)({id:0,isVoted:!1});return{selectedOption,handleClickOption:selectedId=>{setSelectedOption((prev=>({...prev,id:selectedId})))},completeSelection:()=>{setSelectedOption((prev=>({...prev,isVoted:!0})))},cancelSelection:()=>{setSelectedOption((prev=>({...prev,isVoted:!1})))}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const selectContainerLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5.6rem;
  width: 100%;
`,selectSection=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  font-weight: bold;
  font-size: 2rem;
`;var SelectOption=__webpack_require__("./src/pages/GamePage/components/SelectContainer/SelectOption/SelectOption.tsx"),Timer=__webpack_require__("./src/pages/GamePage/components/SelectContainer/Timer/Timer.tsx"),SelectButton_hook=__webpack_require__("./src/pages/GamePage/components/SelectButton/SelectButton.hook.ts"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),Button_styled=__webpack_require__("./src/components/common/Button/Button.styled.ts");const SelectButton=({contentId,selectedOption,completeSelection,cancelSelection})=>{const{id:selectedId,isVoted}=selectedOption,{isSuccess,isPending,vote}=(0,SelectButton_hook.A)({selectedId,contentId,completeSelection,cancelSelection});return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:Button_styled.e,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{bottom:!0,disabled:!selectedId||isVoted||isSuccess||isPending,text:isSuccess||isPending?"선택 완료":"선택",onClick:vote})})},SelectButton_SelectButton=SelectButton;SelectButton.__docgenInfo={description:"",methods:[],displayName:"SelectButton",props:{contentId:{required:!0,tsType:{name:"number"},description:""},selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},completeSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const SelectContainer=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),{selectedOption,handleClickOption,completeSelection,cancelSelection}=hooks_useSelectOption();return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:selectContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Timer.A,{selectedOption,completeSelection,cancelSelection}),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{role:"radiogroup",css:selectSection,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectOption.A,{option:balanceContent.firstOption,selectedOption,handleClickOption}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:"VS"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectOption.A,{option:balanceContent.secondOption,selectedOption,handleClickOption})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectButton_SelectButton,{contentId:balanceContent.contentId,selectedOption,completeSelection,cancelSelection})]})},SelectContainer_SelectContainer=SelectContainer;SelectContainer.__docgenInfo={description:"",methods:[],displayName:"SelectContainer"};var Content=__webpack_require__("./src/components/layout/Content/Content.tsx"),Header=__webpack_require__("./src/components/layout/Header/Header.tsx"),TopicContainer=__webpack_require__("./src/components/TopicContainer/TopicContainer.tsx");const GamePage=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Header.il,{}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Content.A,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TopicContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectContainer_SelectContainer,{})]})]}),GamePage_GamePage=GamePage;GamePage.__docgenInfo={description:"",methods:[],displayName:"GamePage"};const GamePage_stories={title:"page/GamePage",component:GamePage_GamePage},게임_화면={},__namedExportsOrder=["게임_화면"];게임_화면.parameters={...게임_화면.parameters,docs:{...게임_화면.parameters?.docs,source:{originalSource:"{}",...게임_화면.parameters?.docs?.source}}}},"./src/components/TopicContainer/TopicContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TopicContainer_TopicContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const topicContainerLayout=emotion_react_browser_esm.AH`
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
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const TopicContainer=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),isGamePage=location.pathname===routes.b.game(Number(roomId)),screenReaderQuestion=`질문. ${balanceContent.question}.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderQuestion}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,"aria-hidden":!0,children:isGamePage&&balanceContent.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText(isGamePage),"aria-hidden":!0,children:balanceContent.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}},utils_getSizeStyles=size=>{switch(size){case"small":return emotion_react_browser_esm.AH`
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
`},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({text,onClick,disabled,size,radius,fontSize,bottom,...props},ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{ref,onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button"}},"./src/components/layout/Content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Content_Content});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const contentLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  height: 88vh;
  padding: 0 2.4rem;
`,Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"}},"./src/hooks/useToast.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ToastProvider/ToastProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__.$);if(!toast)throw new Error("ToastContext를 찾을 수 없습니다.");return toast}},"./src/pages/GamePage/components/SelectButton/SelectButton.hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SelectButton_hook});var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),AlertModal=__webpack_require__("./src/components/AlertModal/AlertModal.tsx"),useModal=__webpack_require__("./src/hooks/useModal.ts"),useToast=__webpack_require__("./src/hooks/useToast.ts"),utils_error=__webpack_require__("./src/utils/error.ts");const hooks_useDefaultMutationErrorHandler=()=>{const{showToast}=(0,useToast.A)(),{showModal}=(0,useModal.A)();return error=>{error instanceof utils_error.Dr?showToast(error.message):error instanceof utils_error.eo&&showModal(AlertModal.A,{title:"에러",message:error.message})}};var useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useThrottle=(func,delay=3e3)=>{const isThrottledRef=(0,react.useRef)(!1);return(...args)=>{isThrottledRef.current||(func(...args),isThrottledRef.current=!0,setTimeout((()=>{isThrottledRef.current=!1}),delay))}},SelectButton_hook=({selectedId,contentId,completeSelection,cancelSelection})=>{const{roomId}=(0,dist.g)(),{member:{memberId}}=(0,useGetUserInfo.A)(),handleError=hooks_useDefaultMutationErrorHandler(),completeSelectionMutation=(0,useMutation.n)({mutationFn:async()=>await(0,balanceContent.sl)({roomId:Number(roomId),optionId:selectedId,contentId,memberId:Number(memberId)}),onMutate:()=>{completeSelection()},onError:error=>{cancelSelection(),handleError(error)}}),throttledVote=hooks_useThrottle(completeSelectionMutation.mutate);return{...completeSelectionMutation,vote:throttledVote}}},"./src/pages/GamePage/components/SelectContainer/SelectOption/SelectOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SelectOption_SelectOption});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const SelectOption=({option,selectedOption,handleClickOption})=>{const{id:selectedId,isVoted}=selectedOption;return(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{role:"radio",css:(selected=selectedId===option.optionId,isSelected=isVoted,emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.6rem;
  height: 16.8rem;
  padding: 1.6rem;
  border-radius: 3rem;

  background-color: ${selected?Theme.S.color.peanut500:Theme.S.color.peanut300};
  cursor: ${isSelected?"not-allowed":"pointer"};
  opacity: ${isSelected?Theme.S.opacity.disabled:Theme.S.opacity.default};

  color: #000;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  word-break: keep-all;

  transition: all 0.5s;
  scale: ${selected?1.1:1};
`),onClick:()=>handleClickOption(option.optionId),disabled:isVoted,"aria-checked":selectedId===option.optionId,children:option.name});var selected,isSelected},SelectOption_SelectOption=SelectOption;SelectOption.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{option:{required:!0,tsType:{name:"BalanceContent['firstOption']",raw:"BalanceContent['firstOption']"},description:""},selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedId: number) => void",signature:{arguments:[{type:{name:"number"},name:"selectedId"}],return:{name:"void"}}},description:""}}}},"./src/pages/GamePage/components/SelectContainer/Timer/Timer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Timer_Timer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),config=__webpack_require__("./src/constants/config.ts");const hooks_useTimer=({timeLimit,isSelectedOption,isVoted,vote})=>{const[leftRoundTime,setLeftRoundTime]=(0,react.useState)(timeLimit),workerRef=(0,react.useRef)(null),isVoteTimeout=leftRoundTime<=0,isAlmostFinished=leftRoundTime<=config.cZ;return(0,react.useEffect)((()=>{const timerWorker=new Worker(new URL(__webpack_require__.p+__webpack_require__.u(913),__webpack_require__.b));return workerRef.current=timerWorker,timerWorker.postMessage({type:"start",delay:config.S2}),timerWorker.onmessage=()=>{setLeftRoundTime((prev=>prev-1))},()=>{timerWorker.postMessage({type:"stop"}),timerWorker.terminate()}}),[]),(0,react.useEffect)((()=>{isVoteTimeout&&(isSelectedOption&&!isVoted&&vote(),workerRef.current?.postMessage({type:"stop"}),workerRef.current?.terminate())}),[isVoteTimeout,isSelectedOption,isVoted,vote]),{leftRoundTime,isAlmostFinished}};var SelectButton_hook=__webpack_require__("./src/pages/GamePage/components/SelectButton/SelectButton.hook.ts"),Timer_util=__webpack_require__("./src/pages/GamePage/components/SelectContainer/Timer/Timer.util.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const hooks_useVoteTimer=({roomId,selectedId,isVoted,completeSelection,cancelSelection})=>{const{balanceContent}=(0,useBalanceContentQuery.A)(roomId),timeLimit=(0,Timer_util.Nc)(balanceContent.timeLimit)||10,{vote}=(0,SelectButton_hook.A)({selectedId,contentId:balanceContent.contentId,completeSelection,cancelSelection}),{leftRoundTime,isAlmostFinished}=hooks_useTimer({timeLimit,isSelectedOption:Boolean(selectedId),isVoted,vote});return{leftRoundTime,isAlmostFinished,timeLimit}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const shake=emotion_react_browser_esm.i7`
  0%{
      transform: rotate(0deg);
    }
    10%{
      transform: scale(1.5) rotate(45deg);
    }
    20%{
      transform: scale(1.5) rotate(-45deg);
    }
    30%{
      transform:  rotate(30deg);
    }
    40%{
      transform:  rotate(-30deg);
    }
    50%{
      transform: rotate(10deg);
    }
    60%{
      transform: rotate(-10deg);
    }
    100%{
      transform: rotate(0deg);
    }
`,progress=emotion_react_browser_esm.i7`
  0% {
      transform: scaleX(1);
  }
  100% {
      transform: scaleX(0);
    }
`,timerTransition=emotion_react_browser_esm.i7`
  0% {
      transform: translateX(0);
  }
  100%{
      transform: translateX(-95%);
  }
`,timerLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  padding: 0 1rem;
  border-radius: ${Theme.S.borderRadius.radius30};

  background-color: ${Theme.S.color.peanut200};
  box-sizing: border-box;
`,timerInnerLayout=timeLimit=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60%;
  border-radius: ${Theme.S.borderRadius.radius30};

  background-color: ${Theme.S.color.peanut500};

  transform-origin: left;

  animation: ${progress} ${timeLimit+1}s linear;
`,timerWrapper=timeLimit=>emotion_react_browser_esm.AH`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 4rem;

  animation: ${timerTransition} ${timeLimit+1}s linear;
`,timerIcon=emotion_react_browser_esm.AH`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
`,timerIconShake=emotion_react_browser_esm.AH`
  animation: ${shake} 1s linear infinite;
`,timerText=isAlmostFinished=>emotion_react_browser_esm.AH`
  position: absolute;
  top: 5.2rem;

  color: ${isAlmostFinished?"red":"black"};
  font-weight: bold;
  font-size: 1.6rem;
`;var useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useVoteIsFinishedQuery=({contentId,enabled})=>{const{roomId}=(0,dist.g)(),voteIsFinishedQuery=(0,useQuery.I)({queryKey:[queryKeys.e.roundIsFinished,Number(roomId),contentId],queryFn:async()=>{if(void 0===contentId)throw new Error("contentId 가 존재하지 않습니다.");return await(0,balanceContent.jd)({roomId:Number(roomId),contentId})},enabled,refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=config.A3)&&config.S2,refetchIntervalInBackground:!0,gcTime:0});return{...voteIsFinishedQuery,isFinished:voteIsFinishedQuery.data?.isFinished}};var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useVoteIsFinished=({contentId,isFetching})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),{isFinished}=hooks_useVoteIsFinishedQuery({contentId,enabled:!!contentId&&!isFetching});return(0,react.useEffect)((()=>{isFinished&&!isFetching&&navigate(routes.b.roundResult(Number(roomId)),{replace:!0})}),[isFinished,navigate,roomId,isFetching]),{isFinished}},ddangkongTimer_namespaceObject=__webpack_require__.p+"static/media/ddangkongTimer.096a16e3.webp";var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx");const Timer=({selectedOption,completeSelection,cancelSelection})=>{const{roomId}=(0,dist.g)(),{balanceContent,isFetching}=(0,useBalanceContentQuery.A)(Number(roomId)),{leftRoundTime,isAlmostFinished,timeLimit}=hooks_useVoteTimer({roomId:Number(roomId),selectedId:selectedOption.id,isVoted:selectedOption.isVoted,completeSelection,cancelSelection}),screenReaderLeftRoundTime=`${leftRoundTime}초 남았습니다.`;return hooks_useVoteIsFinished({contentId:balanceContent.contentId,isFetching}),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:timerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:timerInnerLayout(timeLimit)}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:timerWrapper(timeLimit),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{css:[timerIcon,isAlmostFinished&&timerIconShake],src:ddangkongTimer_namespaceObject,alt:""}),(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{role:"alert","aria-live":(0,Timer_util.wk)(leftRoundTime,timeLimit)&&"assertive",children:screenReaderLeftRoundTime}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:timerText(isAlmostFinished),"aria-hidden":!0,children:(0,Timer_util.qE)(leftRoundTime)})]})]})},Timer_Timer=Timer;Timer.__docgenInfo={description:"",methods:[],displayName:"Timer",props:{selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},completeSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}}}]);
//# sourceMappingURL=pages-GamePage-GamePage-stories.ff411bdd.iframe.bundle.js.map