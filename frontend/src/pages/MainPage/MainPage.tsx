import useCreateRoom from './hooks/useCreateRoom';
import {
  mainPageLayout,
  logoWrapper,
  title,
  intro,
  logoIcon,
  titleContainer,
  buttonText,
} from './MainPage.styled';

import Ddangkong from '@/assets/images/ddangkong.webp';
import Button from '@/components/common/Button/Button';
import useGAPageTimeSpent from '@/lib/googleAnalytics/hooks/useGAPageTimeSpent';

const MainPage = () => {
  const { handleRoomCreate } = useCreateRoom();

  useGAPageTimeSpent('메인 페이지');

  return (
    <div css={mainPageLayout}>
      <div css={logoWrapper}>
        <img css={logoIcon} src={Ddangkong} alt="땅콩 로고" />
      </div>
      <div css={titleContainer}>
        <h1 css={title}>땅콩</h1>
        <h2 css={intro}>어색한 분위기를 주도해봐요</h2>
      </div>
      <Button css={buttonText} text="방 만들기" onClick={handleRoomCreate} radius="medium" />
    </div>
  );
};

export default MainPage;
