import {
  nicknameContainer,
  profileImage,
  rankItem,
  rankNicknameWrapper,
  rankNumber,
  rankNumberContainer,
  rankPercent,
  rankPercentWrapper,
} from './GameResultItem.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.webp';
import useCountAnimation from '@/hooks/useCountAnimation';
import { MemberMatchingInfo } from '@/types/balanceContent';

interface GameResultItemProps {
  memberMatchingInfo: MemberMatchingInfo;
}

const GameResultItem = ({ memberMatchingInfo }: GameResultItemProps) => {
  const { rank, nickname, matchingPercent } = memberMatchingInfo;
  const animatedRankPercent = useCountAnimation({
    target: matchingPercent,
    duration: 3000,
  });

  return (
    <li css={rankItem}>
      <div css={rankNicknameWrapper}>
        <div css={rankNumberContainer}>
          <span css={rankNumber}>{`${rank}위`}</span>
        </div>
        <div css={nicknameContainer(animatedRankPercent)}>
          <img src={SillyDdangkong} alt="" css={profileImage} />
          <span css={nickname}>{nickname}</span>
        </div>
      </div>
      <div css={rankPercentWrapper}>
        <span css={rankPercent}>{`${animatedRankPercent}%`}</span>
      </div>
    </li>
  );
};

export default GameResultItem;
