import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

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
        text={memberInfo.isMaster ? '확인' : '방장이 진행해 주세요'}
        onClick={resetRoom}
        disabled={!memberInfo.isMaster || isPending}
      />
    </div>
  );
};

export default FinalButton;
