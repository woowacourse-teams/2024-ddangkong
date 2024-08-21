import { useMatchingResultQuery } from './GameResult.hook';
import { gameResultTitle, gameResultLayout, rankListContainer } from './GameResult.styled';
import FinalButton from '../common/FinalButton/FinalButton';
import GameResultItem from '../GameResultItem/GameResultItem';

const GameResult = () => {
  const { matchedMembers, existMatching, isLoading } = useMatchingResultQuery();
  return (
    <>
      <div css={gameResultLayout}>
        <h1 css={gameResultTitle}>게임 결과</h1>
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
      </div>
      <FinalButton />
    </>
  );
};

export default GameResult;
