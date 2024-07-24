import { useQuery } from '@tanstack/react-query';

import { fetchRoundVoteResult } from '@/apis/balanceContent';

const useRoundVoteResultQuery = () => {
  const roundVoteResultQuery = useQuery({
    queryKey: ['roundVoteResult'],
    queryFn: async () => await fetchRoundVoteResult(),
  });

  roundVoteResultQuery.data?.group;

  return {
    ...roundVoteResultQuery,
    groupRoundResult: roundVoteResultQuery.data?.group,
    totalResult: roundVoteResultQuery.data?.total,
  };
};

export default useRoundVoteResultQuery;
