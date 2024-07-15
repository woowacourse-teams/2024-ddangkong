import { layout } from './GameResult.styled';

import Button from '@/components/common/Button/Button';

const GameResult = () => {
  return (
    <div css={layout}>
      <h1>게임 결과</h1>
      <Button />
    </div>
  );
};

export default GameResult;
