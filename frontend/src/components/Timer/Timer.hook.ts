import { useEffect, useRef, useState } from 'react';

const INITIAL_TIMER = 30; // TODO: tanstack-query로 timeLimit 서버 데이터 받아오기
const INITIAL_WIDTH = 100;

const useRoundTimer = () => {
  const [timerCount, setTimerCount] = useState(INITIAL_TIMER);
  const [barWidth, setBarWidth] = useState(INITIAL_WIDTH);
  const isAlmostFinished = timerCount <= 5;

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timerCount <= 0) {
      clearInterval(timeout.current);
    }
  }, [timerCount]);

  useEffect(() => {
    timeout.current = setInterval(() => {
      setTimerCount((prev) => prev - 1);
      setBarWidth((prevWidth) => (prevWidth > 0 ? prevWidth - INITIAL_WIDTH / INITIAL_TIMER : 0));
    }, 1000);

    return () => {
      clearInterval(timeout.current);
    };
  }, []);

  return { timerCount, barWidth, isAlmostFinished };
};

export { useRoundTimer };
