import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import ReadySkeleton from '@/components/common/Skeleton/ReadySkeleton/ReadySkeleton';
import Content from '@/components/layout/Content/Content';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';
import StartButton from '@/components/StartButton/StartButton';

const ReadyPage = () => {
  return (
    <AsyncErrorBoundary pendingFallback={<ReadySkeleton />}>
      <Content>
        <CategoryContainer />
        <ReadyMembersContainer />
        <StartButton />
      </Content>
    </AsyncErrorBoundary>
  );
};

export default ReadyPage;
