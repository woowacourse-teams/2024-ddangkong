import EmptyVoteContent from './EmptyVoteContent/EmptyVoteContent';
import { tabContentContainerLayout } from './TabContentContainer.styled';
import { isExistVoteMember } from './TabContentContainer.util';
import VoteStatisticContent from './VoteStatisticContent/VoteStatisticContent';
import OptionParticipantsContainer from '../OptionParticipantsContainer/OptionParticipantsContainer';
import TopicContainer from '../TopicContainer/TopicContainer';

import useMyGameStatus from '@/hooks/useMyGameStatus';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

interface TabContentContainerProps {
  isVoteStatisticsTabActive: boolean;
  roomId: number;
  contentId: number;
}

const TabContentContainer = ({
  isVoteStatisticsTabActive,
  roomId,
  contentId,
}: TabContentContainerProps) => {
  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId,
    contentId,
  });

  useMyGameStatus({ roomId });

  const isVote = isExistVoteMember(groupRoundResult);

  return (
    <div css={tabContentContainerLayout(isVoteStatisticsTabActive)}>
      <TopicContainer />
      {isVote && isVoteStatisticsTabActive && (
        <VoteStatisticContent groupRoundResult={groupRoundResult} totalResult={totalResult} />
      )}
      {isVote && !isVoteStatisticsTabActive && (
        <OptionParticipantsContainer groupRoundResult={groupRoundResult} />
      )}
      {!isVote && <EmptyVoteContent />}
    </div>
  );
};

export default TabContentContainer;
