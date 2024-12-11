import { SelectOptionLayout } from './SelectOption.styled';

import { BalanceContent, SelectedOption } from '@/types/balanceContent';

interface SelectOptionProps {
  option: BalanceContent['firstOption'];
  selectedOption: SelectedOption;
  handleClickOption: (selectedId: number) => void;
}

const SelectOption = ({ option, selectedOption, handleClickOption }: SelectOptionProps) => {
  const { id: selectedId, isVoted } = selectedOption;

  return (
    <button
      role="radio"
      css={SelectOptionLayout(selectedId === option.optionId, isVoted)}
      onClick={() => handleClickOption(option.optionId)}
      disabled={isVoted}
      aria-checked={selectedId === option.optionId}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
