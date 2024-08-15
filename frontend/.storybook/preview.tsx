import React from 'react';
import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { Theme } from '../src/styles/Theme';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';

initialize();

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
        <ThemeProvider theme={Theme}>
          <MemoryRouter initialEntries={['/']}>
            <Global styles={GlobalStyle} />
            <Story />
          </MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    ),
    mswDecorator,
  ],
};

export default preview;
