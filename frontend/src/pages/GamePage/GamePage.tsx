import Content from '@/components/layout/Content/Content';
import SelectContainer from '@/components/SelectContainer/SelectContainer';
import Timer from '@/components/Timer/Timer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
  return (
    <>
      <Content>
        <TopicContainer />
        <Timer />
        <SelectContainer />
      </Content>
    </>
  );
};

export default GamePage;
