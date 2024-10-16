import Content from '@/components/layout/Content/Content';
import { GameHeader } from '@/components/layout/Header/Header';
import SelectContainer from '@/components/SelectContainer/SelectContainer';
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
