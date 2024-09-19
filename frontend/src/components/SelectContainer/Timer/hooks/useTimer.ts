import { useEffect, useRef, useState } from 'react';

import { calculateUnitRatio, convertMsecToSecond } from '../Timer.util';

import { POLLING_DELAY } from '@/constants/config';

const INITIAL_WIDTH = 100;
const ALMOST_FINISH_SECOND = 5;

interface UseTimerProps {
  timeLimit: number;
  isSelectedOption: boolean;
  isVoted: boolean;
  vote: () => void;
}

const useTimer = ({ timeLimit, isSelectedOption, isVoted, vote }: UseTimerProps) => {
  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));
  const [barWidthPercent, setBarWidthPercent] = useState(INITIAL_WIDTH);

  const isVoteTimeout = leftRoundTime <= 0;
  const isAlmostFinished = leftRoundTime <= ALMOST_FINISH_SECOND;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isVoteTimeout) {
      if (isSelectedOption && !isVoted) {
        vote();
      }

      clearInterval(timeout.current);
    }
  }, [isVoteTimeout, isSelectedOption, isVoted, vote]);

  useEffect(() => {
    const timeLimitPerSecond = convertMsecToSecond(timeLimit);
    const DECREASE_PERCENT = calculateUnitRatio(INITIAL_WIDTH, timeLimitPerSecond);
    setLeftRoundTime(timeLimitPerSecond);

    timeout.current = setInterval(() => {
      setLeftRoundTime((prev) => prev - 1);
      setBarWidthPercent((prevWidth) => (prevWidth > 0 ? prevWidth - DECREASE_PERCENT : 0));
    }, POLLING_DELAY);

    return () => {
      clearInterval(timeout.current);
    };
  }, [timeLimit]);

  return { leftRoundTime, barWidthPercent, isAlmostFinished };
};

export default useTimer;
