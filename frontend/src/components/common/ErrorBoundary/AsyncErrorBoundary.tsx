import { captureException, ErrorBoundary, withScope } from '@sentry/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { PropsWithChildren, Suspense } from 'react';

import DeferredComponent from '../DeferredComponent/DeferredComponent';
import AsyncErrorFallback from '../ErrorFallback/AsyncErrorFallback/AsyncErrorFallback';
import SpinnerErrorFallback from '../ErrorFallback/SpinnerErrorFallback/SpinnerErrorFallback';

import { CustomError, UnhandledError } from '@/utils/error';

interface AsyncErrorBoundaryProps {
  pendingFallback?: React.ReactNode;
}

const AsyncErrorBoundary = ({
  pendingFallback = <SpinnerErrorFallback />,
  children,
}: PropsWithChildren<AsyncErrorBoundaryProps>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={({ error, resetError }) => (
        <AsyncErrorFallback error={error} resetError={resetError} />
      )}
      onError={(error) => {
        if (error instanceof CustomError || error instanceof UnhandledError) {
          withScope((scope) => {
            scope.setLevel('warning');
            scope.setTag('api', 'internalServerError');
            captureException(new Error(error.message));
          });
        } else {
          throw error;
        }
      }}
    >
      <Suspense fallback={<DeferredComponent>{pendingFallback}</DeferredComponent>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default AsyncErrorBoundary;
