import {
  nickname,
  nicknameContainer,
  rankInfoContainer,
  rankItem,
  rankNumber,
  rankPercent,
} from './GameResultItem.styled';

import useCountAnimation from '@/hooks/useCountAnimation';
import { GameResult } from '@/types/balanceContent';

interface GameResultItemProps {
  gameResult: GameResult;
}
const GameResultItem = ({ gameResult }: GameResultItemProps) => {
  const animatedRankPercent = useCountAnimation({
    target: gameResult.percent,
    duration: 3000,
  });

  return (
    <div css={rankItem}>
      <div css={rankInfoContainer}>
        <span css={rankNumber}>{gameResult.rank}</span>
        <div css={nicknameContainer(animatedRankPercent)}>
          <span>🥜</span>
          <span css={nickname}>{gameResult.name}</span>
        </div>
      </div>
      <span css={rankPercent}>{animatedRankPercent}%</span>
    </div>
  );
};

export default GameResultItem;
