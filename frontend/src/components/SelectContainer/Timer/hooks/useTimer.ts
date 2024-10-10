import { useEffect, useRef, useState } from 'react';

import { convertMsecToSecond } from '../Timer.util';

import { ALMOST_FINISH_SECOND, POLLING_DELAY } from '@/constants/config';

interface UseTimerProps {
  timeLimit: number;
  isSelectedOption: boolean;
  isVoted: boolean;
  vote: () => void;
}

const useTimer = ({ timeLimit, isSelectedOption, isVoted, vote }: UseTimerProps) => {
  const [leftRoundTime, setLeftRoundTime] = useState(convertMsecToSecond(timeLimit));

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
    timeout.current = setInterval(() => {
      setLeftRoundTime((prev) => prev - 1);
    }, POLLING_DELAY);

    return () => {
      clearInterval(timeout.current);
    };
  }, [timeLimit]);

  return { leftRoundTime, isAlmostFinished };
};

export default useTimer;
