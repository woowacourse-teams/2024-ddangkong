import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchBalanceContent } from '@/apis/balanceContent';
import { BalanceContent } from '@/types/balanceContent';

type BalanceContentQueryResponse = UseQueryResult<BalanceContent, Error> & {
  balanceContent?: BalanceContent;
};

const useBalanceContentQuery = (): BalanceContentQueryResponse => {
  const balanceContentQuery = useQuery({
    queryKey: ['balanceContent'],
    queryFn: async () => await fetchBalanceContent(),
    staleTime: 3 * 60 * 1000,
  });

  return { ...balanceContentQuery, balanceContent: balanceContentQuery.data };
};

export default useBalanceContentQuery;
