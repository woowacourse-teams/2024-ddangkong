import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getCategoryList } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';

const useCategoryListQuery = () => {
  const { roomId } = useParams();

  const categoryListQuery = useQuery({
    queryKey: [QUERY_KEYS.categoryList, Number(roomId)],
    queryFn: async () => {
      return await getCategoryList();
    },
  });

  return { ...categoryListQuery, categoryList: categoryListQuery.data?.categories };
};

export default useCategoryListQuery;
