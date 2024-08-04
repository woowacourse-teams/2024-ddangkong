"use strict";(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[867],{"./src/components/TabContentContainer/TabContentContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabContentContainer_stories,그룹_탭:()=>그룹_탭,전체_탭:()=>전체_탭});__webpack_require__("./node_modules/core-js/modules/esnext.array.group.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Theme=__webpack_require__("./src/styles/Theme.ts");const contentWrapperStyle=(0,emotion_react_browser_esm.AH)("display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:2.4rem;border:0.3rem solid ",Theme.Sx.color.peanut400,";border-radius:0.8rem;",""),alertText=isGroupTabActive=>(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isGroupTabActive?"hidden":"visible",";justify-content:center;width:100%;height:1.2rem;",Theme.Sx.typography.body1," font-weight:bold;",""),roundVoteResultContainer={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},categoryContainer={name:"psicm8",styles:"display:flex;justify-content:space-between;font-weight:bold;font-size:1.4rem"},barWrapperStyle={name:"ariw4s",styles:"display:flex;align-items:center;width:inherit"},barStyle=(percentage,isBigFirstOption)=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;width:",percentage,"%;height:8vh;border-radius:1.6rem 0 0 1.6rem;background-color:",isBigFirstOption?Theme.Sx.color.peanut400:Theme.Sx.color.gray,";color:black;font-weight:bold;font-size:1.6rem;clip-path:polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);transition:all 1s;transform:translateX(5px);",""),barBackgroundStyle=(percentage,isBigFirstOption)=>(0,emotion_react_browser_esm.AH)("display:flex;justify-content:center;align-items:center;width:",percentage,"%;height:8vh;border-radius:0 1.6rem 1.6rem 0;background-color:",isBigFirstOption?Theme.Sx.color.gray:Theme.Sx.color.peanut400,";color:black;font-weight:bold;font-size:1.6rem;clip-path:polygon(10px 0, 100% 0, 100% 100%, 0 100%);transition:all 1s;transform:translateX(-5px);",""),currentVoteButtonWrapper=isGroupTabActive=>(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isGroupTabActive?"visible":"hidden",";justify-content:flex-end;align-items:center;",""),buttonStyle={name:"3vgtsc",styles:"color:black;font-weight:bold;&:active{opacity:0.7;}"};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TabContentContainer=({isGroupTabActive,roundResult,animatedFirstPercent,animatedSecondPercent})=>{const navigate=(0,dist.Zp)(),isBigFirstOption=roundResult.firstOption.percent>=50;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:contentWrapperStyle,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:alertText(isGroupTabActive),children:"다른 사람들은 이렇게 생각했어요 🥜"}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:roundVoteResultContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:categoryContainer,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:roundResult.firstOption.name}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:roundResult.secondOption.name})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:barWrapperStyle,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:barStyle(roundResult.firstOption.percent,isBigFirstOption),children:[animatedFirstPercent,"%"]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:barBackgroundStyle(roundResult.secondOption.percent,isBigFirstOption),children:[animatedSecondPercent,"%"]})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:(isActiveGroupTab=isGroupTabActive,(0,emotion_react_browser_esm.AH)("display:flex;visibility:",isActiveGroupTab?"visible":"hidden",";justify-content:space-between;align-items:center;height:1.2rem;font-weight:bold;font-size:1.2rem;","")),children:["memberCount"in roundResult.firstOption&&(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[roundResult.firstOption.memberCount,"명"]}),"memberCount"in roundResult.secondOption&&(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{children:[roundResult.secondOption.memberCount,"명"]})]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:currentVoteButtonWrapper(isGroupTabActive),children:(0,emotion_react_jsx_runtime_browser_esm.FD)("button",{css:buttonStyle,onClick:()=>{navigate("/round/result/status")},children:["투표 현황 ",">"]})})]});var isActiveGroupTab},TabContentContainer_TabContentContainer=TabContentContainer;TabContentContainer.__docgenInfo={description:"",methods:[],displayName:"TabContentContainer",props:{isGroupTabActive:{required:!0,tsType:{name:"boolean"},description:""},roundResult:{required:!0,tsType:{name:"union",raw:"Group | Total",elements:[{name:"Group"},{name:"Total"}]},description:""},animatedFirstPercent:{required:!1,tsType:{name:"number"},description:""},animatedSecondPercent:{required:!1,tsType:{name:"number"},description:""}}};var roundVoteResult=__webpack_require__("./src/mocks/data/roundVoteResult.json");const TabContentContainer_stories={title:"TabContentContainer",component:TabContentContainer_TabContentContainer},그룹_탭={args:{isGroupTabActive:!0,roundResult:roundVoteResult.group,animatedFirstPercent:roundVoteResult.group.firstOption.percent,animatedSecondPercent:roundVoteResult.group.secondOption.percent},render:args=>(0,emotion_react_jsx_runtime_browser_esm.Y)(TabContentContainer_TabContentContainer,{...args})},전체_탭={args:{isGroupTabActive:!1,roundResult:roundVoteResult.total,animatedFirstPercent:roundVoteResult.total.firstOption.percent,animatedSecondPercent:roundVoteResult.total.secondOption.percent},render:args=>(0,emotion_react_jsx_runtime_browser_esm.Y)(TabContentContainer_TabContentContainer,{...args})},__namedExportsOrder=["그룹_탭","전체_탭"];그룹_탭.parameters={...그룹_탭.parameters,docs:{...그룹_탭.parameters?.docs,source:{originalSource:"{\n  args: {\n    isGroupTabActive: true,\n    roundResult: ROUND_VOTE_RESULT.group,\n    animatedFirstPercent: ROUND_VOTE_RESULT.group.firstOption.percent,\n    animatedSecondPercent: ROUND_VOTE_RESULT.group.secondOption.percent\n  },\n  render: args => <TabContentContainer {...args} />\n}",...그룹_탭.parameters?.docs?.source}}},전체_탭.parameters={...전체_탭.parameters,docs:{...전체_탭.parameters?.docs,source:{originalSource:"{\n  args: {\n    isGroupTabActive: false,\n    roundResult: ROUND_VOTE_RESULT.total,\n    animatedFirstPercent: ROUND_VOTE_RESULT.total.firstOption.percent,\n    animatedSecondPercent: ROUND_VOTE_RESULT.total.secondOption.percent\n  },\n  render: args => <TabContentContainer {...args} />\n}",...전체_탭.parameters?.docs?.source}}}}}]);