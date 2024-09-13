"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[287],{"./src/components/Timer/Timer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>Timer_stories,기본_타이머:()=>기본_타이머});var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),config=__webpack_require__("./src/constants/config.ts");const formatLeftRoundTime=leftRoundTime=>{const minutes=Math.floor(leftRoundTime/60),seconds=leftRoundTime%60;return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`},convertMsecToSecond=msec=>msec/config.S;var useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const Timer_hook=roomId=>{const{balanceContent}=(0,useBalanceContentQuery.A)(roomId),timeLimit=balanceContent?.timeLimit||1e4,[leftRoundTime,setLeftRoundTime]=(0,react.useState)(convertMsecToSecond(timeLimit)),[barWidthPercent,setBarWidthPercent]=(0,react.useState)(100),isAlmostFinished=leftRoundTime<=5,timeout=(0,react.useRef)();return(0,react.useEffect)((()=>{leftRoundTime<=0&&clearInterval(timeout.current)}),[leftRoundTime]),(0,react.useEffect)((()=>{if(!balanceContent)return;const DECREASE_RATE=100/convertMsecToSecond(timeLimit);return setLeftRoundTime(convertMsecToSecond(timeLimit)),timeout.current=setInterval((()=>{setLeftRoundTime((prev=>prev-1)),setBarWidthPercent((prevWidth=>prevWidth>0?prevWidth-DECREASE_RATE:0))}),config.S),()=>{clearInterval(timeout.current)}}),[balanceContent,timeLimit]),{leftRoundTime,barWidthPercent,isAlmostFinished}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const shake=emotion_react_browser_esm.i7`
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
`,timerLayout=(0,emotion_react_browser_esm.AH)("display:flex;position:relative;flex-basis:5%;align-items:center;width:100%;height:3.2rem;padding:0 1rem;border-radius:",Theme.S.borderRadius.radius30,";background-color:",Theme.S.color.peanut200,";box-sizing:border-box;",""),timerWrapper=width=>(0,emotion_react_browser_esm.AH)("display:flex;position:absolute;right:",100-width,"%;flex-direction:column;justify-content:center;align-items:center;gap:2rem;height:4rem;transition:all 1s linear;",""),timerIcon={name:"ryq21y",styles:"position:absolute;width:4.8rem;height:4.8rem"},timerIconShake=(0,emotion_react_browser_esm.AH)("animation:",shake," 1s linear infinite;",""),timerText=isAlmostFinished=>(0,emotion_react_browser_esm.AH)("position:absolute;top:5.2rem;color:",isAlmostFinished?"red":"black",";font-weight:bold;font-size:1.6rem;",""),ddangkongTimer_namespaceObject=__webpack_require__.p+"static/media/ddangkongTimer.5927106e.png";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Timer=()=>{const{roomId}=(0,dist.g)(),{barWidthPercent,leftRoundTime,isAlmostFinished}=Timer_hook(Number(roomId));return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:timerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:(width=barWidthPercent,(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;width:",width,"%;height:60%;border-radius:",Theme.S.borderRadius.radius30,";background-color:",Theme.S.color.peanut500,";transition:width 1s linear;",""))}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:timerWrapper(barWidthPercent),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{css:[timerIcon,isAlmostFinished&&timerIconShake,"",""],src:ddangkongTimer_namespaceObject,alt:"타이머"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:timerText(isAlmostFinished),children:formatLeftRoundTime(leftRoundTime)})]})]});var width},Timer_Timer=Timer;Timer.__docgenInfo={description:"",methods:[],displayName:"Timer"};const Timer_stories={title:"Timer",component:Timer_Timer},기본_타이머={},__namedExportsOrder=["기본_타이머"];기본_타이머.parameters={...기본_타이머.parameters,docs:{...기본_타이머.parameters?.docs,source:{originalSource:"{}",...기본_타이머.parameters?.docs?.source}}}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult,bR:()=>checkMyGameStatus});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.balanceContent(roomId)});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.roundVoteResult(roomId,contentId)});return await res.json()},checkMyGameStatus=async({roomId,currentRound})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.myGameStatus(roomId,currentRound),headers:{"Content-Type":"application/json"}});return await res.json()}},"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _sentry_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@sentry/core/build/esm/exports.js");const __WEBPACK_DEFAULT_EXPORT__={async request({url,method,body,headers}){const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers});if(!response.ok)throw(0,_sentry_react__WEBPACK_IMPORTED_MODULE_0__.Cp)("fetch API ERROR"),new Error("fetch fail error");return response},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",matchingResult:"matchingResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",isRoomInitial:"isRoomInitial",categoryList:"categoryList"}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=roomId=>{const balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,Number(roomId)],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId))});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}}}]);
//# sourceMappingURL=components-Timer-Timer-stories.062e8a15.iframe.bundle.js.map