import { useParams } from 'react-router-dom';

import {
  dividerLine,
  optionParticipantsContainerLayout,
} from './OptionParticipantsContainer.styled';
import OptionParticipants from '../OptionParticipants/OptionParticipants';
import TopicContainer from '../TopicContainer/TopicContainer';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatus from '@/hooks/useMyGameStatus';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const OptionParticipantsContainer = () => {
  const { roomId } = useParams();
  const { balanceContent } = useBalanceContentQuery();
  const currentRound = balanceContent?.currentRound;
  const { groupRoundResult } = useRoundVoteResultQuery({
    roomId: Number(roomId),
    contentId: balanceContent?.contentId,
  });

  useMyGameStatus({ roomId: Number(roomId), currentRound });

  if (!groupRoundResult) {
    return null;
  }

  return (
    <>
      <TopicContainer />
      <section css={optionParticipantsContainerLayout}>
        <OptionParticipants
          optionName={groupRoundResult.firstOption.name}
          members={groupRoundResult.firstOption.members}
          memberCount={groupRoundResult.firstOption.memberCount}
        />
        <div css={dividerLine}></div>
        <OptionParticipants
          optionName={groupRoundResult.secondOption.name}
          members={groupRoundResult.secondOption.members}
          memberCount={groupRoundResult.secondOption.memberCount}
        />
      </section>
    </>
  );
};

export default OptionParticipantsContainer;
