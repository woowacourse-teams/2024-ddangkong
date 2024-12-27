import { fetchBalanceContent } from "@/apis/content";
import { useQuery } from "@tanstack/react-query";

const useContentListQuery = (category: string) => {
  return useQuery({
    queryKey: ["contents", category],
    queryFn: () => fetchBalanceContent(category),
    select: (data) => data.contents,
    staleTime: Infinity,
  });
};

export default useContentListQuery;
