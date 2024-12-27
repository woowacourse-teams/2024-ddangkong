import { login } from "@/apis/login";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const UseLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/content");
    },
    onError: (error) => {
      // 실패하면 인풋 아래에 에러 메시지 출력
      console.error(error.message);
    },
  });
};

export default UseLoginMutation;
