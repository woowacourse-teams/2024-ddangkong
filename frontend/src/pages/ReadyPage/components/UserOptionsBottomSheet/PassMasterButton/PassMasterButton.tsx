import usePassMaster from './hooks/usePassMaster';

import { Button } from '@/components/common';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { Member } from '@/types/room';

interface PassMasterButtonProps {
  member: Omit<Member, 'isMaster'>;
}

const PassMasterButton = ({ member }: PassMasterButtonProps) => {
  const { handlePassMaster } = usePassMaster(member.memberId);
  const { closeBottomSheet } = useBottomSheet();

  const handleClick = () => {
    handlePassMaster();
    closeBottomSheet();
  };

  return (
    <Button
      text={`${member.nickname}님에게 방장 넘기기`}
      onClick={handleClick}
      style={{ width: '100%', fontSize: 'medium' }}
      radius="medium"
    />
  );
};

export default PassMasterButton;
