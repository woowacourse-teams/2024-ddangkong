"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[379],{"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,기본값:()=>기본값});var _ReadyMembersContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx"),_mocks_data_roomInfo_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/mocks/data/roomInfo.json");const meta={title:"ReadyMembersContainer",component:_ReadyMembersContainer__WEBPACK_IMPORTED_MODULE_0__.A},기본값={args:{members:_mocks_data_roomInfo_json__WEBPACK_IMPORTED_MODULE_1__.members}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["기본값"];기본값.parameters={...기본값.parameters,docs:{...기본값.parameters?.docs,source:{originalSource:"{\n  args: {\n    members: roomInfo.members\n  }\n}",...기본값.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useSuspenseQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js"),_suspense_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/suspense.js");function useSuspenseQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)({...options,enabled:!0,suspense:!0,throwOnError:_suspense_js__WEBPACK_IMPORTED_MODULE_1__.R3,placeholderData:void 0},_tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__.$,queryClient)}},"./src/apis/fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_error__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/error.ts");const __WEBPACK_DEFAULT_EXPORT__={async request({url,method,body,headers}){try{const response=await fetch(url,{method,body:body&&JSON.stringify(body),headers:headers&&headers,credentials:"include"});if(!response.ok){const apiError=await response.json();throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.e({...apiError,status:response.status})}return response}catch(error){if(error instanceof _utils_error__WEBPACK_IMPORTED_MODULE_0__.e)throw error;throw new _utils_error__WEBPACK_IMPORTED_MODULE_0__.D}},get({url,headers}){return this.request({url,method:"GET",headers})},post({url,body,headers}){return this.request({url,method:"POST",body,headers})},delete({url,headers}){return this.request({url,method:"DELETE",headers})},patch({url,body,headers}){return this.request({url,method:"PATCH",body,headers})},put({url,headers}){return this.request({url,method:"PUT",headers})}}},"./src/apis/room.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gn:()=>exitRoom,ew:()=>applyRoomSetting,qE:()=>getRoomInfo,rm:()=>getCategoryList,ug:()=>getUserInfo,zj:()=>startGame});var _fetcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/fetcher.ts"),_constants_url__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/url.ts");const getRoomInfo=async roomId=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getRoomInfo(roomId)});return await res.json()},startGame=async roomId=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.startGame(roomId)})},getCategoryList=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.categoryList});return await res.json()},applyRoomSetting=async(roomId,roomSetting)=>{const{totalRound,timeLimit,category}=roomSetting;await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.patch({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.applyRoomSetting(roomId),headers:{"Content-Type":"application/json"},body:{totalRound,timeLimit,category}})},exitRoom=async(roomId,memberId)=>{await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.delete({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.deleteRoom(roomId,memberId)})},getUserInfo=async()=>{const res=await _fetcher__WEBPACK_IMPORTED_MODULE_0__.A.get({url:_constants_url__WEBPACK_IMPORTED_MODULE_1__.H$.getUserInfo});return await res.json()}},"./src/components/InviteModal/InviteModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InviteModal_InviteModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),lib=__webpack_require__("./node_modules/react-qr-code/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useClipBoard=()=>{const[isCopied,setIsCopied]=(0,react.useState)(!1);return{isCopied,copyToClipboard:async text=>{await navigator.clipboard.writeText(text),setIsCopied(!0),setTimeout((()=>setIsCopied(!1)),2e3)}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const inviteModalLayout=emotion_react_browser_esm.AH`
  background-color: ${Theme.S.color.peanut300};
`,inviteModalTitle=emotion_react_browser_esm.AH`
  font-size: 1.6rem;
  text-align: center;
`,inviteModalUl=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`,qrcodeWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;
`,inviteModalLi=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: #ffff;
`,inviteModalLinkButton=emotion_react_browser_esm.AH`
  width: 100%;
  padding: 1.6rem 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
`,inviteModalLinkButtonInfoWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
`,inviteModalText=emotion_react_browser_esm.AH`
  overflow: hidden;
  width: 95%;

  font-size: 1.4rem;
  text-overflow: ellipsis;
`,inviteModalCopyIcon=emotion_react_browser_esm.AH`
  width: 10%;
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx");const copyIcon_namespaceObject=__webpack_require__.p+"static/media/copyIcon.d9b466b1.png";var url=__webpack_require__("./src/constants/url.ts"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts"),useToast=__webpack_require__("./src/hooks/useToast.ts");const InviteModal=({isOpen,onClose,returnFocusRef})=>{const{roomUuid}=(0,useGetUserInfo.A)(),inviteUrl=(0,url.MY)(roomUuid),{copyToClipboard}=hooks_useClipBoard(),{show}=(0,useToast.A)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,css:inviteModalLayout,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:inviteModalTitle,children:"초대하기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:inviteModalUl,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:qrcodeWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(lib.Ay,{style:{width:"50%",height:"50%"},value:inviteUrl})})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:inviteModalLi,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{copyToClipboard(inviteUrl),show("링크가 복사되었습니다!")},css:inviteModalLinkButton,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:inviteModalLinkButtonInfoWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:inviteModalText,children:"초대 링크 복사"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:copyIcon_namespaceObject,alt:"복사하기 이미지",css:inviteModalCopyIcon})]})})})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{buttonWidth:"100%",onClick:onClose,children:"닫기"})})]})},InviteModal_InviteModal=InviteModal;InviteModal.__docgenInfo={description:"",methods:[],displayName:"InviteModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Modal_Modal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const hooks_useModalEscClose=(isOpen,onModalClose)=>{(0,react.useEffect)((()=>{const handleKeyDown=event=>{isOpen&&"Escape"===event.key&&onModalClose()};return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[isOpen,onModalClose])};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const modalBackdropLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  background-color: rgb(0 0 0 / 50%);
  inset: 0;
`,modalContentWrapper=({position})=>emotion_react_browser_esm.AH`
  display: flex;
  position: fixed;
  left: 50%;
  flex-direction: column;
  gap: 1.6rem;
  width: 28rem;
  height: fit-content;
  max-height: 70vh;
  min-height: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
  padding: 2.4rem;
  border: none;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;
  box-sizing: border-box;

  ${(()=>{switch(position){case"top":return"\n          top: 0;\n          transform: translate(-50%, 0%);\n        ";case"bottom":return"\n          bottom: 0;\n          transform: translate(-50%, 0%);\n        ";default:return"\n          top: 50%;\n          transform: translate(-50%, -50%);\n        "}})()}
`,modalHeaderLayout=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  font-weight: bold;
`,modalHeaderEmptyBox=position=>emotion_react_browser_esm.AH`
  display: ${"center"===position?"block":"none"};
  width: 1.6rem;
`,modalTitle=({fontSize="bold",fontWeight="2rem"})=>emotion_react_browser_esm.AH`
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`,modalIconButton=({imgSize="1.6rem"})=>emotion_react_browser_esm.AH`
  width: ${imgSize};
  height: ${imgSize};
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }

  img {
    width: 100%;
  }
`,modalTextButton=({buttonWidth="100%",buttonHeight="100%",fontSize="1.6rem",backgroundColor=Theme.S.color.peanut400,fontColor="#000000"})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${buttonWidth};
  height: ${buttonHeight};
  padding: 1rem;
  border: none;
  border-radius: 0.8rem;

  background-color: ${backgroundColor};

  color: ${fontColor};
  font-weight: bold;
  font-size: ${fontSize};

  &:focus {
    outline: none;
  }
`,modalContentLayout=({fontSize="1.2rem"})=>emotion_react_browser_esm.AH`
  * {
    box-sizing: border-box;
  }

  font-size: ${fontSize};
`,modalInputLayout=emotion_react_browser_esm.AH`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #000;
`,modalFooter=({buttonPosition="center",buttonGap="1.2rem"})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: ${buttonPosition};
  gap: ${buttonGap};
`;var closeIcon=__webpack_require__("./src/assets/images/closeIcon.png"),useFocus=__webpack_require__("./src/hooks/useFocus.ts");const Modal=({children,isOpen,onClose,returnFocusRef,position="center",...restProps})=>{const modalRef=(0,react.useRef)(null),focusRef=(0,useFocus.A)();hooks_useModalEscClose(isOpen,onClose);const handleOutsideClick=event=>{isOpen&&modalRef.current&&!modalRef.current.contains(event.target)&&onClose()};if((0,react.useEffect)((()=>()=>{returnFocusRef?.current&&returnFocusRef.current.focus()}),[returnFocusRef?.current]),!isOpen)return null;const modalContent=(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{tabIndex:0,ref:focusRef,role:"dialog","aria-modal":!0,css:modalBackdropLayout,onClick:handleOutsideClick,onKeyDown:handleOutsideClick,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalContentWrapper({position}),ref:modalRef,...restProps,children})});return react_dom.createPortal(modalContent,document.body)};Modal.Header=({position="center",children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:modalHeaderLayout,...restProps,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalHeaderEmptyBox(position)}),children]}),Modal.Title=({fontSize,fontWeight,children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:modalTitle({fontSize,fontWeight}),...restProps,children}),Modal.IconButton=({type="button",src=closeIcon,imgSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalIconButton({imgSize}),type,...restProps,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src,alt:"닫기 버튼"})}),Modal.TextButton=({type="button",onConfirm,buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalTextButton({buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor}),type,onClick:onConfirm,...restProps}),Modal.Content=({children,fontSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:modalContentLayout({fontSize:"1.4rem"}),...restProps,children}),Modal.Input=({...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{css:modalInputLayout,...restProps}),Modal.Footer=({children,buttonPosition,buttonGap,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalFooter({buttonPosition,buttonGap}),...restProps,children});const Modal_Modal=Modal},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const a11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/constants/queryKeys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>QUERY_KEYS});const QUERY_KEYS={balanceContent:"balanceContent",matchingResult:"matchingResult",roundVoteResult:"roundVoteResult",myGameStatus:"myGameStatus",roundIsFinished:"roundIsFinished",roomMembers:"roomMembers",isRoomInitial:"isRoomInitial",categoryList:"categoryList",getUserInfo:"getUserInfo",isJoinable:"isJoinable"}},"./src/hooks/useFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const focusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{focusRef.current&&focusRef.current.focus()}),[]),focusRef}},"./src/hooks/useGetRoomInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useGetRoomInfo});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/config.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const useGetRoomInfo=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.roomMembers,Number(roomId)],queryFn:()=>(0,_apis_room__WEBPACK_IMPORTED_MODULE_0__.qE)(Number(roomId)),refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=_constants_config__WEBPACK_IMPORTED_MODULE_4__.A3)&&_constants_config__WEBPACK_IMPORTED_MODULE_4__.S2,refetchIntervalInBackground:!0,gcTime:0});return{members:data?.members,roomSetting:data?.roomSetting,master:data?.master,isGameStart:data?.isGameStart}}},"./src/hooks/useGetUserInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.I)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.getUserInfo],queryFn:_apis_room__WEBPACK_IMPORTED_MODULE_0__.ug,staleTime:72e5});return{roomId:data?.roomId||0,roomUuid:data?.roomUuid||"",member:{memberId:data?.member?.memberId||0,nickname:data?.member?.nickname||"",isMaster:data?.member?.isMaster||!1}}}},"./src/hooks/useModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_1__.L);if(null===dispatch)throw new Error("ModalDispatchContext가 존재하지 않습니다.");return dispatch}},"./src/hooks/useToast.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ToastProvider/ToastProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const toast=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ToastProvider_ToastProvider__WEBPACK_IMPORTED_MODULE_1__.$);if(!toast)throw new Error("ToastContext를 찾을 수 없습니다.");return toast}},"./src/pages/ReadyPage/components/ReadyMembersContainer/ReadyMembersContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadyMembersContainer_ReadyMembersContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const readyMembersContainerLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,membersContainer=emotion_react_browser_esm.AH`
  position: relative;
  height: 25rem;
  padding: 2rem 3rem 0;
  border-radius: 2rem;

  background-color: ${Theme.S.color.peanut300};

  font-weight: 600;
  font-size: 1rem;

  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`,totalNumber=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;

  font-weight: 900;
  font-size: 2rem;
