import { ChangeEvent, useState } from 'react';

import { NICKNAME_MAX_LENGTH } from '@/constants/config';

interface UseNicknameInputProps {
  handleAccessRoom: () => void;
}

const useNicknameInput = ({ handleAccessRoom }: UseNicknameInputProps) => {
  const [nickname, setNickname] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= NICKNAME_MAX_LENGTH) {
      setNickname(e.target.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAccessRoom();
    }
  };

  return { nickname, handleChangeInput, handleKeyDown };
};

export default useNicknameInput;
