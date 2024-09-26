import { useParams } from 'react-router-dom';

import useVoteTimer from './hooks/useVoteTimer';
import {
  timerIcon,
  timerIconShake,
  timerInnerLayout,
  timerLayout,
  timerText,
  timerWrapper,
} from './Timer.styled';
import { formatLeftRoundTime } from './Timer.util';
import useVoteIsFinished from '../hooks/useVoteIsFinished';

import DdangkongTimer from '@/assets/images/ddangkongTimer.webp';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface TimerProps {
  selectedId: number;
  isVoted: boolean;
  completeSelection: () => void;
  showModal: () => void;
}

const Timer = ({ selectedId, isVoted, completeSelection, showModal }: TimerProps) => {
  const { roomId } = useParams();
  const { balanceContent, isFetching } = useBalanceContentQuery(Number(roomId));
  const { barWidthPercent, leftRoundTime, isAlmostFinished } = useVoteTimer({
    roomId: Number(roomId),
    selectedId,
    isVoted,
    completeSelection,
    showModal,
  });

  useVoteIsFinished({
    contentId: balanceContent.contentId,
    isFetching,
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
