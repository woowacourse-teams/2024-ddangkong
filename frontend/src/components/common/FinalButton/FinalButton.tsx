import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import getFinalButtonText from './FinalButton.utils';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import { useResetRoomMutation } from '@/components/GameResult/GameResult.hook';
import { memberInfoState } from '@/recoil/atom';

const FinalButton = () => {
  const { roomId } = useParams();
  const { mutate: resetRoom, isPending } = useResetRoomMutation(Number(roomId));
  const memberInfo = useRecoilValue(memberInfoState);

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        text={getFinalButtonText(memberInfo.isMaster, isPending)}
        onClick={resetRoom}
        disabled={!memberInfo.isMaster || isPending}
      />
    </div>
  );
};

export default FinalButton;
