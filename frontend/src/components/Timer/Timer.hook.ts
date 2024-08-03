import { useEffect, useRef, useState } from 'react';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const INITIAL_WIDTH = 100;
const DELAY = 1000;

export const useRoundTimer = () => {
  const { balanceContent } = useBalanceContentQuery();
  const timeLimit = balanceContent?.timeLimit || 30;

  const [timerCount, setTimerCount] = useState(timeLimit);
  const [barWidth, setBarWidth] = useState(INITIAL_WIDTH);
  const isAlmostFinished = timerCount <= 5;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timerCount <= 0) {
      clearInterval(timeout.current);
    }
  }, [timerCount]);

  useEffect(() => {
    if (!balanceContent) return;

    const DECREASE_RATE = INITIAL_WIDTH / timeLimit;
    setTimerCount(timeLimit);

    timeout.current = setInterval(() => {
      setTimerCount((prev) => prev - 1);
      setBarWidth((prevWidth) => (prevWidth > 0 ? prevWidth - DECREASE_RATE : 0));
    }, DELAY);

    return () => {
      clearInterval(timeout.current);
    };
  }, [balanceContent, timeLimit]);

  return { timerCount, barWidth, isAlmostFinished };
};
