import { ChangeEvent, useState } from 'react';

const usePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const clearPassword = () => {
    setPassword('');
    setPasswordError('');
  };

  const handlePasswordError = () => {
    setPasswordError('비밀번호를 다시 입력해주세요.');
  };

  return { password, passwordError, handleChangePassword, clearPassword, handlePasswordError };
};
export default usePassword;
