import { appendContent } from '@/apis/content';
import useCategoryQueryParams from '@/hooks/useCategoryQueryParams';
import useToast from '@/hooks/useToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useContentAppendMutation = () => {
  const queryClient = useQueryClient();
  const { category } = useCategoryQueryParams();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: appendContent,
    onSuccess: () => {
      showToast('✅ 컨텐츠가 추가되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['contents', category] });
    },
  });
};

export default useContentAppendMutation;
