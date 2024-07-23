import { useNavigate } from 'react-router-dom';

import { NicknameListWrapper } from './RoundResultPage.styled';

import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import NicknameList from '@/components/NicknameList/NicknameList';
import RoundVoteResult from '@/components/RoundVoteResult/RoundVoteResult';
import TopicContainer from '@/components/TopicContainer/TopicContainer';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const RoundResultPage = () => {
  const navigate = useNavigate();
  const { balanceContent } = useBalanceContentQuery();

  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  const goToGameResult = () => {
    navigate('/game/result');
  };

  const goToNextRound = () => {
    navigate('/game');
  };

  return (
    <Content>
      <TopicContainer />
      <RoundVoteResult />
      <div css={NicknameListWrapper}>
        <NicknameList />
      </div>
      <Button
        text={isLastRound ? '결과 확인' : '다음'}
        onClick={isLastRound ? goToGameResult : goToNextRound}
      />
    </Content>
  );
};

export default RoundResultPage;
