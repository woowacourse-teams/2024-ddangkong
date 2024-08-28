import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import Spinner from '@/components/common/Spinner/Spinner';
import Content from '@/components/layout/Content/Content';
import { RoundHeader } from '@/components/layout/Header/Header';
import SelectContainer from '@/components/SelectContainer/SelectContainer';
import Timer from '@/components/Timer/Timer';
import TopicContainer from '@/components/TopicContainer/TopicContainer';

const GamePage = () => {
  return (
    <AsyncErrorBoundary pendingFallback={<Spinner imageSize={12} />}>
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
