import { ElementType, ComponentPropsWithoutRef } from 'react';

import { a11yOnlyLayout } from './A11yOnly.styled';

interface A11yOnlyProps<T extends ElementType = 'span'> {
  as?: T;
}

const A11yOnly = <T extends ElementType = 'span'>({
  as,
  ...props
}: A11yOnlyProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || 'span';
  return <Component {...props} css={a11yOnlyLayout} />;
};

export default A11yOnly;
