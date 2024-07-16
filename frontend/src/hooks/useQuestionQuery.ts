import { useQuery } from '@tanstack/react-query';

import { fetchQuestion } from '@/apis/question';

const useQuestionQuery = () => {
  return useQuery({
    queryKey: ['question'],
    queryFn: async () => await fetchQuestion(),
  });
};

export default useQuestionQuery;
