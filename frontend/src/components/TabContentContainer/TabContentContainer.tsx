import { useParams } from 'react-router-dom';

import {
  alertText,
  angryImage,
  barWrapperStyle,
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
import OptionParticipantsContainer from '../OptionParticipantsContainer/OptionParticipantsContainer';
import useTotalCountAnimation from '../RoundVoteContainer/RoundVoteContainer.hook';

import AngryDdangkong from '@/assets/images/angryDdangkong.png';
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

  if (!groupRoundResult) return;

  const isBigFirstOption = groupRoundResult.firstOption.percent >= 50;
  const isVote =
    groupRoundResult.firstOption.percent !== 0 || groupRoundResult.secondOption.percent !== 0;

  return (
    <div css={contentWrapperStyle}>
      {isVote && isGroupTabActive && (
        <>
          <div css={alertText(isGroupTabActive)}>다른 사람들은 이렇게 생각했어요 🥜</div>
          <div css={roundVoteResultContainer}>
            <div css={categoryContainer}>
              <span>{groupRoundResult.firstOption.name}</span>
              <span>{groupRoundResult.secondOption.name}</span>
            </div>
            <div css={barWrapperStyle}>
              <span css={firstBar(groupRoundResult.firstOption.percent, isBigFirstOption)}>
                {isGroup(groupRoundResult) ? animatedFirstPercent : animatedTotalFirstPercent}%
              </span>
              <span css={secondBar(groupRoundResult.secondOption.percent, isBigFirstOption)}>
                {isGroup(groupRoundResult) ? animatedSecondPercent : animatedTotalSecondPercent}%
              </span>
            </div>
            <div css={resultTextStyle(isGroupTabActive)}>
              {isGroup(groupRoundResult) && (
                <span>{groupRoundResult.firstOption.memberCount}명</span>
              )}
              {isGroup(groupRoundResult) && (
                <span>{groupRoundResult.secondOption.memberCount}명</span>
              )}
            </div>
          </div>
          <div css={currentVoteButtonWrapper(isGroupTabActive)}>
            <span>📢이 문항에 답한 전체 땅콩 유저 중 ~%는 ~를 선택했어요 !</span>
          </div>
        </>
      )}
      {isVote && !isGroupTabActive && <OptionParticipantsContainer />}
      {!isVote && (
        <div css={noVoteTextContainer}>
          <img src={AngryDdangkong} alt="화난 땅콩" css={angryImage} />
          <span css={noVoteText}>아무도 투표하지 않으셨네요 :{`)`}</span>
        </div>
      )}
    </div>
  );
};

export default TabContentContainer;
