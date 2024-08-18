import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { convertMsecToSecond } from './Timer.util';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const INITIAL_WIDTH = 100;
const DELAY = 1000;
const DEFAULT_TIME_LIMIT_MSEC = 10000;

const useRoundTimer = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const timeLimit = balanceContent?.timeLimit || DEFAULT_TIME_LIMIT_MSEC;

  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));
  const [barWidthPercent, setBarWidthPercent] = useState(INITIAL_WIDTH);
  const isAlmostFinished = leftRoundTime <= 5;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (leftRoundTime <= 0) {
      clearInterval(timeout.current);
    }
  }, [leftRoundTime]);

  useEffect(() => {
    if (!balanceContent) return;

    const DECREASE_RATE = INITIAL_WIDTH / convertMsecToSecond(timeLimit);
    setLeftRoundTime(convertMsecToSecond(timeLimit));

    timeout.current = setInterval(() => {
      setLeftRoundTime((prev) => prev - 1);
      setBarWidthPercent((prevWidth) => (prevWidth > 0 ? prevWidth - DECREASE_RATE : 0));
    }, DELAY);

    return () => {
      clearInterval(timeout.current);
    };
  }, [balanceContent, timeLimit]);

  return { leftRoundTime, barWidthPercent, isAlmostFinished };
};

export default useRoundTimer;
