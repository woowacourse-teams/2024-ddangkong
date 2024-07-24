import { useState } from 'react';

import { useTotalCountAnimation } from './RoundResultTab.hook';
import {
  blankWrapper,
  contentWrapperStyle,
  tabButtonStyle,
  tabLayout,
  tabWrapperStyle,
} from './RoundResultTab.styled';
import GroupRoundResultTab from '../GroupRoundResultTab/GroupRoundResultTab';
import TotalResultTab from '../TotalResultTab/TotalResultTab';

import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const RoundResultTab = () => {
  const [activeTab, setActiveTab] = useState('group');
  const { groupRoundResult, totalResult } = useRoundVoteResultQuery();

  const {
    animatedFirstPercent,
    animatedSecondPercent,
    animatedTotalFirstPercent,
    animatedTotalSecondPercent,
  } = useTotalCountAnimation(groupRoundResult, totalResult);

  if (!groupRoundResult || !totalResult) return <div>데이터가 없습니다</div>;

  return (
    <div css={tabLayout}>
      <div css={tabWrapperStyle}>
        <button
          css={tabButtonStyle(activeTab === 'group')}
          className={activeTab === 'group' ? 'active' : ''}
          onClick={() => setActiveTab('group')}
        >
          그룹
        </button>
        <button
          css={tabButtonStyle(activeTab === 'all')}
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          전체
        </button>
      </div>
      <div css={contentWrapperStyle}>
        <div css={blankWrapper}></div>
        {activeTab === 'group' ? (
          <GroupRoundResultTab
            groupRoundResult={groupRoundResult}
            animatedFirstPercent={animatedFirstPercent}
            animatedSecondPercent={animatedSecondPercent}
          />
        ) : (
          <TotalResultTab
            totalResult={totalResult}
            animatedTotalFirstPercent={animatedTotalFirstPercent}
            animatedTotalSecondPercent={animatedTotalSecondPercent}
          />
        )}
      </div>
    </div>
  );
};

export default RoundResultTab;
