import {
  mainPageLayout,
  logoWrapper,
  title,
  intro,
  logoIcon,
  titleContainer,
  buttonText,
} from './MainPage.styled';
import { useCreateRoom } from './useCreateRoom';

import Ddangkong from '@/assets/images/ddangkong.png';
import Button from '@/components/common/Button/Button';

const MainPage = () => {
  const { handleRoomCreate } = useCreateRoom();

  return (
    <div css={mainPageLayout}>
      <div css={logoWrapper}>
        <img css={logoIcon} src={Ddangkong} alt="로고 아이콘" />
      </div>
      <div css={titleContainer}>
        <h1 css={title}>땅콩</h1>
        <h2 css={intro}>어색한 분위기를 주도해봐요</h2>
      </div>
      <Button css={buttonText} text="방 만들기" onClick={handleRoomCreate} radius="medium"></Button>
    </div>
  );
};

export default MainPage;
