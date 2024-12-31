"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[115],{"./src/pages/RoundResultPage/components/RoundVoteContainer/TabContentContainer/TabContentContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabContentContainer_stories,투표_통계:()=>투표_통계,투표_현황:()=>투표_현황});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const emptyVoteTextContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;
`,emptyVoteText=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  ${Theme.S.typography.headline3}
`,angryImage=emotion_react_browser_esm.AH`
  width: 16rem;
  height: 14rem;
`;var angryDdangkong=__webpack_require__("./src/assets/images/angryDdangkong.webp");const EmptyVoteContent=()=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:emptyVoteTextContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:angryDdangkong,alt:"",css:angryImage}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:emptyVoteText,children:["아무도 투표하지 않으셨네요 :",")"]})]}),EmptyVoteContent_EmptyVoteContent=EmptyVoteContent;EmptyVoteContent.__docgenInfo={description:"",methods:[],displayName:"EmptyVoteContent"};const nicknameItemLayout=emotion_react_browser_esm.AH`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`,nicknameText=isMyNickname=>emotion_react_browser_esm.AH`
  font-weight: ${isMyNickname?"bold":400};
  font-size: 1.2rem;
`,profileImage=emotion_react_browser_esm.AH`
  width: 1.8rem;
  height: 1.8rem;
`;var sillyDdangkongMedium=__webpack_require__("./src/assets/images/sillyDdangkongMedium.webp"),useGetUserInfo=__webpack_require__("./src/hooks/useGetUserInfo.ts");const NicknameItem=({nickName})=>{const{member}=(0,useGetUserInfo.A)(),isMyNickname=member.nickname===nickName;return(0,emotion_react_jsx_runtime_browser_esm.FD)("li",{css:nicknameItemLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("img",{src:sillyDdangkongMedium,alt:"사용자 프로필",css:profileImage}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:nicknameText(isMyNickname),children:nickName})]})},NicknameItem_NicknameItem=NicknameItem;NicknameItem.__docgenInfo={description:"",methods:[],displayName:"NicknameItem",props:{nickName:{required:!0,tsType:{name:"string"},description:""}}};const optionParticipantsLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,optionInfo=emotion_react_browser_esm.AH`
  font-weight: bold;
  font-size: 1.6rem;
`,participantsListWrapper=emotion_react_browser_esm.AH`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.4rem;
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx");const OptionParticipants=({optionName,memberCount,members})=>{const screenReaderOptionParticipants=`${optionName}. ${memberCount}명`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:optionParticipantsLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderOptionParticipants}),(0,emotion_react_jsx_runtime_browser_esm.FD)("p",{css:optionInfo,"aria-hidden":!0,children:[optionName,": ",memberCount]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("ul",{css:participantsListWrapper,children:members.map(((member,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(NicknameItem_NicknameItem,{nickName:member},index)))})]})},OptionParticipants_OptionParticipants=OptionParticipants;OptionParticipants.__docgenInfo={description:"",methods:[],displayName:"OptionParticipants",props:{optionName:{required:!0,tsType:{name:"string"},description:""},memberCount:{required:!0,tsType:{name:"number"},description:""},members:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const optionParticipantsContainerLayout=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.2rem;
`,horizontalDivider=emotion_react_browser_esm.AH`
  width: 100%;
  height: 1px;
  margin: 1.4rem 0;

  background-color: ${Theme.S.color.gray300};
`,OptionParticipantsContainer=({groupRoundResult})=>(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:optionParticipantsContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipants_OptionParticipants,{optionName:groupRoundResult.firstOption.name,members:groupRoundResult.firstOption.members,memberCount:groupRoundResult.firstOption.memberCount}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:horizontalDivider}),(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipants_OptionParticipants,{optionName:groupRoundResult.secondOption.name,members:groupRoundResult.secondOption.members,memberCount:groupRoundResult.secondOption.memberCount}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:horizontalDivider}),(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipants_OptionParticipants,{optionName:"투표에 참여하지 않으셨어요",members:groupRoundResult.giveUp.members,memberCount:groupRoundResult.giveUp.memberCount})]}),OptionParticipantsContainer_OptionParticipantsContainer=OptionParticipantsContainer;OptionParticipantsContainer.__docgenInfo={description:"",methods:[],displayName:"OptionParticipantsContainer",props:{groupRoundResult:{required:!0,tsType:{name:"Group"},description:""}}};const tabContentContainerLayout=isVoteStatisticsTabActive=>emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 15%;
  height: 55vh;
  overflow-y: ${isVoteStatisticsTabActive?"visible":"auto"};
  padding: 2.4rem;
  border: 0.3rem solid ${Theme.S.color.peanut400};
  border-radius: 0.8rem;
`,roundVoteResultContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,optionContainer=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;

  font-weight: bold;
  font-size: 1.4rem;
  word-break: keep-all;
`,secondOptionName=emotion_react_browser_esm.AH`
  text-align: right;
`,memberCountWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;

  font-weight: bold;
  font-size: 1.2rem;
