import NextRoundButton from './components/NextRoundButton/NextRoundButton';
import RoundVoteContainer from './components/RoundVoteContainer/RoundVoteContainer';

import Content from '@/components/layout/Content/Content';
import useGAPageTimeSpent from '@/lib/googleAnalytics/hooks/useGAPageTimeSpent';

const RoundResultPage = () => {
  useGAPageTimeSpent('라운드 결과 페이지');

  return (
    <Content>
      <RoundVoteContainer />
      <NextRoundButton />
    </Content>
  );
};

export default RoundResultPage;
