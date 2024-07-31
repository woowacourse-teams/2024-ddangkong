import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchBalanceContent } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { BalanceContent } from '@/types/balanceContent';

type BalanceContentQueryResponse = UseQueryResult<BalanceContent, Error> & {
  balanceContent?: BalanceContent;
};

const useBalanceContentQuery = (): BalanceContentQueryResponse => {
  const balanceContentQuery = useQuery({
    queryKey: [QUERY_KEYS.balanceContent],
    queryFn: async () => await fetchBalanceContent(),
    staleTime: 3 * 60 * 1000,
  });

  return { ...balanceContentQuery, balanceContent: balanceContentQuery.data };
};

export default useBalanceContentQuery;
