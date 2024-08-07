import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatusQuery from '@/hooks/useMyGameStatusQuery';
import { memberInfoState } from '@/recoil/atom';
import { Theme } from '@/styles/Theme';

const NextRoundButton = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { balanceContent } = useBalanceContentQuery();
  const { mutateAsync: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const memberInfo = useRecoilValue(memberInfoState);
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  const fetchGameResult = () => {
    // TODO: 게임 결과 API 추후 연결
  };

  const fetchNextRound = async () => {
    await moveNextRound();
  };

  return (
    <div css={bottomButtonLayout}>
      {memberInfo.isMaster ? (
        <Button
          style={{ width: '100%' }}
          text={isLastRound ? '결과 확인' : '다음'}
          onClick={isLastRound ? fetchGameResult : fetchNextRound}
          disabled={!memberInfo.isMaster}
        />
      ) : (
        <Button
          style={{ width: '100%', backgroundColor: Theme.color.gray }}
          text={'방장이 진행해 주세요'}
          onClick={isLastRound ? fetchGameResult : fetchNextRound}
          disabled={!memberInfo.isMaster}
        />
      )}
    </div>
  );
};

export default NextRoundButton;
