import GameResult from './GameResult/GameResult';
import { useIsRoomInitial } from './hooks/useCheckRoomReset';

import Content from '@/components/layout/Content/Content';

const GameResultPage = () => {
  useIsRoomInitial();

  return (
    <Content>
      <GameResult />
    </Content>
  );
};

export default GameResultPage;
