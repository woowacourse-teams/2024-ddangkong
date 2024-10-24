"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[867],{"./src/components/TabContentContainer/TabContentContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabContentContainer_stories,투표_통계:()=>투표_통계,투표_현황:()=>투표_현황});var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const contentWrapperStyle=(0,emotion_react_browser_esm.AH)("display:flex;flex-direction:column;gap:15%;height:50vh;overflow-y:auto;padding:2.4rem;border:0.3rem solid ",Theme.S.color.peanut400,";border-radius:0.8rem;",""),roundVoteResultContainer={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},optionContainer={name:"s4usvj",styles:"display:flex;justify-content:space-between;gap:0.8rem;font-weight:bold;font-size:1.4rem"},barWrapperStyle={name:"9kcjqh",styles:"display:flex;overflow:hidden;align-items:center;width:inherit;border-radius:1.6rem"},barWrapper={name:"zur63y",styles:"display:flex;justify-content:center;align-items:center;height:8vh;color:black;font-weight:bold;font-size:1.6rem;transition:all 1s"},firstBar=(percent,isBigFirstOption)=>(0,emotion_react_browser_esm.AH)(barWrapper," overflow:hidden;width:",percent,"%;border-radius:1.6rem 0 0 1.6rem;background-color:",isBigFirstOption?Theme.S.color.peanut400:Theme.S.color.gray,";transform:translateX(5px);clip-path:",100===percent?"none":"polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",";",""),secondBar=(percent,isBigFirstOption)=>(0,emotion_react_browser_esm.AH)(barWrapper," overflow:hidden;width:",percent,"%;border-radius:0 1.6rem 1.6rem 0;background-color:",isBigFirstOption?Theme.S.color.gray:Theme.S.color.peanut400,";transform:translateX(-5px);clip-path:",100===percent?"none":"polygon(10px 0, 100% 0, 100% 100%, 0 100%)",";",""),noVoteTextContainer={name:"zigog8",styles:"display:flex;flex-direction:column;align-items:center"},noVoteText=(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;height:8vh;",Theme.S.typography.headline3,";",""),angryImage={name:"ne5uve",styles:"width:16rem;height:14rem"},totalResultInfoContainer={name:"zigog8",styles:"display:flex;flex-direction:column;align-items:center"},totalResultInfoText={name:"1w0tudv",styles:"font-size:1.4rem;line-height:2rem"},emphasizeText={name:"1efi8gv",styles:"font-weight:bold"},TabContentContainer_util=totalResult=>{const{firstOption,secondOption}=totalResult,isEqual=firstOption.percent===secondOption.percent,dominantOption=firstOption.percent>secondOption.percent?firstOption:secondOption;return{isEqual,dominantPercent:dominantOption.percent,dominantName:dominantOption.name}};var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx");const optionParticipantsContainerLayout={name:"koo7tc",styles:"display:flex;flex-direction:column;width:100%;row-gap:1.2rem"},horizontalDivider=(0,emotion_react_browser_esm.AH)("width:100%;height:1px;margin:1.4rem 0;background-color:",Theme.S.color.gray300,";","");__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");const optionParticipantsLayout={name:"ch4q08",styles:"display:flex;flex-direction:column;gap:2rem;width:100%"},optionInfo={name:"1akzvke",styles:"font-weight:bold;font-size:1.6rem"},participantsListWrapper={name:"qrhm24",styles:"display:grid;grid-template-columns:repeat(2, 1fr);row-gap:1.4rem"};const nicknameItemLayout={name:"10fbv33",styles:"display:flex;align-items:center;gap:0.6rem"},nicknameText=isMyNickname=>(0,emotion_react_browser_esm.AH)("font-weight:",isMyNickname?"bold":400,";font-size:1.2rem;",""),profileImage={name:"h3hy14",styles:"width:1.8rem;height:1.8rem"};var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp"),useGetmember=__webpack_require__("./src/hooks/useGetmember.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const NicknameItem=({nickName})=>{const{member}=(0,useGetmember.A)(),isMyNickname=member.nickname===nickName;return(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:nicknameItemLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:sillyDdangkongMedium,alt:"사용자 프로필",css:profileImage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:nicknameText(isMyNickname),children:nickName})]})},NicknameItem_NicknameItem=NicknameItem;NicknameItem.__docgenInfo={description:"",methods:[],displayName:"NicknameItem",props:{nickName:{required:!0,tsType:{name:"string"},description:""}}};const OptionParticipants=({optionName,memberCount,members})=>{const screenReaderOptionParticipants=`${optionName}. ${memberCount}명`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:optionParticipantsLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderOptionParticipants}),(0,emotion_react_jsx_runtime_browser_esm.FD)("p",{css:optionInfo,"aria-hidden":!0,children:[optionName,": ",memberCount]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:participantsListWrapper,children:members.map(((member,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(NicknameItem_NicknameItem,{nickName:member},index)))})]})},OptionParticipants_OptionParticipants=OptionParticipants;OptionParticipants.__docgenInfo={description:"",methods:[],displayName:"OptionParticipants",props:{optionName:{required:!0,tsType:{name:"string"},description:""},memberCount:{required:!0,tsType:{name:"number"},description:""},members:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};var useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),react=__webpack_require__("./node_modules/react/index.js"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),config=__webpack_require__("./src/constants/config.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useMyGameStatusQuery=({roomId,currentRound})=>{const myGameStatusQuery=(0,useQuery.I)({queryKey:[queryKeys.e.myGameStatus,roomId,currentRound],queryFn:()=>{if(!currentRound)throw new Error("balanceContent 가 존재하지 않습니다.");return(0,balanceContent.bR)({roomId,currentRound})},enabled:!!currentRound,refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=config.A3)&&config.S2,refetchIntervalInBackground:!0,gcTime:0});return{...myGameStatusQuery,isRoundFinished:myGameStatusQuery.data?.isRoundFinished,isGameFinished:myGameStatusQuery.data?.isGameFinished}};var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useMyGameStatus=({roomId})=>{const navigate=(0,dist.Zp)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),{isRoundFinished,isGameFinished}=hooks_useMyGameStatusQuery({roomId:Number(roomId),currentRound:balanceContent?.currentRound});(0,react.useEffect)((()=>{isGameFinished&&navigate(routes.b.gameResult(Number(roomId))),isRoundFinished&&navigate(routes.b.game(Number(roomId)))}),[isRoundFinished,isGameFinished])},roundVoteResultInitialValue_namespaceObject=JSON.parse('{"group":{"firstOption":{"optionId":1,"name":"Loading...","members":[],"memberCount":0,"percent":50},"secondOption":{"optionId":2,"name":"Loading...","members":[],"memberCount":0,"percent":50},"giveUp":{"members":[],"memberCount":0}},"total":{"firstOption":{"optionId":1,"name":"Loading...","percent":50},"secondOption":{"optionId":2,"name":"Loading...","percent":50}}}'),hooks_useRoundVoteResultQuery=({roomId,contentId})=>{const roundVoteResultQuery=(0,useQuery.I)({queryKey:[queryKeys.e.roundVoteResult,roomId,contentId],queryFn:async()=>{if(void 0===contentId)throw new Error("contentId 가 존재하지 않습니다.");if(void 0===roomId)throw new Error("방이 존재하지 않습니다.");return await(0,balanceContent.O)({roomId,contentId})},placeholderData:roundVoteResultInitialValue_namespaceObject,enabled:!!contentId});return{...roundVoteResultQuery,groupRoundResult:roundVoteResultQuery.data?.group,totalResult:roundVoteResultQuery.data?.total}},OptionParticipantsContainer=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),{groupRoundResult}=hooks_useRoundVoteResultQuery({roomId:Number(roomId),contentId:balanceContent?.contentId});return hooks_useMyGameStatus({roomId:Number(roomId)}),groupRoundResult?(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:optionParticipantsContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipants_OptionParticipants,{optionName:groupRoundResult.firstOption.name,members:groupRoundResult.firstOption.members,memberCount:groupRoundResult.firstOption.memberCount}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:horizontalDivider}),(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipants_OptionParticipants,{optionName:groupRoundResult.secondOption.name,members:groupRoundResult.secondOption.members,memberCount:groupRoundResult.secondOption.memberCount}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:horizontalDivider}),(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipants_OptionParticipants,{optionName:"투표에 참여하지 않으셨어요",members:groupRoundResult.giveUp.members,memberCount:groupRoundResult.giveUp.memberCount})]})}):(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"데이터가 없습니다"})},OptionParticipantsContainer_OptionParticipantsContainer=OptionParticipantsContainer;OptionParticipantsContainer.__docgenInfo={description:"",methods:[],displayName:"OptionParticipantsContainer"};const hooks_useCountAnimation=({target,start=50,duration=2e3})=>{const[count,setCount]=(0,react.useState)(start);return(0,react.useEffect)((()=>{if(void 0===target||target===start)return;const totalFrame=Math.round(duration/8.333333333333334);let currentNumber=start;const counter=setInterval((()=>{const progress=1===(timingRate=++currentNumber/totalFrame)?1:1-Math.pow(2,-10*timingRate);var timingRate;setCount(Math.round(target*progress)),1===progress&&clearInterval(counter)}),8.333333333333334);return()=>clearInterval(counter)}),[target,start,duration]),count},RoundVoteContainer_hook=groupRoundResult=>({animatedFirstPercent:hooks_useCountAnimation({target:groupRoundResult?.firstOption.percent}),animatedSecondPercent:hooks_useCountAnimation({target:groupRoundResult?.secondOption.percent})});var TopicContainer=__webpack_require__("./src/components/TopicContainer/TopicContainer.tsx");const angryDdangkong_namespaceObject=__webpack_require__.p+"static/media/angryDdangkong.29469aa8.webp",TabContentContainer=({isVoteStatisticsTabActive})=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),{groupRoundResult,totalResult}=hooks_useRoundVoteResultQuery({roomId:Number(roomId),contentId:balanceContent?.contentId});hooks_useMyGameStatus({roomId:Number(roomId)});const{animatedFirstPercent,animatedSecondPercent}=RoundVoteContainer_hook(groupRoundResult);if(!groupRoundResult)return;const isBigFirstOption=groupRoundResult.firstOption.percent>=50,isVote=0!==groupRoundResult.firstOption.memberCount||0!==groupRoundResult.secondOption.memberCount,dominantVoteData=totalResult?TabContentContainer_util(totalResult):null,screenReaderFirstOption=`${groupRoundResult.firstOption.name} ${groupRoundResult.firstOption.percent}%. ${groupRoundResult.firstOption.memberCount}명 선택.`,screenReaderSecondOption=`${groupRoundResult.secondOption.name} ${groupRoundResult.secondOption.percent}%. ${groupRoundResult.secondOption.memberCount}명 선택`,screenReaderDominantVote=`📢 전체 유저 중 ${dominantVoteData?.dominantPercent}%는. ${dominantVoteData?.dominantName}를 선택했어요`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:contentWrapperStyle,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TopicContainer.A,{}),isVote&&isVoteStatisticsTabActive&&(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(A11yOnly.A,{children:[screenReaderFirstOption,screenReaderSecondOption]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roundVoteResultContainer,"aria-hidden":!0,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:optionContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:groupRoundResult.firstOption.name}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:groupRoundResult.secondOption.name})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:barWrapperStyle,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:firstBar(groupRoundResult.firstOption.percent,isBigFirstOption),children:[animatedFirstPercent,"%"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:secondBar(groupRoundResult.secondOption.percent,isBigFirstOption),children:[animatedSecondPercent,"%"]})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:(isActiveGroupTab=isVoteStatisticsTabActive,(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isActiveGroupTab?"visible":"hidden",";justify-content:space-between;align-items:center;height:1.2rem;font-weight:bold;font-size:1.2rem;","")),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[groupRoundResult.firstOption.memberCount,"명"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[groupRoundResult.secondOption.memberCount,"명"]})]})]}),totalResult&&dominantVoteData&&(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:totalResultInfoContainer,children:dominantVoteData.isEqual?(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:totalResultInfoText,children:"📢 전체 유저 사이에서는 의견이 반반이에요 😲"}):(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderDominantVote}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:totalResultInfoText,"aria-hidden":!0,children:["📢 전체 유저 중"," ",(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:emphasizeText,children:[dominantVoteData.dominantPercent,"%"]}),"는"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:totalResultInfoText,"aria-hidden":!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:emphasizeText,children:dominantVoteData.dominantName}),"를 선택했어요 !"]})]})})]}),isVote&&!isVoteStatisticsTabActive&&(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipantsContainer_OptionParticipantsContainer,{}),!isVote&&(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:noVoteTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:angryDdangkong_namespaceObject,alt:"화난 땅콩",css:angryImage}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:noVoteText,children:["아무도 투표하지 않으셨네요 :",")"]})]})]});var isActiveGroupTab},TabContentContainer_TabContentContainer=TabContentContainer;TabContentContainer.__docgenInfo={description:"",methods:[],displayName:"TabContentContainer",props:{isVoteStatisticsTabActive:{required:!0,tsType:{name:"boolean"},description:""}}};const TabContentContainer_stories={title:"TabContentContainer",component:TabContentContainer_TabContentContainer},투표_통계={args:{isVoteStatisticsTabActive:!0}},투표_현황={args:{isVoteStatisticsTabActive:!1}},__namedExportsOrder=["투표_통계","투표_현황"];투표_통계.parameters={...투표_통계.parameters,docs:{...투표_통계.parameters?.docs,source:{originalSource:"{\n  args: {\n    isVoteStatisticsTabActive: true\n  }\n}",...투표_통계.parameters?.docs?.source}}},투표_현황.parameters={...투표_현황.parameters,docs:{...투표_현황.parameters?.docs,source:{originalSource:"{\n  args: {\n    isVoteStatisticsTabActive: false\n  }\n}",...투표_현황.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useSuspenseQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js"),_suspense_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/suspense.js");function useSuspenseQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)({...options,enabled:!0,suspense:!0,throwOnError:_suspense_js__WEBPACK_IMPORTED_MODULE_1__.R3,placeholderData:void 0},_tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__.$,queryClient)}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult,bR:()=>checkMyGameStatus,jd:()=>fetchVoteIsFinished,sl:()=>voteBalanceContent});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.balanceContent(roomId)});return await res.json()},voteBalanceContent=async({optionId,contentId,roomId,memberId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.post({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.vote(roomId,contentId),headers:{"Content-Type":"application/json"},body:{memberId,optionId}});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.roundVoteResult(roomId,contentId)});return await res.json()},checkMyGameStatus=async({roomId,currentRound})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.myGameStatus(roomId,currentRound),headers:{"Content-Type":"application/json"}});return await res.json()},fetchVoteIsFinished=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.voteIsFinished(roomId,contentId)});return await res.json()}},"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>apis_fetcher});const ERROR_MESSAGE={NOT_READY_ROOM:"해당 방의 게임이 이미 시작되었어요. 게임이 끝날 때까지 기다려볼까요?",NOT_PROGRESSED_ROOM:"이미 게임이 종료되었어요. 최종 결과를 확인해볼까요?",NOT_FINISHED_ROOM:"해당 방의 게임이 아직 종료되지 않았어요.",NOT_FOUND_ROOM:"해당 방을 찾을 수 없어요. 방을 새로 만들어주세요!",NOT_ROOM_MEMBER:"사용자가 해당 방에 존재하지 않아요. 다시 접속해볼까요?",EXCEED_MAX_MEMBER_COUNT:"방의 최대 인원을 초과했습니다.",ALREADY_EXIST_MASTER:"이미 방장이 존재합니다.",ALREADY_MASTER:"해당 멤버는 이미 방장입니다.",INVALID_MASTER_CREATION:"방에 멤버가 존재하면 방장을 생성할 수 없습니다.",NOT_EXIST_MASTER:"방장이 존재하지 않습니다.",NOT_EXIST_COMMON:"일반 멤버가 존재하지 않습니다.",INVALID_TIME_LIMIT:"타이머는 10초, 15초, 30초, 60초로만 설정 가능합니다.",INVALID_RANGE_TOTAL_ROUND:"총 라운드는 5, 7, 10 라운드로만 설정 가능합니다.",EMPTY_VOTE_DEADLINE:"라운드 종료 시간이 설정되지 않았습니다.",MISMATCH_ROUND:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",ROUND_LESS_THAN_START_ROUND:"startRound보다 크거나 같아야 합니다.",ROUND_GREATER_THAN_CURRENT_ROUND:"currentRound보다 작거나 같아야 합니다.",INVALID_ROUND_GAP:"currentRound과 round의 차이는 ?이하여야 합니다.",NOT_FOUND_BALANCE_CONTENT:"존재하지 않는 컨텐츠네요. 게임을 다시 진행해주세요!",NOT_FOUND_ROOM_CONTENT:"해당 방에 존재하지 않은 컨텐츠입니다. 게임을 다시 진행해주세요!",NO_RESOURCE_FOUND:"요청한 리소스를 찾을 수 없습니다. 게임을 다시 진행해주세요!",NOT_FOUND_BALANCE_OPTION:"옵션을 올바르게 선택해주세요.",ALREADY_VOTED:"이미 투표가 반영되었어요. 해당 라운드가 끝날 때까지 기다려볼까요?",VOTE_FINISHED:"투표가 이미 종료되었어요.",VOTE_NOT_FINISHED:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",CAN_NOT_CHECK_MATCHING_PERCENT:"종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다.",FIELD_ERROR:"필드값 입력이 잘못되었습니다.",URL_PARAMETER_ERROR:"URL parameter 입력이 잘못되었습니다.",METHOD_ARGUMENT_TYPE_MISMATCH:"입력한 값의 타입이 잘못되었습니다.",METHOD_NOT_SUPPORTED:"허용되지 않은 메서드입니다.",INTERNAL_SERVER_ERROR:"서버에 오류가 발생했어요. 다시 시도해 주세요!",NOT_FOUND_COOKIE:"사용자 정보가 있어야 방에 참여할 수 있어요. 홈화면으로 이동하여 방을 새로 만들어주세요!",INVALID_COOKIE:"사용자 정보가 있어야 방에 참여할 수 있어요. 홈화면으로 이동하여 방을 새로 만들어주세요!"};class CustomError extends Error{constructor({errorCode,status}){super(),this.errorCode=errorCode,this.message=ERROR_MESSAGE[errorCode],this.status=status}}class NetworkError extends Error{status=555;message="네트워크가 불안정해요. 다시 시도해주세요!"}const apis_fetcher={async request({url,method,body,headers}){try{const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers,credentials:"include"});if(!response.ok){const apiError=await response.json();throw new CustomError({...apiError,status:response.status})}return response}catch(error){if(error instanceof CustomError)throw error;throw new NetworkError}},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/apis/room.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gn:()=>exitRoom,Xf:()=>getMember,ew:()=>applyRoomSetting,qE:()=>getRoomInfo,rm:()=>getCategoryList,zj:()=>startGame});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const getRoomInfo=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getRoomInfo(roomId)});return await res.json()},startGame=async roomId=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.startGame(roomId)})},getCategoryList=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.categoryList});return await res.json()},applyRoomSetting=async(roomId,roomSetting)=>{const{totalRound,timeLimit,category}=roomSetting;await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.applyRoomSetting(roomId),headers:{"Content-Type":"application/json"},body:{totalRound,timeLimit,category}})},exitRoom=async(roomId,memberId)=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.delete({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.deleteRoom(roomId,memberId)})},getMember=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getMember});return await res.json()}},"./src/components/TopicContainer/TopicContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TopicContainer_TopicContainer});var dist=__webpack_require__("./node_modules/react-router/dist/index.js");const topicContainerLayout={name:"1u3km2u",styles:"display:flex;flex-basis:20%;flex-direction:column;justify-content:center;align-items:center;gap:2rem"},categoryText={name:"ywz92v",styles:"font-weight:bold;font-size:1.2rem"},topicText={name:"1akzvke",styles:"font-weight:bold;font-size:1.6rem"};var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TopicContainer=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),isGamePage=location.pathname===routes.b.game(Number(roomId)),screenReaderQuestion=`질문. ${balanceContent.question}.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderQuestion}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,"aria-hidden":!0,children:isGamePage&&balanceContent.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText,"aria-hidden":!0,children:balanceContent.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});const a11yOnlyLayout={name:"90pyz3",styles:"overflow:hidden;position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;white-space:nowrap;clip:rect(0, 0, 0, 0)"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",matchingResult:"matchingResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",isRoomInitial:"isRoomInitial",categoryList:"categoryList",getMember:"getMember"}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=roomId=>{const balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,Number(roomId)],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId))});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}},"./src/hooks/useGetmember.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.getMember],queryFn:_apis_room__WEBPACK_IMPORTED_MODULE_0__.Xf,staleTime:3e4});return{roomId:data?.roomId||0,roomUuid:data?.roomUuid||"",member:{memberId:data?.member?.memberId||0,nickname:data?.member?.nickname||"",isMaster:data?.member?.isMaster||!1}}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":(module,__unused_webpack_exports,__webpack_require__)=>{var anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),iteratorClose=__webpack_require__("./node_modules/core-js/internals/iterator-close.js");module.exports=function(iterator,fn,value,ENTRIES){try{return ENTRIES?fn(anObject(value)[0],value[1]):fn(value)}catch(error){iteratorClose(iterator,"throw",error)}}},"./node_modules/core-js/internals/create-iter-result-object.js":module=>{module.exports=function(value,done){return{value,done}}},"./node_modules/core-js/internals/define-built-ins.js":(module,__unused_webpack_exports,__webpack_require__)=>{var defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js");module.exports=function(target,src,options){for(var key in src)defineBuiltIn(target,key,src[key],options);return target}},"./node_modules/core-js/internals/iterator-create-proxy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),create=__webpack_require__("./node_modules/core-js/internals/object-create.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),defineBuiltIns=__webpack_require__("./node_modules/core-js/internals/define-built-ins.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),InternalStateModule=__webpack_require__("./node_modules/core-js/internals/internal-state.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js"),IteratorPrototype=__webpack_require__("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,createIterResultObject=__webpack_require__("./node_modules/core-js/internals/create-iter-result-object.js"),iteratorClose=__webpack_require__("./node_modules/core-js/internals/iterator-close.js"),TO_STRING_TAG=wellKnownSymbol("toStringTag"),setInternalState=InternalStateModule.set,createIteratorProxyPrototype=function(IS_ITERATOR){var getInternalState=InternalStateModule.getterFor(IS_ITERATOR?"WrapForValidIterator":"IteratorHelper");return defineBuiltIns(create(IteratorPrototype),{next:function next(){var state=getInternalState(this);if(IS_ITERATOR)return state.nextHandler();try{var result=state.done?void 0:state.nextHandler();return createIterResultObject(result,state.done)}catch(error){throw state.done=!0,error}},return:function(){var state=getInternalState(this),iterator=state.iterator;if(state.done=!0,IS_ITERATOR){var returnMethod=getMethod(iterator,"return");return returnMethod?call(returnMethod,iterator):createIterResultObject(void 0,!0)}if(state.inner)try{iteratorClose(state.inner.iterator,"normal")}catch(error){return iteratorClose(iterator,"throw",error)}return iteratorClose(iterator,"normal"),createIterResultObject(void 0,!0)}})},WrapForValidIteratorPrototype=createIteratorProxyPrototype(!0),IteratorHelperPrototype=createIteratorProxyPrototype(!1);createNonEnumerableProperty(IteratorHelperPrototype,TO_STRING_TAG,"Iterator Helper"),module.exports=function(nextHandler,IS_ITERATOR){var IteratorProxy=function Iterator(record,state){state?(state.iterator=record.iterator,state.next=record.next):state=record,state.type=IS_ITERATOR?"WrapForValidIterator":"IteratorHelper",state.nextHandler=nextHandler,state.counter=0,state.done=!1,setInternalState(this,state)};return IteratorProxy.prototype=IS_ITERATOR?WrapForValidIteratorPrototype:IteratorHelperPrototype,IteratorProxy}},"./node_modules/core-js/internals/iterator-map.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getIteratorDirect=__webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js"),createIteratorProxy=__webpack_require__("./node_modules/core-js/internals/iterator-create-proxy.js"),callWithSafeIterationClosing=__webpack_require__("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),IteratorProxy=createIteratorProxy((function(){var iterator=this.iterator,result=anObject(call(this.next,iterator));if(!(this.done=!!result.done))return callWithSafeIterationClosing(iterator,this.mapper,[result.value,this.counter++],!0)}));module.exports=function map(mapper){return anObject(this),aCallable(mapper),new IteratorProxy(getIteratorDirect(this),{mapper})}},"./node_modules/core-js/modules/esnext.iterator.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),map=__webpack_require__("./node_modules/core-js/internals/iterator-map.js");$({target:"Iterator",proto:!0,real:!0,forced:__webpack_require__("./node_modules/core-js/internals/is-pure.js")},{map})},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"}}]);