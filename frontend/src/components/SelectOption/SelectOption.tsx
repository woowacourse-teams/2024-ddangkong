import { layout } from './SelectOption.styled';

import { Question } from '@/types/question';

interface SelectOptionProps {
  option: Question['firstOption'];
  selectedId: number;
  handleSelectOption: (selectedId: number) => void;
}

const SelectOption = ({ option, selectedId, handleSelectOption }: SelectOptionProps) => {
  return (
    <button
      css={layout(Boolean(selectedId === option.optionId))}
      onClick={() => handleSelectOption(option.optionId)}
    >
      {option.content}
    </button>
  );
};

export default SelectOption;
