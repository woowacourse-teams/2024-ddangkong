import { NextRoundButton, RoundVoteContainer } from './components';

import Content from '@/components/layout/Content/Content';
import useGAPageTimeSpentGA from '@/lib/googleAnalytics/hooks/usePageTimeSpentGA';

const RoundResultPage = () => {
  useGAPageTimeSpentGA('라운드 결과 페이지');

  return (
    <Content>
      <RoundVoteContainer />
      <NextRoundButton />
    </Content>
  );
};

export default RoundResultPage;
