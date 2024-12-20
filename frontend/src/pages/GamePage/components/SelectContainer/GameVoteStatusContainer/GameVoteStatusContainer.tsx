import {
  gameVoteStatusLayout,
  voteStatusMessage,
  voteAnnounceMessage,
} from './GameVoteStatusContainer.styled';
import useVoteIsFinished from '../hooks/useVoteIsFinished';

interface GameVoteStatusContainerProps {
  contentId: number;
  isFetching: boolean;
}

const GameVoteStatusContainer = ({ contentId, isFetching }: GameVoteStatusContainerProps) => {
  const { voteCount, memberCount, isPending } = useVoteIsFinished({
    contentId,
    isFetching,
  });

  const voteStatusText = `${memberCount ?? 0}명 중 ${voteCount ?? 0}명이 투표했어요!`;

  return (
    <div css={gameVoteStatusLayout}>
      <span css={(theme) => voteStatusMessage(theme, isPending)}>{voteStatusText}</span>
      <span css={voteAnnounceMessage}>“모두 선택하면 빠르게 결과를 확인할 수 있어요”</span>
    </div>
  );
};

export default GameVoteStatusContainer;
