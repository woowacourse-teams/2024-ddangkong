import { ErrorBoundary } from '@sentry/react';
import { Suspense } from 'react';

import { readyPageLayout } from './ReadyPage.styled';
import ErrorPage from '../ErrorPage/ErrorPage';

import CategoryContainer from '@/components/CategoryContainer/CategoryContainer';
import Spinner from '@/components/common/Spinner/Spinner';
import StartButton from '@/components/common/StartButton/StartButton';
import ReadyMembersContainer from '@/components/ReadyMembersContainer/ReadyMembersContainer';

const ReadyPage = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Spinner />}>
        <div css={readyPageLayout}>
          <CategoryContainer />
          <ReadyMembersContainer />
          <StartButton />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ReadyPage;
