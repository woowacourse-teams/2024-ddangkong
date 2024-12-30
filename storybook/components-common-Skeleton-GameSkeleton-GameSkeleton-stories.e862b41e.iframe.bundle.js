"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[945],{"./src/components/common/Skeleton/GameSkeleton/GameSkeleton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>GameSkeleton_stories,게임_화면_스켈레톤:()=>게임_화면_스켈레톤});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const skeletonLayout=emotion_react_browser_esm.AH`
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
`,GameSkeleton=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:skeletonLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonCategory}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:skeletonText,"aria-label":"로딩중"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonOptionContainer})]}),GameSkeleton_GameSkeleton=GameSkeleton;GameSkeleton.__docgenInfo={description:"",methods:[],displayName:"GameSkeleton"};const GameSkeleton_stories={title:"skeleton/GameSkeleton",component:GameSkeleton_GameSkeleton},게임_화면_스켈레톤={},__namedExportsOrder=["게임_화면_스켈레톤"];게임_화면_스켈레톤.parameters={...게임_화면_스켈레톤.parameters,docs:{...게임_화면_스켈레톤.parameters?.docs,source:{originalSource:"{}",...게임_화면_스켈레톤.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-common-Skeleton-GameSkeleton-GameSkeleton-stories.e862b41e.iframe.bundle.js.map