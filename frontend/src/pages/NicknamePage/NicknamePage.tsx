import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { profile, nickname, nicknameInputWrapper, nicknameInput } from './NicknamePage.styled';

import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import { createRandomNickname } from '@/utils/nickname';

const NicknamePage = () => {
  const randomNickname = createRandomNickname();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const goToReadyPage = () => {
    navigate('/ready', { state: { isMaster: true } });
  };

  const { state } = useLocation();

  const handleClick = () => {
    alert(`${state?.isMaster}, ${nicknameInputRef.current?.value || randomNickname}`);
  };

  return (
    <Content>
      <div css={profile}></div>
      <div css={nickname}>닉네임</div>
      <div css={nicknameInputWrapper}>
        <input
          css={nicknameInput}
          type="text"
          placeholder={randomNickname}
          ref={nicknameInputRef}
        />
      </div>
      <Button onClick={goToReadyPage} text="확인" bottom></Button>
    </Content>
  );
};

export default NicknamePage;
