import { SelectOptionLayout } from './SelectOption.styled';

import { BalanceContent } from '@/types/balanceContent';

interface SelectedOption {
  id: number;
  isCompleted: boolean;
}

interface SelectOptionProps {
  option: BalanceContent['firstOption'];
  selectedOption: SelectedOption;
  handleClickOption: (selectedId: number) => void;
}

const SelectOption = ({ option, selectedOption, handleClickOption }: SelectOptionProps) => {
  const { id: selectedId, isCompleted } = selectedOption;

  return (
    <button
      css={SelectOptionLayout(Boolean(selectedId === option.optionId), isCompleted)}
      onClick={() => handleClickOption(option.optionId)}
      disabled={isCompleted}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
