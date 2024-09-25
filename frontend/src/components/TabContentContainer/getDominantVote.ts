import { Total } from '@/types/roundVoteResult';

const getDominantVoteData = (totalResult: Total) => {
  const { firstOption, secondOption } = totalResult;

  const isEven = firstOption.percent === secondOption.percent;
  const dominantOption = firstOption.percent > secondOption.percent ? firstOption : secondOption;

  return {
    isEven,
    dominantPercent: dominantOption.percent,
    dominantName: dominantOption.name,
  };
};

export default getDominantVoteData;
