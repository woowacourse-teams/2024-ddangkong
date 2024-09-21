import Content from '@/components/layout/Content/Content';
import { RoundHeader } from '@/components/layout/Header/Header';
import SelectContainer from '@/components/SelectContainer/SelectContainer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
  return (
    <>
      <RoundHeader />
      <Content>
        <TopicContainer />
        <SelectContainer />
      </Content>
    </>
  );
};

export default GamePage;
