import { editOption } from "@/apis/content";
import { useMutation } from "@tanstack/react-query";

const useEditOptionMutation = () => {
  return useMutation({
    mutationFn: editOption,
  });
};

export default useEditOptionMutation;
