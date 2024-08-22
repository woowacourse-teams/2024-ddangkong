import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: { [key: string]: string };
  }
}
