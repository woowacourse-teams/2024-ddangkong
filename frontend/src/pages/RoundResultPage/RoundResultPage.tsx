import { NextRoundButton, RoundVoteContainer } from './components';

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
