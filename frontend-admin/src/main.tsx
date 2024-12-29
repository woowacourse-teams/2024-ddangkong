import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from './styles/globalStyle.ts';
import { theme } from './styles/theme.ts';
import ModalProvider from './providers/ModalProvider/ModalProvider.tsx';
import ToastProvider from './providers/ToastProvider/ToastProvider.tsx';

const queryClient = new QueryClient();

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return await worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <ModalProvider>
              <RouterProvider router={router} />
            </ModalProvider>
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
});
