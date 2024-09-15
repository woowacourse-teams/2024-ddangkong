import { useEffect, useRef, useState } from 'react';

import { countdownLayout, countdown, peanut, peanutWrapper } from './Countdown.styled';

import SpinDdangkong from '@/assets/images/spinDdangkong.png';

const countMapper: Record<number, number> = {
  3: 1,
  2: 2,
  1: 3,
};

interface CountdownProps {
  startGame: () => void;
}

const Countdown = ({ startGame }: CountdownProps) => {
  const [count, setCount] = useState(3);
  const timeout = useRef<NodeJS.Timeout>();

  if (count <= 0) {
    clearInterval(timeout.current);
    startGame();
  }

  useEffect(() => {
    timeout.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timeout.current);
  }, []);

  return (
    <div css={countdownLayout}>
      <span css={countdown}>{count}</span>
      <div css={peanutWrapper}>
        {Array.from({ length: countMapper[count] }, (_, i) => i + 1).map((idx) => (
          <img key={idx} src={SpinDdangkong} css={peanut} alt={`${idx}번째 카운트다운 땅콩`} />
        ))}
      </div>
    </div>
  );
};

export default Countdown;
