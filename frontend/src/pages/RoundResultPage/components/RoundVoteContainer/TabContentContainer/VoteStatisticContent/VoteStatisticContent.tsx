import {
  emphasizeText,
  optionContainer,
  memberCountWrapper,
  roundVoteResultContainer,
  secondOptionName,
  totalResultInfoContainer,
  totalResultInfoText,
} from './VoteStatisticContent.styled';
import StatisticBar from '../StatisticBar/StatisticBar';
import { getDominantVoteData } from '../TabContentContainer.util';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import { Group, Total } from '@/types/roundVoteResult';

interface VoteStatisticContentProps {
  groupRoundResult: Group;
  totalResult: Total;
}

const VoteStatisticContent = ({ groupRoundResult, totalResult }: VoteStatisticContentProps) => {
  const dominantVoteData = getDominantVoteData(totalResult);

  const { firstOption, secondOption } = groupRoundResult;

  const screenReaderFirstOption = `${firstOption.name} ${firstOption.percent}%. ${firstOption.memberCount}명 선택.`;
  const screenReaderSecondOption = `${secondOption.name} ${secondOption.percent}%. ${secondOption.memberCount}명 선택`;
  const screenReaderDominantVote = `📢 전체 유저 중 ${dominantVoteData?.dominantPercent}%는. ${dominantVoteData?.dominantName}를 선택했어요`;

  return (
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
        <div css={memberCountWrapper}>
          <span>{firstOption.memberCount}명</span>
          <span>{secondOption.memberCount}명</span>
        </div>
      </div>
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
    </>
  );
};

export default VoteStatisticContent;
