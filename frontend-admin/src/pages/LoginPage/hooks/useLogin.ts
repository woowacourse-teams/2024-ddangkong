import useHandleLogin from './useHandleLogin';
import useNickname from './useNickname';
import usePassword from './usePassword';

const useLogin = () => {
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

  return {
    nickname,
    nicknameError,
    handleChangeNickname,
    password,
    passwordError,
    handleChangePassword,
    handleLogin,
    handleKeyDown,
  };
};

export default useLogin;
