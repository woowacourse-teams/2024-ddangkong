import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { fetchBalanceContent } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { BalanceContent } from '@/types/balanceContent';

type BalanceContentQueryResponse = UseSuspenseQueryResult<BalanceContent, Error> & {
  balanceContent: BalanceContent;
};

const useBalanceContentQuery = (roomId?: number): BalanceContentQueryResponse => {
  const balanceContentQuery = useSuspenseQuery({
    queryKey: [QUERY_KEYS.balanceContent, Number(roomId)],
    queryFn: async () => await fetchBalanceContent(Number(roomId)),
  });

  return { ...balanceContentQuery, balanceContent: balanceContentQuery.data };
};

export default useBalanceContentQuery;
