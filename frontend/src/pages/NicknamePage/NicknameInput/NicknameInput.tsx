import { RefObject, useEffect, useState } from 'react';

import useNicknameInput from './hooks/useNicknameInput';
import { nicknameInput, nicknameInputContainer, nicknameLengthText } from './NicknameInput.styled';
import createRandomNickname from '../createRandomNickname';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import { NICKNAME_MIN_LENGTH, NICKNAME_MAX_LENGTH } from '@/constants/config';

interface NicknameInputProps {
  nicknameInputRef: RefObject<HTMLInputElement>;
  handleMakeOrEnterRoom: () => void;
}
const randomNickname = createRandomNickname();

const NicknameInput = ({ nicknameInputRef, handleMakeOrEnterRoom }: NicknameInputProps) => {
  const { nickname, handleChangeInput, handleKeyDown } = useNicknameInput({
    handleMakeOrEnterRoom,
  });

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (NICKNAME_MAX_LENGTH == nickname.length) setStatusMessage('최대 길이에 도달했습니다');
    else setStatusMessage('');
  }, [nickname]);

  return (
    <div css={nicknameInputContainer}>
      {statusMessage && <A11yOnly role="alert">{statusMessage}</A11yOnly>}
      <input
        ref={nicknameInputRef}
        css={nicknameInput}
        placeholder={randomNickname}
        minLength={NICKNAME_MIN_LENGTH}
        maxLength={NICKNAME_MAX_LENGTH}
        value={nickname}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      <span css={nicknameLengthText}>
        {nickname.length}/{NICKNAME_MAX_LENGTH}
      </span>
    </div>
  );
};

export default NicknameInput;
