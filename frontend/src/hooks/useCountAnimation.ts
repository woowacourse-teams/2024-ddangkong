import { useEffect, useState } from 'react';

// "ease out" : 빨라졌다가 천천히 끝나는 애니메이션
const easeOutRate = (timingRate: number) => {
  return timingRate === 1 ? 1 : 1 - Math.pow(2, -10 * timingRate);
};

interface UseCountAnimationProps {
  target?: number;
  start?: number;
  duration?: number;
}

// start에서 target으로 숫자 카운팅되는 애니메이션 커스텀 훅
const useCountAnimation = ({ target, start = 50, duration = 2000 }: UseCountAnimationProps) => {
  const [count, setCount] = useState(start);
  const frameRate = 500 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    // target 값을 API로 불러올 경우 초기값이 애니메이션에 반영되므로 예외처리
    if (typeof target === 'undefined' || target === start) return;
    let currentNumber = start;
    const counter = setInterval(() => {
      const progress = easeOutRate(++currentNumber / totalFrame);
      setCount(Math.round(target * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [target, frameRate, start, totalFrame]);

  return count;
};

export default useCountAnimation;
