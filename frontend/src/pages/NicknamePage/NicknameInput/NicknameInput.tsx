import useNicknameInput from './hooks/useNicknameInput';
import { nicknameInput, nicknameInputContainer, nicknameLengthText } from './NicknameInput.styled';
import createRandomNickname from '../createRandomNickname';

const NICKNAME_MAX_LENGTH = 12;

const NicknameInput = () => {
  const { nickname, handleChangeInput } = useNicknameInput();
  const randomNickname = createRandomNickname();

  return (
    <div css={nicknameInputContainer}>
      <input
        css={nicknameInput}
        placeholder={randomNickname}
        maxLength={NICKNAME_MAX_LENGTH}
        value={nickname}
        onChange={handleChangeInput}
      />
      <span css={nicknameLengthText}>
        {nickname.length}/{NICKNAME_MAX_LENGTH}
      </span>
    </div>
  );
};

export default NicknameInput;
