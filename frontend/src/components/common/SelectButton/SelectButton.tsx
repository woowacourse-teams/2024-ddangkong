import { useParams } from 'react-router-dom';

import useSelectCompleteMutation from './SelectButton.hook';
import Button from '../Button/Button';
import { bottomButtonLayout } from '../Button/Button.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface SelectButtonProps {
  selectedId: number;
  handleClickSelected: () => void;
}

const SelectButton = ({ selectedId, handleClickSelected }: SelectButtonProps) => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { data, mutate: selectComplete } = useSelectCompleteMutation({
    selectedId,
    contentId: balanceContent?.contentId,
  });

  const handleClickSelectComplete = () => {
    selectComplete();
    handleClickSelected();
  };

  return (
    <div css={bottomButtonLayout}>
      <Button
        bottom={true}
        disabled={data || !selectedId}
        text={data ? '선택 완료' : '선택'}
        onClick={handleClickSelectComplete}
      />
    </div>
  );
};

export default SelectButton;
