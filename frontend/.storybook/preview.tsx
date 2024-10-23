import React from 'react';
import type { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { Theme } from '../src/styles/Theme';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';
import ToastProvider from '../src/providers/ToastProvider/ToastProvider';
import ModalProvider from '../src/providers/ModalProvider/ModalProvider';
import RootErrorBoundary from '../src/components/common/ErrorBoundary/RootErrorBoundary';
import AsyncErrorBoundary from '../src/components/common/ErrorBoundary/AsyncErrorBoundary';

initialize({
  serviceWorker: {
    url: './mockServiceWorker.js',
  },
});

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [...handlers],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={Theme}>
            <MemoryRouter initialEntries={['/']}>
              <Global styles={GlobalStyle} />
              <ToastProvider>
                <RootErrorBoundary>
                  <AsyncErrorBoundary>
                    <ModalProvider>
                      <Story />
                    </ModalProvider>
                  </AsyncErrorBoundary>
                </RootErrorBoundary>
              </ToastProvider>
            </MemoryRouter>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
