import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import { memberInfoState } from '@/recoil/atom';
import { Theme } from '@/styles/Theme';

const NextRoundButton = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery();
  const { mutate: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const memberInfo = useRecoilValue(memberInfoState);
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  return (
    <div css={bottomButtonLayout}>
      {memberInfo.isMaster ? (
        <Button
          style={{ width: '100%' }}
          text={isLastRound ? '결과 확인' : '다음'}
          onClick={moveNextRound}
          disabled={!memberInfo.isMaster}
        />
      ) : (
        <Button
          style={{ width: '100%', backgroundColor: Theme.color.gray }}
          text={'방장이 진행해 주세요'}
          onClick={moveNextRound}
          disabled={!memberInfo.isMaster}
        />
      )}
    </div>
  );
};

export default NextRoundButton;
