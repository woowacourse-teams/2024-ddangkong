import { readyPageLayout } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import ReadySkeleton from '@/components/common/Skeleton/ReadySkeleton/ReadySkeleton';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';
import StartButtonContainer from '@/components/StartButtonContainer/StartButtonContainer';

const ReadyPage = () => {
  return (
    <AsyncErrorBoundary pendingFallback={<ReadySkeleton />}>
      <div css={readyPageLayout}>
        <CategoryContainer />
        <ReadyMembersContainer />
        <StartButtonContainer />
      </div>
    </AsyncErrorBoundary>
  );
};

export default ReadyPage;
