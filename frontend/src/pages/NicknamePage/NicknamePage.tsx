import { profile, nickname, nicknameInputWrapper, nicknameInput } from './NicknamePage.styled';

import Content from '@/components/layout/Content/Content';
import { createRandomNickname } from '@/utils/nickname';

const NicknamePage = () => {
  const randomNickname = createRandomNickname();

  return (
    <Content>
      <div css={profile}></div>
      <div css={nickname}>닉네임</div>
      <div css={nicknameInputWrapper}>
        <input css={nicknameInput} type="text" placeholder={randomNickname} />
      </div>
    </Content>
  );
};

export default NicknamePage;
