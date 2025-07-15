import PassMasterButton from './PassMasterButton/PassMasterButton';
import { userOptionsButtonWrapper } from './UserOptionsBottomSheet.styled';

import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { BottomSheetComponentProps } from '@/providers/BottomSheetProvider/BottomSheetProvider';

interface UserOptionsBottomSheetProps extends BottomSheetComponentProps {
  memberId: number;
  nickname: string;
}

const UserOptionsBottomSheet = ({
  isOpen,
  onClose,
  memberId,
  nickname,
}: UserOptionsBottomSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div css={userOptionsButtonWrapper}>
        <PassMasterButton memberId={memberId} nickname={nickname} />
      </div>
    </BottomSheet>
  );
};

export default UserOptionsBottomSheet;
