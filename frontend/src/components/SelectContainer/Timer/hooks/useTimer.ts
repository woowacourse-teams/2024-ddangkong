import { useEffect, useRef, useState } from 'react';

import { convertMsecToSecond } from '../Timer.util';

import { POLLING_DELAY } from '@/constants/config';

const INITIAL_WIDTH = 100;
const ALMOST_FINISH_SECOND = 5;

interface UseTimerProps {
  timeLimit: number;
  isSelectedOption: boolean;
  vote: () => void;
}

const useTimer = ({ timeLimit, isSelectedOption, vote }: UseTimerProps) => {
  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));
  const [barWidthPercent, setBarWidthPercent] = useState(INITIAL_WIDTH);

  const isVoteTimeout = leftRoundTime <= 0;
  const isAlmostFinished = leftRoundTime <= ALMOST_FINISH_SECOND;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isVoteTimeout) {
      if (isSelectedOption) {
        vote();
      }
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

export default useTimer;