import { ChangeEvent, useState } from 'react';

import { NICKNAME_MAX_LENGTH } from '@/constants/config';

interface UseNicknameInputProps {
  handleMakeOrEnterRoom: () => void;
}

const useNicknameInput = ({ handleMakeOrEnterRoom }: UseNicknameInputProps) => {
  const [nickname, setNickname] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > NICKNAME_MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, NICKNAME_MAX_LENGTH);
    }
    setNickname(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleMakeOrEnterRoom();
    }
  };

  return { nickname, handleChangeInput, handleKeyDown };
};

export default useNicknameInput;
