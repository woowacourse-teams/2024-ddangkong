"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[941],{"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult,bR:()=>checkMyGameStatus,jd:()=>fetchVoteIsFinished,sl:()=>voteBalanceContent});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.balanceContent(roomId)});return await res.json()},voteBalanceContent=async({optionId,contentId,roomId,memberId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.post({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.vote(roomId,contentId),headers:{"Content-Type":"application/json"},body:{memberId,optionId}});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.roundVoteResult(roomId,contentId)});return await res.json()},checkMyGameStatus=async({roomId,currentRound})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.myGameStatus(roomId,currentRound),headers:{"Content-Type":"application/json"}});return await res.json()},fetchVoteIsFinished=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.voteIsFinished(roomId,contentId)});return await res.json()}},"./src/components/SelectContainer/Timer/Timer.util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nc:()=>convertMsecToSecond,qE:()=>formatLeftRoundTime,wk:()=>isAlertTimer});var _constants_config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/config.ts");const formatLeftRoundTime=leftRoundTime=>{const minutes=Math.floor(leftRoundTime/60),seconds=leftRoundTime%60;return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`},convertMsecToSecond=msec=>msec/_constants_config__WEBPACK_IMPORTED_MODULE_0__.S2,isAlertTimer=(leftRoundTime,timeLimit)=>leftRoundTime===Math.floor(timeLimit/2)||leftRoundTime===_constants_config__WEBPACK_IMPORTED_MODULE_0__.cZ},"./src/components/common/AlertModal/AlertModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AlertModal_AlertModal});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const alertModalTitle=(0,emotion_react_browser_esm.AH)(Theme.S.typography.headline3,";",""),messageContainer={name:"1azakc",styles:"text-align:center"},alertText={name:"255c6r",styles:"word-break:keep-all"};var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const AlertModal=({isOpen,onClose,onConfirm,message,title,returnFocusRef})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:alertModalTitle,children:title||"알림"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{css:messageContainer,children:message&&message.split("\n").map((text=>(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:alertText,children:text}),(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})]},text)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:()=>{onConfirm&&onConfirm(),onClose()},buttonWidth:"60%",children:"확인"})})]}),AlertModal_AlertModal=AlertModal;AlertModal.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},message:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});const a11yOnlyLayout={name:"90pyz3",styles:"overflow:hidden;position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;white-space:nowrap;clip:rect(0, 0, 0, 0)"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/components/layout/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tT:()=>BackHeader,il:()=>GameHeader,v4:()=>RoomSettingHeader,vc:()=>RoundResultHeader,Ub:()=>TitleHeader,Ay:()=>Header_Header});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const headerLayout=isCenter=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:",isCenter?"center":"space-between",";align-items:center;height:12vh;padding:0 2.4rem;:focus{outline:none;}",""),roundText={name:"1icein2",styles:"display:flex;align-items:center;width:2.4rem;height:2.4rem;font-weight:bold;font-size:1.6rem"},buttonWrapper={name:"1ocs895",styles:"display:flex;justify-content:center;align-items:center;width:2rem;height:2rem"},gameTitle={name:"1anrxxk",styles:"font-weight:bold;font-size:2rem"},iconImage={name:"fmrzco",styles:"display:flex;align-items:center;width:2.4rem;height:2.4rem"},MatchingResultHeaderContainer={name:"19iqmqi",styles:"display:flex;flex-direction:column;align-items:center;gap:1.2rem"},matchingResultTitle=(0,emotion_react_browser_esm.AH)(Theme.S.typography.slogan,";",""),matchingResultCaption={name:"ywz92v",styles:"font-weight:bold;font-size:1.2rem"};var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),room=__webpack_require__("./src/apis/room.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts");__webpack_require__("./node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("./node_modules/core-js/modules/esnext.iterator.for-each.js");const useExit=()=>{const{member:memberId}=(0,useGetUserInfo.A)(),navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),exitRoomMutation=(0,useMutation.n)({mutationFn:({roomId,memberId})=>(0,room.Gn)(roomId,memberId),onSettled:()=>{document.cookie.split(";").forEach((cookie=>{document.cookie=cookie.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date(0).toUTCString()+";path=/")})),navigate("/")}});return{handleExit:()=>{exitRoomMutation.mutate({roomId:Number(roomId),memberId:Number(memberId)})}}};var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useRoutePath=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),currentPath={isNicknamePage:location.pathname.startsWith(routes.b.nickname),isReadyPage:location.pathname===routes.b.ready(Number(roomId)),isRoundResultPage:location.pathname===routes.b.roundResult(Number(roomId)),isMatchingResultPage:location.pathname===routes.b.gameResult(Number(roomId))};return{isNicknamePage:currentPath.isNicknamePage,isReadyPage:currentPath.isReadyPage,isRoundResultPage:currentPath.isRoundResultPage,isMatchingResultPage:currentPath.isMatchingResultPage}},arrowLeft_namespaceObject=__webpack_require__.p+"static/media/arrowLeft.d6435a9d.svg",exitIcon_namespaceObject=__webpack_require__.p+"static/media/exitIcon.58b68e72.svg",settingIcon_namespaceObject=__webpack_require__.p+"static/media/settingIcon.489dd149.svg";var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),AlertModal=__webpack_require__("./src/components/common/AlertModal/AlertModal.tsx"),RoomSettingModal=__webpack_require__("./src/components/common/RoomSettingModal/RoomSettingModal.tsx"),Timer_util=__webpack_require__("./src/components/SelectContainer/Timer/Timer.util.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),useFocus=__webpack_require__("./src/hooks/useFocus.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Header=()=>{const{isNicknamePage,isReadyPage,isRoundResultPage,isMatchingResultPage}=hooks_useRoutePath();return(0,react.useEffect)((()=>{const handleKeyDown=event=>{("F5"===event.key||event.ctrlKey&&"r"===event.key)&&event.preventDefault()};window.addEventListener("keydown",handleKeyDown);const handleBeforeUnload=event=>{event.preventDefault(),alert("새로고침 시 게임에서 나가질 수 있습니다")};return window.addEventListener("beforeunload",handleBeforeUnload),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("beforeunload",handleBeforeUnload)}}),[]),isNicknamePage?(0,emotion_react_jsx_runtime_browser_esm.Y)(TitleHeader,{title:"닉네임 설정"}):isReadyPage?(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingHeader,{title:"밸런스 게임"}):isRoundResultPage?(0,emotion_react_jsx_runtime_browser_esm.Y)(RoundResultHeader,{}):isMatchingResultPage?(0,emotion_react_jsx_runtime_browser_esm.Y)(MatchingResultHeader,{title:"매칭 결과"}):void 0},MatchingResultHeader=({title})=>{const focusRef=(0,useFocus.A)();return(0,emotion_react_jsx_runtime_browser_esm.Y)("header",{css:headerLayout(!0),tabIndex:0,ref:focusRef,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:MatchingResultHeaderContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:matchingResultTitle,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:matchingResultCaption,children:"매칭도를 통해 당신과 가장 잘 맞는 사람을 알아보세요😊"})]})})},TitleHeader=({title})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("header",{css:headerLayout(!0),children:(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title})}),RoomSettingHeader=({title})=>{const{show}=(0,useModal.A)(),{member:{isMaster}}=(0,useGetUserInfo.A)(),{handleExit}=useExit(),returnFocusRef=(0,react.useRef)(null),focusRef=(0,useFocus.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{show(AlertModal.A,{message:"정말로 나가시겠습니까?",onConfirm:handleExit})},css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:exitIcon_namespaceObject,alt:"방 나가기",css:iconImage})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title}),isMaster?(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{ref:returnFocusRef,onClick:()=>{show(RoomSettingModal.A,{returnFocusRef})},css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:settingIcon_namespaceObject,alt:"방 설정",css:iconImage})}):(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText})]})},RoundResultHeader=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),screenReaderRoundResult=`${balanceContent.totalRound}라운드 중. ${balanceContent.currentRound}라운드. 투표 결과 페이지`,focusRef=(0,useFocus.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderRoundResult}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:roundText,"aria-hidden":!0,children:[balanceContent.currentRound,"/",balanceContent.totalRound]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,"aria-hidden":!0,children:"투표 결과"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText,"aria-hidden":!0})]})},GameHeader=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),{totalRound,currentRound,timeLimit}=balanceContent,screenReaderHeader=`${totalRound}라운드.중.${currentRound}라운드. 밸런스 게임 페이지. 제한 시간 ${(0,Timer_util.Nc)(timeLimit)}초.`,focusRef=(0,useFocus.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderHeader}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:roundText,"aria-hidden":!0,children:[currentRound,"/",totalRound]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,"aria-hidden":!0,children:"밸런스 게임"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText,"aria-hidden":!0})]})},BackHeader=({title})=>{const navigate=(0,dist.Zp)(),focusRef=(0,useFocus.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{navigate(-1)},css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:arrowLeft_namespaceObject,alt:"뒤로 가기"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText})]})},Header_Header=Header;MatchingResultHeader.__docgenInfo={description:"",methods:[],displayName:"MatchingResultHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},TitleHeader.__docgenInfo={description:"",methods:[],displayName:"TitleHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},RoomSettingHeader.__docgenInfo={description:"",methods:[],displayName:"RoomSettingHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},RoundResultHeader.__docgenInfo={description:"",methods:[],displayName:"RoundResultHeader"},GameHeader.__docgenInfo={description:"",methods:[],displayName:"GameHeader"},BackHeader.__docgenInfo={description:"",methods:[],displayName:"BackHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header"}},"./src/constants/routes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ROUTES});const ROUTES={main:"/",nickname:"/nickname",ready:roomId=>`/${roomId}/ready`,game:roomId=>`/${roomId}/game`,roundResult:roomId=>`/${roomId}/round/result`,roundResultVote:"/round/result/vote",gameResult:roomId=>`/${roomId}/game/result`,roundResultStatus:roomId=>`/${roomId}/round/result/status`}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=roomId=>{const balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,Number(roomId)],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId))});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}},"./src/hooks/useGetUserInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.getUserInfo],queryFn:_apis_room__WEBPACK_IMPORTED_MODULE_0__.ug,staleTime:72e5});return{roomId:data?.roomId||0,roomUuid:data?.roomUuid||"",member:{memberId:data?.member?.memberId||0,nickname:data?.member?.nickname||"",isMaster:data?.member?.isMaster||!1}}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./node_modules/core-js/modules/esnext.iterator.for-each.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),iterate=__webpack_require__("./node_modules/core-js/internals/iterate.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getIteratorDirect=__webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js");$({target:"Iterator",proto:!0,real:!0},{forEach:function forEach(fn){anObject(this),aCallable(fn);var record=getIteratorDirect(this),counter=0;iterate(record,(function(value){fn(value,counter++)}),{IS_RECORD:!0})}})}}]);