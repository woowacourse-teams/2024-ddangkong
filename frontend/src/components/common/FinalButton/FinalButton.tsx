import { useParams } from 'react-router-dom';

import getFinalButtonText from './FinalButton.utils';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import { useResetRoomMutation } from '@/components/GameResult/GameResult.hook';
import useGetUserInfo from '@/hooks/useGetUserInfo';

const FinalButton = () => {
  const { roomId } = useParams();
  const { mutate: resetRoom, isPending } = useResetRoomMutation(Number(roomId));
  const {
    member: { isMaster },
  } = useGetUserInfo();

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        text={getFinalButtonText(isMaster, isPending)}
        onClick={resetRoom}
        disabled={!isMaster || isPending}
      />
    </div>
  );
};

export default FinalButton;
