/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useParams } from 'react-router-dom';

import { gameTitle, headerLayout, roundText } from '../../Header.styled';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import { convertMsecToSecond } from '@/pages/GamePage/components/SelectContainer/components/Timer/Timer.util';

import { useBalanceContentQuery, useFocus } from '@/hooks';

// 게임 화면
const GameHeader = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));

  const { totalRound, currentRound, timeLimit } = balanceContent;
  const screenReaderHeader = `${totalRound}라운드.중.${currentRound}라운드. 밸런스 게임 페이지. 제한 시간 ${convertMsecToSecond(timeLimit)}초.`;
  const focusRef = useFocus<HTMLElement>();

  return (
    <header css={headerLayout()} tabIndex={0} ref={focusRef}>
      <A11yOnly>{screenReaderHeader}</A11yOnly>
      <span css={roundText} aria-hidden>
        {currentRound}/{totalRound}
      </span>
      <h1 css={gameTitle} aria-hidden>
        밸런스 게임
      </h1>
      <span css={roundText} aria-hidden></span>
    </header>
  );
};

export default GameHeader;
