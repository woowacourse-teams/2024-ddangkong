import Button from '@/components/common/Button/Button';
import Header from '@/components/layout/Header/Header';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
  return (
    <>
      <Header title="밸런스 게임" />
      <TopicContainer category="연애" title="우정 vs 사랑" />
      <Button text="선택" active={true} onClick={() => console.log('클릭')} />
    </>
  );
};

export default GamePage;
