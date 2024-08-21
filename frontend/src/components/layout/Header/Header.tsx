import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { emptyBox, gameTitle, headerLayout, roundText, iconImage } from './Header.styled';

import { exitRoom } from '@/apis/room';
import GoOutIcon from '@/assets/images/goOutIcon.png';
import SettingIcon from '@/assets/images/settingsIcon.svg';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

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
  const { isOpen, show, close } = useModal();

  const isReadyPage = location.pathname === ROUTES.ready(Number(roomId));
  const isRoundResultPage = location.pathname === ROUTES.roundResult(Number(roomId));
  const isFinalPage = location.pathname === ROUTES.gameResult(Number(roomId));
  const isNicknamePage = location.pathname.startsWith(ROUTES.nickname);

  const { memberId } = useRecoilValue(memberInfoState);
  const navigate = useNavigate();

  const exitRoomMutation = useMutation<void, Error, { roomId: number; memberId: number }>({
    mutationFn: ({ roomId, memberId }) => exitRoom(roomId, memberId),
    onSuccess: () => {
      navigate('/');
    },
  });

  const handleClick = () => {
    exitRoomMutation.mutate({ roomId: Number(roomId), memberId: Number(memberId) });
  };

  if (isReadyPage) {
    return (
      <header css={headerLayout}>
        <button onClick={handleClick}>
          <img src={GoOutIcon} alt="방 나가기" css={iconImage} />
        </button>
        <span css={gameTitle}>밸런스 게임</span>
        <button onClick={show}>
          <img src={SettingIcon} alt="방 설정" css={iconImage} />
        </button>
        {isOpen && <RoomSettingModal isOpen={isOpen} onClose={close} />}
      </header>
    );
  }

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
        {balanceContent && `${balanceContent.currentRound}/${balanceContent.totalRound}`}
      </span>
      <span css={gameTitle}>{title}</span>
      <div css={roundText}></div>
    </header>
  );
};

export default Header;
