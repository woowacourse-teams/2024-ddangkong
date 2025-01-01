import SpinDdangkong from '@/assets/images/spinDdangkong.webp';
import {
  image,
  loginButton,
  loginContainer,
  loginHeaderContainer,
  loginLayout,
  loginTitle,
} from './LoginPage.styles';
import usePassword from './hooks/usePassword';
import useNickname from './useNickname';
import useHandleLogin from './useHandleLogin';
import Input from '@/components/Input/Input';

const LoginPage = () => {
  const { nickname, nicknameError, handleChangeNickname, clearNickname, handleNicknameError } =
    useNickname();
  const { password, passwordError, handleChangePassword, clearPassword, handlePasswordError } =
    usePassword();
  const { handleLogin, handleKeyDown } = useHandleLogin({
    nickname,
    password,
    onSuccess: () => {
      clearNickname();
      clearPassword();
    },
    onError: () => {
      handleNicknameError();
      handlePasswordError();
    },
  });

  return (
    <div css={loginLayout}>
      <div css={loginContainer}>
        <div css={loginHeaderContainer}>
          <img src={SpinDdangkong} alt="땅콩 로고" css={image} />
          <span css={loginTitle}>ddangkong</span>
        </div>
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
      </div>
    </div>
  );
};

export default LoginPage;
