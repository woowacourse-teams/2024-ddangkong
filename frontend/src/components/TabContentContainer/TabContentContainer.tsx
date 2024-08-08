import { useNavigate, useParams } from 'react-router-dom';

import {
  alertText,
  barWrapperStyle,
  buttonStyle,
  categoryContainer,
  contentWrapperStyle,
  currentVoteButtonWrapper,
  firstBar,
  resultTextStyle,
  roundVoteResultContainer,
  secondBar,
} from './TabContentContainer.styled';
import useTotalCountAnimation from '../RoundVoteContainer/RoundVoteContainer.hook';

import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatus from '@/hooks/useMyGameStatus';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';
import { Group, Total } from '@/types/roundVoteResult';

const isGroup = (value: Group | Total): value is Group => {
  return 'memberCount' in value.firstOption;
};

interface TabContentContainerProps {
  isGroupTabActive: boolean;
}

const TabContentContainer = ({ isGroupTabActive }: TabContentContainerProps) => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { balanceContent } = useBalanceContentQuery();

  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId: Number(roomId),
    contentId: balanceContent?.contentId,
  });

  useMyGameStatus({ roomId: Number(roomId) });

  const {
    animatedFirstPercent,
    animatedSecondPercent,
    animatedTotalFirstPercent,
    animatedTotalSecondPercent,
  } = useTotalCountAnimation(groupRoundResult, totalResult);

  const roundResult = isGroupTabActive ? groupRoundResult : totalResult;
  const isBigFirstOption = roundResult && roundResult.firstOption.percent >= 50;

  const goToVoteStatus = () => {
    navigate(ROUTES.roundResultStatus(Number(roomId)));
  };

  if (!roundResult) return <div>데이터가 없습니다</div>;

  return (
    <div css={contentWrapperStyle}>
      <div css={alertText(isGroupTabActive)}>다른 사람들은 이렇게 생각했어요 🥜</div>
      <div css={roundVoteResultContainer}>
        <div css={categoryContainer}>
          <span>{roundResult.firstOption.name}</span>
          <span>{roundResult.secondOption.name}</span>
        </div>
        <div css={barWrapperStyle}>
          <span css={firstBar(roundResult.firstOption.percent, isBigFirstOption)}>
            {isGroup(roundResult) ? animatedFirstPercent : animatedTotalFirstPercent}%
          </span>
          <span css={secondBar(roundResult.secondOption.percent, isBigFirstOption)}>
            {isGroup(roundResult) ? animatedSecondPercent : animatedTotalSecondPercent}%
          </span>
        </div>
        <div css={resultTextStyle(isGroupTabActive)}>
          {isGroup(roundResult) && <span>{roundResult.firstOption.memberCount}명</span>}
          {isGroup(roundResult) && <span>{roundResult.secondOption.memberCount}명</span>}
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
