import { useState } from 'react';

import { SelectedOption } from '@/types/balanceContent';

const useSelectOption = () => {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>({
    id: 0,
    isVoted: false,
  });

  const handleClickOption = (selectedId: number) => {
    setSelectedOption((prev) => ({ ...prev, id: selectedId }));
  };

  const completeSelection = () => {
    setSelectedOption((prev) => ({ ...prev, isVoted: true }));
  };

  const cancelSelection = () => {
    setSelectedOption((prev) => ({ ...prev, isVoted: false }));
  };

  return { selectedOption, handleClickOption, completeSelection, cancelSelection };
};

export default useSelectOption;
