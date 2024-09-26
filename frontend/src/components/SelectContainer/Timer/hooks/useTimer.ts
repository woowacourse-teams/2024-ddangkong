import { useEffect, useRef, useState } from 'react';

import { calculateUnitRate, convertMsecToSecond } from '../Timer.util';

import { POLLING_DELAY } from '@/constants/config';

const INITIAL_BAR_SCALE = 1;
const ALMOST_FINISH_SECOND = 5;

interface UseTimerProps {
  timeLimit: number;
  isSelectedOption: boolean;
  isVoted: boolean;
  vote: () => void;
}

const useTimer = ({ timeLimit, isSelectedOption, isVoted, vote }: UseTimerProps) => {
  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));
  const [barScaleRate, setBarScaleRate] = useState(INITIAL_BAR_SCALE);

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
    const decreaseRate = calculateUnitRate(INITIAL_BAR_SCALE, timeLimitPerSecond);
    setLeftRoundTime(timeLimitPerSecond);

    timeout.current = setInterval(() => {
      setLeftRoundTime((prev) => prev - 1);
      setBarScaleRate((prevRate) => (prevRate > 0 ? prevRate - decreaseRate : 0));
    }, POLLING_DELAY);

    return () => {
      clearInterval(timeout.current);
    };
  }, [timeLimit]);

  return { leftRoundTime, barScaleRate, isAlmostFinished };
};

export default useTimer;
