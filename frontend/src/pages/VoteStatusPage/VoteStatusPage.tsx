import PrevButton from '@/components/common/PrevButton/PrevButton';
import Content from '@/components/layout/Content/Content';
import OptionParticipantsContainer from '@/components/OptionParticipantsContainer/OptionParticipantsContainer';

const VoteStatusPage = () => {
  return (
    <Content>
      <OptionParticipantsContainer />
      <PrevButton />
    </Content>
  );
};

export default VoteStatusPage;
