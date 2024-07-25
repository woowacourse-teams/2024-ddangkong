import { useState } from 'react';

import { useTotalCountAnimation } from './RoundResultTab.hook';
import { tabLayout, tabWrapperStyle } from './RoundResultTab.styled';
import TabContentContainer from '../TabContentContainer/TabContentContainer';
import TabItem from '../TabItem/TabItem';

import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const RoundResultTab = () => {
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
        <TabItem tab="group" activeTab={activeTab} handleClickTab={handleClickTab} />
        <TabItem tab="total" activeTab={activeTab} handleClickTab={handleClickTab} />
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

export default RoundResultTab;
