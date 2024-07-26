import PrevButton from '@/components/common/PrevButton/PrevButton';
import Content from '@/components/layout/Content/Content';
import Header from '@/components/layout/Header/Header';
import OptionParticipantsContainer from '@/components/OptionParticipantsContainer/OptionParticipantsContainer';

const VoteStatusPage = () => {
  return (
    <>
      <Header title="투표 현황" />
      <Content>
        <OptionParticipantsContainer />
        <PrevButton />
      </Content>
    </>
  );
};

export default VoteStatusPage;
