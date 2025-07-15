import usePassMaster from './hooks/usePassMaster';

import { Button } from '@/components/common';
import { useBottomSheet } from '@/hooks/useBottomSheet';

interface PassMasterButtonProps {
  memberId: number;
  nickname: string;
}

const PassMasterButton = ({ nickname, memberId }: PassMasterButtonProps) => {
  const { mutate: passMaster } = usePassMaster(memberId);
  const { closeBottomSheet } = useBottomSheet();

  const handleClick = () => {
    passMaster();
    closeBottomSheet();
  };

  return (
    <Button
      text={`${nickname}님에게 방장 넘기기`}
      onClick={handleClick}
      style={{ width: '100%', fontSize: 'medium' }}
      radius="medium"
    />
  );
};

export default PassMasterButton;
