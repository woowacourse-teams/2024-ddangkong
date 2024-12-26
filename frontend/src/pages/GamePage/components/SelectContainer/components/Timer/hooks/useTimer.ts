import { useEffect, useRef, useState } from 'react';

import { ALMOST_FINISH_SECOND, POLLING_DELAY } from '@/constants/config';

interface UseTimerProps {
  timeLimit: number;
  isSelectedOption: boolean;
  isVoted: boolean;
  vote: () => void;
}

const useTimer = ({ timeLimit, isSelectedOption, isVoted, vote }: UseTimerProps) => {
  const [leftRoundTime, setLeftRoundTime] = useState(timeLimit);
  const workerRef = useRef<Worker | null>(null);

  const isVoteTimeout = leftRoundTime <= 0;
  const isAlmostFinished = leftRoundTime <= ALMOST_FINISH_SECOND;

  useEffect(() => {
    const timerWorker = new Worker(new URL('./timerWorker.ts', import.meta.url));
    workerRef.current = timerWorker;

    timerWorker.postMessage({ type: 'start', delay: POLLING_DELAY });

    timerWorker.onmessage = () => {
      setLeftRoundTime((prev) => prev - 1);
    };

    // 타이머가 끝나기 전에 투표가 완료될 경우 clean-up
    return () => {
      timerWorker.postMessage({ type: 'stop' });
      timerWorker.terminate();
    };
  }, []);

  useEffect(() => {
    if (isVoteTimeout) {
      if (isSelectedOption && !isVoted) {
        vote();
      }

      workerRef.current?.postMessage({ type: 'stop' });
      workerRef.current?.terminate();
    }
  }, [isVoteTimeout, isSelectedOption, isVoted, vote]);

  return { leftRoundTime, isAlmostFinished };
};

export default useTimer;
