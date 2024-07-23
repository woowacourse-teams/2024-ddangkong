import { profile, nickname, nicknameInputWrapper, nicknameInput } from './NicknamePage.styled';

import Content from '@/components/layout/Content/Content';

const NicknamePage = () => {
  return (
    <Content>
      <div css={profile}></div>
      <div css={nickname}>닉네임</div>
      <div css={nicknameInputWrapper}>
        <input css={nicknameInput} type="text" placeholder="닉네임을 입력해 주세요" />
      </div>
    </Content>
  );
};

export default NicknamePage;
