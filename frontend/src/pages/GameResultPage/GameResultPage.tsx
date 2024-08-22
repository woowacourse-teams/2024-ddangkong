import { useIsRoomInitial } from './hooks/useCheckRoomReset';

import GameResult from '@/components/GameResult/GameResult';
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
