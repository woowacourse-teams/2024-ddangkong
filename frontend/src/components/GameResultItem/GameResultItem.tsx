import {
  nickname,
  nicknameContainer,
  rankInfoContainer,
  rankItem,
  rankNumber,
  rankPercent,
} from './GameResultItem.styled';

import useCountAnimation from '@/hooks/useCountAnimation';
import { GameFinalResult } from '@/types/balanceContent';

interface GameResultItemProps {
  gameFinalResult: GameFinalResult;
}
const GameResultItem = ({ gameFinalResult }: GameResultItemProps) => {
  const animatedRankPercent = useCountAnimation({
    target: gameFinalResult.percent,
    duration: 3000,
  });

  return (
    <div css={rankItem}>
      <div css={rankInfoContainer}>
        <span css={rankNumber}>{gameFinalResult.rank}</span>
        <div css={nicknameContainer(animatedRankPercent)}>
          <span>🥜</span>
          <span css={nickname}>{gameFinalResult.name}</span>
        </div>
      </div>
      <span css={rankPercent}>{animatedRankPercent}%</span>
    </div>
  );
};

export default GameResultItem;
