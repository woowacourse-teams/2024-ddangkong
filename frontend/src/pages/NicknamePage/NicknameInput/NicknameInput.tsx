import { RefObject } from 'react';

import useNicknameInput from './hooks/useNicknameInput';
import { nicknameInput, nicknameInputContainer, nicknameLengthText } from './NicknameInput.styled';
import createRandomNickname from '../createRandomNickname';

import { NICKNAME_MAX_LENGTH } from '@/constants/config';

interface NicknameInputProps {
  nicknameInputRef: RefObject<HTMLInputElement>;
  handleMakeOrEnterRoom: () => void;
}
const randomNickname = createRandomNickname();

const NicknameInput = ({ nicknameInputRef, handleMakeOrEnterRoom }: NicknameInputProps) => {
  const { nickname, handleChangeInput, handleKeyDown } = useNicknameInput({
    handleMakeOrEnterRoom,
  });

  return (
    <div css={nicknameInputContainer}>
      <input
        ref={nicknameInputRef}
        css={nicknameInput}
        placeholder={randomNickname}
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
