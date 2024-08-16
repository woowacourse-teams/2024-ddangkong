import { useState } from 'react';

export const useDropdown = () => {
  const [category, setCategory] = useState('연애');

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategory = target.value;

    if (!clickedCategory) return;

    setCategory(clickedCategory);
  };

  return { category, handleClickOption };
};

export const useTotalRound = () => {
  const [totalRound, setTotalRound] = useState(5);

  const handleClickRound = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTotalRound(Number(target.textContent));
  };

  return { totalRound, handleClickRound };
};

export const useTimerPerRound = () => {
  const [timerPerRound, setTimerPerRound] = useState(10);

  const handleClickTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTimerPerRound(Number(target.value));
  };

  return { timerPerRound, handleClickTimer };
};
