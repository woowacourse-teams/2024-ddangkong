"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[591],{"./node_modules/core-js/internals/iterator-map.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getIteratorDirect=__webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js"),createIteratorProxy=__webpack_require__("./node_modules/core-js/internals/iterator-create-proxy.js"),callWithSafeIterationClosing=__webpack_require__("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),IteratorProxy=createIteratorProxy((function(){var iterator=this.iterator,result=anObject(call(this.next,iterator));if(!(this.done=!!result.done))return callWithSafeIterationClosing(iterator,this.mapper,[result.value,this.counter++],!0)}));module.exports=function map(mapper){return anObject(this),aCallable(mapper),new IteratorProxy(getIteratorDirect(this),{mapper})}},"./node_modules/core-js/modules/esnext.iterator.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),map=__webpack_require__("./node_modules/core-js/internals/iterator-map.js");$({target:"Iterator",proto:!0,real:!0,forced:__webpack_require__("./node_modules/core-js/internals/is-pure.js")},{map})},"./src/components/common/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Dropdown_Dropdown});__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const dropdownLayout={name:"1qmcgbb",styles:"display:flex;position:relative;align-items:center;width:12rem;height:3.6rem;padding:0.8rem;border:1px solid black;border-radius:0.8rem;background-color:white;cursor:pointer"},dropdownTextContainer={name:"16s4hw7",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;user-select:none"},emptyWrapper={name:"1t00129",styles:"width:1.2rem;height:1.2rem"},arrowImage={name:"1t00129",styles:"width:1.2rem;height:1.2rem"},dropdownText=(0,emotion_react_browser_esm.AH)("text-align:center;",Theme.S.typography.body2," user-select:none;cursor:pointer;",""),selectOptionList=(isOpen,count)=>(0,emotion_react_browser_esm.AH)("display:flex;overflow:hidden;position:absolute;top:3.6rem;left:0;flex-direction:column;width:100%;height:",isOpen?3.6*count+"rem":0,";border:",isOpen?`1px solid ${Theme.S.color.gray200}`:"none",";border-radius:",Theme.S.borderRadius.radius10,";background-color:white;color:black;list-style:none;transition:height 0.3s;user-select:none;",""),arrowDown_namespaceObject=__webpack_require__.p+"static/media/arrowDown.4cfc739e.svg",arrowUp_namespaceObject=__webpack_require__.p+"static/media/arrowUp.ffc96fce.svg";var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Dropdown=({text,optionList,handleClick})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null),handleToggleDropdown=()=>{setIsOpen((prev=>!prev))};return(0,react.useEffect)((()=>{const handleOutsideClose=e=>{isOpen&&!dropdownRef.current?.contains(e.target)&&setIsOpen(!1)};return document.addEventListener("click",handleOutsideClose),()=>document.removeEventListener("click",handleOutsideClose)}),[isOpen]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:dropdownLayout,ref:dropdownRef,onClick:handleToggleDropdown,onKeyDown:handleToggleDropdown,role:"button",tabIndex:0,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:dropdownTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:emptyWrapper}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:dropdownText,children:text||"선택해주세요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:isOpen?arrowDown_namespaceObject:arrowUp_namespaceObject,alt:"드랍다운 화살표",css:arrowImage})})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:selectOptionList(isOpen,optionList.length),children:isOpen&&optionList.map((option=>{return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:(isSelected=text===option.label,(0,emotion_react_browser_esm.AH)("width:100%;height:3.6rem;",Theme.S.typography.caption," background-color:",isSelected?Theme.S.color.gray300:"white",";color:black;transition:background-color 0.1s ease-in;&:hover{background-color:",Theme.S.color.gray200,";}","")),value:option.value,onClick:handleClick,children:option.label})},option.value);var isSelected}))})]})},Dropdown_Dropdown=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{text:{required:!0,tsType:{name:"string"},description:""},optionList:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},handleClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}}}}]);