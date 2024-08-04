import useRoundTimer from './Timer.hook';
import {
  timerIcon,
  timerIconShake,
  timerInnerLayout,
  timerLayout,
  timerText,
  timerWrapper,
} from './Timer.styled';
import formatLeftRoundTime from './Timer.util';

import Ddangkong from '@/assets/images/ddangkong.png';

const Timer = () => {
  const { barWidthPercent, leftRoundTime, isAlmostFinished } = useRoundTimer();

  return (
    <section css={timerLayout}>
      <div css={timerInnerLayout(barWidthPercent)}></div>
      <div css={timerWrapper(barWidthPercent)}>
        <img css={[timerIcon, isAlmostFinished && timerIconShake]} src={Ddangkong} alt="타이머" />
        <span css={timerText(isAlmostFinished)}>{formatLeftRoundTime(leftRoundTime)}</span>
      </div>
    </section>
  );
};

export default Timer;
