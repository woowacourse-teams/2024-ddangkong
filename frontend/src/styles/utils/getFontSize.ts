import { Theme } from '@/styles/Theme';

const getFontSize = (fontSize?: 'small' | 'medium' | 'large') => {
  switch (fontSize) {
    case 'small':
      return Theme.typography.caption.fontSize;
    case 'medium':
      return Theme.typography.headline2.fontSize;
    case 'large':
      return Theme.typography.headline1.fontSize;
    default:
      return Theme.typography.headline2.fontSize;
  }
};

export default getFontSize;
