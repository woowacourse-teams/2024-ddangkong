import { useEffect, useState } from 'react';

import {
  barBackgroundStyle,
  barStyle,
  barWrapperStyle,
  blankWrapper,
  buttonStyle,
  categoryContainer,
  contentWrapperStyle,
  currentVoteButtonWrapper,
  resultTextStyle,
  roundVoteResultContainer,
  tabButtonStyle,
  tabLayout,
  tabWrapperStyle,
} from './RoundResultTab.styled';

import useCountAnimation from '@/hooks/useCountAnimation';

interface Option {
  percentage: number;
  count: number;
}

interface Statistic {
  firstOption: Option;
  secondOption: Option;
}

const INITIAL_STATISTIC: Statistic = {
  firstOption: {
    percentage: 50,
    count: 0,
  },
  secondOption: {
    percentage: 50,
    count: 0,
  },
};

const RoundResultTab = () => {
  const [activeTab, setActiveTab] = useState('group');
  const [groupResult, setGroupResult] = useState<Statistic>(INITIAL_STATISTIC);
  const [averageResult, setAverageResult] = useState<Statistic>(INITIAL_STATISTIC);

  const animatedFirstPercentage = useCountAnimation({ target: groupResult.firstOption.percentage });
  const animatedSecondPercentage = useCountAnimation({
    target: groupResult.secondOption.percentage,
  });

  const isBigFirstOption = groupResult.firstOption.percentage >= 50;

  useEffect(() => {
    const fetchData = async () => {
      const groupResponse = await new Promise<Statistic>((resolve) =>
        resolve({
          firstOption: { percentage: 73, count: 7 },
          secondOption: { percentage: 27, count: 3 },
        }),
      );

      const averageResponse = await new Promise<Statistic>((resolve) =>
        resolve({
          firstOption: { percentage: 16, count: 16 },
          secondOption: { percentage: 84, count: 84 },
        }),
      );

      setGroupResult(groupResponse);
      setAverageResult(averageResponse);
    };

    fetchData();
  }, []);

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
