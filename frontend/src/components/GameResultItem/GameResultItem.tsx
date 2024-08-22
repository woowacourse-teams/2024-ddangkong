import {
  nickname,
  nicknameContainer,
  profileImage,
  rankInfoContainer,
  rankItem,
  rankNumber,
  rankPercent,
} from './GameResultItem.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.png';
import useCountAnimation from '@/hooks/useCountAnimation';
import { MemberMatchingInfo } from '@/types/balanceContent';

interface GameResultItemProps {
  memberMatchingInfo: MemberMatchingInfo;
}

const GameResultItem = ({ memberMatchingInfo }: GameResultItemProps) => {
  const animatedRankPercent = useCountAnimation({
    target: memberMatchingInfo.matchingPercent,
    duration: 3000,
  });

  return (
    <li css={rankItem}>
      <div css={rankInfoContainer}>
        <span css={rankNumber}>{memberMatchingInfo.rank}</span>
        <div css={nicknameContainer(animatedRankPercent)}>
          <img src={SillyDdangkong} alt="사용자 프로필" css={profileImage} />
          <span css={nickname}>{memberMatchingInfo.nickname}</span>
        </div>
      </div>
      <span css={rankPercent}>{animatedRankPercent}%</span>
    </li>
  );
};

export default GameResultItem;
