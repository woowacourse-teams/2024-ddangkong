import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import { memberInfoState } from '@/recoil/atom';

interface NextRoundButtonProps {
  showModal: () => void;
}

const NextRoundButton = ({ showModal }: NextRoundButtonProps) => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const memberInfo = useRecoilValue(memberInfoState);
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  return (
    <div css={bottomButtonLayout}>
      {memberInfo.isMaster ? (
        <Button
          style={{ width: '100%' }}
          text={isLastRound ? '결과 확인' : '다음'}
          onClick={showModal}
          disabled={!memberInfo.isMaster}
        />
      ) : (
        <Button
          style={{ width: '100%' }}
          text={'방장이 진행해 주세요'}
          onClick={showModal}
          disabled={!memberInfo.isMaster}
        />
      )}
    </div>
  );
};

export default NextRoundButton;
