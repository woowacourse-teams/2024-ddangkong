import { useParams } from 'react-router-dom';

import {
  dividerLine,
  optionParticipantsContainerLayout,
} from './OptionParticipantsContainer.styled';
import OptionParticipants from '../OptionParticipants/OptionParticipants';
import TopicContainer from '../TopicContainer/TopicContainer';

import useMyGameStatus from '@/hooks/useMyGameStatus';

const OptionParticipantsContainer = () => {
  const { groupRoundResult } = useMyGameStatus();

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
