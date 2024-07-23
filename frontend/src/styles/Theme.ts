const color = {
  // primary color
  peanut300: '#FFF4DF',
  peanut400: '#FFDD9A',
  peanut500: '#FFD076',
} as const;

export const borderRadius = {
  none: '0',
  radius10: '0.8rem',
  radius20: '2rem',
  radius30: '3.2rem',
} as const;

export const typography = {
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
    fontWeight: '500',
  },
  body2: {
    fontSize: '1.4rem',
    fontWeight: '500',
  },
  caption: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
  placeholder: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
} as const;

export const Theme = {
  color,
  borderRadius,
  typography,
};
