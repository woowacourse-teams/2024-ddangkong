import { useEffect, useRef, useState } from 'react';

import { convertMsecToSecond } from './Timer.util';

import { POLLING_DELAY } from '@/constants/config';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const INITIAL_WIDTH = 100;
const DEFAULT_TIME_LIMIT_MSEC = 10000;
const ALMOST_FINISH_SECOND = 5;

const useRoundTimer = (roomId: number) => {
  const { balanceContent } = useBalanceContentQuery(roomId);
  const timeLimit = balanceContent.timeLimit || DEFAULT_TIME_LIMIT_MSEC;

  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));
  const [barWidthPercent, setBarWidthPercent] = useState(INITIAL_WIDTH);

  const isVoteTimeout = leftRoundTime <= 0;
  const isAlmostFinished = leftRoundTime <= ALMOST_FINISH_SECOND;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isVoteTimeout) {
      clearInterval(timeout.current);
    }
  }, [isVoteTimeout]);

  useEffect(() => {
    const DECREASE_RATE = INITIAL_WIDTH / convertMsecToSecond(timeLimit);
    setLeftRoundTime(convertMsecToSecond(timeLimit));

    timeout.current = setInterval(() => {
      setLeftRoundTime((prev) => prev - 1);
      setBarWidthPercent((prevWidth) => (prevWidth > 0 ? prevWidth - DECREASE_RATE : 0));
    }, POLLING_DELAY);

    return () => {
      clearInterval(timeout.current);
    };
  }, [timeLimit]);

  return { leftRoundTime, barWidthPercent, isAlmostFinished };
};

export default useRoundTimer;
