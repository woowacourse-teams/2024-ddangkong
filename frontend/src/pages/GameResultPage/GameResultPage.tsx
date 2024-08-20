import { useCheckRoomReset } from './hooks/useCheckRoomReset';

import GameResult from '@/components/GameResult/GameResult';
import Content from '@/components/layout/Content/Content';

const GameResultPage = () => {
  useCheckRoomReset();

  return (
    <Content>
      <GameResult />
    </Content>
  );
};

export default GameResultPage;
