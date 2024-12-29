import { appendContent } from '@/apis/content';
import useToast from '@/hooks/useToast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// TODO: 응답값으로 카테고리 value를 넘겨주면 해당 value에 대해서만 쿼리 무효화하기
const useContentAppendMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: appendContent,
    onSuccess: () => {
      showToast('✅ 컨텐츠가 추가되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['contents'] });
    },
  });
};

export default useContentAppendMutation;
