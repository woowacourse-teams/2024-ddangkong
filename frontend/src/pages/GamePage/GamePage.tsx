import SelectContainer from './components/SelectContainer/SelectContainer';

import Content from '@/components/layout/Content/Content';
import { GameHeader } from '@/components/layout/Header/Header';
import TopicContainer from '@/components/TopicContainer/TopicContainer';
import useGAPageTimeSpentGA from '@/lib/googleAnalytics/hooks/usePageTimeSpentGA';

const GamePage = () => {
  useGAPageTimeSpentGA('게임 페이지');

  return (
    <>
      <GameHeader />
      <Content>
        <TopicContainer />
        <SelectContainer />
      </Content>
    </>
  );
};

export default GamePage;
