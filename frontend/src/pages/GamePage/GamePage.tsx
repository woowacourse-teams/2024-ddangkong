import SelectContainer from './SelectContainer/SelectContainer';

import Content from '@/components/layout/Content/Content';
import { GameHeader } from '@/components/layout/Header/Header';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
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
