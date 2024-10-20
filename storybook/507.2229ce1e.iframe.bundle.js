"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[507],{"./node_modules/@tanstack/react-query/build/modern/useMutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var react=__webpack_require__("./node_modules/react/index.js"),mutation=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/mutation.js"),notifyManager=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/notifyManager.js"),subscribable=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/subscribable.js"),utils=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/utils.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():"pending"===this.#currentMutation?.state.status&&this.#currentMutation.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){const state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.j.batch((()=>{if(this.#mutateOptions&&this.hasListeners()){const variables=this.#currentResult.variables,context=this.#currentResult.context;"success"===action?.type?(this.#mutateOptions.onSuccess?.(action.data,variables,context),this.#mutateOptions.onSettled?.(action.data,null,variables,context)):"error"===action?.type&&(this.#mutateOptions.onError?.(action.error,variables,context),this.#mutateOptions.onSettled?.(void 0,action.error,variables,context))}this.listeners.forEach((listener=>{listener(this.#currentResult)}))}))}},QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern_utils=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/utils.js");function useMutation(options,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState((()=>new MutationObserver(client,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=react.useSyncExternalStore(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.j.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(modern_utils.l)}),[observer]);if(result.error&&(0,modern_utils.G)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_error__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/error.ts");const __WEBPACK_DEFAULT_EXPORT__={async request({url,method,body,headers}){try{const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers});if(!response.ok){const apiError=await response.json();throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.e({...apiError,status:response.status})}return response}catch(error){if(error instanceof _utils_error__WEBPACK_IMPORTED_MODULE_0__.e)throw error;throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.D}},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/apis/room.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gn:()=>exitRoom,ew:()=>applyRoomSetting,qE:()=>getRoomInfo,rm:()=>getCategoryList,zj:()=>startGame});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const getRoomInfo=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getRoomInfo(roomId)});return await res.json()},startGame=async roomId=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.startGame(roomId)})},getCategoryList=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.categoryList});return await res.json()},applyRoomSetting=async(roomId,roomSetting)=>{const{totalRound,timeLimit,category}=roomSetting;await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.applyRoomSetting(roomId),headers:{"Content-Type":"application/json"},body:{totalRound,timeLimit,category}})},exitRoom=async(roomId,memberId)=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.delete({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.deleteRoom(roomId,memberId)})}},"./src/components/common/RoomSettingModal/RoomSettingModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSettingModal_RoomSettingModal});var react=__webpack_require__("./node_modules/react/index.js");const emptyLayout={name:"nbsemk",styles:"height:3.6rem"};var Dropdown=__webpack_require__("./src/components/common/Dropdown/Dropdown.tsx"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),room=__webpack_require__("./src/apis/room.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useCategoryListQuery=()=>{const{roomId}=(0,dist.g)(),categoryListQuery=(0,useQuery.I)({queryKey:[queryKeys.e.categoryList,Number(roomId)],queryFn:async()=>await(0,room.rm)()});return{...categoryListQuery,categoryList:categoryListQuery.data?.categories}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const CategoryDropdown=({category,handleClickOption})=>{const{categoryList,isLoading}=hooks_useCategoryListQuery();return isLoading?(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:emptyLayout}):categoryList&&category?(0,emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.A,{text:category,optionList:categoryList,handleClick:handleClickOption}):(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"카테고리가 없습니다."})},CategoryDropdown_CategoryDropdown=CategoryDropdown;CategoryDropdown.__docgenInfo={description:"",methods:[],displayName:"CategoryDropdown",props:{category:{required:!1,tsType:{name:"string"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};var QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js");const hooks_useApplyRoomSetting=roomId=>{const queryClient=(0,QueryClientProvider.jE)();return(0,useMutation.n)({mutationFn:async roomSetting=>await(0,room.ew)(roomId,roomSetting),onSuccess:()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.roomMembers,Number(roomId)]})}})},hooks_useCategoryDropdown=selectedCategory=>{const[category,setCategory]=(0,react.useState)(selectedCategory);return(0,react.useEffect)((()=>{setCategory(selectedCategory)}),[selectedCategory]),{category,handleClickOption:e=>{const target=e.target,clickedCategoryValue=target.value,clickedCategoryLabel=target.textContent;clickedCategoryValue&&setCategory({value:clickedCategoryValue,label:clickedCategoryLabel})}}},useTimerPerRound=selectedTimeLimit=>{const[timeLimitPerRound,setTimeLimitPerRound]=(0,react.useState)(selectedTimeLimit);return(0,react.useEffect)((()=>{setTimeLimitPerRound(selectedTimeLimit)}),[selectedTimeLimit]),{timeLimitPerRound,handleClickTimeLimit:e=>{const target=e.target;setTimeLimitPerRound(Number(target.value))}}},hooks_useTotalRound=selectedTotalRound=>{const[totalRound,setTotalRound]=(0,react.useState)(selectedTotalRound);return(0,react.useEffect)((()=>{setTotalRound(selectedTotalRound)}),[selectedTotalRound]),{totalRound,handleClickRound:e=>{const target=e.target;setTotalRound(Number(target.textContent))}}};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const hooks_useRoomSetting=({onClose})=>{const{roomId}=(0,dist.g)(),{mutate:applyRoomSetting}=hooks_useApplyRoomSetting(Number(roomId)),{roomSetting:selectedRoomSetting}=(0,useGetRoomInfo.$)(),{category,handleClickOption}=hooks_useCategoryDropdown(selectedRoomSetting?.category),{totalRound,handleClickRound}=hooks_useTotalRound(selectedRoomSetting?.totalRound),{timeLimitPerRound,handleClickTimeLimit}=useTimerPerRound(selectedRoomSetting?.timeLimit);return{roomSetting:{category,totalRound,timeLimitPerRound},handleClickOption,handleClickRound,handleClickTimeLimit,handleClickApply:()=>{category&&totalRound&&timeLimitPerRound&&(applyRoomSetting({category:category.value,totalRound,timeLimit:timeLimitPerRound}),onClose())}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const roomSettingTitleContainer={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},roomSettingTitleWrapper={name:"zl1inp",styles:"display:flex;justify-content:center"},roomSettingTitle=(0,emotion_react_browser_esm.AH)(Theme.S.typography.body2,";font-weight:700;",""),roomSettingButtonContainer={name:"e4w4z7",styles:"display:flex;justify-content:center;gap:1.6rem"},RoomSettingContainer=({children,title})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingTitleContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:roomSettingTitleWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingTitle,children:title})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:roomSettingButtonContainer,children})]}),RoomSettingContainer_RoomSettingContainer=RoomSettingContainer;RoomSettingContainer.__docgenInfo={description:"",methods:[],displayName:"RoomSettingContainer",props:{title:{required:!0,tsType:{name:"union",raw:"'카테고리' | '총 라운드' | '라운드 당 타이머'",elements:[{name:"literal",value:"'카테고리'"},{name:"literal",value:"'총 라운드'"},{name:"literal",value:"'라운드 당 타이머'"}]},description:""}}};const roomSettingModalLayout=(0,emotion_react_browser_esm.AH)("background-color:",Theme.S.color.peanut300,";",""),roomSettingModalTitle={name:"1kymkw5",styles:"font-size:1.6rem"},roomSettingContainer=(0,emotion_react_browser_esm.AH)("display:flex;flex-direction:column;justify-content:space-around;gap:2.4rem;padding:1.6rem;border-radius:",Theme.S.borderRadius.radius10,";background-color:white;",""),roomSettingButton=isSelected=>(0,emotion_react_browser_esm.AH)("width:4rem;height:4rem;border-radius:",Theme.S.borderRadius.radius10,";background-color:",isSelected?Theme.S.color.peanut500:Theme.S.color.peanut300,";transition:background-color 0.3s;","");var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),config=__webpack_require__("./src/constants/config.ts");const TOTAL_ROUND_LIST=[5,7,10],TIMER_PER_ROUND_LIST=[5e3,1e4,15e3],RoomSettingModal=({isOpen,onClose})=>{const{roomSetting,handleClickOption,handleClickRound,handleClickTimeLimit,handleClickApply}=hooks_useRoomSetting({onClose}),{category,totalRound,timeLimitPerRound}=roomSetting;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,css:roomSettingModalLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:roomSettingModalTitle,children:"방 설정"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingContainer_RoomSettingContainer,{title:"카테고리",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CategoryDropdown_CategoryDropdown,{category:category?.label,handleClickOption})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingContainer_RoomSettingContainer,{title:"총 라운드",children:TOTAL_ROUND_LIST.map((round=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:roomSettingButton(totalRound===round),onClick:handleClickRound,children:round})},round)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingContainer_RoomSettingContainer,{title:"라운드 당 타이머",children:TIMER_PER_ROUND_LIST.map((timeLimit=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{css:roomSettingButton(timeLimitPerRound===timeLimit),onClick:handleClickTimeLimit,value:timeLimit,children:[timeLimit/config.S2,"초"]})},timeLimit)))})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:handleClickApply,children:"적용"})})]})},RoomSettingModal_RoomSettingModal=RoomSettingModal;RoomSettingModal.__docgenInfo={description:"",methods:[],displayName:"RoomSettingModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",matchingResult:"matchingResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",isRoomInitial:"isRoomInitial",categoryList:"categoryList"}},"./src/hooks/useGetRoomInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useGetRoomInfo});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/config.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const useGetRoomInfo=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.roomMembers,Number(roomId)],queryFn:()=>(0,_apis_room__WEBPACK_IMPORTED_MODULE_0__.qE)(Number(roomId)),refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=_constants_config__WEBPACK_IMPORTED_MODULE_4__.A3)&&_constants_config__WEBPACK_IMPORTED_MODULE_4__.S2,refetchIntervalInBackground:!0,gcTime:0});return{members:data?.members,roomSetting:data?.roomSetting,master:data?.master,isGameStart:data?.isGameStart}}},"./src/utils/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CustomError,D:()=>NetworkError});const ERROR_MESSAGE={NOT_READY_ROOM:"해당 방의 게임이 이미 시작되었어요. 게임이 끝날 때까지 기다려볼까요?",NOT_PROGRESSED_ROOM:"이미 게임이 종료되었어요. 최종 결과를 확인해볼까요?",NOT_FINISHED_ROOM:"해당 방의 게임이 아직 종료되지 않았어요.",NOT_FOUND_ROOM:"해당 방을 찾을 수 없어요. 방을 새로 만들어주세요!",NOT_ROOM_MEMBER:"사용자가 해당 방에 존재하지 않아요. 다시 접속해볼까요?",EXCEED_MAX_MEMBER_COUNT:"방의 최대 인원을 초과했습니다.",ALREADY_EXIST_MASTER:"이미 방장이 존재합니다.",ALREADY_MASTER:"해당 멤버는 이미 방장입니다.",INVALID_MASTER_CREATION:"방에 멤버가 존재하면 방장을 생성할 수 없습니다.",NOT_EXIST_MASTER:"방장이 존재하지 않습니다.",NOT_EXIST_COMMON:"일반 멤버가 존재하지 않습니다.",INVALID_TIME_LIMIT:"타이머는 5초, 10초, 15초로만 설정 가능합니다.",INVALID_RANGE_TOTAL_ROUND:"총 라운드는 5, 7, 10 라운드로만 설정 가능합니다.",EMPTY_VOTE_DEADLINE:"라운드 종료 시간이 설정되지 않았습니다.",MISMATCH_ROUND:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",ROUND_LESS_THAN_START_ROUND:"startRound보다 크거나 같아야 합니다.",ROUND_GREATER_THAN_CURRENT_ROUND:"currentRound보다 작거나 같아야 합니다.",INVALID_ROUND_GAP:"currentRound과 round의 차이는 ?이하여야 합니다.",NOT_FOUND_BALANCE_CONTENT:"존재하지 않는 컨텐츠네요. 게임을 다시 진행해주세요!",NOT_FOUND_ROOM_CONTENT:"해당 방에 존재하지 않은 컨텐츠입니다. 게임을 다시 진행해주세요!",NO_RESOURCE_FOUND:"요청한 리소스를 찾을 수 없습니다. 게임을 다시 진행해주세요!",NOT_FOUND_BALANCE_OPTION:"옵션을 올바르게 선택해주세요.",ALREADY_VOTED:"이미 투표가 반영되었어요. 해당 라운드가 끝날 때까지 기다려볼까요?",VOTE_FINISHED:"투표가 이미 종료되었어요.",VOTE_NOT_FINISHED:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",CAN_NOT_CHECK_MATCHING_PERCENT:"종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다.",FIELD_ERROR:"필드값 입력이 잘못되었습니다.",URL_PARAMETER_ERROR:"URL parameter 입력이 잘못되었습니다.",METHOD_ARGUMENT_TYPE_MISMATCH:"입력한 값의 타입이 잘못되었습니다.",METHOD_NOT_SUPPORTED:"허용되지 않은 메서드입니다.",INTERNAL_SERVER_ERROR:"서버에 오류가 발생했어요. 다시 시도해 주세요!"};class CustomError extends Error{constructor({errorCode,status}){super(),this.errorCode=errorCode,this.message=ERROR_MESSAGE[errorCode],this.status=status}}class NetworkError extends Error{status=555;message="네트워크가 불안정해요. 다시 시도해주세요!"}}}]);