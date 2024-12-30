"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[4],{"./src/components/RoomSettingModal/RoomSettingModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RoomSettingModal_RoomSettingModal});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const emptyLayout=emotion_react_browser_esm.AH`
  height: 3.6rem;
`;var useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useQuery.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),room=__webpack_require__("./src/apis/room.ts"),queryKeys=__webpack_require__("./src/constants/queryKeys.ts");const hooks_useCategoryListQuery=()=>{const{roomId}=(0,dist.g)(),categoryListQuery=(0,useQuery.I)({queryKey:[queryKeys.e.categoryList,Number(roomId)],queryFn:async()=>await(0,room.rm)()});return{...categoryListQuery,categoryList:categoryListQuery.data?.categories}};var Dropdown=__webpack_require__("./src/components/common/Dropdown/Dropdown.tsx");const CategoryDropdown=({category,handleClickOption})=>{const{categoryList,isLoading}=hooks_useCategoryListQuery();return isLoading?(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:emptyLayout}):categoryList&&category?(0,emotion_react_jsx_runtime_browser_esm.Y)(Dropdown.A,{text:category,optionList:categoryList,handleClickOption}):(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:"카테고리가 없습니다."})},CategoryDropdown_CategoryDropdown=CategoryDropdown;CategoryDropdown.__docgenInfo={description:"",methods:[],displayName:"CategoryDropdown",props:{category:{required:!1,tsType:{name:"string"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};var QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),useMutation=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useMutation.js");const hooks_useApplyRoomSetting=roomId=>{const queryClient=(0,QueryClientProvider.jE)();return(0,useMutation.n)({mutationFn:async roomSetting=>await(0,room.ew)(roomId,roomSetting),onSuccess:()=>{queryClient.invalidateQueries({queryKey:[queryKeys.e.roomMembers,Number(roomId)]})}})},hooks_useCategoryDropdown=selectedCategory=>{const[category,setCategory]=(0,react.useState)(selectedCategory);return(0,react.useEffect)((()=>{setCategory(selectedCategory)}),[selectedCategory]),{category,handleClickOption:e=>{const target=e.target,clickedCategoryValue=target.value,clickedCategoryLabel=target.textContent;clickedCategoryValue&&setCategory({value:clickedCategoryValue,label:clickedCategoryLabel})}}},useTimerPerRound=selectedTimeLimit=>{const[timeLimitPerRound,setTimeLimitPerRound]=(0,react.useState)(selectedTimeLimit);return(0,react.useEffect)((()=>{setTimeLimitPerRound(selectedTimeLimit)}),[selectedTimeLimit]),{timeLimitPerRound,handleClickTimeLimit:e=>{const target=e.target;setTimeLimitPerRound(Number(target.value))}}},hooks_useTotalRound=selectedTotalRound=>{const[totalRound,setTotalRound]=(0,react.useState)(selectedTotalRound);return(0,react.useEffect)((()=>{setTotalRound(selectedTotalRound)}),[selectedTotalRound]),{totalRound,handleClickRound:e=>{const target=e.target;setTotalRound(Number(target.textContent))}}};var useGetRoomInfo=__webpack_require__("./src/hooks/useGetRoomInfo.ts");const hooks_useRoomSetting=({onClose})=>{const{roomId}=(0,dist.g)(),{mutate:applyRoomSetting}=hooks_useApplyRoomSetting(Number(roomId)),{roomSetting:selectedRoomSetting}=(0,useGetRoomInfo.$)(),{category,handleClickOption}=hooks_useCategoryDropdown(selectedRoomSetting?.category),{totalRound,handleClickRound}=hooks_useTotalRound(selectedRoomSetting?.totalRound),{timeLimitPerRound,handleClickTimeLimit}=useTimerPerRound(selectedRoomSetting?.timeLimit);return{roomSetting:{category,totalRound,timeLimitPerRound},handleClickOption,handleClickRound,handleClickTimeLimit,handleClickApply:()=>{category&&totalRound&&timeLimitPerRound&&(applyRoomSetting({category:category.value,totalRound,timeLimit:timeLimitPerRound}),onClose())}}};var Theme=__webpack_require__("./src/styles/Theme.ts");const roomSettingTitleContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,roomSettingTitleWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
`,roomSettingTitle=emotion_react_browser_esm.AH`
  ${Theme.S.typography.body2};
  font-weight: 700;
`,roomSettingButtonContainer=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`,RoomSettingContainer=({children,title})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingTitleContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:roomSettingTitleWrapper,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:roomSettingTitle,children:title})}),"카테고리"===title?children:(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:roomSettingButtonContainer,role:"radiogroup",children})]}),RoomSettingContainer_RoomSettingContainer=RoomSettingContainer;RoomSettingContainer.__docgenInfo={description:"",methods:[],displayName:"RoomSettingContainer",props:{title:{required:!0,tsType:{name:"union",raw:"'카테고리' | '총 라운드' | '제한 시간'",elements:[{name:"literal",value:"'카테고리'"},{name:"literal",value:"'총 라운드'"},{name:"literal",value:"'제한 시간'"}]},description:""}}};const roomSettingModalLayout=emotion_react_browser_esm.AH`
  background-color: ${Theme.S.color.peanut300};
`,roomSettingModalTitle=emotion_react_browser_esm.AH`
  font-size: 1.6rem;
`,roomSettingContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2.4rem;
  padding: 1.6rem;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;
