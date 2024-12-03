import { Global, ThemeProvider } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ToastProvider from './providers/ToastProvider/ToastProvider';
import { router } from './router';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration()],
  enableTracing: true, // tracesSampleRate와 tracesSampler 기본값 설정
});

const queryClient = new QueryClient();

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return await worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyle} />
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
          <div
            style={{
              fontSize: '18px',
            }}
          >
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>,
  );
});
