import { Total } from '@/types/roundVoteResult';

export const getDominantVoteData = (totalResult: Total) => {
  const { firstOption, secondOption } = totalResult;

  const isEqual = firstOption.percent === secondOption.percent;
  const dominantOption = firstOption.percent > secondOption.percent ? firstOption : secondOption;

  return {
    isEqual,
    dominantPercent: dominantOption.percent,
    dominantName: dominantOption.name,
  };
};

export const isExistVoteMember = (
  firstOptionMemberCount: number,
  secondOptionMemberCount: number,
) => {
  return firstOptionMemberCount !== 0 || secondOptionMemberCount !== 0;
};
