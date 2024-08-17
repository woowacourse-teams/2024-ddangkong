"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[867],{"./src/components/TabContentContainer/TabContentContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabContentContainer_stories,그룹_탭:()=>그룹_탭,전체_탭:()=>전체_탭});var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const contentWrapperStyle=(0,emotion_react_browser_esm.AH)("display:flex;flex-direction:column;justify-content:center;gap:3.2rem;height:100%;padding:2.4rem;border:0.3rem solid ",Theme.S.color.peanut400,";border-radius:0.8rem;",""),alertText=isGroupTabActive=>(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isGroupTabActive?"hidden":"visible",";justify-content:center;align-items:center;width:100%;",Theme.S.typography.body2," font-weight:bold;",""),roundVoteResultContainer={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},categoryContainer={name:"s4usvj",styles:"display:flex;justify-content:space-between;gap:0.8rem;font-weight:bold;font-size:1.4rem"},barWrapperStyle={name:"9kcjqh",styles:"display:flex;overflow:hidden;align-items:center;width:inherit;border-radius:1.6rem"},barWrapper={name:"zur63y",styles:"display:flex;justify-content:center;align-items:center;height:8vh;color:black;font-weight:bold;font-size:1.6rem;transition:all 1s"},firstBar=(percent,isBigFirstOption)=>(0,emotion_react_browser_esm.AH)(barWrapper," overflow:hidden;width:",percent,"%;border-radius:1.6rem 0 0 1.6rem;background-color:",isBigFirstOption?Theme.S.color.peanut400:Theme.S.color.gray,";transform:translateX(5px);clip-path:",100===percent?"none":"polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",";",""),secondBar=(percent,isBigFirstOption)=>(0,emotion_react_browser_esm.AH)(barWrapper," overflow:hidden;width:",percent,"%;border-radius:0 1.6rem 1.6rem 0;background-color:",isBigFirstOption?Theme.S.color.gray:Theme.S.color.peanut400,";transform:translateX(-5px);clip-path:",100===percent?"none":"polygon(10px 0, 100% 0, 100% 100%, 0 100%)",";",""),noVoteTextContainer={name:"zigog8",styles:"display:flex;flex-direction:column;align-items:center"},noVoteText=(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;height:8vh;",Theme.S.typography.headline3,";",""),angryImage={name:"ne5uve",styles:"width:16rem;height:14rem"},currentVoteButtonWrapper=isGroupTabActive=>(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isGroupTabActive?"visible":"hidden",";justify-content:flex-end;align-items:center;",""),buttonStyle={name:"3vgtsc",styles:"color:black;font-weight:bold;&:active{opacity:0.7;}"};var react=__webpack_require__("./node_modules/react/index.js");const hooks_useCountAnimation=({target,start=50,duration=2e3})=>{const[count,setCount]=(0,react.useState)(start);return(0,react.useEffect)((()=>{if(void 0===target||target===start)return;const totalFrame=Math.round(duration/8.333333333333334);let currentNumber=start;const counter=setInterval((()=>{const progress=1===(timingRate=++currentNumber/totalFrame)?1:1-Math.pow(2,-10*timingRate);var timingRate;setCount(Math.round(target*progress)),1===progress&&clearInterval(counter)}),8.333333333333334);return()=>clearInterval(counter)}),[target,start,duration]),count},RoundVoteContainer_hook=(groupRoundResult,totalResult)=>({animatedFirstPercent:hooks_useCountAnimation({target:groupRoundResult?.firstOption.percent}),animatedSecondPercent:hooks_useCountAnimation({target:groupRoundResult?.secondOption.percent}),animatedTotalFirstPercent:hooks_useCountAnimation({target:totalResult?.firstOption.percent}),animatedTotalSecondPercent:hooks_useCountAnimation({target:totalResult?.secondOption.percent})}),angryDdangkong_namespaceObject=__webpack_require__.p+"static/media/angryDdangkong.b55fdd75.png";var routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),balanceContent=__webpack_require__("./src/apis/balanceContent.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useMyGameStatusQuery=({roomId,currentRound})=>{const myGameStatusQuery=(0,useQuery.I)({queryKey:[queryKeys.e.myGameStatus,roomId,currentRound],queryFn:()=>{if(!currentRound)throw new Error("balanceContent 가 존재하지 않습니다.");return(0,balanceContent.bR)({roomId,currentRound})},enabled:!!currentRound,refetchInterval:1e3});return{...myGameStatusQuery,isRoundFinished:myGameStatusQuery.data?.isRoundFinished,isGameFinished:myGameStatusQuery.data?.isGameFinished}},hooks_useMyGameStatus=({roomId})=>{const navigate=(0,dist.Zp)(),{balanceContent}=(0,useBalanceContentQuery.A)(),{isRoundFinished,isGameFinished}=hooks_useMyGameStatusQuery({roomId:Number(roomId),currentRound:balanceContent?.currentRound});(0,react.useEffect)((()=>{isGameFinished&&navigate(routes.b.gameResult(Number(roomId))),isRoundFinished&&navigate(routes.b.game(Number(roomId)))}),[isRoundFinished,isGameFinished])},roundVoteResultInitialValue_namespaceObject=JSON.parse('{"group":{"firstOption":{"optionId":1,"name":"Loading...","members":[],"memberCount":0,"percent":50},"secondOption":{"optionId":2,"name":"Loading...","members":[],"memberCount":0,"percent":50}},"total":{"firstOption":{"optionId":1,"name":"Loading...","percent":50},"secondOption":{"optionId":2,"name":"Loading...","percent":50}}}'),hooks_useRoundVoteResultQuery=({roomId,contentId})=>{const roundVoteResultQuery=(0,useQuery.I)({queryKey:[queryKeys.e.roundVoteResult,roomId,contentId],queryFn:async()=>{if(void 0===contentId)throw new Error("contentId 가 존재하지 않습니다.");if(void 0===roomId)throw new Error("방이 존재하지 않습니다.");return await(0,balanceContent.O)({roomId,contentId})},placeholderData:roundVoteResultInitialValue_namespaceObject,enabled:!!contentId});return{...roundVoteResultQuery,groupRoundResult:roundVoteResultQuery.data?.group,totalResult:roundVoteResultQuery.data?.total}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const isGroup=value=>"memberCount"in value.firstOption,TabContentContainer=({isGroupTabActive})=>{const{roomId}=(0,dist.g)(),navigate=(0,dist.Zp)(),{balanceContent}=(0,useBalanceContentQuery.A)(),{groupRoundResult,totalResult}=hooks_useRoundVoteResultQuery({roomId:Number(roomId),contentId:balanceContent?.contentId});hooks_useMyGameStatus({roomId:Number(roomId)});const{animatedFirstPercent,animatedSecondPercent,animatedTotalFirstPercent,animatedTotalSecondPercent}=RoundVoteContainer_hook(groupRoundResult,totalResult),roundResult=isGroupTabActive?groupRoundResult:totalResult,isBigFirstOption=roundResult&&roundResult.firstOption.percent>=50,isVote=0!==roundResult?.firstOption.percent||0!==roundResult?.secondOption.percent;return roundResult?(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:contentWrapperStyle,children:isVote?(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:alertText(isGroupTabActive),children:"다른 사람들은 이렇게 생각했어요 🥜"}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roundVoteResultContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:categoryContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:roundResult.firstOption.name}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:roundResult.secondOption.name})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:barWrapperStyle,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:firstBar(roundResult.firstOption.percent,isBigFirstOption),children:[isGroup(roundResult)?animatedFirstPercent:animatedTotalFirstPercent,"%"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:secondBar(roundResult.secondOption.percent,isBigFirstOption),children:[isGroup(roundResult)?animatedSecondPercent:animatedTotalSecondPercent,"%"]})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:(isActiveGroupTab=isGroupTabActive,(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isActiveGroupTab?"visible":"hidden",";justify-content:space-between;align-items:center;height:1.2rem;font-weight:bold;font-size:1.2rem;","")),children:[isGroup(roundResult)&&(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[roundResult.firstOption.memberCount,"명"]}),isGroup(roundResult)&&(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[roundResult.secondOption.memberCount,"명"]})]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:currentVoteButtonWrapper(isGroupTabActive),children:(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{css:buttonStyle,onClick:()=>{navigate(routes.b.roundResultStatus(Number(roomId)))},children:["투표 현황 ",">"]})})]}):(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:noVoteTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:angryDdangkong_namespaceObject,alt:"화난 땅콩",css:angryImage}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:noVoteText,children:["아무도 투표하지 않으셨네요 :",")"]})]})}):(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"데이터가 없습니다"});var isActiveGroupTab},TabContentContainer_TabContentContainer=TabContentContainer;TabContentContainer.__docgenInfo={description:"",methods:[],displayName:"TabContentContainer",props:{isGroupTabActive:{required:!0,tsType:{name:"boolean"},description:""}}};const TabContentContainer_stories={title:"TabContentContainer",component:TabContentContainer_TabContentContainer},그룹_탭={args:{isGroupTabActive:!0}},전체_탭={args:{isGroupTabActive:!1}},__namedExportsOrder=["그룹_탭","전체_탭"];그룹_탭.parameters={...그룹_탭.parameters,docs:{...그룹_탭.parameters?.docs,source:{originalSource:"{\n  args: {\n    isGroupTabActive: true\n  }\n}",...그룹_탭.parameters?.docs?.source}}},전체_탭.parameters={...전체_탭.parameters,docs:{...전체_탭.parameters?.docs,source:{originalSource:"{\n  args: {\n    isGroupTabActive: false\n  }\n}",...전체_탭.parameters?.docs?.source}}}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult,bR:()=>checkMyGameStatus});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H.balanceContent(roomId)});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H.roundVoteResult(roomId,contentId)});return await res.json()},checkMyGameStatus=async({roomId,currentRound})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H.myGameStatus(roomId,currentRound),headers:{"Content-Type":"application/json"}});return await res.json()}},"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _sentry_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@sentry/core/build/esm/exports.js");const __WEBPACK_DEFAULT_EXPORT__={async request({url,method,body,headers}){const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers});if(!response.ok)throw(0,_sentry_react__WEBPACK_IMPORTED_MODULE_0__.Cp)("fetch API ERROR"),new Error("fetch fail error");return response},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",gameResult:"gameResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",categoryList:"categoryList"}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,Number(roomId)],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId))});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}}}]);