import { ElementType, ReactNode } from 'react';

import { a11yOnlyLayout } from './A11yOnly.styled';

interface A11yOnlyProps<T extends ElementType = 'span'> {
  as?: T;
  children: ReactNode;
}

const A11yOnly = <T extends ElementType = 'span'>({ as, children, ...props }: A11yOnlyProps<T>) => {
  const Component = as || 'span';
  return (
    <Component {...props} css={a11yOnlyLayout}>
      {children}
    </Component>
  );
};

export default A11yOnly;
