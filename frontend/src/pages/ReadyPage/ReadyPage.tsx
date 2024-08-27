import { readyPageLayout } from './ReadyPage.styled';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import Spinner from '@/components/common/Spinner/Spinner';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';
import StartButtonContainer from '@/components/StartButtonContainer/StartButtonContainer';

const ReadyPage = () => {
  return (
    <AsyncErrorBoundary pendingFallback={<Spinner />}>
      <div css={readyPageLayout}>
        <CategoryContainer />
        <ReadyMembersContainer />
        <StartButtonContainer />
      </div>
    </AsyncErrorBoundary>
  );
};

export default ReadyPage;
