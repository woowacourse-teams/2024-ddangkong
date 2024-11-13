import { useEffect, useState } from 'react';

import useTotalCountAnimation from './hooks/useTotalCountAnimation';
import { barContainer, firstBar, secondBar } from './StatisticBar.styled';

import { Group } from '@/types/roundVoteResult';

const INITIAL_OPTION_PERCENT = 50;

interface StatisticBarProps {
  groupRoundResult: Group;
}
const StatisticBar = ({ groupRoundResult }: StatisticBarProps) => {
  const { animatedFirstPercent, animatedSecondPercent } = useTotalCountAnimation(groupRoundResult);
  const [optionPercent, setOptionPercent] = useState({
    first: INITIAL_OPTION_PERCENT,
    second: INITIAL_OPTION_PERCENT,
  });

  const isBigFirstOption = optionPercent.first >= 50;

  useEffect(() => {
    setOptionPercent((prev) => ({
      ...prev,
      first: groupRoundResult.firstOption.percent,
      second: groupRoundResult.secondOption.percent,
    }));
  }, [groupRoundResult]);

  return (
    <div css={barContainer}>
      <span css={firstBar(optionPercent.first, isBigFirstOption)}>{animatedFirstPercent}%</span>
      <span css={secondBar(optionPercent.second, isBigFirstOption)}>{animatedSecondPercent}%</span>
    </div>
  );
};

export default StatisticBar;
