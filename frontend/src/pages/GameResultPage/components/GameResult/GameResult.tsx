import { useRef } from 'react';

import FinalButton from './FinalButton/FinalButton';
import {
  gameResultLayout,
  rankListContainer,
  noMatchingLayout,
  noMatchingImg,
  noMatchingText,
  floatingButton,
} from './GameResult.styled';
import GameResultItem from './GameResultItem/GameResultItem';
import useMatchingResultQuery from './hooks/useMatchingResultQuery';
import useScrollControl from './hooks/useScrollControl';
import useScrollState from './hooks/useScrollState';

import ArrowDown from '@/assets/images/arrowDown.svg';
import ArrowUp from '@/assets/images/arrowUp.svg';
import SadDdangKong from '@/assets/images/sadDdangkong.webp';
import Spinner from '@/components/common/Spinner/Spinner';

const GameResult = () => {
  const { matchedMembers, existMatching, isLoading } = useMatchingResultQuery();
  const { resultContainerRef, isAtTop, isAtBottom } = useScrollState();
  const firstRankLiRef = useRef<HTMLLIElement>(null);
  const lastRankLiRef = useRef<HTMLLIElement>(null);
  const { scrollToTop, scrollToBottom } = useScrollControl(resultContainerRef);

  const handleScrollToTop = () => {
    scrollToTop();
    firstRankLiRef.current?.focus();
  };

  const handleScrollToBottom = () => {
    scrollToBottom();
    lastRankLiRef.current?.focus();
  };

  const getRefForIndex = (
    index: number,
    length: number,
    firstRef: React.RefObject<HTMLLIElement>,
    lastRef: React.RefObject<HTMLLIElement>,
  ): React.RefObject<HTMLLIElement> | null => {
    if (index === 0) return firstRef;
    if (index === length - 1) return lastRef;
    return null;
  };

  return (
    <>
      <div css={gameResultLayout} ref={resultContainerRef}>
        {isLoading && <Spinner message="매칭 결과를 불러오는 중입니다..." />}
        {existMatching && !isAtBottom && (
          <button onClick={handleScrollToBottom} css={floatingButton('down')}>
            <img src={ArrowDown} alt="가장 낮은 순위로 이동" />
          </button>
        )}
        {existMatching && (
          <ol css={rankListContainer}>
            {matchedMembers &&
              matchedMembers.map((memberMatchingInfo, index) => (
                <GameResultItem
                  key={memberMatchingInfo.rank}
                  memberMatchingInfo={memberMatchingInfo}
                  ref={getRefForIndex(index, matchedMembers.length, firstRankLiRef, lastRankLiRef)}
                />
              ))}
          </ol>
        )}
        {existMatching && !isAtTop && (
          <button onClick={handleScrollToTop} css={floatingButton('up')}>
            <img src={ArrowUp} alt="가장 높은 순위로 이동" />
          </button>
        )}
        {!isLoading && !existMatching && (
          <div css={noMatchingLayout}>
            <img src={SadDdangKong} alt="서운한 땅콩" css={noMatchingImg} />
            <span css={noMatchingText}>
              {'이번에는 나와 같은 선택을 한 사람이 없지만,\n다음 게임을 기대해 볼까요?'}
            </span>
          </div>
        )}
      </div>
      <FinalButton />
    </>
  );
};

export default GameResult;
