import PassMasterButton from './PassMasterButton/PassMasterButton';
import { userOptionsButtonWrapper } from './UserOptionsBottomSheet.styled';

import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { BottomSheetComponentProps } from '@/contexts/BottomSheetContext';
import { Member } from '@/types/room';

interface UserOptionsBottomSheetProps extends BottomSheetComponentProps {
  member: Member;
}

const UserOptionsBottomSheet = ({ isOpen, onClose, member }: UserOptionsBottomSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div css={userOptionsButtonWrapper}>
        <PassMasterButton member={member} />
      </div>
    </BottomSheet>
  );
};

export default UserOptionsBottomSheet;
