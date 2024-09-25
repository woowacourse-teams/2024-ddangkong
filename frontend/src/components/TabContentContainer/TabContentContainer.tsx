import { useParams } from 'react-router-dom';

import getDominantVote from './getDominantVote';
import {
  angryImage,
  barWrapperStyle,
  categoryContainer,
  contentWrapperStyle,
  emphasizeText,
  firstBar,
  noVoteText,
  noVoteTextContainer,
  resultTextStyle,
  roundVoteResultContainer,
  secondBar,
  totalResultInfoContainer,
  totalResultInfoText,
} from './TabContentContainer.styled';
import OptionParticipantsContainer from '../OptionParticipantsContainer/OptionParticipantsContainer';
import useTotalCountAnimation from '../RoundVoteContainer/RoundVoteContainer.hook';
import TopicContainer from '../TopicContainer/TopicContainer';

import AngryDdangkong from '@/assets/images/angryDdangkong.png';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatus from '@/hooks/useMyGameStatus';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

interface TabContentContainerProps {
  isVoteStatisticsTabActive: boolean;
}

const TabContentContainer = ({ isVoteStatisticsTabActive }: TabContentContainerProps) => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId: Number(roomId),
    contentId: balanceContent?.contentId,
  });

  useMyGameStatus({ roomId: Number(roomId) });

  const { animatedFirstPercent, animatedSecondPercent } = useTotalCountAnimation(groupRoundResult);

  if (!groupRoundResult) return;

  const isBigFirstOption = groupRoundResult.firstOption.percent >= 50;
  const isVote =
    groupRoundResult.firstOption.percent !== 0 || groupRoundResult.secondOption.percent !== 0;

  const dominantVoteData = totalResult ? getDominantVote(totalResult) : null;

  return (
    <div css={contentWrapperStyle}>
      <TopicContainer />
      {isVote && isVoteStatisticsTabActive && (
        <>
          <div css={roundVoteResultContainer}>
            <div css={categoryContainer}>
              <span>{groupRoundResult.firstOption.name}</span>
              <span>{groupRoundResult.secondOption.name}</span>
            </div>
            <div css={barWrapperStyle}>
              <span css={firstBar(groupRoundResult.firstOption.percent, isBigFirstOption)}>
                {animatedFirstPercent}%
              </span>
              <span css={secondBar(groupRoundResult.secondOption.percent, isBigFirstOption)}>
                {animatedSecondPercent}%
              </span>
            </div>
            <div css={resultTextStyle(isVoteStatisticsTabActive)}>
              <span>{groupRoundResult.firstOption.memberCount}명</span>
              <span>{groupRoundResult.secondOption.memberCount}명</span>
            </div>
          </div>
          {totalResult && dominantVoteData && (
            <div css={totalResultInfoContainer}>
              {dominantVoteData.isEven ? (
                <span css={totalResultInfoText}>
                  🥜 땅콩 유저들 사이에서 선택이 팽팽하게 갈렸어요! 😲
                </span>
              ) : (
                <>
                  <span css={totalResultInfoText}>
                    🥜 땅콩 유저 중{' '}
                    <span css={emphasizeText}>{dominantVoteData.dominantPercent}%</span>는
                  </span>
                  <span css={totalResultInfoText}>
                    <span css={emphasizeText}>{dominantVoteData.dominantName}</span>를 선택했어요 !
                  </span>
                </>
              )}
            </div>
          )}
        </>
      )}
      {isVote && !isVoteStatisticsTabActive && <OptionParticipantsContainer />}
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
