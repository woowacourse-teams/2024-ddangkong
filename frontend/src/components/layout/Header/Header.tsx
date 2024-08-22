import { useNavigate, useParams } from 'react-router-dom';

import { buttonWrapper, gameTitle, headerLayout, roundText, iconImage } from './Header.styled';
import { useBlockRefresh } from './hooks/useBlockRefresh';
import { useExit } from './hooks/useExit';
import useRoutePath from './hooks/useRoutePath';

import ArrowLeft from '@/assets/images/arrowLeft.svg';
import ExitIcon from '@/assets/images/exitIcon.png';
import SettingIcon from '@/assets/images/settingsIcon.svg';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';

interface HeaderProps {
  title: string;
}

const Header = () => {
  const { isNicknamePage, isReadyPage, isRoundResultStatusPage, isFinalResultPage } =
    useRoutePath();

  useBlockRefresh();

  if (isNicknamePage) return <TitleHeader title="닉네임 설정" />;
  if (isReadyPage) return <RoomSettingHeader title="밸런스 게임" />;
  if (isRoundResultStatusPage) return <BackHeader title="투표 현황" />;
  if (isFinalResultPage) return <EmptyHeader />;

  return <RoundHeader />;
};

// 1. 공간만 차지하는 빈 헤더 : 최종 게임 결과 화면
export const EmptyHeader = () => <header css={headerLayout()}></header>;

// 2. 가운데 제목만 차지하는 헤더 : 닉네임 설정 화면
export const TitleHeader = ({ title }: HeaderProps) => (
  <header css={headerLayout(true)}>
    <h1 css={gameTitle}>{title}</h1>
  </header>
);

// 3. 가운데 제목, 우측 상단 차지하는 헤더 : 게임 대기 화면
export const RoomSettingHeader = ({ title }: HeaderProps) => {
  const { isOpen, show, close } = useModal();
  const { handleExit } = useExit();

  return (
    <header css={headerLayout()}>
      <button onClick={handleExit} css={buttonWrapper}>
        <img src={ExitIcon} alt="방 설정" css={iconImage} />
      </button>
      <h1 css={gameTitle}>{title}</h1>
      <button onClick={show} css={buttonWrapper}>
        <img src={SettingIcon} alt="방 설정" css={iconImage} />
      </button>
      {isOpen && <RoomSettingModal isOpen={isOpen} onClose={close} />}
    </header>
  );
};

// 4. 좌측 상단 라운드, 가운데 제목 차지하는 헤더 (API 호출 O) : 게임 화면, 라운드 통계 화면
export const RoundHeader = () => {
  const { roomId } = useParams();
  const isRoundResultPage = location.pathname === ROUTES.roundResult(Number(roomId));

  const { balanceContent } = useBalanceContentQuery(Number(roomId));

  const title = isRoundResultPage ? '투표 결과' : '밸런스 게임';

  if (!balanceContent) return null;

  return (
    <header css={headerLayout()}>
      <span css={roundText}>{`${balanceContent?.currentRound}/${balanceContent?.totalRound}`}</span>
      <h1 css={gameTitle}>{title}</h1>
      <span css={roundText}></span>
    </header>
  );
};

// 5. 좌측 상단 뒤로가기, 가운데 제목 차지하는 헤더 (API 호출 X) : 라운드 투표 현황
export const BackHeader = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };
  return (
    <header css={headerLayout()}>
      <button onClick={goToBack} css={buttonWrapper}>
        <img src={ArrowLeft} alt="뒤로 가기" />
      </button>
      <h1 css={gameTitle}>{title}</h1>
      <span css={roundText}></span>
    </header>
  );
};

export default Header;
