import { ChangeEvent, useState } from 'react';

import { NICKNAME_MAX_LENGTH } from '@/constants/config';

interface UseNicknameInputProps {
  handleCreateOrEnterRoom: () => void;
}

const useNicknameInput = ({ handleCreateOrEnterRoom }: UseNicknameInputProps) => {
  const [nickname, setNickname] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= NICKNAME_MAX_LENGTH) {
      setNickname(e.target.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCreateOrEnterRoom();
    }
  };

  return { nickname, handleChangeInput, handleKeyDown };
};

export default useNicknameInput;
