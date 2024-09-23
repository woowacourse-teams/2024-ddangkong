import { RefObject, memo } from 'react';

import useNicknameInput from './hooks/useNicknameInput';
import { nicknameInput, nicknameInputContainer, nicknameLengthText } from './NicknameInput.styled';
import createRandomNickname from '../createRandomNickname';

import { NICKNAME_MAX_LENGTH } from '@/constants/config';

interface NicknameInputProps {
  nicknameInputRef: RefObject<HTMLInputElement>;
  handleMakeOrEnterRoom: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
const randomNickname = createRandomNickname();

const NicknameInput = memo(
  ({ nicknameInputRef, handleMakeOrEnterRoom, onFocus, onBlur }: NicknameInputProps) => {
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
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span css={nicknameLengthText}>
          {nickname.length}/{NICKNAME_MAX_LENGTH}
        </span>
      </div>
    );
  },
);

NicknameInput.displayName = 'NicknameInput';

export default NicknameInput;
