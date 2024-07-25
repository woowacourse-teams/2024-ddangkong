import { useState } from 'react';

import { useTotalCountAnimation } from './RoundVoteContainer.hook';
import { tabLayout, tabWrapperStyle } from './RoundVoteContainer.styled';
import RoundResultTab from '../RoundResultTab/RoundResultTab';
import TabContentContainer from '../TabContentContainer/TabContentContainer';

import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const RoundVoteContainer = () => {
  const [activeTab, setActiveTab] = useState<'group' | 'total'>('group');
  const isGroupTabActive = activeTab === 'group';

  const { groupRoundResult, totalResult } = useRoundVoteResultQuery();
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
      <div css={tabWrapperStyle}>
        <RoundResultTab tab="group" activeTab={activeTab} handleClickTab={handleClickTab} />
        <RoundResultTab tab="total" activeTab={activeTab} handleClickTab={handleClickTab} />
      </div>
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
