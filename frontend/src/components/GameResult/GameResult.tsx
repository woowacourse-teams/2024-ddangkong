import { useNavigate } from 'react-router-dom';

import { useGameResultQuery } from './GameResult.hook';
import {
  gameResultTitle,
  gameResultLayout,
  rankListContainer,
  rankItem,
  rankNumber,
  rankInfoContainer,
  nicknameContainer,
  rankPercent,
  nickname,
} from './GameResult.styled';

import Button from '@/components/common/Button/Button';
import useCountAnimation from '@/hooks/useCountAnimation';
import { GameResult } from '@/types/balanceContent';

const GameResult = () => {
  const navigate = useNavigate();
  const { gameResult } = useGameResultQuery();

  const goToHome = () => {
    navigate('/ready');
  };

  return (
    <>
      <div css={gameResultLayout}>
        <h1 css={gameResultTitle}>게임 결과</h1>
        <div css={rankListContainer}>
          {gameResult?.map((item) => <GameResultItem key={item.rank} gameResult={item} />)}
        </div>
      </div>
      <Button text="확인" onClick={goToHome} />
    </>
  );
};

const GameResultItem = ({ gameResult }: { gameResult: GameResult }) => {
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

export default GameResult;
