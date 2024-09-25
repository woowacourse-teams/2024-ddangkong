import { useState } from 'react';

import { tabLayout, tabWrapper } from './RoundVoteContainer.styled';
import RoundResultTab from '../RoundResultTab/RoundResultTab';
import TabContentContainer from '../TabContentContainer/TabContentContainer';

const RoundVoteContainer = () => {
  const [activeTab, setActiveTab] = useState<'voteStatistics' | 'voteStatus'>('voteStatistics');
  const isGroupTabActive = activeTab === 'voteStatistics';

  const handleClickTab = (clickedTab: 'voteStatistics' | 'voteStatus') => {
    setActiveTab(clickedTab);
  };

  return (
    <div css={tabLayout}>
      <nav css={tabWrapper}>
        <RoundResultTab
          tab="voteStatistics"
          activeTab={activeTab}
          handleClickTab={handleClickTab}
        />
        <RoundResultTab tab="voteStatus" activeTab={activeTab} handleClickTab={handleClickTab} />
      </nav>
      <TabContentContainer isGroupTabActive={isGroupTabActive} />
    </div>
  );
};

export default RoundVoteContainer;
