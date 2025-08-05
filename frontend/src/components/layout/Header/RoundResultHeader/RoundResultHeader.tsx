/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import { gameTitle, headerLayout, roundText, stopButton } from '../Header.styled';
import { useStopGameMutation } from '../hooks';

import A11yOnly from '@/components/common/A11yOnly/A11yOnly';

import { AlertModal } from '@/components';
import { useBalanceContentQuery, useFocus, useModal } from '@/hooks';

// 좌측 상단 라운드, 가운데 제목 차지하는 헤더 (API 호출 O) : 라운드 통계 화면
const RoundResultHeader = () => {
  const { roomId } = useParams();
  const { mutate: stopGame } = useStopGameMutation(Number(roomId));
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { showModal } = useModal();
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const screenReaderRoundResult = `${balanceContent.totalRound}라운드 중. ${balanceContent.currentRound}라운드. 투표 결과 페이지`;
  const focusRef = useFocus<HTMLElement>();

  const handleStopGame = () => {
    showModal(AlertModal, {
      title: '게임 중단',
      message: '게임을 중단하고 결과 화면으로 이동하시겠습니까?',
      onConfirm: stopGame,
      returnFocusRef,
    });
  };

  return (
    <header css={headerLayout()} tabIndex={0} ref={focusRef}>
      <A11yOnly>{screenReaderRoundResult}</A11yOnly>
      <span css={roundText} aria-hidden>
        {balanceContent.currentRound}/{balanceContent.totalRound}
      </span>
      <h1 css={gameTitle} aria-hidden>
        투표 결과
      </h1>
      <div>
        <button ref={returnFocusRef} css={stopButton} onClick={handleStopGame}>
          게임중단
        </button>
      </div>
    </header>
  );
};

export default RoundResultHeader;
