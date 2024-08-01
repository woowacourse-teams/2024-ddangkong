import { useNavigate } from 'react-router-dom';

import {
  alertText,
  barBackgroundStyle,
  barStyle,
  barWrapperStyle,
  buttonStyle,
  categoryContainer,
  contentWrapperStyle,
  currentVoteButtonWrapper,
  resultTextStyle,
  roundVoteResultContainer,
} from './TabContentContainer.styled';

import { Group, Total } from '@/types/roundVoteResult';

interface TabContentContainerProps {
  isGroupTabActive: boolean;
  roundResult: Group | Total;
  animatedFirstPercent?: number;
  animatedSecondPercent?: number;
}

const TabContentContainer = ({
  isGroupTabActive,
  roundResult,
  animatedFirstPercent,
  animatedSecondPercent,
}: TabContentContainerProps) => {
  const navigate = useNavigate();

  const isBigFirstOption = roundResult.firstOption.percent >= 50;

  const goToVoteStatus = () => {
    navigate('/round/result/status');
  };

  return (
    <div css={contentWrapperStyle}>
      <div css={alertText(isGroupTabActive)}>다른 사람들은 이렇게 생각했어요 🥜</div>
      <div css={roundVoteResultContainer}>
        <div css={categoryContainer}>
          <span>{roundResult.firstOption.name}</span>
          <span>{roundResult.secondOption.name}</span>
        </div>
        <div css={barWrapperStyle}>
          <span css={barStyle(roundResult.firstOption.percent, isBigFirstOption)}>
            {animatedFirstPercent}%
          </span>
          <span css={barBackgroundStyle(roundResult.secondOption.percent, isBigFirstOption)}>
            {animatedSecondPercent}%
          </span>
        </div>
        <div css={resultTextStyle(isGroupTabActive)}>
          {'memberCount' in roundResult.firstOption && (
            <span>{roundResult.firstOption.memberCount}명</span>
          )}
          {'memberCount' in roundResult.secondOption && (
            <span>{roundResult.secondOption.memberCount}명</span>
          )}
        </div>
      </div>
      <div css={currentVoteButtonWrapper(isGroupTabActive)}>
        <button css={buttonStyle} onClick={goToVoteStatus}>
          투표 현황 {'>'}
        </button>
      </div>
    </div>
  );
};

export default TabContentContainer;
