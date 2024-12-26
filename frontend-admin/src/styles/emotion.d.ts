import "@emotion/react";
import { theme } from "./theme";

type ExtendedTheme = typeof theme;

declare module "@emotion/react" {
  export type Theme = ExtendedTheme;
}
