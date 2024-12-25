import GameResult from './components/GameResult/GameResult';
import { useIsRoomInitial } from './hooks/useCheckRoomReset';

import Content from '@/components/layout/Content/Content';
import useGAPageTimeSpentGA from '@/lib/googleAnalytics/hooks/usePageTimeSpentGA';

const GameResultPage = () => {
  useIsRoomInitial();
  useGAPageTimeSpentGA('게임 결과 페이지');

  return (
    <Content>
      <GameResult />
    </Content>
  );
};

export default GameResultPage;