`,totalResultInfoContainer=emotion_react_browser_esm.AH`
  display: flex;
  flex-direction: column;
  align-items: center;
`,totalResultInfoText=emotion_react_browser_esm.AH`
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  word-break: keep-all;
`,emphasizeText=emotion_react_browser_esm.AH`
  font-weight: bold;
`;var react=__webpack_require__("./node_modules/react/index.js"),useCountAnimation=__webpack_require__("./src/hooks/useCountAnimation.ts");const hooks_useTotalCountAnimation=groupRoundResult=>({animatedFirstPercent:(0,useCountAnimation.A)({target:groupRoundResult.firstOption.percent}),animatedSecondPercent:(0,useCountAnimation.A)({target:groupRoundResult.secondOption.percent})}),barContainer=emotion_react_browser_esm.AH`
  display: flex;
  overflow: hidden;
  align-items: center;
  width: inherit;
  border-radius: 1.6rem;
`,barWrapper=emotion_react_browser_esm.AH`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;

  color: black;
  font-weight: bold;
  font-size: 1.6rem;
  transition: all 1s;
`,firstBar=(percent,isBigFirstOption)=>emotion_react_browser_esm.AH`
  ${barWrapper}
  overflow: hidden;
  width: ${percent}%;
  border-radius: 1.6rem 0 0 1.6rem;

  background-color: ${isBigFirstOption?Theme.S.color.peanut400:Theme.S.color.gray};
  transform: translateX(5px);
  clip-path: ${100===percent?"none":"polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)"};
`,secondBar=(percent,isBigFirstOption)=>emotion_react_browser_esm.AH`
  ${barWrapper}
  overflow: hidden;
  width: ${percent}%;
  border-radius: 0 1.6rem 1.6rem 0;

  background-color: ${isBigFirstOption?Theme.S.color.gray:Theme.S.color.peanut400};
  transform: translateX(-5px);
  clip-path: ${100===percent?"none":"polygon(10px 0, 100% 0, 100% 100%, 0 100%)"};
