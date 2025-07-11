import PassMasterButton from './PassMasterButton/PassMasterButton';

import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { BottomSheetComponentProps } from '@/contexts/BottomSheetContext';
import { Member } from '@/types/room';

interface UserOptionsBottomSheetProps extends BottomSheetComponentProps {
  member: Member;
}

const UserOptionsBottomSheet = ({ isOpen, onClose, member }: UserOptionsBottomSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <PassMasterButton member={member} />
    </BottomSheet>
  );
};

export default UserOptionsBottomSheet;
