import { mainPageLayout, logoWrapper, title, intro } from './MainPage.styled';
import { useCreateRoom } from './useCreateRoom';

import logoIcon from '@/assets/images/logoIcon.png';
import Button from '@/components/common/Button/Button';

const MainPage = () => {
  const { handleRoomCreate } = useCreateRoom();

  return (
    <div css={mainPageLayout}>
      <div css={logoWrapper}>
        <img css={logoWrapper} src={logoIcon} alt="로고 아이콘" />
      </div>
      <h1 css={title}>땅콩</h1>
      <h2 css={intro}>어색한 분위기를 주도해봐요</h2>
      <Button text="방 만들기" onClick={handleRoomCreate}></Button>
    </div>
  );
};

export default MainPage;
