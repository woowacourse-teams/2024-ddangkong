import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import GameSkeleton from '@/components/common/Skeleton/GameSkeleton/GaleSkeleton';
import Content from '@/components/layout/Content/Content';
import { RoundHeader } from '@/components/layout/Header/Header';
import SelectContainer from '@/components/SelectContainer/SelectContainer';
import Timer from '@/components/Timer/Timer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
  return (
    <AsyncErrorBoundary pendingFallback={<GameSkeleton />}>
      <RoundHeader />
      <Content>
        <TopicContainer />
        <Timer />
        <SelectContainer />
      </Content>
    </AsyncErrorBoundary>
  );
};

export default GamePage;
