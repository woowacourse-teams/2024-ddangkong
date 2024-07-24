import { useNavigate } from 'react-router-dom';

import { gameResultTitle, gameResultTitleWrapper, layout } from './GameResult.styled';

import Button from '@/components/common/Button/Button';

const GameResult = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div css={layout}>
      <div css={gameResultTitleWrapper}>
        <h1 css={gameResultTitle}>게임 결과</h1>
      </div>
      <Button text="확인" onClick={goToHome} />
    </div>
  );
};

export default GameResult;
