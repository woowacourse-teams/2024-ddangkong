import { deleteContent } from "@/apis/content";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const useDeleteContentMutation = () => {
  const [searchParams, _] = useSearchParams();
  const category = searchParams.get("category") || "IF";

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contents", category] });
    },
  });
};

export default useDeleteContentMutation;
