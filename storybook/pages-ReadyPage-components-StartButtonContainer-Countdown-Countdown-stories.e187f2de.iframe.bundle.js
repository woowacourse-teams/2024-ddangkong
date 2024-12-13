"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[413],{"./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,게임_시작_카운트_다운:()=>게임_시작_카운트_다운});const __WEBPACK_DEFAULT_EXPORT__={title:"Countdown",component:__webpack_require__("./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx").A,tags:["!autodocs"],args:{goToGame:()=>{}}},게임_시작_카운트_다운={},__namedExportsOrder=["게임_시작_카운트_다운"];게임_시작_카운트_다운.parameters={...게임_시작_카운트_다운.parameters,docs:{...게임_시작_카운트_다운.parameters?.docs,source:{originalSource:"{}",...게임_시작_카운트_다운.parameters?.docs?.source}}}},"./src/pages/ReadyPage/components/StartButtonContainer/Countdown/Countdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Countdown_Countdown});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const glowAnimation=emotion_react_browser_esm.i7`
0% {
    text-shadow: 0 0 5px ${Theme.S.color.peanut200}, 
                 0 0 15px ${Theme.S.color.peanut300}, 
                 0 0 25px ${Theme.S.color.peanut300}, 
                 0 0 35px ${Theme.S.color.peanut300}, 
                 0 0 45px ${Theme.S.color.peanut400}, 
                 0 0 55px ${Theme.S.color.peanut400}, 
                 0 0 65px ${Theme.S.color.peanut500};
  }
  30% {
    text-shadow: 0 0 10px ${Theme.S.color.peanut200}, 
                 0 0 20px ${Theme.S.color.peanut300}, 
                 0 0 30px ${Theme.S.color.peanut300}, 
                 0 0 40px ${Theme.S.color.peanut300}, 
                 0 0 50px ${Theme.S.color.peanut400}, 
                 0 0 60px ${Theme.S.color.peanut400}, 
                 0 0 70px ${Theme.S.color.peanut500};
  }
  70% {
    text-shadow: 0 0 10px ${Theme.S.color.peanut200}, 
                 0 0 20px ${Theme.S.color.peanut300}, 
                 0 0 60px ${Theme.S.color.peanut400}, 
                 0 0 70px ${Theme.S.color.peanut500};
  }
  100% {
    text-shadow: 0 0 10px ${Theme.S.color.peanut200}, 
                 0 0 20px ${Theme.S.color.peanut300},  
                 0 0 60px ${Theme.S.color.peanut400}, 
                 0 0 70px ${Theme.S.color.peanut500};
  }
`,countdownAnimation=emotion_react_browser_esm.i7`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1.5);
    opacity: 1;
  }
  70% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`,peanutAnimation=emotion_react_browser_esm.i7`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1) rotate(20deg);
    opacity: 1;
  }
  70% {
    transform: scale(1) rotate(-20deg);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`,countdownLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: fixed;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  color: ${Theme.S.color.peanut500};
  inset: 0;
`,dimmed=emotion_react_browser_esm.AH`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: rgb(0 0 0 / 50%);
`,countdown=emotion_react_browser_esm.AH`
  ${Theme.S.typography.countdown};
  animation:
    ${countdownAnimation} 1s ease-in-out infinite,
    ${glowAnimation} 1s infinite;
`,imageContainer=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  height: 10.8rem;
`,peanut=idx=>emotion_react_browser_esm.AH`
  width: ${2.4*idx}rem;
  height: ${3.6*idx}rem;

  animation: ${peanutAnimation} 1s ease-in-out infinite;
`;var spinDdangkong=__webpack_require__("./src/assets/images/spinDdangkong.webp");const imageCountMapper={3:1,2:2,1:3},Countdown=({goToGame})=>{const[count,setCount]=(0,react.useState)(3),timeout=(0,react.useRef)();return(0,react.useEffect)((()=>{count<=0&&(clearInterval(timeout.current),goToGame())}),[count]),(0,react.useEffect)((()=>(timeout.current=setInterval((()=>{setCount((prev=>prev-1))}),1e3),()=>clearInterval(timeout.current))),[]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:countdownLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:dimmed}),count>0&&(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:countdown,"aria-label":`게임 시작 ${count}초 전`,"aria-live":"polite",children:count}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:imageContainer,children:imageCountMapper[count]&&Array.from({length:imageCountMapper[count]},((_,idx)=>(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:spinDdangkong,css:peanut(idx+1),alt:`${idx+1}번째 카운트다운 땅콩`},idx+1)))})]})},Countdown_Countdown=Countdown;Countdown.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{goToGame:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/assets/images/spinDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/spinDdangkong.f92ff614.webp"}}]);
//# sourceMappingURL=pages-ReadyPage-components-StartButtonContainer-Countdown-Countdown-stories.e187f2de.iframe.bundle.js.map