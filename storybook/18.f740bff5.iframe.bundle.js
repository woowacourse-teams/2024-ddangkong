"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[18],{"./src/assets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Td:()=>copyIcon_namespaceObject,pw:()=>crownIcon_namespaceObject,Gq:()=>exitIcon_namespaceObject,sY:()=>settingIcon_namespaceObject,cI:()=>sillyDdangkongMedium});__webpack_require__("./src/assets/images/angryDdangkong.webp"),__webpack_require__("./src/assets/images/arrowDown.svg");__webpack_require__.p;__webpack_require__("./src/assets/images/arrowUp.svg"),__webpack_require__("./src/assets/images/closeIcon.png");const copyIcon_namespaceObject=__webpack_require__.p+"static/media/copyIcon.d9b466b1.png",crownIcon_namespaceObject=__webpack_require__.p+"static/media/crownIcon.1ef721d9.webp";__webpack_require__.p;__webpack_require__("./src/assets/images/ddangkongTimer.webp"),__webpack_require__("./src/assets/images/errorDdangkong.webp");const exitIcon_namespaceObject=__webpack_require__.p+"static/media/exitIcon.58b68e72.svg",settingIcon_namespaceObject=(__webpack_require__.p,__webpack_require__.p,__webpack_require__.p+"static/media/settingIcon.489dd149.svg");__webpack_require__.p;var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp");__webpack_require__.p;__webpack_require__("./src/assets/images/spinDdangkong.webp")},"./src/components/InviteModal/InviteModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InviteModal_InviteModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),lib=__webpack_require__("./node_modules/react-qr-code/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");const hooks_useClipBoard=()=>{const[isCopied,setIsCopied]=(0,react.useState)(!1);return{isCopied,copyToClipboard:async text=>{await navigator.clipboard.writeText(text),setIsCopied(!0),setTimeout((()=>setIsCopied(!1)),2e3)}}};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const inviteModalLayout=emotion_react_browser_esm.AH`
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
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),url=__webpack_require__("./src/constants/url.ts"),assets=__webpack_require__("./src/assets/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const InviteModal=({isOpen,onClose,returnFocusRef})=>{const{roomUuid}=(0,hooks.z6)(),inviteUrl=(0,url.MY)(roomUuid),{copyToClipboard}=hooks_useClipBoard(),{showToast}=(0,hooks.dj)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,css:inviteModalLayout,returnFocusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:inviteModalTitle,children:"초대하기"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("ul",{css:inviteModalUl,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:qrcodeWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(lib.Ay,{style:{width:"50%",height:"50%"},value:inviteUrl})})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:inviteModalLi,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{copyToClipboard(inviteUrl),showToast("링크가 복사되었습니다!")},css:inviteModalLinkButton,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:inviteModalLinkButtonInfoWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:inviteModalText,children:"초대 링크 복사"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.Td,alt:"복사하기 이미지",css:inviteModalCopyIcon})]})})})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{buttonWidth:"100%",onClick:onClose,children:"닫기"})})]})},InviteModal_InviteModal=InviteModal;InviteModal.__docgenInfo={description:"",methods:[],displayName:"InviteModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/TopicContainer/TopicContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TopicContainer_TopicContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const topicContainerLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,categoryText=emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 1.2rem;
`,topicText=isGamePage=>emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2rem;

  ${!isGamePage&&emotion_react_browser_esm.AH`
    width: 85%;

    text-align: center;
    word-break: keep-all;
  `}
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const TopicContainer=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),isGamePage=location.pathname===routes.b.game(Number(roomId)),screenReaderQuestion=`질문. ${balanceContent.question}.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderQuestion}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,"aria-hidden":!0,children:isGamePage&&balanceContent.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText(isGamePage),"aria-hidden":!0,children:balanceContent.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"}},"./src/components/common/Skeleton/GameSkeleton/GameSkeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>GameSkeleton_GameSkeleton});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const skeletonLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 85%;
  height: 100vh;
  margin: 0 auto;
  border-radius: 8px;
`,skeletonCategory=emotion_react_browser_esm.AH`
  width: 100%;
  height: 15vh;
  border-radius: 0.8rem 0.8rem 0 0;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`,skeletonText=emotion_react_browser_esm.AH`
  width: 100%;
  height: 3.6rem;
  border-radius: 0.4rem;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`,skeletonOptionContainer=emotion_react_browser_esm.AH`
  width: 100%;
  height: 35vh;
  border-radius: 4px;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`,GameSkeleton=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:skeletonLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonCategory}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:skeletonText,"aria-label":"로딩중"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonOptionContainer})]}),GameSkeleton_GameSkeleton=GameSkeleton;GameSkeleton.__docgenInfo={description:"",methods:[],displayName:"GameSkeleton"}},"./src/components/common/Skeleton/ReadySkeleton/ReadySkeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ReadySkeleton_ReadySkeleton});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const skeletonLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`,skeletonCategory=emotion_react_browser_esm.AH`
  width: 85%;
  height: 20vh;
  border-radius: 0.8rem 0.8rem 0 0;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`,skeletonBody=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 85%;
  height: 100%;
`,skeletonInfo=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,skeletonText=emotion_react_browser_esm.AH`
  width: 100%;
  height: 1.6rem;
  border-radius: 0.4rem;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`,skeletonMemberContainer=emotion_react_browser_esm.AH`
  width: 100%;
  height: 40vh;
  border-radius: 4px;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`,ReadySkeleton=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:skeletonLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonCategory}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:skeletonBody,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonInfo,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:skeletonText})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonMemberContainer})]})]}),ReadySkeleton_ReadySkeleton=ReadySkeleton;ReadySkeleton.__docgenInfo={description:"",methods:[],displayName:"ReadySkeleton"}},"./src/components/common/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Spinner_Spinner});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerWrapper=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 6.5rem;
