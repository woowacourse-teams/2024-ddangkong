import Input from '@/components/Input/Input';
import useLogin from '../../hooks/useLogin';
import { loginButton } from './LoginInputContainer.styles';

const LoginInputContainer = () => {
  const {
    nickname,
    nicknameError,
    handleChangeNickname,
    password,
    passwordError,
    handleChangePassword,
    handleLogin,
    handleKeyDown,
  } = useLogin();

  return (
    <>
      <Input
        label="닉네임"
        value={nickname}
        handleChange={handleChangeNickname}
        handleKeyDown={handleKeyDown}
        hasError={Boolean(nicknameError)}
        error={nicknameError}
        placeholder="닉네임을 입력해주세요"
      />
      <Input
        label="비밀번호"
        value={password}
        handleChange={handleChangePassword}
        handleKeyDown={handleKeyDown}
        hasError={Boolean(passwordError)}
        error={passwordError}
        placeholder="비밀번호를 입력해주세요"
      />
      <button css={loginButton} onClick={handleLogin}>
        로그인
      </button>
    </>
  );
};

export default LoginInputContainer;
