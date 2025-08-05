"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[370],{"./src/components/common/A11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>A11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const a11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:a11yOnlyLayout,...props,children})},A11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}},utils_getSizeStyles=size=>{switch(size){case"small":return emotion_react_browser_esm.AH`
        width: 6.8rem;
        padding: 0.8rem 0;
      `;case"medium":return emotion_react_browser_esm.AH`
        width: 12rem;
        padding: 1.6rem 0;
      `;default:return emotion_react_browser_esm.AH`
        width: 32rem;
        padding: 2rem 0;
      `}},buttonLayout=({disabled,size,radius,fontSize,bottom})=>emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;

  ${utils_getSizeStyles(size)};

  border: none;
  border-radius: ${(0,getBorderRadius.A)(radius)};

  background-color: ${disabled?Theme.S.color.peanut300:Theme.S.color.peanut400};

  font-weight: bold;
  font-size: ${utils_getFontSize(fontSize)};
  cursor: ${disabled?"not-allowed":"pointer"};

  ${bottom&&emotion_react_browser_esm.AH`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  `}
`,bottomButtonLayout=emotion_react_browser_esm.AH`
  position: fixed;
  bottom: 0;
  width: 100%;
`},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({text,onClick,disabled,size,radius,fontSize,bottom,...props},ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{ref,onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},bottom:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes"]}},"./src/components/common/Skeleton/GameSkeleton/GameSkeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>GameSkeleton_GameSkeleton});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const skeletonLayout=emotion_react_browser_esm.AH`
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
`)}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:spinnerText,children:message})]});var size},Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'로딩 중입니다...'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"SpinDdangKong",computed:!0}},imageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}}},"./src/components/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PS:()=>A11yOnly.A,$n:()=>Button.A});var A11yOnly=__webpack_require__("./src/components/common/A11yOnly/A11yOnly.tsx"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");const DeferredComponent=({children})=>{const[isDeferred,setIsDeferred]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const timeoutId=setTimeout((()=>{setIsDeferred(!0)}),300);return()=>clearTimeout(timeoutId)}),[]),isDeferred?(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK,{children}):null},DeferredComponent_DeferredComponent=DeferredComponent;DeferredComponent.__docgenInfo={description:"",methods:[],displayName:"DeferredComponent"};__webpack_require__("./src/components/common/Dropdown/Dropdown.tsx");var errorboundary=__webpack_require__("./node_modules/@sentry/react/build/esm/errorboundary.js"),currentScopes=__webpack_require__("./node_modules/@sentry/core/build/esm/currentScopes.js"),esm_exports=__webpack_require__("./node_modules/@sentry/core/build/esm/exports.js"),QueryErrorResetBoundary=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const errorFallbackLayout=emotion_react_browser_esm.AH`
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
`},"./src/assets/images/errorDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/errorDdangkong.e152d36b.webp"},"./src/assets/images/spinDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/spinDdangkong.f92ff614.webp"}}]);
//# sourceMappingURL=370.bea631c1.iframe.bundle.js.map