import NextRoundButton from '@/components/common/NextRoundButton/NextRoundButton';
import Content from '@/components/layout/Content/Content';
import RoundVoteContainer from '@/components/RoundVoteContainer/RoundVoteContainer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const RoundResultPage = () => {
  return (
    <Content>
      <TopicContainer />
      <RoundVoteContainer />
      <NextRoundButton />
    </Content>
  );
};

export default RoundResultPage;
