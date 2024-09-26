import useCountAnimation from '@/hooks/useCountAnimation';
import { Group } from '@/types/roundVoteResult';

const useTotalCountAnimation = (groupRoundResult?: Group) => {
  const animatedFirstPercent = useCountAnimation({ target: groupRoundResult?.firstOption.percent });
  const animatedSecondPercent = useCountAnimation({
    target: groupRoundResult?.secondOption.percent,
  });

  return {
    animatedFirstPercent,
    animatedSecondPercent,
  };
};

export default useTotalCountAnimation;
