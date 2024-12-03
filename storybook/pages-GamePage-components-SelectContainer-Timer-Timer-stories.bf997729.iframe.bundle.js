"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[160],{"./src/pages/GamePage/components/SelectContainer/Timer/Timer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본_타이머:()=>기본_타이머});const __WEBPACK_DEFAULT_EXPORT__={title:"Timer",component:__webpack_require__("./src/pages/GamePage/components/SelectContainer/Timer/Timer.tsx").A},기본_타이머={},__namedExportsOrder=["기본_타이머"];기본_타이머.parameters={...기본_타이머.parameters,docs:{...기본_타이머.parameters?.docs,source:{originalSource:"{}",...기본_타이머.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult,bR:()=>checkMyGameStatus,jd:()=>fetchVoteIsFinished,sl:()=>voteBalanceContent});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.balanceContent(roomId)});return await res.json()},voteBalanceContent=async({optionId,contentId,roomId,memberId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.post({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.vote(roomId,contentId),headers:{"Content-Type":"application/json"},body:{memberId,optionId}});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.roundVoteResult(roomId,contentId)});return await res.json()},checkMyGameStatus=async({roomId,currentRound})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.myGameStatus(roomId,currentRound),headers:{"Content-Type":"application/json"}});return await res.json()},fetchVoteIsFinished=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.voteIsFinished(roomId,contentId)});return await res.json()}},"./src/components/AlertModal/AlertModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlertModal_AlertModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const alertModalTitle=emotion_react_browser_esm.AH`
  ${Theme.S.typography.headline3}
`,messageContainer=emotion_react_browser_esm.AH`
  text-align: center;
