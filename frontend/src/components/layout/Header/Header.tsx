import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { emptyBox, gameTitle, headerLayout, roundText, settingImage } from './Header.styled';

import ArrowLeft from '@/assets/images/arrowLeft.svg';
import SettingIcon from '@/assets/images/settingsIcon.svg';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';

interface HeaderProps {
  title: string;
}

const Header = () => {
  const location = useLocation();
  const { roomId } = useParams();

  const currentPath = {
    isNicknamePage: location.pathname === ROUTES.nickname,
    isReadyPage: location.pathname === ROUTES.ready(Number(roomId)),
    isFinalResultPage: location.pathname === ROUTES.gameResult(Number(roomId)),
    isRoundResultStatusPage: location.pathname === ROUTES.roundResultStatus(Number(roomId)),
  };

  if (currentPath.isNicknamePage) return <TitleHeader title="닉네임 설정" />;
  if (currentPath.isReadyPage) return <RoomSettingHeader title="밸런스 게임" />;
  if (currentPath.isRoundResultStatusPage) return <BackHeader title="투표 현황" />;
  if (currentPath.isFinalResultPage) return <EmptyHeader />;

  return <RoundHeader />;
};

// 1. 공간만 차지하는 빈 헤더 : 최종 게임 결과 화면
const EmptyHeader = () => <header css={headerLayout}></header>;

// 2. 가운데 제목만 차지하는 헤더 : 닉네임 설정 화면
const TitleHeader = ({ title }: HeaderProps) => (
  <header css={headerLayout}>
    <span></span>
    <span css={gameTitle}>{title}</span>
    <span></span>
  </header>
);

// 3. 가운데 제목, 우측 상단 차지하는 헤더 : 게임 대기 화면
const RoomSettingHeader = ({ title }: HeaderProps) => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <header css={headerLayout}>
      <div css={emptyBox}></div>
      <span css={gameTitle}>{title}</span>
      <button onClick={handleModalOpen}>
        <img src={SettingIcon} alt="방 설정" css={settingImage} />
      </button>
      {isModalOpen && <RoomSettingModal isOpen={isModalOpen} onClose={handleModalClose} />}
    </header>
  );
};

// 4. 좌측 상단 라운드, 가운데 제목 차지하는 헤더 (API 호출 O) : 게임 화면, 라운드 통계 화면
const RoundHeader = () => {
  const { roomId } = useParams();
  const isRoundResultPage = location.pathname === ROUTES.roundResult(Number(roomId));
  const { balanceContent } = useBalanceContentQuery(Number(roomId));

  const title = isRoundResultPage ? '투표 결과' : '밸런스 게임';

  if (!balanceContent) return null;

  return (
    <header css={headerLayout}>
      <span css={roundText}>{`${balanceContent?.currentRound}/${balanceContent?.totalRound}`}</span>
      <span css={gameTitle}>{title}</span>
      <span css={roundText}></span>
    </header>
  );
};

// 5. 좌측 상단 뒤로가기, 가운데 제목 차지하는 헤더 (API 호출 X) : 라운드 투표 현황
const BackHeader = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <header css={headerLayout}>
      <button onClick={goToBack}>
        <img src={ArrowLeft} alt="뒤로 가기" />
      </button>
      <span css={gameTitle}>{title}</span>
      <span css={roundText}></span>
    </header>
  );
};

export default Header;
