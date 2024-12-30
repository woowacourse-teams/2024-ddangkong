import { appendContent } from '@/apis/content';
import useToast from '@/hooks/useToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useContentAppendMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: appendContent,
    onSuccess: (data) => {
      showToast(`✅ ${data.category} 카테고리 컨텐츠가 추가되었습니다.`);
      queryClient.invalidateQueries({ queryKey: ['contents', data.category] });
    },
  });
};

export default useContentAppendMutation;
