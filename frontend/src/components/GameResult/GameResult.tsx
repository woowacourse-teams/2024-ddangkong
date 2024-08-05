import useGameResultQuery from './GameResult.hook';
import { gameResultTitle, gameResultLayout, rankListContainer } from './GameResult.styled';
import FinalButton from '../common/FinalButton/FinalButton';
import GameResultItem from '../GameResultItem/GameResultItem';

const GameResult = () => {
  const { gameResult } = useGameResultQuery();

  return (
    <>
      <div css={gameResultLayout}>
        <h1 css={gameResultTitle}>게임 결과</h1>
        <ol css={rankListContainer}>
          {gameResult &&
            gameResult.map((item) => <GameResultItem key={item.rank} gameFinalResult={item} />)}
        </ol>
      </div>
      <FinalButton />
    </>
  );
};

export default GameResult;
