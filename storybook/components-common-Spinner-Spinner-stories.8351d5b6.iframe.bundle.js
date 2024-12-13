"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[827],{"./src/components/common/Spinner/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spinner_stories,기본_스피너:()=>기본_스피너});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const spinnerWrapper=emotion_react_browser_esm.AH`
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
`)}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:spinnerText,children:message})]});var size},Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'로딩 중입니다...'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"SpinDdangKong",computed:!0}},imageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const 기본_스피너={},Spinner_stories={title:"Spinner",component:Spinner_Spinner},__namedExportsOrder=["기본_스피너"];기본_스피너.parameters={...기본_스피너.parameters,docs:{...기본_스피너.parameters?.docs,source:{originalSource:"{}",...기본_스피너.parameters?.docs?.source}}}},"./src/assets/images/spinDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/spinDdangkong.f92ff614.webp"}}]);
//# sourceMappingURL=components-common-Spinner-Spinner-stories.8351d5b6.iframe.bundle.js.map