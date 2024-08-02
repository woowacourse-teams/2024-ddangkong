import { profile, nicknameBox, nicknameInputWrapper, nicknameInput } from './NicknamePage.styled';
import { useMakeOrEnterRoom } from './useMakeOrEnterRoom';

import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';

const NicknamePage = () => {
  const { randomNickname, nicknameInputRef, handleMakeOrEnterRoom } = useMakeOrEnterRoom();

  return (
    <Content>
      <div css={profile}></div>
      <div css={nicknameBox}>닉네임</div>
      <div css={nicknameInputWrapper}>
        <input
          css={nicknameInput}
          type="text"
          placeholder={randomNickname}
          ref={nicknameInputRef}
        />
      </div>
      <Button onClick={handleMakeOrEnterRoom} text="확인" bottom></Button>
    </Content>
  );
};

export default NicknamePage;
