import { deleteContent } from '@/apis/content';
import useCategoryQueryParams from '@/hooks/useCategoryQueryParams';
import useToast from '@/hooks/useToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteContentMutation = () => {
  const queryClient = useQueryClient();
  const { category } = useCategoryQueryParams();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: deleteContent,
    onSuccess: () => {
      showToast(`❌ ${category} 카테고리 컨텐츠가 삭제되었습니다.`);
      queryClient.invalidateQueries({ queryKey: ['contents', category] });
    },
  });
};

export default useDeleteContentMutation;