`,StatisticBar=({groupRoundResult})=>{const{animatedFirstPercent,animatedSecondPercent}=hooks_useTotalCountAnimation(groupRoundResult),[optionPercent,setOptionPercent]=(0,react.useState)({first:50,second:50}),isBigFirstOption=optionPercent.first>=50;return(0,react.useEffect)((()=>{setOptionPercent((prev=>({...prev,first:groupRoundResult.firstOption.percent,second:groupRoundResult.secondOption.percent})))}),[groupRoundResult]),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:barContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:firstBar(optionPercent.first,isBigFirstOption),children:[animatedFirstPercent,"%"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:secondBar(optionPercent.second,isBigFirstOption),children:[animatedSecondPercent,"%"]})]})},StatisticBar_StatisticBar=StatisticBar;StatisticBar.__docgenInfo={description:"",methods:[],displayName:"StatisticBar",props:{groupRoundResult:{required:!0,tsType:{name:"Group"},description:""}}};const VoteStatisticContent=({groupRoundResult,totalResult})=>{const dominantVoteData=(totalResult=>{const{firstOption,secondOption}=totalResult,isEqual=firstOption.percent===secondOption.percent,dominantOption=firstOption.percent>secondOption.percent?firstOption:secondOption;return{isEqual,dominantPercent:dominantOption.percent,dominantName:dominantOption.name}})(totalResult),{firstOption,secondOption}=groupRoundResult,screenReaderFirstOption=`${firstOption.name} ${firstOption.percent}%. ${firstOption.memberCount}명 선택.`,screenReaderSecondOption=`${secondOption.name} ${secondOption.percent}%. ${secondOption.memberCount}명 선택`,screenReaderDominantVote=`📢 전체 유저 중 ${dominantVoteData?.dominantPercent}%는. ${dominantVoteData?.dominantName}를 선택했어요`;return(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(A11yOnly.A,{children:[screenReaderFirstOption,screenReaderSecondOption]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roundVoteResultContainer,"aria-hidden":!0,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:optionContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:firstOption.name}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:secondOptionName,children:secondOption.name})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(StatisticBar_StatisticBar,{groupRoundResult}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:memberCountWrapper,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[firstOption.memberCount,"명"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[secondOption.memberCount,"명"]})]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:totalResultInfoContainer,children:dominantVoteData.isEqual?(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:totalResultInfoText,children:"📢 전체 유저 사이에서는 의견이 반반이에요 😲"}):(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderDominantVote}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:totalResultInfoText,"aria-hidden":!0,children:["📢 전체 유저 중 ",(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:emphasizeText,children:[dominantVoteData.dominantPercent,"%"]}),"는"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:totalResultInfoText,"aria-hidden":!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:emphasizeText,children:dominantVoteData.dominantName}),"를 선택했어요 !"]})]})})]})},VoteStatisticContent_VoteStatisticContent=VoteStatisticContent;VoteStatisticContent.__docgenInfo={description:"",methods:[],displayName:"VoteStatisticContent",props:{groupRoundResult:{required:!0,tsType:{name:"Group"},description:""},totalResult:{required:!0,tsType:{name:"Total"},description:""}}};var TopicContainer=__webpack_require__("./src/components/TopicContainer/TopicContainer.tsx"),hooks=__webpack_require__("./src/hooks/index.ts");const TabContentContainer=({isVoteStatisticsTabActive})=>{const{roomId}=(0,dist.g)(),{balanceContent}=(0,hooks.dD)(Number(roomId)),{groupRoundResult,totalResult}=(0,hooks.nm)({roomId:Number(roomId),contentId:balanceContent.contentId});(0,hooks.WZ)({roomId:Number(roomId)});const isVote=(groupRoundResult=>0!==groupRoundResult.firstOption.memberCount||0!==groupRoundResult.secondOption.memberCount)(groupRoundResult);return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:tabContentContainerLayout(isVoteStatisticsTabActive),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TopicContainer.A,{}),isVote&&isVoteStatisticsTabActive&&(0,emotion_react_jsx_runtime_browser_esm.Y)(VoteStatisticContent_VoteStatisticContent,{groupRoundResult,totalResult}),isVote&&!isVoteStatisticsTabActive&&(0,emotion_react_jsx_runtime_browser_esm.Y)(OptionParticipantsContainer_OptionParticipantsContainer,{groupRoundResult}),!isVote&&(0,emotion_react_jsx_runtime_browser_esm.Y)(EmptyVoteContent_EmptyVoteContent,{})]})},TabContentContainer_TabContentContainer=TabContentContainer;TabContentContainer.__docgenInfo={description:"",methods:[],displayName:"TabContentContainer",props:{isVoteStatisticsTabActive:{required:!0,tsType:{name:"boolean"},description:""}}};const TabContentContainer_stories={title:"TabContentContainer",component:TabContentContainer_TabContentContainer},투표_통계={args:{isVoteStatisticsTabActive:!0}},투표_현황={args:{isVoteStatisticsTabActive:!1}},__namedExportsOrder=["투표_통계","투표_현황"];투표_통계.parameters={...투표_통계.parameters,docs:{...투표_통계.parameters?.docs,source:{originalSource:"{\n  args: {\n    isVoteStatisticsTabActive: true\n  }\n}",...투표_통계.parameters?.docs?.source}}},투표_현황.parameters={...투표_현황.parameters,docs:{...투표_현황.parameters?.docs,source:{originalSource:"{\n  args: {\n    isVoteStatisticsTabActive: false\n  }\n}",...투표_현황.parameters?.docs?.source}}}},"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./src/components/TopicContainer/TopicContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TopicContainer_TopicContainer});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const topicContainerLayout=emotion_react_browser_esm.AH`
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
`;var A11yOnly=__webpack_require__("./src/components/common/a11yOnly/A11yOnly.tsx"),routes=__webpack_require__("./src/constants/routes.ts"),useBalanceContentQuery=__webpack_require__("./src/hooks/useBalanceContentQuery.ts");const TopicContainer=()=>{const location=(0,dist.zy)(),{roomId}=(0,dist.g)(),{balanceContent}=(0,useBalanceContentQuery.A)(Number(roomId)),isGamePage=location.pathname===routes.b.game(Number(roomId)),screenReaderQuestion=`질문. ${balanceContent.question}.`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("section",{css:topicContainerLayout,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(A11yOnly.A,{children:screenReaderQuestion}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:categoryText,"aria-hidden":!0,children:isGamePage&&balanceContent.category}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:topicText(isGamePage),"aria-hidden":!0,children:balanceContent.question})]})},TopicContainer_TopicContainer=TopicContainer;TopicContainer.__docgenInfo={description:"",methods:[],displayName:"TopicContainer"}},"./src/components/common/a11yOnly/A11yOnly.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>a11yOnly_A11yOnly});var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const A11yOnlyLayout=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js").AH`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`,A11yOnly=({as,children,...props})=>{const Component=as||"span";return(0,emotion_react_jsx_runtime_browser_esm.Y)(Component,{css:A11yOnlyLayout,...props,children})},a11yOnly_A11yOnly=A11yOnly;A11yOnly.__docgenInfo={description:"",methods:[],displayName:"A11yOnly",props:{as:{required:!1,tsType:{name:"T"},description:""},role:{required:!1,tsType:{name:"AriaRole"},description:""}}}},"./src/assets/images/angryDdangkong.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/angryDdangkong.29469aa8.webp"},"./src/assets/images/sillyDdangkongMedium.webp":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sillyDdangkongMedium.9937535c.webp"}}]);
//# sourceMappingURL=pages-RoundResultPage-components-RoundVoteContainer-TabContentContainer-TabContentContainer-stories.4f058e22.iframe.bundle.js.map