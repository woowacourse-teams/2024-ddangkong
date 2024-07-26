import useCountAnimation from '@/hooks/useCountAnimation';
import { Total, Group } from '@/types/roundVoteResult';

export const useTotalCountAnimation = (groupRoundResult?: Group, totalResult?: Total) => {
  const animatedFirstPercent = useCountAnimation({ target: groupRoundResult?.firstOption.percent });
  const animatedSecondPercent = useCountAnimation({
    target: groupRoundResult?.secondOption.percent,
  });

  const animatedTotalFirstPercent = useCountAnimation({ target: totalResult?.firstOption.percent });
  const animatedTotalSecondPercent = useCountAnimation({
    target: totalResult?.secondOption.percent,
  });

  return {
    animatedFirstPercent,
    animatedSecondPercent,
    animatedTotalFirstPercent,
    animatedTotalSecondPercent,
  };
};