`,spinnerText=emotion_react_browser_esm.AH`
  margin-top: 1.6rem;

  font-size: 1.8rem;
  text-align: center;
`;var spinDdangkong=__webpack_require__("./src/assets/images/spinDdangkong.webp");const Spinner=({message="로딩 중입니다...",imageSrc=spinDdangkong,imageSize=12})=>{return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:spinnerWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:imageSrc,alt:"로딩 중...",css:(size=imageSize,emotion_react_browser_esm.AH`
  width: ${size}rem;
  height: ${2*size}rem;

  animation: spin 2s linear infinite; /* 2초 동안 한 바퀴 회전하는 애니메이션 */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`)}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:spinnerText,children:message})]});var size},Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'로딩 중입니다...'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"SpinDdangKong",computed:!0}},imageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const a11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PS:()=>A11yOnly.A,WD:()=>AlertModal.A,UC:()=>Content.A,lq:()=>InviteModal.A,L4:()=>RoomSettingModal.A,dT:()=>TopicContainer.A});var AlertModal=__webpack_require__("./src/components/AlertModal/AlertModal.tsx"),A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");const DeferredComponent=({children})=>{const[isDeferred,setIsDeferred]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const timeoutId=setTimeout((()=>{setIsDeferred(!0)}),300);return()=>clearTimeout(timeoutId)}),[]),isDeferred?(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK,{children}):null},DeferredComponent_DeferredComponent=DeferredComponent;DeferredComponent.__docgenInfo={description:"",methods:[],displayName:"DeferredComponent"};__webpack_require__("./src/components/common/Dropdown/Dropdown.tsx");var errorboundary=__webpack_require__("./node_modules/@sentry/react/build/esm/errorboundary.js"),currentScopes=__webpack_require__("./node_modules/@sentry/core/build/esm/currentScopes.js"),esm_exports=__webpack_require__("./node_modules/@sentry/core/build/esm/exports.js"),QueryErrorResetBoundary=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const errorFallbackLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 80vh;
  padding: 2.4rem;
`,errorImage=emotion_react_browser_esm.AH`
  width: 16rem;
  height: 16rem;
`,errorText=emotion_react_browser_esm.AH`
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  word-break: keep-all;
`,fallbackButtonContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;var errorDdangkong=__webpack_require__("./src/assets/images/errorDdangkong.webp"),utils_error=__webpack_require__("./src/utils/error.ts");const AsyncErrorFallback=({error,resetError})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:errorFallbackLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:errorDdangkong,alt:"에러나서 슬픈 땅콩",css:errorImage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:errorText,children:(error instanceof utils_error.eo||error instanceof utils_error.wI)&&error.message}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:fallbackButtonContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:resetError,text:"다시 시도",size:"medium",radius:"medium"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:()=>{window.location.href="/"},text:"홈으로",size:"medium",radius:"medium"})]})]}),AsyncErrorFallback_AsyncErrorFallback=AsyncErrorFallback;AsyncErrorFallback.__docgenInfo={description:"",methods:[],displayName:"AsyncErrorFallback",props:{error:{required:!0,tsType:{name:"unknown"},description:""},resetError:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var Spinner=__webpack_require__("./src/components/common/Spinner/Spinner.tsx");const SpinnerErrorFallback=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:errorFallbackLayout,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Spinner.A,{})}),SpinnerErrorFallback_SpinnerErrorFallback=SpinnerErrorFallback;SpinnerErrorFallback.__docgenInfo={description:"",methods:[],displayName:"SpinnerErrorFallback"};const AsyncErrorBoundary=({pendingFallback=(0,emotion_react_jsx_runtime_browser_esm.Y)(SpinnerErrorFallback_SpinnerErrorFallback,{}),children})=>{const{reset}=(0,QueryErrorResetBoundary.h)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(errorboundary.tH,{onReset:reset,fallback:({error,resetError})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(AsyncErrorFallback_AsyncErrorFallback,{error,resetError}),onError:error=>{if(!(error instanceof utils_error.eo||error instanceof utils_error.wI))throw error;(0,currentScopes.v4)((scope=>{scope.setLevel("warning"),scope.setTag("api","internalServerError"),(0,esm_exports.Cp)(new Error(error.message))}))},children:(0,emotion_react_jsx_runtime_browser_esm.Y)(react.Suspense,{fallback:(0,emotion_react_jsx_runtime_browser_esm.Y)(DeferredComponent_DeferredComponent,{children:pendingFallback}),children})})};AsyncErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"AsyncErrorBoundary",props:{pendingFallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<SpinnerErrorFallback />",computed:!1}}}};const RootErrorFallback=({error,resetError})=>(error instanceof Error&&(0,currentScopes.v4)((scope=>{scope.setLevel("fatal"),scope.setTag("client","serviceError"),(0,esm_exports.Cp)(new Error(error.message))})),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:errorFallbackLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:errorDdangkong,alt:"에러나서 슬픈 땅콩",css:errorImage}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:errorText,children:["서비스에 장애가 발생했습니다.",(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})," 다음에 다시 이용해주세요!"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:fallbackButtonContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:resetError,text:"다시 시도",size:"medium",radius:"medium"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:()=>{window.location.href="/"},text:"홈으로",size:"medium",radius:"medium"})]})]})),RootErrorFallback_RootErrorFallback=RootErrorFallback;RootErrorFallback.__docgenInfo={description:"",methods:[],displayName:"RootErrorFallback",props:{error:{required:!0,tsType:{name:"unknown"},description:""},resetError:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const RootErrorBoundary=({children})=>{const{reset}=(0,QueryErrorResetBoundary.h)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(errorboundary.tH,{onReset:reset,fallback:({error,resetError})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(RootErrorFallback_RootErrorFallback,{error,resetError}),children})};RootErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"RootErrorBoundary"};const RouterErrorFallback=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:errorFallbackLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:errorDdangkong,alt:"에러나서 슬픈 땅콩",css:errorImage}),(0,emotion_react_jsx_runtime_browser_esm.FD)("h2",{css:errorText,children:["페이지 전환 시 에러가 발생하였습니다.",(0,emotion_react_jsx_runtime_browser_esm.Y)("br",{})," 다시 접속해주세요!"]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:()=>{window.location.href="/"},text:"메인으로 가기",size:"medium",radius:"medium"})]});RouterErrorFallback.__docgenInfo={description:"",methods:[],displayName:"RouterErrorFallback"};__webpack_require__("./src/components/common/Modal/Modal.tsx"),__webpack_require__("./src/components/common/Skeleton/GameSkeleton/GameSkeleton.tsx"),__webpack_require__("./src/components/common/Skeleton/ReadySkeleton/ReadySkeleton.tsx"),__webpack_require__("./node_modules/react-dom/index.js");var styles_Theme=__webpack_require__("./src/styles/Theme.ts");emotion_react_browser_esm.i7`
  from {
    opacity: ${styles_Theme.S.opacity.invisible};
    transform: translateX(-50%) translateY(1rem);
  }
  to {
    opacity: ${styles_Theme.S.opacity.default};
    transform: translateX(-50%) translateY(0);
  }
`,emotion_react_browser_esm.i7`
  from {
    opacity: ${styles_Theme.S.opacity.invisible};
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: ${styles_Theme.S.opacity.default};
    transform: translateX(-50%) translateY(1rem);
  }
`;var InviteModal=__webpack_require__("./src/components/InviteModal/InviteModal.tsx"),Content=__webpack_require__("./src/components/layout/Content/Content.tsx"),RoomSettingModal=(__webpack_require__("./src/components/layout/Header/Header.tsx"),__webpack_require__("./src/components/RoomSettingModal/RoomSettingModal.tsx")),TopicContainer=__webpack_require__("./src/components/TopicContainer/TopicContainer.tsx")},"./src/components/layout/Content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Content_Content});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const contentLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  height: 88vh;
  padding: 0 2.4rem;
`,Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"}},"./src/components/layout/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/layout/Header/components/index.ts"),_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layout/Header/hooks/index.ts");const Header=()=>{const{isNicknamePage,isReadyPage,isRoundResultPage,isMatchingResultPage}=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.AQ)();return(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.uO)(),isNicknamePage?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_components__WEBPACK_IMPORTED_MODULE_0__.Ub,{title:"닉네임 설정"}):isReadyPage?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_components__WEBPACK_IMPORTED_MODULE_0__.v4,{title:"밸런스 게임"}):isRoundResultPage?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_components__WEBPACK_IMPORTED_MODULE_0__.vc,{}):isMatchingResultPage?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_components__WEBPACK_IMPORTED_MODULE_0__.On,{title:"매칭 결과"}):void 0},__WEBPACK_DEFAULT_EXPORT__=Header;Header.__docgenInfo={description:"",methods:[],displayName:"Header"}},"./src/components/layout/Header/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{il:()=>GameHeader_GameHeader,On:()=>MatchingResultHeader_MatchingResultHeader,v4:()=>RoomSettingHeader_RoomSettingHeader,vc:()=>RoundResultHeader_RoundResultHeader,Ub:()=>TitleHeader_TitleHeader});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const headerLayout=isCenter=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: ${isCenter?"center":"space-between"};
  align-items: center;
  height: 12vh;
  padding: 0 2.4rem;

  :focus {
    outline: none;
  }
