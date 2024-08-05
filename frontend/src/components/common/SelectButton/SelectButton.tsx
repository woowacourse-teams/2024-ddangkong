import useSelectCompleteMutation from './SelectButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface SelectButtonProps {
  selectedId: number;
}

const SelectButton = ({ selectedId }: SelectButtonProps) => {
  const { balanceContent } = useBalanceContentQuery();
  const { data, mutate: selectComplete } = useSelectCompleteMutation({
    selectedId,
    contentId: balanceContent?.contentId,
  });

  return (
    <div css={bottomButtonLayout}>
      <Button
        style={{ width: '100%' }}
        disabled={data || !selectedId}
        text={data ? '선택 완료' : '선택'}
        onClick={selectComplete}
      />
    </div>
  );
};

export default SelectButton;
