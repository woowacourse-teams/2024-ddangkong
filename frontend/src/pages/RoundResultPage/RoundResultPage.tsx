import NextRoundButton from './components/NextRoundButton/NextRoundButton';
import RoundVoteContainer from './components/RoundVoteContainer/RoundVoteContainer';

import Content from '@/components/layout/Content/Content';

const RoundResultPage = () => {
  return (
    <Content>
      <RoundVoteContainer />
      <NextRoundButton />
    </Content>
  );
};

export default RoundResultPage;
