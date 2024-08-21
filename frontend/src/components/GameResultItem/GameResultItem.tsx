import {
  nickname,
  nicknameContainer,
  rankInfoContainer,
  rankItem,
  rankNumber,
  rankPercent,
} from './GameResultItem.styled';

import useCountAnimation from '@/hooks/useCountAnimation';
import { MemberMatchingInfo } from '@/types/balanceContent';

interface GameResultItemProps {
  memberMatchingInfo: MemberMatchingInfo;
}

const GameResultItem = ({ memberMatchingInfo }: GameResultItemProps) => {
  const animatedRankPercent = useCountAnimation({
    target: memberMatchingInfo.matchingPercent,
    duration: 3000,
  });

  return (
    <li css={rankItem}>
      <div css={rankInfoContainer}>
        <span css={rankNumber}>{memberMatchingInfo.rank}</span>
        <div css={nicknameContainer(animatedRankPercent)}>
          <span>🥜</span>
          <span css={nickname}>{memberMatchingInfo.nickname}</span>
        </div>
      </div>
      <span css={rankPercent}>{animatedRankPercent}%</span>
    </li>
  );
};

export default GameResultItem;
