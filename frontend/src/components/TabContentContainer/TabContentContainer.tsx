import StatisticBar from './StatisticBar/StatisticBar';
import {
  angryImage,
  optionContainer,
  tabContentContainerLayout,
  emphasizeText,
  noVoteText,
  noVoteTextContainer,
  resultTextStyle,
  roundVoteResultContainer,
  totalResultInfoContainer,
  totalResultInfoText,
  secondOptionName,
} from './TabContentContainer.styled';
import getDominantVote from './TabContentContainer.util';
import A11yOnly from '../common/a11yOnly/A11yOnly';
import OptionParticipantsContainer from '../OptionParticipantsContainer/OptionParticipantsContainer';
import TopicContainer from '../TopicContainer/TopicContainer';

import AngryDdangkong from '@/assets/images/angryDdangkong.webp';
import useMyGameStatus from '@/hooks/useMyGameStatus';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

interface TabContentContainerProps {
  isVoteStatisticsTabActive: boolean;
  roomId: number;
  contentId: number;
}

const TabContentContainer = ({
  isVoteStatisticsTabActive,
  roomId,
  contentId,
}: TabContentContainerProps) => {
  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId,
    contentId,
  });

  const { firstOption, secondOption } = groupRoundResult;

  const isVote = firstOption.memberCount !== 0 || secondOption.memberCount !== 0;

  const dominantVoteData = totalResult ? getDominantVote(totalResult) : null;

  const screenReaderFirstOption = `${firstOption.name} ${firstOption.percent}%. ${firstOption.memberCount}명 선택.`;
  const screenReaderSecondOption = `${secondOption.name} ${secondOption.percent}%. ${secondOption.memberCount}명 선택`;
  const screenReaderDominantVote = `📢 전체 유저 중 ${dominantVoteData?.dominantPercent}%는. ${dominantVoteData?.dominantName}를 선택했어요`;

  useMyGameStatus({ roomId });

  return (
    <div css={tabContentContainerLayout(isVoteStatisticsTabActive)}>
      <TopicContainer />
      {isVote && isVoteStatisticsTabActive && (
        <>
          <A11yOnly>
            {screenReaderFirstOption}
            {screenReaderSecondOption}
          </A11yOnly>
          <div css={roundVoteResultContainer} aria-hidden>
            <div css={optionContainer}>
              <span>{firstOption.name}</span>
              <span css={secondOptionName}>{secondOption.name}</span>
            </div>
            <StatisticBar groupRoundResult={groupRoundResult} />
            <div css={resultTextStyle(isVoteStatisticsTabActive)}>
              <span>{firstOption.memberCount}명</span>
              <span>{secondOption.memberCount}명</span>
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
                    📢 전체 유저 중&nbsp;
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
      {isVote && !isVoteStatisticsTabActive && (
        <OptionParticipantsContainer groupRoundResult={groupRoundResult} />
      )}
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
