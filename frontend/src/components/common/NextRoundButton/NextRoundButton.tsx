import { useRecoilValue } from 'recoil';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import { memberInfoState } from '@/recoil/atom';

interface NextRoundButtonProps {
  handleModalOpen: () => void;
}

const NextRoundButton = ({ handleModalOpen }: NextRoundButtonProps) => {
  const { balanceContent } = useBalanceContentQuery();
  const memberInfo = useRecoilValue(memberInfoState);
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  return (
    <div css={bottomButtonLayout}>
      {memberInfo.isMaster ? (
        <Button
          style={{ width: '100%' }}
          text={isLastRound ? '결과 확인' : '다음'}
          onClick={handleModalOpen}
          disabled={!memberInfo.isMaster}
        />
      ) : (
        <Button
          style={{ width: '100%' }}
          text={'방장이 진행해 주세요'}
          onClick={handleModalOpen}
          disabled={!memberInfo.isMaster}
        />
      )}
    </div>
  );
};

export default NextRoundButton;
