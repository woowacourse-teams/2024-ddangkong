import { useNavigate } from 'react-router-dom';

import { layout } from './GameResult.styled';

import Button from '@/components/common/Button/Button';

const GameResult = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div css={layout}>
      <h1>게임 결과</h1>
      <Button text="확인" active={true} onClick={goToHome} />
    </div>
  );
};

export default GameResult;
