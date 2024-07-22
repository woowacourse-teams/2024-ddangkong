import { layout } from './SelectOption.styled';

import { BalanceContent } from '@/types/balanceContent';

interface SelectOptionProps {
  option: BalanceContent['firstOption'];
  selectedId: number;
  handleSelectOption: (selectedId: number) => void;
}

const SelectOption = ({ option, selectedId, handleSelectOption }: SelectOptionProps) => {
  return (
    <button
      css={layout(Boolean(selectedId === option.optionId))}
      onClick={() => handleSelectOption(option.optionId)}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
