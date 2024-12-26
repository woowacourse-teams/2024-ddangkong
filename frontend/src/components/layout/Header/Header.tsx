/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import { useBlockRefresh, useExit, useRoutePath } from './hooks';

import AlertModal from '@/components/AlertModal/AlertModal';
import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import RoomSettingModal from '@/components/RoomSettingModal/RoomSettingModal';
import { convertMsecToSecond } from '@/pages/GamePage/components/SelectContainer/components/Timer/Timer.util';

import { ArrowLeft, ExitIcon, SettingIcon } from '@/assets';
import { useBalanceContentQuery, useFocus, useIsMaster, useModal } from '@/hooks';

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
export const MatchingResultHeader = ({ title }: HeaderProps) => {
  const focusRef = useFocus<HTMLElement>();
  return (
    <header css={headerLayout(true)} tabIndex={0} ref={focusRef}>
      <div css={MatchingResultHeaderContainer}>
        <h1 css={matchingResultTitle}>{title}</h1>
        <h2 css={matchingResultCaption}>매칭도를 통해 당신과 가장 잘 맞는 사람을 알아보세요😊</h2>
      </div>
    </header>
  );
};

// 2. 가운데 제목만 차지하는 헤더 : 닉네임 설정 화면
export const TitleHeader = ({ title }: HeaderProps) => (
  <header css={headerLayout(true)}>
    <h1 css={gameTitle}>{title}</h1>
  </header>
);

// 3. 가운데 제목, 우측 상단 차지하는 헤더 : 게임 대기 화면
export const RoomSettingHeader = ({ title }: HeaderProps) => {
  const isMaster = useIsMaster();
  const { showModal } = useModal();

  const { handleExit } = useExit();
  const returnFocusRef = useRef(null);
  const focusRef = useFocus<HTMLElement>();

  const handleClickRoomSetting = () => {
    showModal(RoomSettingModal, { returnFocusRef });
  };

  const handleClickExit = () => {
    showModal(AlertModal, { message: '정말로 나가시겠습니까?', onConfirm: handleExit });
  };

  return (
    <header css={headerLayout()} tabIndex={0} ref={focusRef}>
      <button onClick={handleClickExit} css={buttonWrapper}>
        <img src={ExitIcon} alt="방 나가기" css={iconImage} />
      </button>
      <h1 css={gameTitle}>{title}</h1>
      {isMaster ? (
        <button ref={returnFocusRef} onClick={handleClickRoomSetting} css={buttonWrapper}>
          <img src={SettingIcon} alt="방 설정" css={iconImage} />
        </button>
      ) : (
        <span css={roundText}></span>
      )}
    </header>
  );
};

// 4. 좌측 상단 라운드, 가운데 제목 차지하는 헤더 (API 호출 O) : 라운드 통계 화면
export const RoundResultHeader = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const screenReaderRoundResult = `${balanceContent.totalRound}라운드 중. ${balanceContent.currentRound}라운드. 투표 결과 페이지`;
  const focusRef = useFocus<HTMLElement>();

  return (
    <header css={headerLayout()} tabIndex={0} ref={focusRef}>
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

// 게임 화면
export const GameHeader = () => {
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

// 5. 좌측 상단 뒤로가기, 가운데 제목 차지하는 헤더 (API 호출 X) : 라운드 투표 현황
export const BackHeader = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const focusRef = useFocus<HTMLElement>();
  const goToBack = () => {
    navigate(-1);
  };

  return (
    <header css={headerLayout()} tabIndex={0} ref={focusRef}>
      <button onClick={goToBack} css={buttonWrapper}>
        <img src={ArrowLeft} alt="뒤로 가기" />
      </button>
      <h1 css={gameTitle}>{title}</h1>
      <span css={roundText}></span>
    </header>
  );
};

export default Header;
