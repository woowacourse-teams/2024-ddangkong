import { fetchCategoryList } from '@/apis/content';
import { useQuery } from '@tanstack/react-query';

const useCategoryListQuery = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => fetchCategoryList(),
    select: (data) => data.categories,
    staleTime: Infinity,
  });
};

export default useCategoryListQuery;
