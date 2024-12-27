import SpinDdangkong from "@/assets/images/spinDdangkong.webp";
import {
  image,
  loginButton,
  loginContainer,
  loginHeaderContainer,
  loginLayout,
  loginTitle,
  passwordInput,
} from "./LoginPage.styles";
import { ChangeEvent, useState } from "react";
import UseLoginMutation from "./hooks/UseLoginMutation";

const LoginPage = () => {
  const { mutate: login } = UseLoginMutation();
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = () => {
    login({ password });
  };

  return (
    <div css={loginLayout}>
      <div css={loginContainer}>
        <div css={loginHeaderContainer}>
          <img src={SpinDdangkong} alt="땅콩 로고" css={image} />
          <span css={loginTitle}>ddangkong</span>
        </div>
        <input
          css={passwordInput}
          value={password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요"
        />
        <button css={loginButton} onClick={handleClickLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
