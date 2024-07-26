import { useQuery } from '@tanstack/react-query';

import INITIAL_VALUE from '../mocks/data/roundVoteResultInitialValue.json';

import { fetchRoundVoteResult } from '@/apis/balanceContent';

const useRoundVoteResultQuery = () => {
  const roundVoteResultQuery = useQuery({
    queryKey: ['roundVoteResult'],
    queryFn: async () => await fetchRoundVoteResult(),
    placeholderData: INITIAL_VALUE,
  });

  return {
    ...roundVoteResultQuery,
    groupRoundResult: roundVoteResultQuery.data?.group,
    totalResult: roundVoteResultQuery.data?.total,
  };
};

export default useRoundVoteResultQuery;
