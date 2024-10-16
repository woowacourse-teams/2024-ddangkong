import { RefObject } from 'react';

import useNicknameInput from './hooks/useNicknameInput';
import { nicknameInput, nicknameInputContainer, nicknameLengthText } from './NicknameInput.styled';
import createRandomNickname from '../createRandomNickname';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
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
      <A11yOnly
        aria-label={`${NICKNAME_MAX_LENGTH === nickname.length ? '최대 길이에 도달했습니다' : ''}`}
        aria-live="polite"
      />
      <input
        ref={nicknameInputRef}
        css={nicknameInput}
        placeholder={randomNickname}
        maxLength={NICKNAME_MAX_LENGTH}
        value={nickname}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        aria-live="polite"
        aria-label="닉네임 입력"
      />
      <span css={nicknameLengthText}>
        {nickname.length}/{NICKNAME_MAX_LENGTH}
      </span>
    </div>
  );
};

export default NicknameInput;
