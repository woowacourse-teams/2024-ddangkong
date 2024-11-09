import { useEffect, useRef, useState } from 'react';

import { countdownLayout, countdown, peanut, imageContainer, dimmed } from './Countdown.styled';

import SpinDdangkong from '@/assets/images/spinDdangkong.webp';

const START_COUNTDOWN = 3;

// countdown 에 따른 이미지 개수 mapper
const imageCountMapper: Record<number, number> = {
  3: 1,
  2: 2,
  1: 3,
};

interface CountdownProps {
  goToGame: () => void;
}

const Countdown = ({ goToGame }: CountdownProps) => {
  const [count, setCount] = useState(START_COUNTDOWN);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timeout.current);
      goToGame();
    }
  }, [count]);

  useEffect(() => {
    timeout.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timeout.current);
  }, []);

  return (
    <div css={countdownLayout}>
      <div css={dimmed} />
      {count > 0 && (
        <span css={countdown} aria-label={`게임 시작 ${count}초 전`} aria-live="polite">
          {count}
        </span>
      )}
      <div css={imageContainer}>
        {imageCountMapper[count] &&
          Array.from({ length: imageCountMapper[count] }, (_, idx) => (
            <img
              key={idx + 1}
              src={SpinDdangkong}
              css={peanut(idx + 1)}
              alt={`${idx + 1}번째 카운트다운 땅콩`}
            />
          ))}
      </div>
    </div>
  );
};

export default Countdown;
