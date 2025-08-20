import SelectContainer from './components/SelectContainer/SelectContainer';

import { Content } from '@/components/layout';
import { GameHeader } from '@/components/layout/Header';
import useGAPageTimeSpentGA from '@/lib/googleAnalytics/hooks/usePageTimeSpentGA';

import { TopicContainer } from '@/components';

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
