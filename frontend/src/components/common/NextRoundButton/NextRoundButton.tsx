import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import { memberInfoState } from '@/recoil/atom';

const NextRoundButton = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { balanceContent } = useBalanceContentQuery();
  const { mutateAsync: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const memberInfo = useRecoilValue(memberInfoState);

  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;
  const isButtonDisabled = !memberInfo.isMaster;

  const goToGameResult = () => {
    navigate(ROUTES.gameResult, { replace: true });
  };

  const goToNextRound = async () => {
    await moveNextRound();
    navigate(ROUTES.game(Number(roomId)), { replace: true });
  };

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        text={isLastRound ? '결과 확인' : '다음'}
        onClick={isLastRound ? goToGameResult : goToNextRound}
        disabled={isButtonDisabled}
      />
    </div>
  );
};

export default NextRoundButton;
