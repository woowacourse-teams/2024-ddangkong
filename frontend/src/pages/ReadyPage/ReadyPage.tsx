import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Content from '@/components/layout/Content/Content';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';
import StartButtonContainer from '@/components/StartButtonContainer/StartButtonContainer';

const ReadyPage = () => {
  return (
    <Content>
      <CategoryContainer />
      <ReadyMembersContainer />
      <StartButtonContainer />
    </Content>
  );
};

export default ReadyPage;
