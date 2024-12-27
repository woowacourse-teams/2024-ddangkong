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
import usePassword from "./hooks/usePassword";

const LoginPage = () => {
  const { password, handleChange, handleLogin, handleKeyDown } = usePassword();

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
          onKeyDown={handleKeyDown}
          placeholder="비밀번호를 입력해주세요"
        />
        <button css={loginButton} onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
