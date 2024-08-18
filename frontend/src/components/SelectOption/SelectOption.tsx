import { SelectOptionLayout } from './SelectOption.styled';

import { BalanceContent } from '@/types/balanceContent';

interface SelectedOption {
  id: number;
  isCompleted: boolean;
}

interface SelectOptionProps {
  option: BalanceContent['firstOption'];
  selectedOption: SelectedOption;
  handleSelectOption: (selectedId: number) => void;
}

const SelectOption = ({ option, selectedOption, handleSelectOption }: SelectOptionProps) => {
  const { id: selectedId, isCompleted } = selectedOption;

  return (
    <button
      css={SelectOptionLayout(Boolean(selectedId === option.optionId), isCompleted)}
      onClick={() => handleSelectOption(option.optionId)}
      disabled={isCompleted}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
