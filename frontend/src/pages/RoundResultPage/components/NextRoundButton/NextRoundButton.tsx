import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import { createRandomNextRoundMessage, getNextRoundButtonText } from './NextRoundButton.utils';

import AlertModal from '@/components/AlertModal/AlertModal';
import Button from '@/components/common/Button/Button';
import { bottomButtonLayout } from '@/components/common/Button/Button.styled';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useIsMaster from '@/hooks/useIsMaster';
import useModal from '@/hooks/useModal';

const NextRoundButton = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { mutate: moveNextRound, isPending, isSuccess } = useMoveNextRoundMutation(Number(roomId));
  const isMaster = useIsMaster();
  const { showModal } = useModal();

  const returnFocusRef = useRef<HTMLButtonElement>(null);

  const randomRoundNextMessage = createRandomNextRoundMessage();
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  const handleNextRoundModal = () => {
    showModal(AlertModal, {
      message: randomRoundNextMessage,
      onConfirm: moveNextRound,
      returnFocusRef,
    });
  };

  return (
    <div css={bottomButtonLayout}>
      <Button
        ref={returnFocusRef}
        style={{ width: '100%' }}
        text={getNextRoundButtonText(isMaster, isLastRound, isPending || isSuccess)}
        onClick={isLastRound ? moveNextRound : handleNextRoundModal}
        disabled={!isMaster || isPending || isSuccess}
      />
    </div>
  );
};

export default NextRoundButton;
