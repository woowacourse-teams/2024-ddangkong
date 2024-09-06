import { useState } from 'react';

const useSelectOption = () => {
  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    isCompleted: false,
  });

  const handleClickOption = (selectedId: number) => {
    setSelectedOption((prev) => ({ ...prev, id: selectedId }));
  };

  const completeSelection = () => {
    setSelectedOption((prev) => ({ ...prev, isCompleted: true }));
  };

  return { selectedOption, handleClickOption, completeSelection };
};

export default useSelectOption;
