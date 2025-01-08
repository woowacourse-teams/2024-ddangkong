const color = {
  // primary color
  peanut200: '#FFF0D4',
  peanut300: '#FFF4DF',
  peanut400: '#FFDD9A',
  peanut500: '#FFD076',
  gray: '#D9D9D9',
  gray200: '#F3F1F1',
  gray300: '#E4E4E4',
  gray400: '#9D9B9B',
  gray500: '#7A7A7A',
  red300: '#FC4A4A',
  white: '#FFFFFF',
  black: '#000000',
} as const;

const opacity = {
  invisible: 0,
  disabled: 0.6,
  default: 1,
} as const;

export const theme = {
  color,
  opacity,
};
