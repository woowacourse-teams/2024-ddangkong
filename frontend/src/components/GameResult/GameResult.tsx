import { useMatchingResultQuery } from './GameResult.hook';
import {
  gameResultLayout,
  rankListContainer,
  noMatchingLayout,
  noMatchingImg,
  noMatchingText,
  floatingButton,
} from './GameResult.styled';
import useScrollControl from './hooks/useScrollControl';
import useScrollState from './hooks/useScrollState';
import FinalButton from '../common/FinalButton/FinalButton';
import Spinner from '../common/Spinner/Spinner';
import GameResultItem from '../GameResultItem/GameResultItem';

import ArrowDown from '@/assets/images/arrowDown.svg';
import ArrowUp from '@/assets/images/arrowUp.svg';
import SadDdangKong from '@/assets/images/sadDdangkong.webp';

const GameResult = () => {
  const { matchedMembers, existMatching, isLoading } = useMatchingResultQuery();
  const { resultContainerRef, isAtTop, isAtBottom } = useScrollState();
  const { scrollToTop, scrollToBottom } = useScrollControl(resultContainerRef);

  return (
    <>
      <div css={gameResultLayout} ref={resultContainerRef}>
        {isLoading && <Spinner message="매칭 결과를 불러오는 중입니다..." />}

        {existMatching && (
          <ol css={rankListContainer}>
            {matchedMembers &&
              matchedMembers.map((memberMatchingInfo) => (
                <GameResultItem
                  key={memberMatchingInfo.rank}
                  memberMatchingInfo={memberMatchingInfo}
                />
              ))}
          </ol>
        )}

        {!isLoading && !existMatching && (
          <div css={noMatchingLayout}>
            <img src={SadDdangKong} alt="서운한 땅콩" css={noMatchingImg} />
            <span css={noMatchingText}>
              {'이번에는 나와 같은 선택을 한 사람이 없지만,\n다음 게임을 기대해 볼까요?'}
            </span>
          </div>
        )}

        {existMatching && !isAtTop && (
          <button onClick={scrollToTop} css={floatingButton('up')}>
            <img src={ArrowUp} alt="가장 높은 순위로 이동" />
          </button>
        )}
        {existMatching && !isAtBottom && (
          <button onClick={scrollToBottom} css={floatingButton('down')}>
            <img src={ArrowDown} alt="가장 낮은 순위로 이동" />
          </button>
        )}
      </div>
      <FinalButton />
    </>
  );
};

export default GameResult;
