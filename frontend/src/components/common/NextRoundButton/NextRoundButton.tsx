import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import useMoveNextRoundMutation from './NextRoundButton.hook';
import AlertModal from '../AlertModal/AlertModal';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';
import createRandomNextRoundMessage from '@/pages/RoundResultPage/createRandomNextRoundMessage';
import { memberInfoState } from '@/recoil/atom';

const NextRoundButton = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { mutate: moveNextRound } = useMoveNextRoundMutation(Number(roomId));
  const memberInfo = useRecoilValue(memberInfoState);
  const { show } = useModal();
  const returnFocusRef = useRef<HTMLButtonElement>(null);

  const randomRoundNextMessage = createRandomNextRoundMessage();
  const isLastRound = balanceContent?.currentRound === balanceContent?.totalRound;

  const showModal = () => {
    show(AlertModal, { message: randomRoundNextMessage, onConfirm: moveNextRound, returnFocusRef });
  };

  return (
    <div css={bottomButtonLayout}>
      {memberInfo.isMaster ? (
        <Button
          ref={returnFocusRef}
          style={{ width: '100%' }}
          text={isLastRound ? '결과 확인' : '다음'}
          onClick={isLastRound ? moveNextRound : showModal}
          disabled={!memberInfo.isMaster}
        />
      ) : (
        <Button
          style={{ width: '100%' }}
          text={'방장이 진행해 주세요'}
          onClick={isLastRound ? moveNextRound : showModal}
          disabled={!memberInfo.isMaster}
        />
      )}
    </div>
  );
};

export default NextRoundButton;
