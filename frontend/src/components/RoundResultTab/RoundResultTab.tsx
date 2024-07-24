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
      {activeTab === 'group' ? (
        <div css={contentWrapperStyle}>
          <div css={blankWrapper}></div>
          <div css={roundVoteResultContainer}>
            <div css={categoryContainer}>
              <span>100억 빚 송강</span>
              <span>100억 부자 송강호</span>
            </div>
            <div css={barWrapperStyle}>
              <div css={barStyle(groupResult.firstOption.percentage, isBigFirstOption)}>
                {animatedFirstPercentage}%
              </div>
              <div css={barBackgroundStyle(groupResult.secondOption.percentage, isBigFirstOption)}>
                {animatedSecondPercentage}%
              </div>
            </div>
            <div css={resultTextStyle}>
              <span>{groupResult.firstOption.count}명</span>
              <span>{groupResult.secondOption.count}명</span>
            </div>
          </div>
          <div css={currentVoteButtonWrapper}>
            <button css={buttonStyle}>투표 현황 {'>'}</button>
          </div>
        </div>
      ) : (
        <div css={contentWrapperStyle}>
          <div css={blankWrapper}></div>
          <div css={roundVoteResultContainer}>
            <div css={categoryContainer}>
              <span>100억 빚 송강</span>
              <span>100억 부자 송강호</span>
            </div>
            <div css={barWrapperStyle}>
              <div css={barStyle(averageResult.firstOption.percentage, isBigFirstOption)}>
                {averageResult.firstOption.percentage}%
              </div>
              <div
                css={barBackgroundStyle(averageResult.secondOption.percentage, isBigFirstOption)}
              >
                {averageResult.secondOption.percentage}%
              </div>
            </div>
            <div css={resultTextStyle}>
              <span>{averageResult.firstOption.count}명</span>
              <span>{averageResult.secondOption.count}명</span>
            </div>
          </div>
          <div css={blankWrapper}></div>
        </div>
      )}
    </div>
  );
};

export default RoundResultTab;
