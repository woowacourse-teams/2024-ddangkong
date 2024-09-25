import { useState } from 'react';

import { tabLayout, tabWrapper } from './RoundVoteContainer.styled';
import RoundResultTab from '../RoundResultTab/RoundResultTab';
import TabContentContainer from '../TabContentContainer/TabContentContainer';

const RoundVoteContainer = () => {
  const [activeTab, setActiveTab] = useState<'voteResult' | 'voteStatus'>('voteResult');
  const isGroupTabActive = activeTab === 'voteResult';

  const handleClickTab = (clickedTab: 'voteResult' | 'voteStatus') => {
    setActiveTab(clickedTab);
  };

  return (
    <div css={tabLayout}>
      <nav css={tabWrapper}>
        <RoundResultTab tab="voteResult" activeTab={activeTab} handleClickTab={handleClickTab} />
        <RoundResultTab tab="voteStatus" activeTab={activeTab} handleClickTab={handleClickTab} />
      </nav>
      <TabContentContainer isGroupTabActive={isGroupTabActive} />
    </div>
  );
};

export default RoundVoteContainer;
