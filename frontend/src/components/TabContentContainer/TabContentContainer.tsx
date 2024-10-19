import { useParams } from 'react-router-dom';

import {
  angryImage,
  barWrapperStyle,
  optionContainer,
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
import getDominantVote from './TabContentContainer.util';
import A11yOnly from '../common/a11yOnly/A11yOnly';
import OptionParticipantsContainer from '../OptionParticipantsContainer/OptionParticipantsContainer';
import useTotalCountAnimation from '../RoundVoteContainer/RoundVoteContainer.hook';
import TopicContainer from '../TopicContainer/TopicContainer';

import AngryDdangkong from '@/assets/images/angryDdangkong.webp';
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
    groupRoundResult.firstOption.memberCount !== 0 ||
    groupRoundResult.secondOption.memberCount !== 0;

  const dominantVoteData = totalResult ? getDominantVote(totalResult) : null;

  const screenReaderFirstOption = `${groupRoundResult.firstOption.name} ${groupRoundResult.firstOption.percent}%. ${groupRoundResult.firstOption.memberCount}명 선택.`;
  const screenReaderSecondOption = `${groupRoundResult.secondOption.name} ${groupRoundResult.secondOption.percent}%. ${groupRoundResult.secondOption.memberCount}명 선택`;
  const screenReaderDominantVote = `📢 전체 유저 중 ${dominantVoteData?.dominantPercent}%는. ${dominantVoteData?.dominantName}를 선택했어요`;

  return (
    <div css={contentWrapperStyle}>
      <TopicContainer />
      {isVote && isVoteStatisticsTabActive && (
        <>
          <A11yOnly>
            {screenReaderFirstOption}
            {screenReaderSecondOption}
          </A11yOnly>
          <div css={roundVoteResultContainer} aria-hidden>
            <div css={optionContainer}>
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
              {dominantVoteData.isEqual ? (
                <span css={totalResultInfoText}>📢 전체 유저 사이에서는 의견이 반반이에요 😲</span>
              ) : (
                <>
                  <A11yOnly>{screenReaderDominantVote}</A11yOnly>
                  <span css={totalResultInfoText} aria-hidden>
                    📢 전체 유저 중{' '}
                    <span css={emphasizeText}>{dominantVoteData.dominantPercent}%</span>는
                  </span>
                  <span css={totalResultInfoText} aria-hidden>
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
