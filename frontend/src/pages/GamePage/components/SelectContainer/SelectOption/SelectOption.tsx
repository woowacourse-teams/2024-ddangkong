import { SelectOptionLayout } from './SelectOption.styled';

import { clickLeftOption, clickRightOption } from '@/lib/googleAnalytics/vote';
import { BalanceContent, SelectedOption } from '@/types/balanceContent';

interface SelectOptionProps {
  option: BalanceContent['firstOption'];
  selectedOption: SelectedOption;
  handleClickOption: (selectedId: number) => void;
  position: 'left' | 'right';
}

const SelectOption = ({
  option,
  selectedOption,
  handleClickOption,
  position,
}: SelectOptionProps) => {
  const { id: selectedId, isVoted } = selectedOption;

  const handleClick = () => {
    if (position === 'left') {
      clickLeftOption();
    } else if (position === 'right') {
      clickRightOption();
    }
    handleClickOption(option.optionId);
  };

  return (
    <button
      role="radio"
      css={SelectOptionLayout(selectedId === option.optionId, isVoted)}
      onClick={handleClick}
      disabled={isVoted}
      aria-checked={selectedId === option.optionId}
    >
      {option.name}
    </button>
  );
};

export default SelectOption;
