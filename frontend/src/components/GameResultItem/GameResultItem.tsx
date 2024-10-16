import {
  nickname,
  nicknameContainer,
  profileImage,
  rankInfoContainer,
  rankItem,
  rankNumber,
  rankPercent,
} from './GameResultItem.styled';
import A11yOnly from '../common/a11yOnly/A11yOnly';

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
  const screenReaderRanking = `${rank}위. ${nickname} ${matchingPercent}%`;

  return (
    <li css={rankItem}>
      <A11yOnly>{screenReaderRanking}</A11yOnly>
      <div css={rankInfoContainer} aria-hidden>
        <span css={rankNumber}>{rank}</span>
        <div css={nicknameContainer(animatedRankPercent)}>
          <img src={SillyDdangkong} alt="" css={profileImage} />
          <span css={nickname}>{nickname}</span>
        </div>
        <span css={rankPercent}>{animatedRankPercent}%</span>
      </div>
    </li>
  );
};

export default GameResultItem;
