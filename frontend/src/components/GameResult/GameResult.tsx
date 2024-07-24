import { useNavigate } from 'react-router-dom';

import { useGameResultQuery } from './GameResult.hook';
import { gameResultTitle, gameResultLayout, rankListContainer } from './GameResult.styled';
import GameResultItem from '../GameResultItem/GameResultItem';

import Button from '@/components/common/Button/Button';
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
          {gameResult &&
            gameResult.map((item) => <GameResultItem key={item.rank} gameResult={item} />)}
        </div>
      </div>
      <Button text="확인" onClick={goToHome} />
    </>
  );
};

export default GameResult;
