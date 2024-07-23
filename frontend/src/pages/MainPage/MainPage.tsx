import { useNavigate } from 'react-router-dom';

import { mainPageLayout, logoWrapper, title, intro } from './MainPage.styled';

import Button from '@/components/common/Button/Button';

const MainPage = () => {
  const navigate = useNavigate();

  const goToNicknamePage = () => {
    navigate('/nickname');
  };

  return (
    <div css={mainPageLayout}>
      <div css={logoWrapper}>LO to the GO</div>
      <h1 css={title}>땅콩</h1>
      <div css={intro}>어색한 분위기를 주도해봐요</div>
      <Button text="방 만들기" active={true} onClick={goToNicknamePage}></Button>
    </div>
  );
};

export default MainPage;
