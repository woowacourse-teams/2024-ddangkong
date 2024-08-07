import { useLocation, useParams } from 'react-router-dom';

import { gameTitle, headerLayout, roundText } from './Header.styled';

import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

interface HeaderProps {
  title: string;
}

// TODO: Header 분리
// 1. 공간만 차지하는 빈 헤더 : 게임 결과 화면
// 2. 가운데 제목만 차지하는 헤더 : 닉네임 설정 화면, 게임 대기 화면
// 3. 좌측 상단과 가운데 제목 차지하는 헤더 : 게임 화면, 라운드 통계 화면, 라운드 투표 현황
const Header = ({ title }: HeaderProps) => {
  const { balanceContent } = useBalanceContentQuery();
  const location = useLocation();
  const { roomId } = useParams();

  const isRoundResultPage = location.pathname === ROUTES.roundResult(Number(roomId));
  const isFinalPage = location.pathname === ROUTES.gameResult(Number(roomId));
  const isNicknamePage = location.pathname.startsWith(ROUTES.nickname);

  if (isFinalPage) {
    return <header css={headerLayout}></header>;
  }

  if (isRoundResultPage) {
    return (
      <header css={headerLayout}>
        <span></span>
        <span css={gameTitle}>투표 결과</span>
        <span></span>
      </header>
    );
  }

  if (isNicknamePage) {
    return (
      <header css={headerLayout}>
        <span></span>
        <span css={gameTitle}>닉네임 설정</span>
        <span></span>
      </header>
    );
  }

  return (
    <header css={headerLayout}>
      <span css={roundText}>
        {balanceContent ? `${balanceContent.currentRound}/${balanceContent.totalRound}` : '1/5'}
      </span>
      <span css={gameTitle}>{title}</span>
      <div css={roundText}></div>
    </header>
  );
};

export default Header;
