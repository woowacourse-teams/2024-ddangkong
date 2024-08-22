"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[165],{"./src/components/common/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Modal_Modal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const hooks_useDisableBackgroundScroll=isOpen=>{(0,react.useEffect)((()=>{if(isOpen)return document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}}),[isOpen])},hooks_useModalEscClose=(isOpen,onModalClose)=>{(0,react.useEffect)((()=>{const handleKeyDown=event=>{isOpen&&"Escape"===event.key&&onModalClose()};return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[isOpen,onModalClose])};var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const modalBackdropLayout={name:"1lmx8ya",styles:"display:flex;position:fixed;justify-content:center;align-items:center;background-color:rgb(0 0 0 / 50%);inset:0"},modalContentWrapper=({position})=>(0,emotion_react_browser_esm.AH)("display:flex;position:fixed;left:50%;flex-direction:column;gap:1.6rem;width:24rem;height:fit-content;max-height:70vh;min-height:1.2rem;transform:translateX(-50%);margin:0;padding:2.4rem;border:none;border-radius:",Theme.S.borderRadius.radius10,";background-color:white;box-sizing:border-box;",(()=>{switch(position){case"top":return"\n          top: 0;\n          transform: translate(-50%, 0%);\n        ";case"bottom":return"\n          bottom: 0;\n          transform: translate(-50%, 0%);\n        ";default:return"\n          top: 50%;\n          transform: translate(-50%, -50%);\n        "}})(),";",""),modalHeaderLayout={name:"14q0t56",styles:"display:flex;justify-content:space-between;align-items:center;margin:0;font-weight:bold"},modalHeaderEmptyBox=position=>(0,emotion_react_browser_esm.AH)("display:","center"===position?"block":"none",";width:1.6rem;",""),modalTitle=({fontSize="bold",fontWeight="2rem"})=>(0,emotion_react_browser_esm.AH)("font-weight:",fontWeight,";font-size:",fontSize,";",""),modalIconButton=({imgSize="1.6rem"})=>(0,emotion_react_browser_esm.AH)("width:",imgSize,";height:",imgSize,";padding:0;border:none;&:focus{outline:none;}img{width:100%;}",""),modalTextButton=({buttonWidth="100%",buttonHeight="100%",fontSize="1.6rem",backgroundColor=Theme.S.color.peanut400,fontColor="#000000"})=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;width:",buttonWidth,";height:",buttonHeight,";padding:1rem;border:none;border-radius:0.8rem;background-color:",backgroundColor,";color:",fontColor,";font-weight:bold;font-size:",fontSize,";&:focus{outline:none;}",""),modalContentLayout=({fontSize="1.2rem"})=>(0,emotion_react_browser_esm.AH)("*{box-sizing:border-box;}font-size:",fontSize,";",""),modalInputLayout={name:"56h6cs",styles:"width:100%;padding:0.8rem;border:1px solid #000"},modalFooter=({buttonPosition="center",buttonGap="1.2rem"})=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:",buttonPosition,";gap:",buttonGap,";","");var closeIcon=__webpack_require__("./src/assets/images/closeIcon.png"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Modal=({children,isOpen,onClose,position="center",...restProps})=>{const modalRef=(0,react.useRef)(null);hooks_useModalEscClose(isOpen,onClose),hooks_useDisableBackgroundScroll(isOpen);const handleOutsideClick=event=>{isOpen&&modalRef.current&&!modalRef.current.contains(event.target)&&onClose()};if(!isOpen)return null;const modalContent=(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalBackdropLayout,onClick:handleOutsideClick,onKeyDown:handleOutsideClick,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalContentWrapper({position}),ref:modalRef,...restProps,children})});return react_dom.createPortal(modalContent,document.body)};Modal.Header=({position="center",children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("header",{css:modalHeaderLayout,...restProps,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalHeaderEmptyBox(position)}),children]}),Modal.Title=({fontSize,fontWeight,children,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{css:modalTitle({fontSize,fontWeight}),...restProps,children}),Modal.IconButton=({type="button",src=closeIcon,imgSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalIconButton({imgSize}),type,...restProps,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src,alt:"닫기 버튼"})}),Modal.TextButton=({type="button",onConfirm,buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:modalTextButton({buttonWidth,buttonHeight,fontSize,backgroundColor,fontColor}),type,onClick:onConfirm,...restProps}),Modal.Content=({children,fontSize,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("section",{css:modalContentLayout({fontSize:"1.4rem"}),...restProps,children}),Modal.Input=({...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{css:modalInputLayout,...restProps}),Modal.Footer=({children,buttonPosition,buttonGap,...restProps})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:modalFooter({buttonPosition,buttonGap}),...restProps,children});const Modal_Modal=Modal},"./src/assets/images/closeIcon.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/closeIcon.cc1a712e.png"}}]);