import { useEffect, useRef, useState } from 'react';

import { timerIcon, timerInnerLayout, timerLayout, timerText, timerWrapper } from './Timer.styled';
import { formatTimer } from './Timer.util';

import HOME_ICON from '@/assets/images/homeIcon.svg';

const INITIAL_TIMER = 30;
const INITIAL_WIDTH = 100;

const Timer = () => {
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timeout.current);
    }
  }, [timer]);

  useEffect(() => {
    timeout.current = setInterval(() => {
      setTimer((prev) => prev - 1);
      setWidth((prevWidth) => (prevWidth > 0 ? prevWidth - INITIAL_WIDTH / INITIAL_TIMER : 0));
    }, 1000);

    return () => {
      clearInterval(timeout.current);
    };
  }, []);

  return (
    <>
      <div css={timerLayout}>
        <div css={timerInnerLayout(width)}></div>
        <div css={timerWrapper(width)}>
          <img css={timerIcon} src={HOME_ICON} alt="타이머" width={48} height={48} />
          <span css={timerText}>{formatTimer(timer)}</span>
        </div>
      </div>
    </>
  );
};

export default Timer;
