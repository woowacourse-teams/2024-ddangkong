import { useState } from 'react';

import { useTotalCountAnimation } from './RoundVoteContainer.hook';
import { tabLayout, tabWrapper } from './RoundVoteContainer.styled';
import RoundResultTab from '../RoundResultTab/RoundResultTab';
import TabContentContainer from '../TabContentContainer/TabContentContainer';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const RoundVoteContainer = () => {
  const [activeTab, setActiveTab] = useState<'group' | 'total'>('group');
  const isGroupTabActive = activeTab === 'group';

  const { balanceContent } = useBalanceContentQuery();
  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId: 1,
    contentId: balanceContent?.contentId,
  });

  const {
    animatedFirstPercent,
    animatedSecondPercent,
    animatedTotalFirstPercent,
    animatedTotalSecondPercent,
  } = useTotalCountAnimation(groupRoundResult, totalResult);

  const handleClickTab = (clickedTab: 'group' | 'total') => {
    setActiveTab(clickedTab);
  };

  if (!groupRoundResult || !totalResult) return <div>데이터가 없습니다</div>;

  return (
    <div css={tabLayout}>
      <nav css={tabWrapper}>
        <RoundResultTab tab="group" activeTab={activeTab} handleClickTab={handleClickTab} />
        <RoundResultTab tab="total" activeTab={activeTab} handleClickTab={handleClickTab} />
      </nav>
      <TabContentContainer
        isGroupTabActive={isGroupTabActive}
        roundResult={isGroupTabActive ? groupRoundResult : totalResult}
        animatedFirstPercent={isGroupTabActive ? animatedFirstPercent : animatedTotalFirstPercent}
        animatedSecondPercent={
          isGroupTabActive ? animatedSecondPercent : animatedTotalSecondPercent
        }
      />
    </div>
  );
};

export default RoundVoteContainer;
