import {
  barBackgroundStyle,
  barStyle,
  barWrapperStyle,
  buttonStyle,
  categoryContainer,
  currentVoteButtonWrapper,
  resultTextStyle,
  roundVoteResultContainer,
} from '../RoundResultTab/RoundResultTab.styled';

import { Group } from '@/types/roundVoteResult';

interface GroupRoundResultTabProps {
  groupRoundResult: Group;
  animatedFirstPercent?: number;
  animatedSecondPercent?: number;
}

const GroupRoundResultTab = ({
  groupRoundResult,
  animatedFirstPercent,
  animatedSecondPercent,
}: GroupRoundResultTabProps) => {
  const isBigFirstOption = groupRoundResult.firstOption.percent >= 50;

  return (
    <>
      <div css={roundVoteResultContainer}>
        <div css={categoryContainer}>
          <span>{groupRoundResult.firstOption.name}</span>
          <span>{groupRoundResult.secondOption.name}</span>
        </div>
        <div css={barWrapperStyle}>
          <div css={barStyle(groupRoundResult.firstOption.percent, isBigFirstOption)}>
            {animatedFirstPercent}%
          </div>
          <div css={barBackgroundStyle(groupRoundResult.secondOption.percent, isBigFirstOption)}>
            {animatedSecondPercent}%
          </div>
        </div>
        <div css={resultTextStyle}>
          <span>{groupRoundResult.firstOption.memberCount}명</span>
          <span>{groupRoundResult.secondOption.memberCount}명</span>
        </div>
      </div>
      <div css={currentVoteButtonWrapper}>
        <button css={buttonStyle}>투표 현황 {'>'}</button>
      </div>
    </>
  );
};

export default GroupRoundResultTab;
