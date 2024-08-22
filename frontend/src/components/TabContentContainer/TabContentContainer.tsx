import { useNavigate, useParams } from 'react-router-dom';

import {
  alertText,
  angryImage,
  barWrapperStyle,
  buttonStyle,
  categoryContainer,
  contentWrapperStyle,
  currentVoteButtonWrapper,
  firstBar,
  noVoteText,
  noVoteTextContainer,
  resultTextStyle,
  roundVoteResultContainer,
  secondBar,
} from './TabContentContainer.styled';
import useTotalCountAnimation from '../RoundVoteContainer/RoundVoteContainer.hook';

import AngryDdangkong from '@/assets/images/angryDdangkong.png';
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
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));

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

  const isVote = roundResult?.firstOption.percent !== 0 || roundResult?.secondOption.percent !== 0;

  if (!roundResult) return <div>데이터가 없습니다</div>;

  return (
    <div css={contentWrapperStyle}>
      {isVote ? (
        <>
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
        </>
      ) : (
        <div css={noVoteTextContainer}>
          <img src={AngryDdangkong} alt="화난 땅콩" css={angryImage} />
          <span css={noVoteText}>아무도 투표하지 않으셨네요 :{`)`}</span>
        </div>
      )}
    </div>
  );
};

export default TabContentContainer;
