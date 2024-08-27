import { readyPageLayout } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import StartButton from '@/components/common/StartButton/StartButton';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  return (
    <div css={readyPageLayout}>
      <CategoryContainer />
      <ReadyMembersContainer />
      <StartButton />
    </div>
  );
};

export default ReadyPage;