`,roomSettingButton=isSelected=>emotion_react_browser_esm.AH`
  width: 4rem;
  height: 4rem;
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: ${isSelected?Theme.S.color.peanut500:Theme.S.color.peanut300};
  transition: background-color 0.3s;
`;var Modal=__webpack_require__("./src/components/common/Modal/Modal.tsx"),config=__webpack_require__("./src/constants/config.ts");const TOTAL_ROUND_LIST=[5,7,10],TIMER_PER_ROUND_LIST=[1e4,15e3,3e4,6e4],RoomSettingModal=({isOpen,onClose,returnFocusRef})=>{const{roomSetting,handleClickOption,handleClickRound,handleClickTimeLimit,handleClickApply}=hooks_useRoomSetting({onClose}),{category,totalRound,timeLimitPerRound}=roomSetting;return(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A,{isOpen,onClose,returnFocusRef,css:roomSettingModalLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Modal.A.Header,{position:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Title,{css:roomSettingModalTitle,children:"방 설정"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.IconButton,{onClick:onClose})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Content,{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roomSettingContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingContainer_RoomSettingContainer,{title:"카테고리",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CategoryDropdown_CategoryDropdown,{category:category?.label,handleClickOption})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingContainer_RoomSettingContainer,{title:"총 라운드",children:TOTAL_ROUND_LIST.map((round=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{role:"radio",onClick:handleClickRound,"aria-checked":totalRound===round,css:roomSettingButton(totalRound===round),children:round})},round)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(RoomSettingContainer_RoomSettingContainer,{title:"제한 시간",children:TIMER_PER_ROUND_LIST.map((timeLimit=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{children:(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{role:"radio",onClick:handleClickTimeLimit,value:timeLimit,"aria-checked":timeLimitPerRound===timeLimit,css:roomSettingButton(timeLimitPerRound===timeLimit),children:[timeLimit/config.S2,"초"]})},timeLimit)))})]})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.Footer,{buttonPosition:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Modal.A.TextButton,{onClick:handleClickApply,children:"적용"})})]})},RoomSettingModal_RoomSettingModal=RoomSettingModal;RoomSettingModal.__docgenInfo={description:"",methods:[],displayName:"RoomSettingModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},returnFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLElement"}],raw:"RefObject<HTMLElement>"},description:""}}}},"./src/components/common/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Dropdown_Dropdown});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const dropdownLayout=emotion_react_browser_esm.AH`
  display: flex;
  position: relative;
  align-items: center;

  width: 16rem;
  height: 3.6rem;
  padding: 0.8rem;
  border: 1px solid black;
  border-radius: 0.8rem;

  background-color: white;

  cursor: pointer;
