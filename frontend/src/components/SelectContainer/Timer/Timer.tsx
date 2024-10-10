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
import { convertMsecToSecond, formatLeftRoundTime } from './Timer.util';
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
  const { leftRoundTime, isAlmostFinished, timeLimit } = useVoteTimer({
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
      <div css={timerInnerLayout(convertMsecToSecond(timeLimit))}></div>
      <div css={timerWrapper(convertMsecToSecond(timeLimit))}>
        <img css={[timerIcon, isAlmostFinished && timerIconShake]} src={DdangkongTimer} alt="" />
        <span css={timerText(isAlmostFinished)}>{formatLeftRoundTime(leftRoundTime)}</span>
      </div>
    </section>
  );
};

export default Timer;
