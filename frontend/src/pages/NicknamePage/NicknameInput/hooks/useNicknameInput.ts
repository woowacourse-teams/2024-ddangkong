import { ChangeEvent, useState } from 'react';

const NICKNAME_MAX_LENGTH = 12;

const useNicknameInput = () => {
  const [nickname, setNickname] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > NICKNAME_MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, NICKNAME_MAX_LENGTH);
    }
    setNickname(e.target.value);
  };

  return { nickname, handleChangeInput };
};

export default useNicknameInput;
