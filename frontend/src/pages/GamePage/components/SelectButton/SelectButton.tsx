import useCompleteSelectionMutation from './SelectButton.hook';

import Button from '@/components/common/Button/Button';
import { bottomButtonLayout } from '@/components/common/Button/Button.styled';

interface SelectButtonProps {
  contentId: number;
  selectedId: number;
  isVoted: boolean;
  completeSelection: () => void;
}

const SelectButton = ({ contentId, selectedId, isVoted, completeSelection }: SelectButtonProps) => {
  const { isSuccess, isPending, vote } = useCompleteSelectionMutation({
    selectedId,
    contentId,
    completeSelection,
  });

  return (
    <div css={bottomButtonLayout}>
      <Button
        bottom
        disabled={!selectedId || isVoted || isSuccess || isPending}
        text={isSuccess || isPending ? '선택 완료' : '선택'}
        onClick={vote}
      />
    </div>
  );
};

export default SelectButton;
