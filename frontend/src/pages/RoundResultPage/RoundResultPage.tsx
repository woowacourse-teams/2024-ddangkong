import NextRoundButton from '@/components/common/NextRoundButton/NextRoundButton';
import Content from '@/components/layout/Content/Content';
import RoundResultTab from '@/components/RoundResultTab/RoundResultTab';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const RoundResultPage = () => {
  return (
    <Content>
      <TopicContainer />
      <RoundResultTab />
      <NextRoundButton />
    </Content>
  );
};

export default RoundResultPage;
