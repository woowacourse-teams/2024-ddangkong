import useTimer from './useTimer';

import useCompleteSelectionMutation from '@/components/common/SelectButton/SelectButton.hook';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const DEFAULT_TIME_LIMIT_MSEC = 10000;

interface UseVoteTimerProps {
  roomId: number;
  selectedId: number;
  isVoted: boolean;
  completeSelection: () => void;
}

const useVoteTimer = ({ roomId, selectedId, isVoted, completeSelection }: UseVoteTimerProps) => {
  const { balanceContent } = useBalanceContentQuery(roomId);
  const timeLimit = balanceContent.timeLimit || DEFAULT_TIME_LIMIT_MSEC;

  const { mutate: vote } = useCompleteSelectionMutation({
    selectedId,
    contentId: balanceContent.contentId,
    completeSelection,
  });

  const { leftRoundTime, isAlmostFinished } = useTimer({
    timeLimit,
    isSelectedOption: Boolean(selectedId),
    isVoted,
    vote,
  });

  return { leftRoundTime, isAlmostFinished, timeLimit };
};

export default useVoteTimer;
