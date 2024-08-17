import { useEffect, useState } from 'react';

const useTimerPerRound = (selectedTimer?: number) => {
  const [timerPerRound, setTimerPerRound] = useState(selectedTimer);

  const handleClickTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTimerPerRound(Number(target.value));
  };

  useEffect(() => {
    setTimerPerRound(selectedTimer);
  }, [selectedTimer]);

  return { timerPerRound, handleClickTimer };
};

export default useTimerPerRound;
