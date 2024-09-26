"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[167],{"./src/components/ReadyMembersContainer/ReadyMembersContainer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});var _ReadyMembersContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),_mocks_data_roomInfo_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/mocks/data/roomInfo.json");const meta={title:"ReadyMembersContainer",component:_ReadyMembersContainer__WEBPACK_IMPORTED_MODULE_0__.A},기본값={args:{members:_mocks_data_roomInfo_json__WEBPACK_IMPORTED_MODULE_1__.members}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    members: roomInfo.members\n  }\n}",...기본값.parameters?.docs?.source}}}},"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_error__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/error.ts");const __WEBPACK_DEFAULT_EXPORT__={async request({url,method,body,headers}){try{const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers});if(!response.ok){const apiError=await response.json();throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.e({...apiError,status:response.status})}return response}catch(error){if(error instanceof _utils_error__WEBPACK_IMPORTED_MODULE_0__.e)throw error;throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.D}},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/apis/room.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gn:()=>exitRoom,ew:()=>applyRoomSetting,qE:()=>getRoomInfo,rm:()=>getCategoryList,zj:()=>startGame});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const getRoomInfo=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getRoomInfo(roomId)});return await res.json()},startGame=async roomId=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.startGame(roomId)})},getCategoryList=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.categoryList});return await res.json()},applyRoomSetting=async(roomId,roomSetting)=>{const{totalRound,timeLimit,category}=roomSetting;await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.applyRoomSetting(roomId),headers:{"Content-Type":"application/json"},body:{totalRound,timeLimit,category}})},exitRoom=async(roomId,memberId)=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.delete({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.deleteRoom(roomId,memberId)})}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",matchingResult:"matchingResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",isRoomInitial:"isRoomInitial",categoryList:"categoryList"}},"./src/hooks/useGetRoomInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useGetRoomInfo});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/config.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const useGetRoomInfo=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.roomMembers,Number(roomId)],queryFn:()=>(0,_apis_room__WEBPACK_IMPORTED_MODULE_0__.qE)(Number(roomId)),refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=_constants_config__WEBPACK_IMPORTED_MODULE_4__.A3)&&_constants_config__WEBPACK_IMPORTED_MODULE_4__.S2,refetchIntervalInBackground:!0,gcTime:0});return{members:data?.members,roomSetting:data?.roomSetting,master:data?.master,isGameStart:data?.isGameStart}}},"./src/utils/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CustomError,D:()=>NetworkError});const ERROR_MESSAGE={NOT_READY_ROOM:"해당 방의 게임이 이미 시작되었어요. 게임이 끝날 때까지 기다려볼까요?",NOT_PROGRESSED_ROOM:"이미 게임이 종료되었어요. 최종 결과를 확인해볼까요?",NOT_FINISHED_ROOM:"해당 방의 게임이 아직 종료되지 않았어요.",NOT_FOUND_ROOM:"해당 방을 찾을 수 없어요. 방을 새로 만들어주세요!",NOT_ROOM_MEMBER:"사용자가 해당 방에 존재하지 않아요. 다시 접속해볼까요?",EXCEED_MAX_MEMBER_COUNT:"방의 최대 인원을 초과했습니다.",ALREADY_EXIST_MASTER:"이미 방장이 존재합니다.",ALREADY_MASTER:"해당 멤버는 이미 방장입니다.",INVALID_MASTER_CREATION:"방에 멤버가 존재하면 방장을 생성할 수 없습니다.",NOT_EXIST_MASTER:"방장이 존재하지 않습니다.",NOT_EXIST_COMMON:"일반 멤버가 존재하지 않습니다.",INVALID_TIME_LIMIT:"타이머는 5초, 10초, 15초로만 설정 가능합니다.",INVALID_RANGE_TOTAL_ROUND:"총 라운드는 5, 7, 10 라운드로만 설정 가능합니다.",EMPTY_VOTE_DEADLINE:"라운드 종료 시간이 설정되지 않았습니다.",MISMATCH_ROUND:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",ROUND_LESS_THAN_START_ROUND:"startRound보다 크거나 같아야 합니다.",ROUND_GREATER_THAN_CURRENT_ROUND:"currentRound보다 작거나 같아야 합니다.",INVALID_ROUND_GAP:"currentRound과 round의 차이는 ?이하여야 합니다.",NOT_FOUND_BALANCE_CONTENT:"존재하지 않는 컨텐츠네요. 게임을 다시 진행해주세요!",NOT_FOUND_ROOM_CONTENT:"해당 방에 존재하지 않은 컨텐츠입니다. 게임을 다시 진행해주세요!",NO_RESOURCE_FOUND:"요청한 리소스를 찾을 수 없습니다. 게임을 다시 진행해주세요!",NOT_FOUND_BALANCE_OPTION:"옵션을 올바르게 선택해주세요.",ALREADY_VOTED:"이미 투표가 반영되었어요. 해당 라운드가 끝날 때까지 기다려볼까요?",VOTE_FINISHED:"투표가 이미 종료되었어요.",VOTE_NOT_FINISHED:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",CAN_NOT_CHECK_MATCHING_PERCENT:"종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다.",FIELD_ERROR:"필드값 입력이 잘못되었습니다.",URL_PARAMETER_ERROR:"URL parameter 입력이 잘못되었습니다.",METHOD_ARGUMENT_TYPE_MISMATCH:"입력한 값의 타입이 잘못되었습니다.",METHOD_NOT_SUPPORTED:"허용되지 않은 메서드입니다.",INTERNAL_SERVER_ERROR:"서버에 오류가 발생했어요. 다시 시도해 주세요!"};class CustomError extends Error{constructor({errorCode,status}){super(),this.errorCode=errorCode,this.message=ERROR_MESSAGE[errorCode],this.status=status}}class NetworkError extends Error{status=555;message="네트워크가 불안정해요. 다시 시도해주세요!"}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":(module,__unused_webpack_exports,__webpack_require__)=>{var anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),iteratorClose=__webpack_require__("./node_modules/core-js/internals/iterator-close.js");module.exports=function(iterator,fn,value,ENTRIES){try{return ENTRIES?fn(anObject(value)[0],value[1]):fn(value)}catch(error){iteratorClose(iterator,"throw",error)}}},"./node_modules/core-js/internals/create-iter-result-object.js":module=>{module.exports=function(value,done){return{value,done}}},"./node_modules/core-js/internals/define-built-ins.js":(module,__unused_webpack_exports,__webpack_require__)=>{var defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js");module.exports=function(target,src,options){for(var key in src)defineBuiltIn(target,key,src[key],options);return target}},"./node_modules/core-js/internals/iterator-create-proxy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),create=__webpack_require__("./node_modules/core-js/internals/object-create.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),defineBuiltIns=__webpack_require__("./node_modules/core-js/internals/define-built-ins.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),InternalStateModule=__webpack_require__("./node_modules/core-js/internals/internal-state.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js"),IteratorPrototype=__webpack_require__("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,createIterResultObject=__webpack_require__("./node_modules/core-js/internals/create-iter-result-object.js"),iteratorClose=__webpack_require__("./node_modules/core-js/internals/iterator-close.js"),TO_STRING_TAG=wellKnownSymbol("toStringTag"),setInternalState=InternalStateModule.set,createIteratorProxyPrototype=function(IS_ITERATOR){var getInternalState=InternalStateModule.getterFor(IS_ITERATOR?"WrapForValidIterator":"IteratorHelper");return defineBuiltIns(create(IteratorPrototype),{next:function next(){var state=getInternalState(this);if(IS_ITERATOR)return state.nextHandler();try{var result=state.done?void 0:state.nextHandler();return createIterResultObject(result,state.done)}catch(error){throw state.done=!0,error}},return:function(){var state=getInternalState(this),iterator=state.iterator;if(state.done=!0,IS_ITERATOR){var returnMethod=getMethod(iterator,"return");return returnMethod?call(returnMethod,iterator):createIterResultObject(void 0,!0)}if(state.inner)try{iteratorClose(state.inner.iterator,"normal")}catch(error){return iteratorClose(iterator,"throw",error)}return iteratorClose(iterator,"normal"),createIterResultObject(void 0,!0)}})},WrapForValidIteratorPrototype=createIteratorProxyPrototype(!0),IteratorHelperPrototype=createIteratorProxyPrototype(!1);createNonEnumerableProperty(IteratorHelperPrototype,TO_STRING_TAG,"Iterator Helper"),module.exports=function(nextHandler,IS_ITERATOR){var IteratorProxy=function Iterator(record,state){state?(state.iterator=record.iterator,state.next=record.next):state=record,state.type=IS_ITERATOR?"WrapForValidIterator":"IteratorHelper",state.nextHandler=nextHandler,state.counter=0,state.done=!1,setInternalState(this,state)};return IteratorProxy.prototype=IS_ITERATOR?WrapForValidIteratorPrototype:IteratorHelperPrototype,IteratorProxy}},"./node_modules/core-js/internals/iterator-map.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getIteratorDirect=__webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js"),createIteratorProxy=__webpack_require__("./node_modules/core-js/internals/iterator-create-proxy.js"),callWithSafeIterationClosing=__webpack_require__("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),IteratorProxy=createIteratorProxy((function(){var iterator=this.iterator,result=anObject(call(this.next,iterator));if(!(this.done=!!result.done))return callWithSafeIterationClosing(iterator,this.mapper,[result.value,this.counter++],!0)}));module.exports=function map(mapper){return anObject(this),aCallable(mapper),new IteratorProxy(getIteratorDirect(this),{mapper})}},"./node_modules/core-js/modules/esnext.iterator.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),map=__webpack_require__("./node_modules/core-js/internals/iterator-map.js");$({target:"Iterator",proto:!0,real:!0,forced:__webpack_require__("./node_modules/core-js/internals/is-pure.js")},{map})}}]);