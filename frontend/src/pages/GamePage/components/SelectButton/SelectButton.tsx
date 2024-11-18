import useCompleteSelectionMutation from './SelectButton.hook';

import Button from '@/components/common/Button/Button';
import { bottomButtonLayout } from '@/components/common/Button/Button.styled';
import { SelectedOption } from '@/types/balanceContent';

interface SelectButtonProps {
  contentId: number;
  selectedOption: SelectedOption;
  completeSelection: () => void;
  cancelSelection: () => void;
}

const SelectButton = ({
  contentId,
  selectedOption,
  completeSelection,
  cancelSelection,
}: SelectButtonProps) => {
  const { id: selectedId, isVoted } = selectedOption;

  const { isSuccess, isPending, vote } = useCompleteSelectionMutation({
    selectedId,
    contentId,
    completeSelection,
    cancelSelection,
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
