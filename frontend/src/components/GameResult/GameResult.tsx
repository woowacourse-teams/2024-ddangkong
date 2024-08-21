import { useGameResultQuery } from './GameResult.hook';
import { gameResultTitle, gameResultLayout, rankListContainer } from './GameResult.styled';
import AlertModal from '../common/AlertModal/AlertModal';
import FinalButton from '../common/FinalButton/FinalButton';
import GameResultItem from '../GameResultItem/GameResultItem';

import useModal from '@/hooks/useModal';

const GameResult = () => {
  const { gameResult } = useGameResultQuery();
  const { isOpen, show, close } = useModal();

  return (
    <>
      <div css={gameResultLayout}>
        <h1 css={gameResultTitle}>게임 결과</h1>
        <ol css={rankListContainer}>
          {gameResult &&
            gameResult.map((item) => <GameResultItem key={item.rank} gameFinalResult={item} />)}
        </ol>
      </div>
      <FinalButton showModal={show} />
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        title="방 초기화 에러"
        message="방을 초기화하는데 실패했어요. 다시 시도해주세요"
      />
    </>
  );
};

export default GameResult;
