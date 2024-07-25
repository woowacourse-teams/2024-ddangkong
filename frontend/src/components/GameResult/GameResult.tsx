import { useGameResultQuery } from './GameResult.hook';
import { gameResultTitle, gameResultLayout, rankListContainer } from './GameResult.styled';
import FinalButton from '../common/FinalButton/FinalButton';
import GameResultItem from '../GameResultItem/GameResultItem';

import { GameResult } from '@/types/balanceContent';

const GameResult = () => {
  const { gameResult } = useGameResultQuery();

  return (
    <>
      <div css={gameResultLayout}>
        <h1 css={gameResultTitle}>게임 결과</h1>
        <div css={rankListContainer}>
          {gameResult &&
            gameResult.map((item) => <GameResultItem key={item.rank} gameResult={item} />)}
        </div>
      </div>
      <FinalButton />
    </>
  );
};

export default GameResult;
