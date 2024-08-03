import { useSelectCompleteMutation } from './SelectButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface SelectButtonProps {
  isDisabled: boolean;
  selectedId: number;
}

const SelectButton = ({ isDisabled, selectedId }: SelectButtonProps) => {
  const { balanceContent } = useBalanceContentQuery();
  const { mutate: selectComplete } = useSelectCompleteMutation({
    selectedId,
    contentId: balanceContent?.contentId,
  });

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        disabled={isDisabled}
        text="선택"
        onClick={selectComplete}
      />
    </div>
  );
};

export default SelectButton;
