import { layout } from './GameResult.styled';

import Button from '@/components/common/Button/Button';

const GameResult = () => {
  return (
    <div css={layout}>
      <h1>게임 결과</h1>
      <Button text="확인" active={true} onClick={() => console.log('클릭')} />
    </div>
  );
};

export default GameResult;
