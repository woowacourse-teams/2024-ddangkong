import SelectContainer from './components/SelectContainer/SelectContainer';

import Content from '@/components/layout/Content/Content';
import { GameHeader } from '@/components/layout/Header/Header';
import TopicContainer from '@/components/TopicContainer/TopicContainer';
import useGAPageTimeSpent from '@/lib/googleAnalytics/hooks/useGAPageTimeSpent';

const GamePage = () => {
  useGAPageTimeSpent('게임 페이지');

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
