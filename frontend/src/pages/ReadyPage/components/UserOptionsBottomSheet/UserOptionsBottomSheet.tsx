import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { BottomSheetComponentProps } from '@/contexts/BottomSheetContext';
import { Member } from '@/types/room';

interface UserOptionsBottomSheetProps extends BottomSheetComponentProps {
  member: Member;
}

const UserOptionsBottomSheet = ({ isOpen, onClose, member }: UserOptionsBottomSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <button>{member.nickname}님에게 방장 넘기기</button>
    </BottomSheet>
  );
};

export default UserOptionsBottomSheet;
