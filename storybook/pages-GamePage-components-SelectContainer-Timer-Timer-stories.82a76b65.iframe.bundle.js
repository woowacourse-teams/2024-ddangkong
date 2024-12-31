"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[160],{"./src/pages/GamePage/components/SelectContainer/Timer/Timer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본_타이머:()=>기본_타이머});const __WEBPACK_DEFAULT_EXPORT__={title:"Timer",component:__webpack_require__("./src/pages/GamePage/components/SelectContainer/Timer/Timer.tsx").A},기본_타이머={},__namedExportsOrder=["기본_타이머"];기본_타이머.parameters={...기본_타이머.parameters,docs:{...기본_타이머.parameters?.docs,source:{originalSource:"{}",...기본_타이머.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useMutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var react=__webpack_require__("./node_modules/react/index.js"),mutation=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/mutation.js"),notifyManager=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/notifyManager.js"),subscribable=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/subscribable.js"),utils=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/utils.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():"pending"===this.#currentMutation?.state.status&&this.#currentMutation.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){const state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.j.batch((()=>{if(this.#mutateOptions&&this.hasListeners()){const variables=this.#currentResult.variables,context=this.#currentResult.context;"success"===action?.type?(this.#mutateOptions.onSuccess?.(action.data,variables,context),this.#mutateOptions.onSettled?.(action.data,null,variables,context)):"error"===action?.type&&(this.#mutateOptions.onError?.(action.error,variables,context),this.#mutateOptions.onSettled?.(void 0,action.error,variables,context))}this.listeners.forEach((listener=>{listener(this.#currentResult)}))}))}},QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern_utils=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/utils.js");function useMutation(options,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState((()=>new MutationObserver(client,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=react.useSyncExternalStore(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.j.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(modern_utils.l)}),[observer]);if(result.error&&(0,modern_utils.G)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const A11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:A11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/pages/GamePage/components/SelectContainer/SelectButton/SelectButton.hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/index.ts");const __WEBPACK_DEFAULT_EXPORT__=({selectedId,contentId,completeSelection,cancelSelection})=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{member:{memberId}}=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.z6)(),handleError=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.Yd)(),completeSelectionMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.n)({mutationFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.sl)({roomId:Number(roomId),optionId:selectedId,contentId,memberId:Number(memberId)}),onMutate:()=>{completeSelection()},onError:error=>{cancelSelection(),handleError(error)}}),throttledVote=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__._g)(completeSelectionMutation.mutate);return{...completeSelectionMutation,vote:throttledVote}}},"./src/pages/GamePage/components/SelectContainer/Timer/Timer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Timer_Timer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),config=__webpack_require__("./src/constants/config.ts");const hooks_useTimer=({timeLimit,isSelectedOption,isVoted,vote})=>{const[leftRoundTime,setLeftRoundTime]=(0,react.useState)(timeLimit),workerRef=(0,react.useRef)(null),isVoteTimeout=leftRoundTime<=0,isAlmostFinished=leftRoundTime<=config.cZ;return(0,react.useEffect)((()=>{const timerWorker=new Worker(new URL(__webpack_require__.p+__webpack_require__.u(913),__webpack_require__.b));return workerRef.current=timerWorker,timerWorker.postMessage({type:"start",delay:config.S2}),timerWorker.onmessage=()=>{setLeftRoundTime((prev=>prev-1))},()=>{timerWorker.postMessage({type:"stop"}),timerWorker.terminate()}}),[]),(0,react.useEffect)((()=>{isVoteTimeout&&(isSelectedOption&&!isVoted&&vote(),workerRef.current?.postMessage({type:"stop"}),workerRef.current?.terminate())}),[isVoteTimeout,isSelectedOption,isVoted,vote]),{leftRoundTime,isAlmostFinished}};var SelectButton_hook=__webpack_require__("./src/pages/GamePage/components/SelectContainer/SelectButton/SelectButton.hook.ts"),Timer_util=__webpack_require__("./src/pages/GamePage/components/SelectContainer/Timer/Timer.util.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const hooks_useVoteTimer=({roomId,selectedId,isVoted,completeSelection,cancelSelection})=>{const{balanceContent}=(0,useBalanceContentQuery.A)(roomId),timeLimit=(0,Timer_util.Nc)(balanceContent.timeLimit)||10,{vote}=(0,SelectButton_hook.A)({selectedId,contentId:balanceContent.contentId,completeSelection,cancelSelection}),{leftRoundTime,isAlmostFinished}=hooks_useTimer({timeLimit,isSelectedOption:Boolean(selectedId),isVoted,vote});return{leftRoundTime,isAlmostFinished,timeLimit}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const shake=emotion_react_browser_esm.i7`
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
`;var useVoteIsFinished=__webpack_require__("./src/pages/GamePage/components/SelectContainer/hooks/useVoteIsFinished.ts"),ddangkongTimer=__webpack_require__("./src/assets/images/ddangkongTimer.webp"),A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx");const Timer=({selectedOption,completeSelection,cancelSelection})=>{const{roomId}=(0,dist.g)(),{balanceContent,isFetching}=(0,useBalanceContentQuery.A)(Number(roomId)),{leftRoundTime,isAlmostFinished,timeLimit}=hooks_useVoteTimer({roomId:Number(roomId),selectedId:selectedOption.id,isVoted:selectedOption.isVoted,completeSelection,cancelSelection}),screenReaderLeftRoundTime=`${leftRoundTime}초 남았습니다.`;return(0,useVoteIsFinished.A)({contentId:balanceContent.contentId,isFetching}),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:timerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:timerInnerLayout(timeLimit)}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:timerWrapper(timeLimit),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{css:[timerIcon,isAlmostFinished&&timerIconShake],src:ddangkongTimer,alt:""}),(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{role:"alert","aria-live":(0,Timer_util.wk)(leftRoundTime,timeLimit)&&"assertive",children:screenReaderLeftRoundTime}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:timerText(isAlmostFinished),"aria-hidden":!0,children:(0,Timer_util.qE)(leftRoundTime)})]})]})},Timer_Timer=Timer;Timer.__docgenInfo={description:"",methods:[],displayName:"Timer",props:{selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},completeSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/pages/GamePage/components/SelectContainer/Timer/Timer.util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nc:()=>convertMsecToSecond,qE:()=>formatLeftRoundTime,wk:()=>isAlertTimer});var _constants_config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/config.ts");const formatLeftRoundTime=leftRoundTime=>{const minutes=Math.floor(leftRoundTime/60),seconds=leftRoundTime%60;return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`},convertMsecToSecond=msec=>msec/_constants_config__WEBPACK_IMPORTED_MODULE_0__.S2,isAlertTimer=(leftRoundTime,timeLimit)=>leftRoundTime===Math.floor(timeLimit/2)||leftRoundTime===_constants_config__WEBPACK_IMPORTED_MODULE_0__.cZ},"./src/pages/GamePage/components/SelectContainer/hooks/useVoteIsFinished.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>hooks_useVoteIsFinished});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),config=__webpack_require__("./src/constants/config.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useVoteIsFinishedQuery=({contentId,enabled})=>{const{roomId}=(0,dist.g)(),voteIsFinishedQuery=(0,useQuery.I)({queryKey:[queryKeys.e.roundIsFinished,Number(roomId),contentId],queryFn:async()=>{if(void 0===contentId)throw new Error("contentId 가 존재하지 않습니다.");return await(0,balanceContent.jd)({roomId:Number(roomId),contentId})},enabled,refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=config.A3)&&config.S2,refetchIntervalInBackground:!0,gcTime:0});return{...voteIsFinishedQuery,isFinished:voteIsFinishedQuery.data?.isFinished,memberCount:voteIsFinishedQuery.data?.memberCount,voteCount:voteIsFinishedQuery.data?.voteCount}};var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useVoteIsFinished=({contentId,isFetching})=>{const navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),{isFinished,memberCount,voteCount,isPending}=hooks_useVoteIsFinishedQuery({contentId,enabled:!!contentId&&!isFetching});return(0,react.useEffect)((()=>{isFinished&&!isFetching&&navigate(routes.b.roundResult(Number(roomId)),{replace:!0})}),[isFinished,navigate,roomId,isFetching]),{memberCount,voteCount,isPending}}},"./src/assets/images/ddangkongTimer.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/ddangkongTimer.096a16e3.webp"}}]);
//# sourceMappingURL=pages-GamePage-components-SelectContainer-Timer-Timer-stories.82a76b65.iframe.bundle.js.map