`,dropdownTextContainer=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  user-select: none;
`,emptyWrapper=emotion_react_browser_esm.AH`
  width: 1.2rem;
  height: 1.2rem;
`,arrowImage=emotion_react_browser_esm.AH`
  width: 1.2rem;
  height: 1.2rem;
`,dropdownText=emotion_react_browser_esm.AH`
  text-align: center;

  ${Theme.S.typography.body2}

  user-select: none;
  cursor: pointer;
`,selectOptionList=(isOpen,count)=>emotion_react_browser_esm.AH`
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 3.6rem;
  left: 0;
  flex-direction: column;

  width: 100%;
  height: ${isOpen?3.6*count+"rem":0};
  border: ${isOpen?`1px solid ${Theme.S.color.gray200}`:"none"};
  border-radius: ${Theme.S.borderRadius.radius10};

  background-color: white;

  color: black;

  list-style: none;
  transition: height 0.3s;
  user-select: none;
`,arrowDown_namespaceObject=__webpack_require__.p+"static/media/arrowDown.4cfc739e.svg",arrowUp_namespaceObject=__webpack_require__.p+"static/media/arrowUp.ffc96fce.svg",Dropdown=({text,optionList,handleClickOption})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),handleToggleDropdown=()=>{setIsOpen((prev=>!prev)),triggerRef.current?.focus()},handleSelectOption=e=>{handleClickOption(e),handleToggleDropdown()};return(0,react.useEffect)((()=>{const handleOutsideClose=e=>{isOpen&&dropdownRef.current&&!dropdownRef.current.contains(e.target)&&setIsOpen(!1)};return document.addEventListener("click",handleOutsideClose),()=>{document.removeEventListener("click",handleOutsideClose)}}),[isOpen]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:dropdownLayout,ref:dropdownRef,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{ref:triggerRef,onClick:handleToggleDropdown,"aria-haspopup":"listbox","aria-expanded":isOpen,"aria-controls":"dropdown-listbox","aria-label":`카테고리 선택 목록, 현재 선택: ${text||"선택해주세요"}`,css:dropdownTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:emptyWrapper}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:dropdownText,children:text||"선택해주세요"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{children:(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:isOpen?arrowUp_namespaceObject:arrowDown_namespaceObject,alt:"",css:arrowImage})})]}),isOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{id:"dropdown-listbox",role:"listbox","aria-labelledby":"dropdown-button",css:selectOptionList(isOpen,optionList.length),children:optionList.map((option=>{return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{role:"option","aria-selected":text===option.label,children:(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{css:(isSelected=text===option.label,emotion_react_browser_esm.AH`
  width: 100%;
  height: 3.6rem;

  ${Theme.S.typography.caption}
  background-color: ${isSelected?Theme.S.color.gray300:"white"};

  color: black;

  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${Theme.S.color.gray200};
  }
`),value:option.value,onClick:handleSelectOption,children:option.label})},option.value);var isSelected}))})]})},Dropdown_Dropdown=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{text:{required:!0,tsType:{name:"string"},description:""},optionList:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},handleClickOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}}},"./src/hooks/useGetRoomInfo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useGetRoomInfo});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_apis_room__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/apis/room.ts"),_constants_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/config.ts"),_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/queryKeys.ts");const useGetRoomInfo=()=>{const{roomId}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.g)(),{data}=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.U)({queryKey:[_constants_queryKeys__WEBPACK_IMPORTED_MODULE_1__.e.roomMembers,Number(roomId)],queryFn:()=>(0,_apis_room__WEBPACK_IMPORTED_MODULE_0__.qE)(Number(roomId)),refetchInterval:query=>!(query.state.error&&query.state.fetchFailureCount>=_constants_config__WEBPACK_IMPORTED_MODULE_4__.A3)&&_constants_config__WEBPACK_IMPORTED_MODULE_4__.S2,refetchIntervalInBackground:!0,gcTime:0});return{members:data?.members,roomSetting:data?.roomSetting,master:data?.master,isGameStart:data?.isGameStart}}}}]);
//# sourceMappingURL=4.ec5d84fa.iframe.bundle.js.map