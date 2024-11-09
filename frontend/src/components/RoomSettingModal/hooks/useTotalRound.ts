import { useEffect, useState } from 'react';

const useTotalRound = (selectedTotalRound?: number) => {
  const [totalRound, setTotalRound] = useState(selectedTotalRound);

  const handleClickRound = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTotalRound(Number(target.textContent));
  };

  useEffect(() => {
    setTotalRound(selectedTotalRound);
  }, [selectedTotalRound]);

  return { totalRound, handleClickRound };
};

export default useTotalRound;
