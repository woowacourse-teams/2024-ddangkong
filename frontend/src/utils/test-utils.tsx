import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import type { MutableSnapshot } from 'recoil';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import Spinner from '@/components/common/Spinner/Spinner';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';
import ToastProvider from '@/providers/ToastProvider/ToastProvider';
import { memberInfoState } from '@/recoil/atom';
import GlobalStyle from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';

const wrapper = ({
  children,
  initializeState,
  pendingFallback = <Spinner />,
}: PropsWithChildren<{
  initializeState?: (mutableSnapshot: MutableSnapshot) => void;
  pendingFallback?: React.ReactNode;
}>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot initializeState={initializeState}>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyle} />
          <ToastProvider>
            <MemoryRouter initialEntries={['/']}>
              <RootErrorBoundary>
                <AsyncErrorBoundary pendingFallback={pendingFallback}>
                  <ModalProvider>{children}</ModalProvider>
                </AsyncErrorBoundary>
              </RootErrorBoundary>
            </MemoryRouter>
          </ToastProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

interface CustomRenderOptions extends RenderOptions {
  initializeState?: (mutableSnapshot: MutableSnapshot) => void;
  pendingFallback?: React.ReactNode;
}

const customRender = (ui: React.ReactNode, options: CustomRenderOptions = {}) => {
  const { initializeState, pendingFallback, ...restOptions } = options;

  return render(ui, {
    wrapper: ({ children }) => wrapper({ children, initializeState, pendingFallback }),
    ...restOptions,
  });
};

const customRenderWithIsMaster = (Component: React.ReactNode, isMaster: boolean) => {
  const initializeState = (snap: MutableSnapshot) => {
    snap.set(memberInfoState, { memberId: 1, nickname: 'Test User', isMaster });
  };

  customRender(Component, { initializeState });
};

export { wrapper, customRender, customRenderWithIsMaster };
