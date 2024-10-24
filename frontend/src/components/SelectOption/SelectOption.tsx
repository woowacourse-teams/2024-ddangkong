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
      role="radio"
      css={SelectOptionLayout(selectedId === option.optionId, isCompleted)}
      onClick={() => handleClickOption(option.optionId)}
      disabled={isCompleted}
      aria-checked={selectedId === option.optionId}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
