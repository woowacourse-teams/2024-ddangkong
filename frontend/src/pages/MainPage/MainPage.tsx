import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { mainPageLayout, logoWrapper, title, intro } from './MainPage.styled';

import Button from '@/components/common/Button/Button';
import { memberInfoState } from '@/recoil/atom';

const MainPage = () => {
  const navigate = useNavigate();
  const setMemberInfo = useSetRecoilState(memberInfoState);

  const goToNicknamePage = () => {
    navigate('/nickname');
  };

  const handleClick = () => {
    goToNicknamePage();
    setMemberInfo((memberInfo) => ({ ...memberInfo, isMaster: true }));
  };

  return (
    <div css={mainPageLayout}>
      <div css={logoWrapper}>LO to the GO</div>
      <h1 css={title}>땅콩</h1>
      <h2 css={intro}>어색한 분위기를 주도해봐요</h2>
      <Button text="방 만들기" onClick={handleClick}></Button>
    </div>
  );
};

export default MainPage;
