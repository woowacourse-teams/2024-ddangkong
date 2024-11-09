import { useParams } from 'react-router-dom';

import EmptyVoteContent from './EmptyVoteContent/EmptyVoteContent';
import OptionParticipantsContainer from './OptionParticipantsContainer/OptionParticipantsContainer';
import { tabContentContainerLayout } from './TabContentContainer.styled';
import { isExistVoteMember } from './TabContentContainer.util';
import VoteStatisticContent from './VoteStatisticContent/VoteStatisticContent';

import TopicContainer from '@/components/TopicContainer/TopicContainer';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatus from '@/hooks/useMyGameStatus';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

interface TabContentContainerProps {
  isVoteStatisticsTabActive: boolean;
}

const TabContentContainer = ({ isVoteStatisticsTabActive }: TabContentContainerProps) => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery(Number(roomId));
  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId: Number(roomId),
    contentId: balanceContent.contentId,
  });

  useMyGameStatus({ roomId: Number(roomId) });

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
