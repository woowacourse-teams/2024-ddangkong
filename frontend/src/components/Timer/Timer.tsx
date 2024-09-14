import { useParams } from 'react-router-dom';

import useRoundTimer from './hooks/useRoundTimer';
import {
  timerIcon,
  timerIconShake,
  timerInnerLayout,
  timerLayout,
  timerText,
  timerWrapper,
} from './Timer.styled';
import { formatLeftRoundTime } from './Timer.util';

import DdangkongTimer from '@/assets/images/ddangkongTimer.png';

const Timer = () => {
  const { roomId } = useParams();
  const { barWidthPercent, leftRoundTime, isAlmostFinished } = useRoundTimer(Number(roomId));

  return (
    <section css={timerLayout}>
      <div css={timerInnerLayout(barWidthPercent)}></div>
      <div css={timerWrapper(barWidthPercent)}>
        <img
          css={[timerIcon, isAlmostFinished && timerIconShake]}
          src={DdangkongTimer}
          alt="타이머"
        />
        <span css={timerText(isAlmostFinished)}>{formatLeftRoundTime(leftRoundTime)}</span>
      </div>
    </section>
  );
};

export default Timer;