`,alertText=emotion_react_browser_esm.AH`
  word-break: keep-all;
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx");const AlertModal=({isOpen,onClose,onConfirm,message,title,returnFocusRef})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:alertModalTitle,children:title||"알림"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{css:messageContainer,children:message&&message.split("\n").map((text=>(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:alertText,children:text}),(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})]},text)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:()=>{onConfirm&&onConfirm(),onClose()},buttonWidth:"60%",children:"확인"})})]}),AlertModal_AlertModal=AlertModal;AlertModal.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},message:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const a11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=roomId=>{const balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,Number(roomId)],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId))});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}},"./src/hooks/useGetUserInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.getUserInfo],queryFn:_apis_room__WEBPACK_IMPORTED_MODULE_0__.ug,staleTime:72e5});return{roomId:data?.roomId||0,roomUuid:data?.roomUuid||"",member:{memberId:data?.member?.memberId||0,nickname:data?.member?.nickname||"",isMaster:data?.member?.isMaster||!1}}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./src/hooks/useToast.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ToastProvider/ToastProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__.$);if(!toast)throw new Error("ToastContext를 찾을 수 없습니다.");return toast}},"./src/pages/GamePage/components/SelectButton/SelectButton.hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SelectButton_hook});var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),AlertModal=__webpack_require__("./src/components/AlertModal/AlertModal.tsx"),useModal=__webpack_require__("./src/hooks/useModal.ts"),useToast=__webpack_require__("./src/hooks/useToast.ts"),utils_error=__webpack_require__("./src/utils/error.ts");const hooks_useDefaultMutationErrorHandler=()=>{const{show}=(0,useToast.A)(),{show:showModal}=(0,useModal.A)();return error=>{error instanceof utils_error.D?show(error.message):error instanceof utils_error.e&&showModal(AlertModal.A,{title:"에러",message:error.message})}};var useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useThrottle=(func,delay=3e3)=>{const isThrottledRef=(0,react.useRef)(!1);return(...args)=>{isThrottledRef.current||(func(...args),isThrottledRef.current=!0,setTimeout((()=>{isThrottledRef.current=!1}),delay))}},SelectButton_hook=({selectedId,contentId,completeSelection,cancelSelection})=>{const{roomId}=(0,dist.g)(),{member:{memberId}}=(0,useGetUserInfo.A)(),handleError=hooks_useDefaultMutationErrorHandler(),completeSelectionMutation=(0,useMutation.n)({mutationFn:async()=>await(0,balanceContent.sl)({roomId:Number(roomId),optionId:selectedId,contentId,memberId:Number(memberId)}),onMutate:()=>{completeSelection()},onError:error=>{cancelSelection(),handleError(error)}}),throttledVote=hooks_useThrottle(completeSelectionMutation.mutate);return{...completeSelectionMutation,vote:throttledVote}}},"./src/pages/GamePage/components/SelectContainer/Timer/Timer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Timer_Timer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),config=__webpack_require__("./src/constants/config.ts");const hooks_useTimer=({timeLimit,isSelectedOption,isVoted,vote})=>{const[leftRoundTime,setLeftRoundTime]=(0,react.useState)(timeLimit),workerRef=(0,react.useRef)(null),isVoteTimeout=leftRoundTime<=0,isAlmostFinished=leftRoundTime<=config.cZ;return(0,react.useEffect)((()=>{const timerWorker=new Worker(new URL(__webpack_require__.p+__webpack_require__.u(913),__webpack_require__.b));return workerRef.current=timerWorker,timerWorker.postMessage({type:"start",delay:config.S2}),timerWorker.onmessage=()=>{setLeftRoundTime((prev=>prev-1))},()=>{timerWorker.postMessage({type:"stop"}),timerWorker.terminate()}}),[]),(0,react.useEffect)((()=>{isVoteTimeout&&(isSelectedOption&&!isVoted&&vote(),workerRef.current?.postMessage({type:"stop"}),workerRef.current?.terminate())}),[isVoteTimeout,isSelectedOption,isVoted,vote]),{leftRoundTime,isAlmostFinished}};var SelectButton_hook=__webpack_require__("./src/pages/GamePage/components/SelectButton/SelectButton.hook.ts"),Timer_util=__webpack_require__("./src/pages/GamePage/components/SelectContainer/Timer/Timer.util.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const hooks_useVoteTimer=({roomId,selectedId,isVoted,completeSelection,cancelSelection})=>{const{balanceContent}=(0,useBalanceContentQuery.A)(roomId),timeLimit=(0,Timer_util.Nc)(balanceContent.timeLimit)||10,{vote}=(0,SelectButton_hook.A)({selectedId,contentId:balanceContent.contentId,completeSelection,cancelSelection}),{leftRoundTime,isAlmostFinished}=hooks_useTimer({timeLimit,isSelectedOption:Boolean(selectedId),isVoted,vote});return{leftRoundTime,isAlmostFinished,timeLimit}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const shake=emotion_react_browser_esm.i7`
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
`;var useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useVoteIsFinishedQuery=({contentId,enabled})=>{const{roomId}=(0,dist.g)(),voteIsFinishedQuery=(0,useQuery.I)({queryKey:[queryKeys.e.roundIsFinished,Number(roomId),contentId],queryFn:async()=>{if(void 0===contentId)throw new Error("contentId 가 존재하지 않습니다.");return await(0,balanceContent.jd)({roomId:Number(roomId),contentId})},enabled,refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=config.A3)&&config.S2,refetchIntervalInBackground:!0,gcTime:0});return{...voteIsFinishedQuery,isFinished:voteIsFinishedQuery.data?.isFinished}};var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useVoteIsFinished=({contentId,isFetching})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),{isFinished}=hooks_useVoteIsFinishedQuery({contentId,enabled:!!contentId&&!isFetching});return(0,react.useEffect)((()=>{isFinished&&!isFetching&&navigate(routes.b.roundResult(Number(roomId)),{replace:!0})}),[isFinished,navigate,roomId,isFetching]),{isFinished}},ddangkongTimer_namespaceObject=__webpack_require__.p+"static/media/ddangkongTimer.096a16e3.webp";var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx");const Timer=({selectedOption,completeSelection,cancelSelection})=>{const{roomId}=(0,dist.g)(),{balanceContent,isFetching}=(0,useBalanceContentQuery.A)(Number(roomId)),{leftRoundTime,isAlmostFinished,timeLimit}=hooks_useVoteTimer({roomId:Number(roomId),selectedId:selectedOption.id,isVoted:selectedOption.isVoted,completeSelection,cancelSelection}),screenReaderLeftRoundTime=`${leftRoundTime}초 남았습니다.`;return hooks_useVoteIsFinished({contentId:balanceContent.contentId,isFetching}),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:timerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:timerInnerLayout(timeLimit)}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:timerWrapper(timeLimit),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{css:[timerIcon,isAlmostFinished&&timerIconShake],src:ddangkongTimer_namespaceObject,alt:""}),(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{role:"alert","aria-live":(0,Timer_util.wk)(leftRoundTime,timeLimit)&&"assertive",children:screenReaderLeftRoundTime}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:timerText(isAlmostFinished),"aria-hidden":!0,children:(0,Timer_util.qE)(leftRoundTime)})]})]})},Timer_Timer=Timer;Timer.__docgenInfo={description:"",methods:[],displayName:"Timer",props:{selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},completeSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/pages/GamePage/components/SelectContainer/Timer/Timer.util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nc:()=>convertMsecToSecond,qE:()=>formatLeftRoundTime,wk:()=>isAlertTimer});var _constants_config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/config.ts");const formatLeftRoundTime=leftRoundTime=>{const minutes=Math.floor(leftRoundTime/60),seconds=leftRoundTime%60;return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`},convertMsecToSecond=msec=>msec/_constants_config__WEBPACK_IMPORTED_MODULE_0__.S2,isAlertTimer=(leftRoundTime,timeLimit)=>leftRoundTime===Math.floor(timeLimit/2)||leftRoundTime===_constants_config__WEBPACK_IMPORTED_MODULE_0__.cZ}}]);
//# sourceMappingURL=pages-GamePage-components-SelectContainer-Timer-Timer-stories.bf997729.iframe.bundle.js.map