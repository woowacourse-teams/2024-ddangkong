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

interface TimerProps {
  selectedId: number;
  completeSelection: () => void;
  showModal: () => void;
}

const Timer = ({ selectedId, completeSelection, showModal }: TimerProps) => {
  const { roomId } = useParams();
  const { barWidthPercent, leftRoundTime, isAlmostFinished } = useRoundTimer({
    roomId: Number(roomId),
    selectedId,
    completeSelection,
    showModal,
  });

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