`,roundText=emotion_react_browser_esm.AH`
  display: flex;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;

  font-weight: bold;
  font-size: 1.6rem;
`,buttonWrapper=(emotion_react_browser_esm.AH`
  width: 1.6rem;
  height: 1.6rem;
`,emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`),gameTitle=emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 2rem;
`,iconImage=emotion_react_browser_esm.AH`
  display: flex;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
`,MatchingResultHeaderContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`,matchingResultTitle=emotion_react_browser_esm.AH`
  ${Theme.S.typography.slogan};
`,matchingResultCaption=emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 1.2rem;
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),Timer_util=__webpack_require__("./src/pages/GamePage/components/SelectContainer/components/Timer/Timer.util.ts"),hooks=__webpack_require__("./src/hooks/index.ts");const GameHeader=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,hooks.dD)(Number(roomId)),{totalRound,currentRound,timeLimit}=balanceContent,screenReaderHeader=`${totalRound}라운드.중.${currentRound}라운드. 밸런스 게임 페이지. 제한 시간 ${(0,Timer_util.Nc)(timeLimit)}초.`,focusRef=(0,hooks.iQ)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderHeader}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:roundText,"aria-hidden":!0,children:[currentRound,"/",totalRound]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,"aria-hidden":!0,children:"밸런스 게임"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText,"aria-hidden":!0})]})},GameHeader_GameHeader=GameHeader;GameHeader.__docgenInfo={description:"",methods:[],displayName:"GameHeader"};const MatchingResultHeader=({title})=>{const focusRef=(0,hooks.iQ)();return(0,emotion_react_jsx_runtime_browser_esm.Y)("header",{css:headerLayout(!0),tabIndex:0,ref:focusRef,children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:MatchingResultHeaderContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:matchingResultTitle,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:matchingResultCaption,children:"매칭도를 통해 당신과 가장 잘 맞는 사람을 알아보세요😊"})]})})},MatchingResultHeader_MatchingResultHeader=MatchingResultHeader;MatchingResultHeader.__docgenInfo={description:"",methods:[],displayName:"MatchingResultHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}};var react=__webpack_require__("./node_modules/react/index.js"),Header_hooks=__webpack_require__("./src/components/layout/Header/hooks/index.ts"),assets=__webpack_require__("./src/assets/index.ts"),components=__webpack_require__("./src/components/index.ts");const RoomSettingHeader=({title})=>{const isMaster=(0,hooks.an)(),{showModal}=(0,hooks.hS)(),{handleExit}=(0,Header_hooks.kB)(),returnFocusRef=(0,react.useRef)(null),focusRef=(0,hooks.iQ)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{onClick:()=>{showModal(components.WD,{message:"정말로 나가시겠습니까?",onConfirm:handleExit})},css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.Gq,alt:"방 나가기",css:iconImage})}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title}),isMaster?(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{ref:returnFocusRef,onClick:()=>{showModal(components.L4,{returnFocusRef})},css:buttonWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:assets.sY,alt:"방 설정",css:iconImage})}):(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText})]})},RoomSettingHeader_RoomSettingHeader=RoomSettingHeader;RoomSettingHeader.__docgenInfo={description:"",methods:[],displayName:"RoomSettingHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}};const RoundResultHeader=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,hooks.dD)(Number(roomId)),screenReaderRoundResult=`${balanceContent.totalRound}라운드 중. ${balanceContent.currentRound}라운드. 투표 결과 페이지`,focusRef=(0,hooks.iQ)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:headerLayout(),tabIndex:0,ref:focusRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderRoundResult}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:roundText,"aria-hidden":!0,children:[balanceContent.currentRound,"/",balanceContent.totalRound]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,"aria-hidden":!0,children:"투표 결과"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roundText,"aria-hidden":!0})]})},RoundResultHeader_RoundResultHeader=RoundResultHeader;RoundResultHeader.__docgenInfo={description:"",methods:[],displayName:"RoundResultHeader"};const TitleHeader=({title})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("header",{css:headerLayout(!0),children:(0,emotion_react_jsx_runtime_browser_esm.Y)("h1",{css:gameTitle,children:title})}),TitleHeader_TitleHeader=TitleHeader;TitleHeader.__docgenInfo={description:"",methods:[],displayName:"TitleHeader",props:{title:{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/layout/Header/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uO:()=>hooks_useBlockRefresh,kB:()=>hooks_useExit,AQ:()=>hooks_useRoutePath});var react=__webpack_require__("./node_modules/react/index.js");const hooks_useBlockRefresh=()=>{(0,react.useEffect)((()=>{const handleKeyDown=event=>{("F5"===event.key||event.ctrlKey&&"r"===event.key)&&event.preventDefault()};window.addEventListener("keydown",handleKeyDown);const handleBeforeUnload=event=>{event.preventDefault(),alert("새로고침 시 게임에서 나가질 수 있습니다")};return window.addEventListener("beforeunload",handleBeforeUnload),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("beforeunload",handleBeforeUnload)}}),[])};var useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),room=__webpack_require__("./src/apis/room.ts");var hooks=__webpack_require__("./src/hooks/index.ts");const hooks_useExit=()=>{const{member:{memberId}}=(0,hooks.z6)(),navigate=(0,dist.Zp)(),{roomId}=(0,dist.g)(),exitRoomMutation=(0,useMutation.n)({mutationFn:({roomId,memberId})=>(0,room.Gn)(roomId,memberId),onSettled:()=>{document.cookie.split(";").forEach((cookie=>{document.cookie=cookie.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date(0).toUTCString()+";path=/")})),navigate("/")}});return{handleExit:()=>{exitRoomMutation.mutate({roomId:Number(roomId),memberId:Number(memberId)})}}};var routes=__webpack_require__("./src/constants/routes.ts");const hooks_useRoutePath=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),currentPath={isNicknamePage:location.pathname.startsWith(routes.b.nickname),isReadyPage:location.pathname===routes.b.ready(Number(roomId)),isRoundResultPage:location.pathname===routes.b.roundResult(Number(roomId)),isMatchingResultPage:location.pathname===routes.b.gameResult(Number(roomId))};return{isNicknamePage:currentPath.isNicknamePage,isReadyPage:currentPath.isReadyPage,isRoundResultPage:currentPath.isRoundResultPage,isMatchingResultPage:currentPath.isMatchingResultPage}}},"./src/pages/GamePage/components/SelectContainer/components/Timer/Timer.util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nc:()=>convertMsecToSecond,qE:()=>formatLeftRoundTime,wk:()=>isAlertTimer});var _constants_config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/config.ts");const formatLeftRoundTime=leftRoundTime=>{const minutes=Math.floor(leftRoundTime/60),seconds=leftRoundTime%60;return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`},convertMsecToSecond=msec=>msec/_constants_config__WEBPACK_IMPORTED_MODULE_0__.S2,isAlertTimer=(leftRoundTime,timeLimit)=>leftRoundTime===Math.floor(timeLimit/2)||leftRoundTime===_constants_config__WEBPACK_IMPORTED_MODULE_0__.cZ},"./src/assets/images/angryDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/angryDdangkong.29469aa8.webp"},"./src/assets/images/ddangkongTimer.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/ddangkongTimer.096a16e3.webp"},"./src/assets/images/errorDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/errorDdangkong.e152d36b.webp"},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"},"./src/assets/images/spinDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/spinDdangkong.f92ff614.webp"}}]);
//# sourceMappingURL=18.f740bff5.iframe.bundle.js.map