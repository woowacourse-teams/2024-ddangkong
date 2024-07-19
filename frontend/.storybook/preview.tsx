import React from 'react';
import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { Theme } from '../src/styles/Theme';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <MemoryRouter initialEntries={['/']}>
            <Global styles={GlobalStyle} />
            <Story />
          </MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
