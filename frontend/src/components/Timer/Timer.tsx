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

import Ddangkong from '@/assets/images/ddangkong.png';

const Timer = () => {
  const { barWidth, timerCount, isAlmostFinished } = useRoundTimer();

  return (
    <section css={timerLayout}>
      <div css={timerInnerLayout(barWidth)}></div>
      <div css={timerWrapper(barWidth)}>
        <img css={[timerIcon, isAlmostFinished && timerIconShake]} src={Ddangkong} alt="타이머" />
        <span css={timerText(isAlmostFinished)}>{formatTimer(timerCount)}</span>
      </div>
    </section>
  );
};

export default Timer;
