import { useQuery } from '@tanstack/react-query';

import { fetchBalanceContent } from '@/apis/balanceContent';

const useBalanceContentQuery = () => {
  const balanceContentQuery = useQuery({
    queryKey: ['balanceContent'],
    queryFn: async () => await fetchBalanceContent(),
    staleTime: 3 * 60 * 1000,
  });

  return { ...balanceContentQuery, balanceContent: balanceContentQuery.data };
};

export default useBalanceContentQuery;
