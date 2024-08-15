import { SelectOptionLayout } from './SelectOption.styled';

import { BalanceContent } from '@/types/balanceContent';

interface SelectOptionProps {
  option: BalanceContent['firstOption'];
  selectedId: number;
  isSelected: boolean;
  handleSelectOption: (selectedId: number) => void;
}

const SelectOption = ({
  option,
  selectedId,
  isSelected,
  handleSelectOption,
}: SelectOptionProps) => {
  return (
    <button
      css={SelectOptionLayout(Boolean(selectedId === option.optionId), isSelected)}
      onClick={() => handleSelectOption(option.optionId)}
      disabled={isSelected}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
