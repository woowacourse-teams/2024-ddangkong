import { useEffect, useState } from 'react';

const useTimeLimitPerRound = (selectedTimeLimit?: number) => {
  const [timeLimitPerRound, setTimeLimitPerRound] = useState(selectedTimeLimit);

  const handleClickTimeLimit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTimeLimitPerRound(Number(target.value));
  };

  useEffect(() => {
    setTimeLimitPerRound(selectedTimeLimit);
  }, [selectedTimeLimit]);

  return { timeLimitPerRound, handleClickTimeLimit };
};

export default useTimeLimitPerRound;
