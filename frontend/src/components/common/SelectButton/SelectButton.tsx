import useCompleteSelectionMutation from './SelectButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

interface SelectButtonProps {
  contentId: number;
  selectedId: number;
  completeSelection: () => void;
  showModal: () => void;
}

const SelectButton = ({
  contentId,
  selectedId,
  completeSelection,
  showModal,
}: SelectButtonProps) => {
  const {
    data,
    isPending,
    mutate: completeSelectionMutate,
  } = useCompleteSelectionMutation({
    selectedId,
    contentId,
    completeSelection,
    showModal,
  });

  return (
    <div css={bottomButtonLayout}>
      <Button
        bottom
        disabled={data || !selectedId || isPending}
        text={data || isPending ? '선택 완료' : '선택'}
        onClick={completeSelectionMutate}
      />
    </div>
  );
};

export default SelectButton;
