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
} as const;

const borderRadius = {
  none: '0',
  radius10: '0.8rem',
  radius20: '2rem',
  radius30: '3.2rem',
} as const;

const typography = {
  slogan: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
  },
  headline1: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
  },
  headline2: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  headline3: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  body1: {
    fontSize: '1.6rem',
    fontWeight: '400',
  },
  body2: {
    fontSize: '1.4rem',
    fontWeight: '400',
  },
  caption: {
    fontSize: '1.2rem',
    fontWeight: '400',
  },
  placeholder: {
    fontSize: '1.2rem',
    fontWeight: '400',
  },
} as const;

const opacity = {
  transparency: 0.6,
  normal: 1,
};

export const Theme = {
  color,
  borderRadius,
  typography,
  opacity,
};
