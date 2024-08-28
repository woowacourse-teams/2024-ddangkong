import { useEffect, useRef, useState } from 'react';

import { convertMsecToSecond } from './Timer.util';

import { ONE_SECOND } from '@/constants/time';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const INITIAL_WIDTH = 100;
const DEFAULT_TIME_LIMIT_MSEC = 10000;
const ALMOST_FINISH_SECOND = 5;

const useRoundTimer = (roomId: number) => {
  const { balanceContent } = useBalanceContentQuery(roomId);
  const timeLimit = balanceContent.timeLimit || DEFAULT_TIME_LIMIT_MSEC;

  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));
  const [barWidthPercent, setBarWidthPercent] = useState(INITIAL_WIDTH);
  const isAlmostFinished = leftRoundTime <= ALMOST_FINISH_SECOND;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (leftRoundTime <= 0) {
      clearInterval(timeout.current);
    }
  }, [leftRoundTime]);

  useEffect(() => {
    const DECREASE_RATE = INITIAL_WIDTH / convertMsecToSecond(timeLimit);
    setLeftRoundTime(convertMsecToSecond(timeLimit));

    timeout.current = setInterval(() => {
      setLeftRoundTime((prev) => prev - 1);
      setBarWidthPercent((prevWidth) => (prevWidth > 0 ? prevWidth - DECREASE_RATE : 0));
    }, ONE_SECOND);

    return () => {
      clearInterval(timeout.current);
    };
  }, [balanceContent, timeLimit]);

  return { leftRoundTime, barWidthPercent, isAlmostFinished };
};

export default useRoundTimer;
