import { ChangeEvent, useState } from "react";
import UseLoginMutation from "./UseLoginMutation";

const usePassword = () => {
  const { mutate: login } = UseLoginMutation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleLogin = () => {
    login(
      { password },
      {
        onSuccess: () => {
          setPassword("");
          setError("");
        },
        onError: () => {
          setError("비밀번호를 다시 입력해주세요.");
        },
      }
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return { password, error, handleChange, handleLogin, handleKeyDown };
};
export default usePassword;
