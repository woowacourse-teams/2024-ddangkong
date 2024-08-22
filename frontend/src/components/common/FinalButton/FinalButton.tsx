import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import { useResetRoomMutation } from '@/components/GameResult/GameResult.hook';
import { memberInfoState } from '@/recoil/atom';

interface FinalButtonProps {
  showModal: () => void;
}

const FinalButton = ({ showModal }: FinalButtonProps) => {
  const { roomId } = useParams();
  const { mutate: resetRoom } = useResetRoomMutation(Number(roomId), showModal);
  const memberInfo = useRecoilValue(memberInfoState);

  return (
    <div css={bottomButtonLayout}>
      {memberInfo.isMaster ? (
        <Button
          style={{ width: '100%' }}
          text="확인"
          onClick={resetRoom}
          disabled={!memberInfo.isMaster}
        />
      ) : (
        <Button
          style={{ width: '100%' }}
          text="방장이 진행해 주세요"
          onClick={resetRoom}
          disabled={!memberInfo.isMaster}
        />
      )}
    </div>
  );
};

export default FinalButton;
