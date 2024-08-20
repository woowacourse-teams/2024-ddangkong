import { useParams } from 'react-router-dom';

import {
  horizontalDivider,
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
  const { groupRoundResult } = useRoundVoteResultQuery({
    roomId: Number(roomId),
    contentId: balanceContent?.contentId,
  });

  useMyGameStatus({ roomId: Number(roomId) });

  if (!groupRoundResult) {
    return <div>데이터가 없습니다</div>;
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
        <div css={horizontalDivider}></div>
        <OptionParticipants
          optionName={groupRoundResult.secondOption.name}
          members={groupRoundResult.secondOption.members}
          memberCount={groupRoundResult.secondOption.memberCount}
        />
        <div css={horizontalDivider}></div>
        <OptionParticipants
          optionName={'투표에 참여하지 않으셨어요'}
          members={groupRoundResult.giveUp.members}
          memberCount={groupRoundResult.giveUp.memberCount}
        />
      </section>
    </>
  );
};

export default OptionParticipantsContainer;
