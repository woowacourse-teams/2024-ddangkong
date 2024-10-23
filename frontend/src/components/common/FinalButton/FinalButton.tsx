import { useParams } from 'react-router-dom';

import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import { useResetRoomMutation } from '@/components/GameResult/GameResult.hook';
import useGetmember from '@/hooks/useGetmember';

const FinalButton = () => {
  const { roomId } = useParams();
  const { mutate: resetRoom } = useResetRoomMutation(Number(roomId));
  const {
    member: { isMaster },
  } = useGetmember();

  return (
    <div css={bottomButtonLayout}>
      {isMaster ? (
        <Button style={{ width: '100%' }} text="확인" onClick={resetRoom} disabled={!isMaster} />
      ) : (
        <Button
          style={{ width: '100%' }}
          text="방장이 진행해 주세요"
          onClick={resetRoom}
          disabled={!isMaster}
        />
      )}
    </div>
  );
};

export default FinalButton;
