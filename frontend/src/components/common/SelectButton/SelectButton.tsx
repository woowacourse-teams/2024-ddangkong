import useCompleteSelectionMutation from './SelectButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface SelectButtonProps {
  selectedId: number;
  completeSelection: () => void;
}

const SelectButton = ({ selectedId, completeSelection }: SelectButtonProps) => {
  const { balanceContent } = useBalanceContentQuery();
  const {
    data,
    isPending,
    mutate: completeSelectionMutate,
  } = useCompleteSelectionMutation({
    selectedId,
    contentId: balanceContent?.contentId,
    completeSelection,
  });

  return (
    <div css={bottomButtonLayout}>
      <Button
        bottom={true}
        disabled={data || !selectedId || isPending}
        text={data || isPending ? '선택 완료' : '선택'}
        onClick={completeSelectionMutate}
      />
    </div>
  );
};

export default SelectButton;
