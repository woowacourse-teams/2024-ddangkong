import { Theme } from '@/styles/Theme';

const getBorderRadius = (radius?: 'small' | 'medium' | 'large') => {
  switch (radius) {
    case 'small':
      return Theme.borderRadius.radius10;
    case 'medium':
      return Theme.borderRadius.radius20;
    case 'large':
      return Theme.borderRadius.radius30;
    default:
      return '0';
  }
};

export default getBorderRadius;
