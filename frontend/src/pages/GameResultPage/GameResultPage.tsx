import GameResult from './components/GameResult/GameResult';
import { useIsRoomInitial } from './hooks/useCheckRoomReset';

import Content from '@/components/layout/Content/Content';
import useGAPageTimeSpent from '@/lib/googleAnalytics/hooks/useGAPageTimeSpent';

const GameResultPage = () => {
  useIsRoomInitial();
  useGAPageTimeSpent('게임 결과 페이지');

  return (
    <Content>
      <GameResult />
    </Content>
  );
};

export default GameResultPage;
