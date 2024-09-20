"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[993],{"./src/pages/GamePage/GamePage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>GamePage_stories,게임_화면:()=>게임_화면});var errorboundary=__webpack_require__("./node_modules/@sentry/react/build/esm/errorboundary.js"),currentScopes=__webpack_require__("./node_modules/@sentry/core/build/esm/currentScopes.js"),esm_exports=__webpack_require__("./node_modules/@sentry/core/build/esm/exports.js"),QueryErrorResetBoundary=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const DeferredComponent=({children})=>{const[isDeferred,setIsDeferred]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const timeoutId=setTimeout((()=>{setIsDeferred(!0)}),300);return()=>clearTimeout(timeoutId)}),[]),isDeferred?(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_jsx_runtime_browser_esm.FK,{children}):null},DeferredComponent_DeferredComponent=DeferredComponent;DeferredComponent.__docgenInfo={description:"",methods:[],displayName:"DeferredComponent"};var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),Button=__webpack_require__("./src/components/common/Button/Button.tsx");const errorFallbackLayout={name:"l8or78",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;height:80vh;padding:2.4rem"},errorImage={name:"137ewef",styles:"width:16rem;height:16rem"},errorText={name:"15tabo2",styles:"font-size:1.6rem;line-height:2rem;text-align:center;word-break:keep-all"},fallbackButtonContainer={name:"10zw2ye",styles:"display:flex;flex-direction:column;gap:2rem"},errorDdangkong_namespaceObject=__webpack_require__.p+"static/media/errorDdangkong.d4e3eff5.png";var utils_error=__webpack_require__("./src/utils/error.ts");const AsyncErrorFallback=({error,resetError})=>{const navigate=(0,dist.Zp)();return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:errorFallbackLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:errorDdangkong_namespaceObject,alt:"에러나서 슬픈 땅콩",css:errorImage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:errorText,children:error instanceof utils_error.e&&error.message}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:fallbackButtonContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:resetError,text:"다시 시도",size:"medium",radius:"medium"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{onClick:()=>{navigate("/")},text:"홈으로",size:"medium",radius:"medium"})]})]})},AsyncErrorFallback_AsyncErrorFallback=AsyncErrorFallback;AsyncErrorFallback.__docgenInfo={description:"",methods:[],displayName:"AsyncErrorFallback"};const AsyncErrorBoundary=({pendingFallback,children})=>{const{reset}=(0,QueryErrorResetBoundary.h)();return(0,emotion_react_jsx_runtime_browser_esm.Y)(errorboundary.tH,{onReset:reset,fallback:({error,resetError})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(AsyncErrorFallback_AsyncErrorFallback,{error,resetError}),onError:error=>{if(!(error instanceof utils_error.e))throw error;(0,currentScopes.v4)((scope=>{scope.setLevel("warning"),scope.setTag("api","internalServerError"),(0,esm_exports.Cp)(new Error(error.message))}))},children:(0,emotion_react_jsx_runtime_browser_esm.Y)(react.Suspense,{fallback:(0,emotion_react_jsx_runtime_browser_esm.Y)(DeferredComponent_DeferredComponent,{children:pendingFallback}),children})})},ErrorBoundary_AsyncErrorBoundary=AsyncErrorBoundary;AsyncErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"AsyncErrorBoundary",props:{pendingFallback:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var GameSkeleton=__webpack_require__("./src/components/common/Skeleton/GameSkeleton/GameSkeleton.tsx");const contentLayout={name:"v9f8bz",styles:"display:flex;flex-direction:column;align-items:center;gap:1.6rem;height:85vh;padding:0 2.4rem"},Content=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:contentLayout,children}),Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"};var Header=__webpack_require__("./src/components/layout/Header/Header.tsx");const hooks_useSelectOption=()=>{const[selectedOption,setSelectedOption]=(0,react.useState)({id:0,isCompleted:!1});return{selectedOption,handleClickOption:selectedId=>{setSelectedOption((prev=>({...prev,id:selectedId})))},completeSelection:()=>{setSelectedOption((prev=>({...prev,isCompleted:!0})))}}};const selectContainerLayout={name:"8ui0sg",styles:"display:flex;flex-basis:40%;flex-direction:column;justify-content:space-between;align-items:center;gap:5.6rem;width:100%"},selectSection={name:"1njj77k",styles:"display:flex;justify-content:space-between;align-items:center;gap:1.2rem;font-weight:bold;font-size:2rem"};var Timer=__webpack_require__("./src/components/SelectContainer/Timer/Timer.tsx"),SelectButton_hook=__webpack_require__("./src/components/common/SelectButton/SelectButton.hook.ts"),Button_styled=__webpack_require__("./src/components/common/Button/Button.styled.ts");const SelectButton=({contentId,selectedId,completeSelection})=>{const{data,isPending,mutate:vote}=(0,SelectButton_hook.A)({selectedId,contentId,completeSelection});return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:Button_styled.e,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Button.A,{bottom:!0,disabled:data||!selectedId||isPending,text:data||isPending?"선택 완료":"선택",onClick:vote})})},SelectButton_SelectButton=SelectButton;SelectButton.__docgenInfo={description:"",methods:[],displayName:"SelectButton",props:{contentId:{required:!0,tsType:{name:"number"},description:""},selectedId:{required:!0,tsType:{name:"number"},description:""},completeSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var SelectOption=__webpack_require__("./src/components/SelectOption/SelectOption.tsx"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const SelectContainer=()=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),{selectedOption,handleClickOption,completeSelection}=hooks_useSelectOption();return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:selectContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Timer.A,{selectedId:selectedOption.id,isVoted:selectedOption.isCompleted,completeSelection}),(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:selectSection,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectOption.A,{option:balanceContent.firstOption,selectedOption,handleClickOption}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:"VS"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectOption.A,{option:balanceContent.secondOption,selectedOption,handleClickOption})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectButton_SelectButton,{contentId:balanceContent.contentId,selectedId:selectedOption.id,completeSelection})]})},SelectContainer_SelectContainer=SelectContainer;SelectContainer.__docgenInfo={description:"",methods:[],displayName:"SelectContainer"};var TopicContainer=__webpack_require__("./src/components/TopicContainer/TopicContainer.tsx");const GamePage=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)(ErrorBoundary_AsyncErrorBoundary,{pendingFallback:(0,emotion_react_jsx_runtime_browser_esm.Y)(GameSkeleton.A,{}),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Header.gK,{}),(0,emotion_react_jsx_runtime_browser_esm.FD)(Content_Content,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TopicContainer.A,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SelectContainer_SelectContainer,{})]})]}),GamePage_GamePage=GamePage;GamePage.__docgenInfo={description:"",methods:[],displayName:"GamePage"};const GamePage_stories={title:"page/GamePage",component:GamePage_GamePage},게임_화면={},__namedExportsOrder=["게임_화면"];게임_화면.parameters={...게임_화면.parameters,docs:{...게임_화면.parameters?.docs,source:{originalSource:"{}",...게임_화면.parameters?.docs?.source}}}},"./src/components/SelectOption/SelectOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SelectOption_SelectOption});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const SelectOption=({option,selectedOption,handleClickOption})=>{const{id:selectedId,isCompleted}=selectedOption;return(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:(selected=Boolean(selectedId===option.optionId),isSelected=isCompleted,(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;width:11.6rem;height:16.8rem;padding:1.6rem;border-radius:3rem;background-color:",selected?Theme.S.color.peanut500:Theme.S.color.peanut300,";cursor:",isSelected?"not-allowed":"pointer",";opacity:",isSelected?Theme.S.opacity.disabled:Theme.S.opacity.default,";color:#000;font-weight:bold;font-size:1.6rem;line-height:2.4rem;text-align:center;word-break:keep-all;transition:all 0.5s;scale:",selected?1.1:1,";","")),onClick:()=>handleClickOption(option.optionId),disabled:isCompleted,children:option.name});var selected,isSelected},SelectOption_SelectOption=SelectOption;SelectOption.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{option:{required:!0,tsType:{name:"BalanceContent['firstOption']",raw:"BalanceContent['firstOption']"},description:""},selectedOption:{required:!0,tsType:{name:"SelectedOption"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedId: number) => void",signature:{arguments:[{type:{name:"number"},name:"selectedId"}],return:{name:"void"}}},description:""}}}},"./src/components/TopicContainer/TopicContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TopicContainer_TopicContainer});var dist=__webpack_require__("./node_modules/react-router/dist/index.js");const topicContainerLayout={name:"1u3km2u",styles:"display:flex;flex-basis:20%;flex-direction:column;justify-content:center;align-items:center;gap:2rem"},categoryText={name:"ywz92v",styles:"font-weight:bold;font-size:1.2rem"},topicText={name:"1akzvke",styles:"font-weight:bold;font-size:1.6rem"};var routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TopicContainer=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),isGamePage=location.pathname===routes.b.game(Number(roomId));return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,children:isGamePage&&balanceContent.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText,children:balanceContent.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"}},"./src/components/common/Button/Button.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>bottomButtonLayout,l:()=>buttonLayout});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts"),getBorderRadius=__webpack_require__("./src/styles/utils/getBorderRadius.ts");const utils_getFontSize=fontSize=>{switch(fontSize){case"small":return Theme.S.typography.caption.fontSize;case"medium":default:return Theme.S.typography.headline2.fontSize;case"large":return Theme.S.typography.headline1.fontSize}};var _ref={name:"10t0zvp",styles:"width:32rem;padding:2rem 0"},_ref2={name:"10t0zvp",styles:"width:32rem;padding:2rem 0"},_ref3={name:"1d06pcm",styles:"width:12rem;padding:1.6rem 0"},_ref4={name:"g089ls",styles:"width:6.8rem;padding:0.8rem 0"};const utils_getSizeStyles=size=>{switch(size){case"small":return _ref4;case"medium":return _ref3;case"large":return _ref2;default:return _ref}};var Button_styled_ref={name:"1wsejju",styles:"position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%"};const buttonLayout=({disabled,size,radius,fontSize,bottom})=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;",utils_getSizeStyles(size),";border:none;border-radius:",(0,getBorderRadius.A)(radius),";background-color:",disabled?Theme.S.color.peanut300:Theme.S.color.peanut400,";font-weight:bold;font-size:",utils_getFontSize(fontSize),";cursor:",disabled?"not-allowed":"pointer",";",bottom&&Button_styled_ref,";",""),bottomButtonLayout={name:"o8a8jf",styles:"position:fixed;bottom:0;width:100%"}},"./src/components/common/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/Button.styled.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Button=({text,onClick,disabled,size,radius,fontSize,bottom,...props})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("button",{onClick,disabled,css:(0,_Button_styled__WEBPACK_IMPORTED_MODULE_1__.l)({disabled,size,radius,fontSize,bottom}),...props,children:text}),__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},bottom:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonHTMLAttributes"]}},"./src/components/common/Skeleton/GameSkeleton/GameSkeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>GameSkeleton_GameSkeleton});const skeletonLayout={name:"114q6m2",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;width:85%;height:100vh;margin:0 auto;border-radius:8px"},skeletonCategory={name:"1oaidkp",styles:"width:100%;height:15vh;border-radius:0.8rem 0.8rem 0 0;background:linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);background-size:400%;animation:skeleton-animation 5s ease infinite;@keyframes skeleton-animation{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"},skeletonText={name:"qg3dxc",styles:"width:100%;height:3.6rem;border-radius:0.4rem;background:linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);background-size:400%;animation:skeleton-animation 5s ease infinite;@keyframes skeleton-animation{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"},skeletonOptionContainer={name:"tjxbje",styles:"width:100%;height:35vh;border-radius:4px;background:linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);background-size:400%;animation:skeleton-animation 5s ease infinite;@keyframes skeleton-animation{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const GameSkeleton=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:skeletonLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonCategory}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:skeletonText,"aria-label":"로딩중"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:skeletonOptionContainer})]}),GameSkeleton_GameSkeleton=GameSkeleton;GameSkeleton.__docgenInfo={description:"",methods:[],displayName:"GameSkeleton"}},"./src/styles/utils/getBorderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styles_Theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/Theme.ts");const __WEBPACK_DEFAULT_EXPORT__=radius=>{switch(radius){case"small":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius10;case"medium":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius20;case"large":return _styles_Theme__WEBPACK_IMPORTED_MODULE_0__.S.borderRadius.radius30;default:return"0"}}}}]);