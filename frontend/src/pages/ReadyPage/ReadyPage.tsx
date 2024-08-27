import { readyPageLayout } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import Spinner from '@/components/common/Spinner/Spinner';
import StartButton from '@/components/common/StartButton/StartButton';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  return (
    <AsyncErrorBoundary pendingFallback={<Spinner />}>
      <div css={readyPageLayout}>
        <CategoryContainer />
        <ReadyMembersContainer />
        <StartButton />
      </div>
    </AsyncErrorBoundary>
  );
};

export default ReadyPage;
