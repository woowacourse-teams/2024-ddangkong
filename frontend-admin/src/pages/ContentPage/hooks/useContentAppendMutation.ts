import { appendContent } from '@/apis/content';
import useCategoryQueryParams from '@/hooks/useCategoryQueryParams';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useContentAppendMutation = () => {
  const queryClient = useQueryClient();
  const category = useCategoryQueryParams();

  return useMutation({
    mutationFn: appendContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contents', category] });
    },
  });
};

export default useContentAppendMutation;
