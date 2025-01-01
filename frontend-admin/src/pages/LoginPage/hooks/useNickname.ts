import { ChangeEvent, useState } from 'react';

const useNickname = () => {
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setNicknameError('');
  };

  const clearNickname = () => {
    setNickname('');
    setNicknameError('');
  };

  const handleNicknameError = () => {
    if (nickname.length === 0) {
      setNicknameError('닉네임을 입력해주세요.');
    }
  };

  return { nickname, nicknameError, handleChangeNickname, clearNickname, handleNicknameError };
};
export default useNickname;
