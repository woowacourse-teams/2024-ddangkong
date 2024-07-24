import {
  barBackgroundStyle,
  barStyle,
  barWrapperStyle,
  blankWrapper,
  categoryContainer,
  roundVoteResultContainer,
} from '../RoundResultTab/RoundResultTab.styled';

import { Total } from '@/types/roundVoteResult';

interface TotalResultTabProps {
  totalResult: Total;
  animatedTotalFirstPercent?: number;
  animatedTotalSecondPercent?: number;
}

const TotalResultTab = ({
  totalResult,
  animatedTotalFirstPercent,
  animatedTotalSecondPercent,
}: TotalResultTabProps) => {
  const isBigFirstOption = totalResult.firstOption.percent >= 50;

  return (
    <>
      <div css={roundVoteResultContainer}>
        <div css={categoryContainer}>
          <span>{totalResult.firstOption.name}</span>
          <span>{totalResult.secondOption.name}</span>
        </div>
        <div css={barWrapperStyle}>
          <div css={barStyle(totalResult.firstOption.percent, isBigFirstOption)}>
            {animatedTotalFirstPercent}%
          </div>
          <div css={barBackgroundStyle(totalResult.secondOption.percent, isBigFirstOption)}>
            {animatedTotalSecondPercent}%
          </div>
        </div>
        <div css={blankWrapper}></div>
      </div>
      <div css={blankWrapper}></div>
    </>
  );
};

export default TotalResultTab;
