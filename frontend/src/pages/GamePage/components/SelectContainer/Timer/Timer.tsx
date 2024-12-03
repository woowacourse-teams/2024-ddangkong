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
import { formatLeftRoundTime, isAlertTimer } from './Timer.util';
import useVoteIsFinished from '../hooks/useVoteIsFinished';

import DdangkongTimer from '@/assets/images/ddangkongTimer.webp';
import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import { SelectedOption } from '@/types/balanceContent';

interface TimerProps {
  selectedOption: SelectedOption;
  completeSelection: () => void;
  cancelSelection: () => void;
}

const Timer = ({ selectedOption, completeSelection, cancelSelection }: TimerProps) => {
  const { roomId } = useParams();
  const { balanceContent, isFetching } = useBalanceContentQuery(Number(roomId));
  const { leftRoundTime, isAlmostFinished, timeLimit } = useVoteTimer({
    roomId: Number(roomId),
    selectedId: selectedOption.id,
    isVoted: selectedOption.isVoted,
    completeSelection,
    cancelSelection,
  });
  const screenReaderLeftRoundTime = `${leftRoundTime}초 남았습니다.`;

  useVoteIsFinished({
    contentId: balanceContent.contentId,
    isFetching,
  });

  return (
    <section css={timerLayout}>
      <div css={timerInnerLayout(timeLimit)}></div>
      <div css={timerWrapper(timeLimit)}>
        <img css={[timerIcon, isAlmostFinished && timerIconShake]} src={DdangkongTimer} alt="" />
        <A11yOnly role="alert" aria-live={isAlertTimer(leftRoundTime, timeLimit) && 'assertive'}>
          {screenReaderLeftRoundTime}
        </A11yOnly>
        <span css={timerText(isAlmostFinished)} aria-hidden>
          {formatLeftRoundTime(leftRoundTime)}
        </span>
      </div>
    </section>
  );
};

export default Timer;
