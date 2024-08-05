import { useNavigate } from 'react-router-dom';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const NextRoundButton = () => {
  const navigate = useNavigate();
  const { balanceContent } = useBalanceContentQuery();
  const { mutateAsync: moveNextRound } = useMoveNextRoundMutation();

  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  const goToGameResult = () => {
    navigate('/game/result');
  };

  const goToNextRound = async () => {
    await moveNextRound();
    navigate('/game');
  };

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        text={isLastRound ? '결과 확인' : '다음'}
        onClick={isLastRound ? goToGameResult : goToNextRound}
      />
    </div>
  );
};

export default NextRoundButton;
