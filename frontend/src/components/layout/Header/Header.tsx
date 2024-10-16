import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import {
  buttonWrapper,
  gameTitle,
  headerLayout,
  roundText,
  iconImage,
  matchingResultTitle,
  matchingResultCaption,
  MatchingResultHeaderContainer,
} from './Header.styled';
import { useBlockRefresh } from './hooks/useBlockRefresh';
import { useExit } from './hooks/useExit';
import useRoutePath from './hooks/useRoutePath';

import ArrowLeft from '@/assets/images/arrowLeft.svg';
import ExitIcon from '@/assets/images/exitIcon.webp';
import SettingIcon from '@/assets/images/settingsIcon.webp';
import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

interface HeaderProps {
  title: string;
}

const Header = () => {
  const { isNicknamePage, isReadyPage, isRoundResultPage, isMatchingResultPage } = useRoutePath();

  useBlockRefresh();

  if (isNicknamePage) return <TitleHeader title="닉네임 설정" />;
  if (isReadyPage) return <RoomSettingHeader title="밸런스 게임" />;
  if (isRoundResultPage) return <RoundResultHeader />;
  if (isMatchingResultPage) return <MatchingResultHeader title="매칭 결과" />;
};

// 1. 가운데 제목과 설명이 있는 헤더 : 최종 게임 결과 화면
export const MatchingResultHeader = ({ title }: HeaderProps) => (
  <header css={headerLayout(true)}>
    <div css={MatchingResultHeaderContainer}>
      <h1 css={matchingResultTitle}>{title}</h1>
      <h2 css={matchingResultCaption}>매칭도를 통해 당신과 가장 잘 맞는 사람을 알아보세요😊</h2>
    </div>
  </header>
);

// 2. 가운데 제목만 차지하는 헤더 : 닉네임 설정 화면
export const TitleHeader = ({ title }: HeaderProps) => (
  <header css={headerLayout(true)}>
    <h1 css={gameTitle}>{title}</h1>
  </header>
);

// 3. 가운데 제목, 우측 상단 차지하는 헤더 : 게임 대기 화면
export const RoomSettingHeader = ({ title }: HeaderProps) => {
  const { show } = useModal();
  const { handleExit } = useExit();
  const { isMaster } = useRecoilValue(memberInfoState);

  const handleClickRoomSetting = () => {
    show(RoomSettingModal);
  };

  return (
    <header css={headerLayout()}>
      <button onClick={handleExit} css={buttonWrapper}>
        <img src={ExitIcon} alt="방 나가기" css={iconImage} />
      </button>
      <h1 css={gameTitle}>{title}</h1>
      {isMaster ? (
        <button onClick={handleClickRoomSetting} css={buttonWrapper}>
          <img src={SettingIcon} alt="방 설정" css={iconImage} />
        </button>
      ) : (
        <span css={roundText}></span>
      )}
    </header>
  );
};

// 4. 좌측 상단 라운드, 가운데 제목 차지하는 헤더 (API 호출 O) : 게임 화면, 라운드 통계 화면
export const RoundResultHeader = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const screenReaderRoundResult = `${balanceContent.totalRound}라운드 중. ${balanceContent.currentRound}라운드. 투표 결과 페이지`;

  return (
    <header css={headerLayout()}>
      <A11yOnly>{screenReaderRoundResult}</A11yOnly>
      <span css={roundText} aria-hidden>
        {balanceContent.currentRound}/{balanceContent.totalRound}
      </span>
      <h1 css={gameTitle} aria-hidden>
        투표 결과
      </h1>
      <span css={roundText} aria-hidden></span>
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
