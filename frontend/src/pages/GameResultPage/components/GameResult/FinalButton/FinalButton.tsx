import { useParams } from 'react-router-dom';

import getFinalButtonText from './FinalButton.utils';
import useResetRoomMutation from './hooks/useResetRoomMutation';

import Button from '@/components/common/Button/Button';
import { bottomButtonLayout } from '@/components/common/Button/Button.styled';
import useIsMaster from '@/hooks/useIsMaster';

const FinalButton = () => {
  const { roomId } = useParams();
  const { mutate: resetRoom, isPending } = useResetRoomMutation(Number(roomId));
  const isMaster = useIsMaster();

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
