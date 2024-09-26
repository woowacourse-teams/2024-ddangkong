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
}

const Timer = ({ selectedId, isVoted, completeSelection }: TimerProps) => {
  const { roomId } = useParams();
  const { balanceContent, isFetching } = useBalanceContentQuery(Number(roomId));
  const { leftRoundTime, barScaleRate, isAlmostFinished } = useVoteTimer({
    roomId: Number(roomId),
    selectedId,
    isVoted,
    completeSelection,
  });

  useVoteIsFinished({
    contentId: balanceContent.contentId,
    isFetching,
  });

  return (
    <section css={timerLayout}>
      <div css={timerInnerLayout(barScaleRate)}></div>
      <div css={timerWrapper(barScaleRate)}>
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
