import NextRoundButton from '@/components/common/NextRoundButton/NextRoundButton';
import Content from '@/components/layout/Content/Content';
import RoundVoteContainer from '@/components/RoundVoteContainer/RoundVoteContainer';

const RoundResultPage = () => {
  return (
    <Content>
      <RoundVoteContainer />
      <NextRoundButton />
    </Content>
  );
};

export default RoundResultPage;
