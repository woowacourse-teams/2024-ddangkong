"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[241],{"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_error__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/error.ts");const __WEBPACK_DEFAULT_EXPORT__={async request({url,method,body,headers}){try{const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers});if(!response.ok){const apiError=await response.json();throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.e({...apiError,status:response.status})}return response}catch(error){if(error instanceof _utils_error__WEBPACK_IMPORTED_MODULE_0__.e)throw error;throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.D}},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/apis/room.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gn:()=>exitRoom,ew:()=>applyRoomSetting,qE:()=>getRoomInfo,rm:()=>getCategoryList,zj:()=>startGame});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const getRoomInfo=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getRoomInfo(roomId)});return await res.json()},startGame=async roomId=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.startGame(roomId)})},getCategoryList=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.categoryList});return await res.json()},applyRoomSetting=async(roomId,roomSetting)=>{const{totalRound,timeLimit,category}=roomSetting;await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.applyRoomSetting(roomId),headers:{"Content-Type":"application/json"},body:{totalRound,timeLimit,category}})},exitRoom=async(roomId,memberId)=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.delete({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.deleteRoom(roomId,memberId)})}},"./src/components/ReadyMembersContainer/ReadyMembersContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadyMembersContainer_ReadyMembersContainer});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout={name:"ch4q08",styles:"display:flex;flex-direction:column;gap:2rem;width:100%"},membersContainer=(0,emotion_react_browser_esm.AH)("position:relative;height:25rem;padding:2rem 3rem 0;border-radius:2rem;background-color:",Theme.S.color.peanut300,";font-weight:600;font-size:1rem;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}",""),totalNumber={name:"1h2hkhu",styles:"padding-left:2rem;font-weight:900;font-size:1.6rem"},memberList={name:"10zw2ye",styles:"display:flex;flex-direction:column;gap:2rem"},inviteButton=(0,emotion_react_browser_esm.AH)("display:flex;align-items:center;gap:2rem;width:100%;border-radius:",(0,getBorderRadius.A)("medium"),";background-color:",Theme.S.color.peanut400,";font-size:1rem;",""),memberItem={name:"15umcqw",styles:"display:flex;align-items:center;gap:2rem"},profileBox={name:"1bezcfz",styles:"display:flex;justify-content:center;align-items:center;width:3.6rem;height:3.6rem;border-radius:50%;background-color:white"},profileImage={name:"xjt14x",styles:"width:60%"},memberStatus={name:"mk4uq1",styles:"display:flex;flex:1;justify-content:space-between;align-items:center"};var InviteModal=__webpack_require__("./src/components/common/InviteModal/InviteModal.tsx");const crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp",plusIcon_namespaceObject=__webpack_require__.p+"static/media/plusIcon.b45e831d.webp",sillyDdangkong_namespaceObject=__webpack_require__.p+"static/media/sillyDdangkong.53e26d0b.webp";var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),atom=__webpack_require__("./src/recoil/atom.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ReadyMembersContainer=()=>{const{members,master}=(0,useGetRoomInfo.$)(),{isOpen,show,close}=(0,useModal.A)(),[memberInfo,setMemberInfo]=(0,es.L4)(atom.u);return(0,react.useEffect)((()=>{memberInfo.isMaster||master.memberId!==memberInfo.memberId||setMemberInfo({...memberInfo,isMaster:!0})}),[master.memberId]),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("p",{css:totalNumber,children:["총 인원 ",members.length,"명"]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:memberList,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{css:inviteButton,onClick:show,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:plusIcon_namespaceObject,alt:"추가 아이콘"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"초대하기"})]})}),members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:sillyDdangkong_namespaceObject,alt:"사용자 프로필",css:profileImage})}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:crownIcon_namespaceObject,alt:"왕관 아이콘"})]})]},member.memberId)))]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(InviteModal.A,{isOpen,onClose:close})]})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer"}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",matchingResult:"matchingResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",isRoomInitial:"isRoomInitial",categoryList:"categoryList"}},"./src/hooks/useGetRoomInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useGetRoomInfo});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/config.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const useGetRoomInfo=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.roomMembers,Number(roomId)],queryFn:()=>(0,_apis_room__WEBPACK_IMPORTED_MODULE_0__.qE)(Number(roomId)),refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=_constants_config__WEBPACK_IMPORTED_MODULE_4__.A3)&&_constants_config__WEBPACK_IMPORTED_MODULE_4__.S2,refetchIntervalInBackground:!0,gcTime:0});return{members:data?.members,roomSetting:data?.roomSetting,master:data?.master,isGameStart:data?.isGameStart}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return{isOpen,show:()=>{setIsOpen(!0)},close:()=>{setIsOpen(!1)}}}},"./src/utils/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CustomError,D:()=>NetworkError});const ERROR_MESSAGE={NOT_READY_ROOM:"해당 방의 게임이 이미 시작되었어요. 게임이 끝날 때까지 기다려볼까요?",NOT_PROGRESSED_ROOM:"이미 게임이 종료되었어요. 최종 결과를 확인해볼까요?",NOT_FINISHED_ROOM:"해당 방의 게임이 아직 종료되지 않았어요.",NOT_FOUND_ROOM:"해당 방을 찾을 수 없어요. 방을 새로 만들어주세요!",NOT_ROOM_MEMBER:"사용자가 해당 방에 존재하지 않아요. 다시 접속해볼까요?",EXCEED_MAX_MEMBER_COUNT:"방의 최대 인원을 초과했습니다.",ALREADY_EXIST_MASTER:"이미 방장이 존재합니다.",ALREADY_MASTER:"해당 멤버는 이미 방장입니다.",INVALID_MASTER_CREATION:"방에 멤버가 존재하면 방장을 생성할 수 없습니다.",NOT_EXIST_MASTER:"방장이 존재하지 않습니다.",NOT_EXIST_COMMON:"일반 멤버가 존재하지 않습니다.",INVALID_TIME_LIMIT:"타이머는 5초, 10초, 15초로만 설정 가능합니다.",INVALID_RANGE_TOTAL_ROUND:"총 라운드는 5, 7, 10 라운드로만 설정 가능합니다.",EMPTY_VOTE_DEADLINE:"라운드 종료 시간이 설정되지 않았습니다.",MISMATCH_ROUND:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",ROUND_LESS_THAN_START_ROUND:"startRound보다 크거나 같아야 합니다.",ROUND_GREATER_THAN_CURRENT_ROUND:"currentRound보다 작거나 같아야 합니다.",INVALID_ROUND_GAP:"currentRound과 round의 차이는 ?이하여야 합니다.",NOT_FOUND_BALANCE_CONTENT:"존재하지 않는 컨텐츠네요. 게임을 다시 진행해주세요!",NOT_FOUND_ROOM_CONTENT:"해당 방에 존재하지 않은 컨텐츠입니다. 게임을 다시 진행해주세요!",NO_RESOURCE_FOUND:"요청한 리소스를 찾을 수 없습니다. 게임을 다시 진행해주세요!",NOT_FOUND_BALANCE_OPTION:"옵션을 올바르게 선택해주세요.",ALREADY_VOTED:"이미 투표가 반영되었어요. 해당 라운드가 끝날 때까지 기다려볼까요?",VOTE_FINISHED:"투표가 이미 종료되었어요.",VOTE_NOT_FINISHED:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",CAN_NOT_CHECK_MATCHING_PERCENT:"종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다.",FIELD_ERROR:"필드값 입력이 잘못되었습니다.",URL_PARAMETER_ERROR:"URL parameter 입력이 잘못되었습니다.",METHOD_ARGUMENT_TYPE_MISMATCH:"입력한 값의 타입이 잘못되었습니다.",METHOD_NOT_SUPPORTED:"허용되지 않은 메서드입니다.",INTERNAL_SERVER_ERROR:"서버에 오류가 발생했어요. 다시 시도해 주세요!"};class CustomError extends Error{constructor({errorCode,status}){super(),this.errorCode=errorCode,this.message=ERROR_MESSAGE[errorCode],this.status=status}}class NetworkError extends Error{status=555;message="네트워크가 불안정해요. 다시 시도해주세요!"}}}]);