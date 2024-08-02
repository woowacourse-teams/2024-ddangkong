import { useRoundTimer } from './Timer.hook';
import {
  timerIcon,
  timerIconShake,
  timerInnerLayout,
  timerLayout,
  timerText,
  timerWrapper,
} from './Timer.styled';
import { formatTimer } from './Timer.util';

import DDANGKONG from '@/assets/images/ddangkong.png';

const Timer = () => {
  const { barWidth, timerCount, isAlmostFinished } = useRoundTimer();

  return (
    <div css={timerLayout}>
      <div css={timerInnerLayout(barWidth)}></div>
      <div css={timerWrapper(barWidth)}>
        <img
          css={[timerIcon, isAlmostFinished && timerIconShake]}
          src={DDANGKONG}
          alt="타이머"
          width={48}
          height={48}
        />
        <span css={timerText(isAlmostFinished)}>{formatTimer(timerCount)}</span>
      </div>
    </div>
  );
};

export default Timer;
