import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchBalanceContent } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { BalanceContent } from '@/types/balanceContent';

type BalanceContentQueryResponse = UseQueryResult<BalanceContent, Error> & {
  balanceContent?: BalanceContent;
};

const useBalanceContentQuery = (): BalanceContentQueryResponse => {
  const { roomId } = useParams();

  const balanceContentQuery = useQuery({
    queryKey: [QUERY_KEYS.balanceContent, roomId],
    queryFn: async () => await fetchBalanceContent(Number(roomId)),
  });

  return { ...balanceContentQuery, balanceContent: balanceContentQuery.data };
};

export default useBalanceContentQuery;
