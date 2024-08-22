import { useMatchingResultQuery } from './GameResult.hook';
import {
  gameResultTitle,
  gameResultLayout,
  rankListContainer,
  noMatchingLayout,
  noMatchingImg,
  noMatchingText,
} from './GameResult.styled';
import FinalButton from '../common/FinalButton/FinalButton';
import Spinner from '../common/Spinner/Spinner';
import GameResultItem from '../GameResultItem/GameResultItem';

import SadDdangKong from '@/assets/images/sadDdangkong.png';

const GameResult = () => {
  const { matchedMembers, existMatching, isLoading } = useMatchingResultQuery();

  return (
    <>
      <div css={gameResultLayout}>
        <h1 css={gameResultTitle}>게임 결과</h1>

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

        {!existMatching && (
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
