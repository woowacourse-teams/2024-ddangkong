import useNicknameInput from './hooks/useNicknameInput';
import { nicknameInput, nicknameInputContainer, nicknameLengthText } from './NicknameInput.styled';
import createRandomNickname from '../createRandomNickname';

const NICKNAME_MAX_LENGTH = 12;

interface NicknameInputProps {
  handleMakeOrEnterRoom: () => void;
}

const NicknameInput = ({ handleMakeOrEnterRoom }: NicknameInputProps) => {
  const { nickname, handleChangeInput } = useNicknameInput();
  const randomNickname = createRandomNickname();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleMakeOrEnterRoom();
    }
  };

  return (
    <div css={nicknameInputContainer}>
      <input
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
