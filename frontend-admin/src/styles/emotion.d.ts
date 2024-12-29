/* eslint-disable */

import "@emotion/react";
import { theme } from "./theme";

type ExtendedTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends ExtendedTheme {}
}
