import { ChangeEvent, useState } from "react";
import UseLoginMutation from "./UseLoginMutation";

const usePassword = () => {
  const { mutate: login } = UseLoginMutation();
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    login({ password }, { onSuccess: () => setPassword("") });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return { password, handleChange, handleLogin, handleKeyDown };
};
export default usePassword;
