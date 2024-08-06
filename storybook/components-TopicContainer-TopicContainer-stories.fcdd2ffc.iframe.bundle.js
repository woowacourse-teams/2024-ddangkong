"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[89],{"./src/components/TopicContainer/TopicContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>TopicContainer_stories,기본_카테고리_및_질문:()=>기본_카테고리_및_질문});var dist=__webpack_require__("./node_modules/react-router/dist/index.js");const topicContainerLayout={name:"1u3km2u",styles:"display:flex;flex-basis:20%;flex-direction:column;justify-content:center;align-items:center;gap:2rem"},categoryText={name:"ywz92v",styles:"font-weight:bold;font-size:1.2rem"},topicText={name:"1akzvke",styles:"font-weight:bold;font-size:1.6rem"},ROUTES_game=roomId=>`/${roomId}/game`;var useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TopicContainer=()=>{const{balanceContent}=(0,useBalanceContentQuery.A)(),location=(0,dist.zy)(),roomId=(0,dist.g)(),isGamePage=location.pathname===ROUTES_game(Number(roomId));return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,children:isGamePage&&balanceContent?.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText,children:balanceContent?.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"};const TopicContainer_stories={title:"TopicContainer",component:TopicContainer_TopicContainer},기본_카테고리_및_질문={},__namedExportsOrder=["기본_카테고리_및_질문"];기본_카테고리_및_질문.parameters={...기본_카테고리_및_질문.parameters,docs:{...기본_카테고리_및_질문.parameters?.docs,source:{originalSource:"{}",...기본_카테고리_및_질문.parameters?.docs?.source}}}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult});const fetcher_fetcher={async request({url,method,body,headers}){const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers});if(!response.ok)throw new Error("fetch fail error");return response},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}},apis_fetcher=fetcher_fetcher;var url=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await apis_fetcher.get({url:url.H.balanceContent(roomId)});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await apis_fetcher.get({url:url.H.roundVoteResult(roomId,contentId)});return await res.json()}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",gameResult:"gameResult",roundVoteResult:"roundVoteResult",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers"}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,roomId],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId)),staleTime:18e4});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}}}]);