import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { tabLayout, tabWrapper } from './RoundVoteContainer.styled';
import RoundResultTab from '../RoundResultTab/RoundResultTab';
import TabContentContainer from '../TabContentContainer/TabContentContainer';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const RoundVoteContainer = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));

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
      <TabContentContainer
        isVoteStatisticsTabActive={isVoteStatisticsTabActive}
        roomId={Number(roomId)}
        contentId={balanceContent.contentId}
      />
    </div>
  );
};

export default RoundVoteContainer;
