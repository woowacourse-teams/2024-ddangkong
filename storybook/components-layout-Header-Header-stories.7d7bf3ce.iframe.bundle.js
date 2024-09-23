"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[594],{"./src/components/layout/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,가운데_제목_헤더:()=>가운데_제목_헤더,라운드_헤더:()=>라운드_헤더,방_설정_헤더:()=>방_설정_헤더,투표_현황_헤더:()=>투표_현황_헤더});var _Header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/layout/Header/Header.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Header",component:_Header__WEBPACK_IMPORTED_MODULE_0__.Ay},가운데_제목_헤더={render:()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Header__WEBPACK_IMPORTED_MODULE_0__.Ub,{title:"가운데 제목 헤더"})},방_설정_헤더={render:()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Header__WEBPACK_IMPORTED_MODULE_0__.v4,{title:"방 설정 헤더"})},라운드_헤더={render:()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Header__WEBPACK_IMPORTED_MODULE_0__.gK,{})},투표_현황_헤더={render:()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_Header__WEBPACK_IMPORTED_MODULE_0__.tT,{title:"투표 현황"})},__namedExportsOrder=["가운데_제목_헤더","방_설정_헤더","라운드_헤더","투표_현황_헤더"];가운데_제목_헤더.parameters={...가운데_제목_헤더.parameters,docs:{...가운데_제목_헤더.parameters?.docs,source:{originalSource:'{\n  render: () => <TitleHeader title="가운데 제목 헤더" />\n}',...가운데_제목_헤더.parameters?.docs?.source}}},방_설정_헤더.parameters={...방_설정_헤더.parameters,docs:{...방_설정_헤더.parameters?.docs,source:{originalSource:'{\n  render: () => <RoomSettingHeader title="방 설정 헤더" />\n}',...방_설정_헤더.parameters?.docs?.source}}},라운드_헤더.parameters={...라운드_헤더.parameters,docs:{...라운드_헤더.parameters?.docs,source:{originalSource:"{\n  render: () => <RoundHeader />\n}",...라운드_헤더.parameters?.docs?.source}}},투표_현황_헤더.parameters={...투표_현황_헤더.parameters,docs:{...투표_현황_헤더.parameters?.docs,source:{originalSource:'{\n  render: () => <BackHeader title="투표 현황" />\n}',...투표_현황_헤더.parameters?.docs?.source}}}},"./src/apis/balanceContent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>fetchBalanceContent,O:()=>fetchRoundVoteResult,bR:()=>checkMyGameStatus,jd:()=>fetchVoteIsFinished,sl:()=>voteBalanceContent});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const fetchBalanceContent=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.balanceContent(roomId)});return await res.json()},voteBalanceContent=async({optionId,contentId,roomId,memberId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.post({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.vote(roomId,contentId),headers:{"Content-Type":"application/json"},body:{memberId,optionId}});return await res.json()},fetchRoundVoteResult=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.roundVoteResult(roomId,contentId)});return await res.json()},checkMyGameStatus=async({roomId,currentRound})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.myGameStatus(roomId,currentRound),headers:{"Content-Type":"application/json"}});return await res.json()},fetchVoteIsFinished=async({contentId,roomId})=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.voteIsFinished(roomId,contentId)});return await res.json()}},"./src/components/layout/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tT:()=>BackHeader,v4:()=>RoomSettingHeader,gK:()=>RoundHeader,Ub:()=>TitleHeader,Ay:()=>Header_Header});var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const headerLayout=isCenter=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:",isCenter?"center":"space-between",";align-items:center;height:15vh;padding:0 2.4rem;",""),roundText={name:"1icein2",styles:"display:flex;align-items:center;width:2.4rem;height:2.4rem;font-weight:bold;font-size:1.6rem"},buttonWrapper={name:"1ocs895",styles:"display:flex;justify-content:center;align-items:center;width:2rem;height:2rem"},gameTitle={name:"1anrxxk",styles:"font-weight:bold;font-size:2rem"},iconImage={name:"fmrzco",styles:"display:flex;align-items:center;width:2.4rem;height:2.4rem"};var react=__webpack_require__("./node_modules/react/index.js");var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),room=__webpack_require__("./src/apis/room.ts"),atom=__webpack_require__("./src/recoil/atom.ts");var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useRoutePath=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),currentPath={isNicknamePage:location.pathname.startsWith(routes.b.nickname),isReadyPage:location.pathname===routes.b.ready(Number(roomId)),isFinalResultPage:location.pathname===routes.b.gameResult(Number(roomId)),isRoundResultStatusPage:location.pathname===routes.b.roundResultStatus(Number(roomId))};return{isNicknamePage:currentPath.isNicknamePage,isReadyPage:currentPath.isReadyPage,isRoundResultStatusPage:currentPath.isRoundResultStatusPage,isFinalResultPage:currentPath.isFinalResultPage}},arrowLeft_namespaceObject=__webpack_require__.p+"static/media/arrowLeft.d6435a9d.svg",exitIcon_namespaceObject=__webpack_require__.p+"static/media/exitIcon.88be77da.png",settingsIcon_namespaceObject=__webpack_require__.p+"static/media/settingsIcon.8588567d.svg";var RoomSettingModal=__webpack_require__("./src/components/common/RoomSettingModal/RoomSettingModal.tsx"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Header=()=>{const{isNicknamePage,isReadyPage,isRoundResultStatusPage}=hooks_useRoutePath();return(0,react.useEffect)((()=>{const handleKeyDown=event=>{("F5"===event.key||event.ctrlKey&&"r"===event.key)&&event.preventDefault()};window.addEventListener("keydown",handleKeyDown);const handleBeforeUnload=event=>{event.preventDefault(),alert("새로고침 시 게임에서 나가질 수 있습니다")};return window.addEventListener("beforeunload",handleBeforeUnload),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("beforeunload",handleBeforeUnload)}}),[]),isNicknamePage?(0,emotion_react_jsx_runtime_browser_esm.Y)(TitleHeader,{title:"닉네임 설정"}):isReadyPage?(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingHeader,{title:"밸런스 게임"}):isRoundResultStatusPage?(0,emotion_react_jsx_runtime_browser_esm.Y)(BackHeader,{title:"투표 현황"}):(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyHeader,{})},EmptyHeader=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)("header",{css:headerLayout()}),TitleHeader=({title})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("header",{css:headerLayout(!0),children:(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title})}),RoomSettingHeader=({title})=>{const{isOpen,show,close}=(0,useModal.A)(),{handleExit}=(()=>{const{memberId}=(0,es.vc)(atom.u),navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),exitRoomMutation=(0,useMutation.n)({mutationFn:({roomId,memberId})=>(0,room.Gn)(roomId,memberId),onSuccess:()=>{navigate("/")}});return{handleExit:()=>{exitRoomMutation.mutate({roomId:Number(roomId),memberId:Number(memberId)})}}})(),memberInfo=(0,es.vc)(atom.u);return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:handleExit,css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:exitIcon_namespaceObject,alt:"방 설정",css:iconImage})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title}),memberInfo.isMaster?(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:show,css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:settingsIcon_namespaceObject,alt:"방 설정",css:iconImage})}):(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText}),isOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingModal.A,{isOpen,onClose:close})]})},RoundHeader=()=>{const{roomId}=(0,dist.g)(),isRoundResultPage=location.pathname===routes.b.roundResult(Number(roomId)),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),title=isRoundResultPage?"투표 결과":"밸런스 게임";return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:roundText,children:[balanceContent.currentRound,"/",balanceContent.totalRound]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText})]})},BackHeader=({title})=>{const navigate=(0,dist.Zp)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{navigate(-1)},css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:arrowLeft_namespaceObject,alt:"뒤로 가기"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText})]})},Header_Header=Header;EmptyHeader.__docgenInfo={description:"",methods:[],displayName:"EmptyHeader"},TitleHeader.__docgenInfo={description:"",methods:[],displayName:"TitleHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},RoomSettingHeader.__docgenInfo={description:"",methods:[],displayName:"RoomSettingHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},RoundHeader.__docgenInfo={description:"",methods:[],displayName:"RoundHeader"},BackHeader.__docgenInfo={description:"",methods:[],displayName:"BackHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header"}},"./src/hooks/useBalanceContentQuery.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/balanceContent.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=roomId=>{const balanceContentQuery=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.balanceContent,Number(roomId)],queryFn:async()=>await(0,_apis_balanceContent__WEBPACK_IMPORTED_MODULE_0__.Gd)(Number(roomId))});return{...balanceContentQuery,balanceContent:balanceContentQuery.data}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return{isOpen,show:()=>{setIsOpen(!0)},close:()=>{setIsOpen(!1)}}}},"./src/recoil/atom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>roomUuidState,u:()=>memberInfoState});var recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js");const memberInfoState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.eU)({key:"memberInfo",default:{memberId:null,nickname:null,isMaster:!1}}),roomUuidState=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.eU)({key:"roomUuid",default:""})}}]);