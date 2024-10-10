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
import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import { ALMOST_FINISH_SECOND } from '@/constants/config';
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
        <A11yOnly aria-live={leftRoundTime <= ALMOST_FINISH_SECOND && 'polite'}>
          {leftRoundTime}초
        </A11yOnly>
        <span css={timerText(isAlmostFinished)} aria-hidden>
          {formatLeftRoundTime(leftRoundTime)}
        </span>
      </div>
    </section>
  );
};

export default Timer;
