import useCompleteSelectionMutation from './SelectButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

interface SelectButtonProps {
  contentId: number;
  selectedId: number;
  completeSelection: () => void;
}

const SelectButton = ({ contentId, selectedId, completeSelection }: SelectButtonProps) => {
  const {
    data,
    isPending,
    mutate: vote,
  } = useCompleteSelectionMutation({
    selectedId,
    contentId,
    completeSelection,
  });
  return (
    <div css={bottomButtonLayout}>
      <Button
        bottom
        disabled={data || !selectedId || isPending}
        text={data || isPending ? '선택 완료' : '선택'}
        onClick={vote}
      />
    </div>
  );
};

export default SelectButton;
