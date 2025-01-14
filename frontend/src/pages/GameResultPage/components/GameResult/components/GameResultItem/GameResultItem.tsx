import { forwardRef } from 'react';

import {
  nicknameContainer,
  profileImage,
  rankItem,
  rankNicknameWrapper,
  rankNumber,
  rankNumberContainer,
  rankPercent,
  rankPercentWrapper,
  useInfoWrapper,
} from './GameResultItem.styled';

import SillyDdangkongMedium from '@/assets/images/sillyDdangkongMedium.webp';
import useCountAnimation from '@/hooks/useCountAnimation';
import { MemberMatchingInfo } from '@/types/balanceContent';

interface GameResultItemProps {
  memberMatchingInfo: MemberMatchingInfo;
}

const GameResultItem = forwardRef<HTMLLIElement, GameResultItemProps>(
  ({ memberMatchingInfo }, targetRef) => {
    const { rank, nickname, matchingPercent } = memberMatchingInfo;
    const animatedRankPercent = useCountAnimation({
      target: matchingPercent,
      duration: 3000,
    });

    return (
      <li css={rankItem} ref={targetRef} tabIndex={-1}>
        <div css={rankNicknameWrapper}>
          <div css={rankNumberContainer}>
            <span css={rankNumber}>{`${rank}위`}</span>
          </div>
          <div css={nicknameContainer(animatedRankPercent)}>
            <div css={useInfoWrapper}>
              <img src={SillyDdangkongMedium} alt="" css={profileImage} />
              <span css={nickname}>{nickname}</span>
            </div>
          </div>
        </div>
        <div css={rankPercentWrapper}>
          <span css={rankPercent}>{`${animatedRankPercent}%`}</span>
        </div>
      </li>
    );
  },
);

GameResultItem.displayName = 'GameResultItem';

export default GameResultItem;
