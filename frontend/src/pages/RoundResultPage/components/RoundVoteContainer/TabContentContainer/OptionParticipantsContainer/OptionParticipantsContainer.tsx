import OptionParticipants from './OptionParticipants/OptionParticipants';
import {
  horizontalDivider,
  optionParticipantsContainerLayout,
} from './OptionParticipantsContainer.styled';

import { Group } from '@/types/roundVoteResult';

interface OptionParticipantsContainerProps {
  groupRoundResult: Group;
}

const OptionParticipantsContainer = ({ groupRoundResult }: OptionParticipantsContainerProps) => {
  return (
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
  );
};

export default OptionParticipantsContainer;
