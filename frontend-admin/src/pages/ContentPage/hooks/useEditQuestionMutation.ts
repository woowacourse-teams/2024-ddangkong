import { editQuestion } from '@/apis/content';
import { useMutation } from '@tanstack/react-query';

const useEditQuestionMutation = () => {
  return useMutation({
    mutationFn: editQuestion,
  });
};

export default useEditQuestionMutation;
