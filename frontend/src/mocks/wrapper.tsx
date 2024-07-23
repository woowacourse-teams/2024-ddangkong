import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

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
          <Global styles={GlobalStyle} />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default wrapper;
