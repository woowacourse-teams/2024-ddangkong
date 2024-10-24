import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import { createRandomNextRoundMessage, getNextRoundButtonText } from './NextRoundButton.utils';
import AlertModal from '../AlertModal/AlertModal';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import useModal from '@/hooks/useModal';

const NextRoundButton = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { mutate: moveNextRound, isPending, isSuccess } = useMoveNextRoundMutation(Number(roomId));
  const {
    member: { isMaster },
  } = useGetUserInfo();
  const { show } = useModal();

  const returnFocusRef = useRef<HTMLButtonElement>(null);

  const randomRoundNextMessage = createRandomNextRoundMessage();
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  const showModal = () => {
    show(AlertModal, { message: randomRoundNextMessage, onConfirm: moveNextRound, returnFocusRef });
  };

  return (
    <div css={bottomButtonLayout}>
      <Button
        ref={returnFocusRef}
        style={{ width: '100%' }}
        text={getNextRoundButtonText(isMaster, isLastRound, isPending || isSuccess)}
        onClick={isLastRound ? moveNextRound : showModal}
        disabled={!isMaster || isPending || isSuccess}
      />
    </div>
  );
};

export default NextRoundButton;
