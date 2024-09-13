import { ErrorBoundary } from '@sentry/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

import RootErrorFallback from '../ErrorFallback/RootErrorFallback/RootErrorFallback';

const RootErrorBoundary = ({ children }: PropsWithChildren) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={({ error, resetError }) => (
        <RootErrorFallback error={error} resetError={resetError} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RootErrorBoundary;
