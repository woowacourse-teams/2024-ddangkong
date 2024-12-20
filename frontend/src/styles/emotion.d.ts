/* eslint-disable */

import '@emotion/react';
import { Theme } from './Theme';

type ExtendedTheme = typeof Theme;

declare module '@emotion/react' {
  export interface Theme extends ExtendedTheme {}
}
