import { Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return await worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>,
  );
});
