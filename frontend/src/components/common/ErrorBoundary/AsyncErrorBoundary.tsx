import { ErrorBoundary } from '@sentry/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { PropsWithChildren, Suspense } from 'react';

import DeferredComponent from '../DeferredComponent/DeferredComponent';
import AsyncErrorFallback from '../ErrorFallback/AsyncErrorFallback/AsyncErrorFallback';

interface AsyncErrorBoundaryProps {
  pendingFallback: React.ReactNode;
}

const AsyncErrorBoundary = ({
  pendingFallback,
  children,
}: PropsWithChildren<AsyncErrorBoundaryProps>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={({ resetError }) => <AsyncErrorFallback resetError={resetError} />}
    >
      <Suspense fallback={<DeferredComponent>{pendingFallback}</DeferredComponent>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default AsyncErrorBoundary;
