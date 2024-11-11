import { useState } from 'react';

import RoundResultTab from './RoundResultTab/RoundResultTab';
import { tabLayout, tabWrapper } from './RoundVoteContainer.styled';
import TabContentContainer from './TabContentContainer/TabContentContainer';

const RoundVoteContainer = () => {
  const [activeTab, setActiveTab] = useState<'voteStatistics' | 'voteStatus'>('voteStatistics');
  const isVoteStatisticsTabActive = activeTab === 'voteStatistics';

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
      <TabContentContainer isVoteStatisticsTabActive={isVoteStatisticsTabActive} />
    </div>
  );
};

export default RoundVoteContainer;
