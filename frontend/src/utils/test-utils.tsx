import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import Spinner from '@/components/common/Spinner/Spinner';
import ToastProvider from '@/providers/ToastProvider/ToastProvider';
import GlobalStyle from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <MemoryRouter initialEntries={['/']}>
            <RootErrorBoundary>
              <AsyncErrorBoundary pendingFallback={<Spinner />}>
                <Global styles={GlobalStyle} />
                <ToastProvider>{children}</ToastProvider>
              </AsyncErrorBoundary>
            </RootErrorBoundary>
          </MemoryRouter>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

const customRender = (ui: React.ReactNode, options?: RenderOptions) =>
  render(ui, { wrapper, ...options });

export { wrapper, customRender };