`,memberList=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,inviteButton=emotion_react_browser_esm.AH`
  width: 12rem;
  height: 4rem;
  border-radius: ${(0,getBorderRadius.A)("medium")};

  background-color: ${Theme.S.color.peanut400};

  font-weight: 700;
`,memberItem=emotion_react_browser_esm.AH`
  display: flex;
  align-items: center;
  gap: 2rem;
`,profileBox=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;

  background-color: white;
`,profileImage=emotion_react_browser_esm.AH`
  width: 60%;
`,memberStatus=emotion_react_browser_esm.AH`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`,crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp";var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp"),A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),InviteModal=__webpack_require__("./src/components/InviteModal/InviteModal.tsx"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts"),useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts"),useModal=__webpack_require__("./src/hooks/useModal.ts");const ReadyMembersContainer=()=>{const{members,master}=(0,useGetRoomInfo.$)(),{show}=(0,useModal.A)(),queryClient=(0,QueryClientProvider.jE)(),returnFocusRef=(0,react.useRef)(null),memberCountMessage=`총 인원 ${members.length}명`;return(0,react.useEffect)((()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.getUserInfo]})}),[master.memberId]),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:readyMembersContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:totalNumber,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{role:"status",children:memberCountMessage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:inviteButton,onClick:()=>{show(InviteModal.A,{returnFocusRef})},ref:returnFocusRef,children:"초대하기"})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:membersContainer,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:memberList,children:members.map((member=>(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:memberItem,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:`${member.isMaster?"방장":""} ${member.nickname}`}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:profileBox,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:sillyDdangkongMedium,alt:"",css:profileImage})}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberStatus,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:member.nickname}),member.isMaster&&(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:crownIcon_namespaceObject,alt:""})]})]},member.memberId)))})})]})},ReadyMembersContainer_ReadyMembersContainer=ReadyMembersContainer;ReadyMembersContainer.__docgenInfo={description:"",methods:[],displayName:"ReadyMembersContainer"}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}},"./src/utils/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CustomError,D:()=>NetworkError});const ERROR_MESSAGE={NOT_READY_ROOM:"이미 게임이 시작되었어요. 게임이 끝날 때까지 기다려볼까요?",NOT_PROGRESSED_ROOM:"이미 게임이 종료되었어요. 최종 결과를 확인해볼까요?",NOT_FINISHED_ROOM:"게임이 아직 종료되지 않았어요. 게임이 끝날 때까지 기다려볼까요?",NOT_FOUND_ROOM:"방을 찾을 수 없어요. 방을 새로 만들어주세요!",CAN_NOT_JOIN_ROOM:"방에 참여할 수 없어요. 방의 진행 상태를 확인해주세요!",INVALID_NICKNAME:"닉네임은 최소 1글자 이상 최대 12글자 이하여야 합니다.",NOT_ROOM_MEMBER:"사용자가 해당 방에 존재하지 않아요. 다시 접속해볼까요?",EXCEED_MAX_MEMBER_COUNT:"방의 최대 인원을 초과했습니다.",ALREADY_EXIST_MASTER:"이미 방장이 존재합니다.",ALREADY_MASTER:"해당 멤버는 이미 방장입니다.",INVALID_MASTER_CREATION:"방에 멤버가 존재하면 방장을 생성할 수 없습니다.",NOT_EXIST_MASTER:"방장이 존재하지 않습니다.",NOT_EXIST_COMMON:"일반 멤버가 존재하지 않습니다.",INVALID_TIME_LIMIT:"타이머는 10초, 15초, 30초, 60초로만 설정 가능합니다.",INVALID_RANGE_TOTAL_ROUND:"총 라운드는 5, 7, 10 라운드로만 설정 가능합니다.",EMPTY_VOTE_DEADLINE:"라운드 종료 시간이 설정되지 않았습니다.",MISMATCH_ROUND:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",ROUND_LESS_THAN_START_ROUND:"startRound보다 크거나 같아야 합니다.",ROUND_GREATER_THAN_CURRENT_ROUND:"currentRound보다 작거나 같아야 합니다.",INVALID_ROUND_GAP:"currentRound과 round의 차이는 ?이하여야 합니다.",NOT_FOUND_BALANCE_CONTENT:"존재하지 않는 컨텐츠네요. 게임을 다시 진행해주세요!",NOT_FOUND_ROOM_CONTENT:"해당 방에 존재하지 않은 컨텐츠입니다. 게임을 다시 진행해주세요!",NO_RESOURCE_FOUND:"요청한 리소스를 찾을 수 없습니다. 게임을 다시 진행해주세요!",NOT_FOUND_BALANCE_OPTION:"옵션을 올바르게 선택해주세요.",ALREADY_VOTED:"이미 투표가 반영되었어요. 해당 라운드가 끝날 때까지 기다려볼까요?",VOTE_FINISHED:"투표가 이미 종료되었어요.",VOTE_NOT_FINISHED:"이미 다음 라운드가 시작되었어요. 해당 라운드가 끝날 때까지 잠시만 기다려주세요!",CAN_NOT_CHECK_MATCHING_PERCENT:"종료되지 않은 방의 투표 매칭도는 확인할 수 없습니다.",FIELD_ERROR:"필드값 입력이 잘못되었습니다.",URL_PARAMETER_ERROR:"URL parameter 입력이 잘못되었습니다.",METHOD_ARGUMENT_TYPE_MISMATCH:"입력한 값의 타입이 잘못되었습니다.",METHOD_NOT_SUPPORTED:"허용되지 않은 메서드입니다.",INTERNAL_SERVER_ERROR:"서버에 오류가 발생했어요. 다시 시도해 주세요!",NOT_FOUND_COOKIE:"사용자 정보가 있어야 방에 참여할 수 있어요. 홈화면으로 이동하여 방을 새로 만들어주세요!",INVALID_COOKIE:"사용자 정보가 있어야 방에 참여할 수 있어요. 홈화면으로 이동하여 방을 새로 만들어주세요!"};class CustomError extends Error{errorCode;status;constructor({errorCode,status}){super(),this.errorCode=errorCode,this.status=status,this.message=ERROR_MESSAGE[errorCode]}}class NetworkError extends Error{status=555;message="네트워크가 불안정해요. 다시 시도해주세요!"}},"./src/assets/images/closeIcon.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/closeIcon.cc1a712e.png"},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"}}]);
//# sourceMappingURL=pages-ReadyPage-components-ReadyMembersContainer-ReadyMembersContainer-stories.b6129958.iframe.bundle.js.map