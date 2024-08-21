import { profile, nicknameBox, nicknameInputWrapper, nicknameInput } from './NicknamePage.styled';
import { useMakeOrEnterRoom } from './useMakeOrEnterRoom';

import AlertModal from '@/components/common/AlertModal/AlertModal';
import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import useModal from '@/hooks/useModal';

const NicknamePage = () => {
  const { isOpen, show, close } = useModal();
  const { randomNickname, nicknameInputRef, handleMakeOrEnterRoom } = useMakeOrEnterRoom(show);

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
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        message="방 참가 실패했습니다"
        title="방 참가 실패"
      />
    </Content>
  );
};

export default NicknamePage;
