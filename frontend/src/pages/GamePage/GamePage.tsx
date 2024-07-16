import Header from '@/components/layout/Header/Header';
import SelectContainer from '@/components/SelectContainer/SelectContainer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
  return (
    <>
      <Header title="밸런스 게임" />
      <TopicContainer category="연애" title="우정 vs 사랑" />
      <SelectContainer />
    </>
  );
};

export default GamePage;
