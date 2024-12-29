import { deleteContent } from "@/apis/content";
import useCategoryQueryParams from "@/hooks/useCategoryQueryParams";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteContentMutation = () => {
  const queryClient = useQueryClient();
  const category = useCategoryQueryParams();

  return useMutation({
    mutationFn: deleteContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contents", category] });
    },
  });
};

export default useDeleteContentMutation;
