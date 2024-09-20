import { useMatchingResultQuery } from './GameResult.hook';
import {
  gameResultTitle,
  gameResultLayout,
  rankListContainer,
  noMatchingLayout,
  noMatchingImg,
  noMatchingText,
  gameResultHeader,
  gameResultCaption,
} from './GameResult.styled';
import AlertModal from '../common/AlertModal/AlertModal';
import FinalButton from '../common/FinalButton/FinalButton';
import Spinner from '../common/Spinner/Spinner';
import GameResultItem from '../GameResultItem/GameResultItem';

import SadDdangKong from '@/assets/images/sadDdangkong.png';
import useModal from '@/hooks/useModal';

const GameResult = () => {
  const { isOpen, show, close } = useModal();
  const { matchedMembers, existMatching, isLoading } = useMatchingResultQuery();

  return (
    <>
      <div css={gameResultLayout}>
        <header css={gameResultHeader}>
          <h1 css={gameResultTitle}>매칭 결과</h1>
          <h2 css={gameResultCaption}>매칭도를 통해 당신과 가장 잘 맞는 사람을 알아보세요😊</h2>
        </header>
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
      </div>
      <FinalButton showModal={show} />
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        title="방 초기화 에러"
        message="방을 초기화하는데 실패했어요. 다시 시도해주세요"
      />
    </>
  );
};

export default GameResult;
