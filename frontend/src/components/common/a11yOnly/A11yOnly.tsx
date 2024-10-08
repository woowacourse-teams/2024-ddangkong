import { ElementType, AriaRole, ReactNode } from 'react';

import { a11yOnlyLayout } from './A11yOnly.styled';

interface A11yOnlyProps<T extends ElementType = 'span'> {
  children: ReactNode;
  as?: T;
  role?: AriaRole;
}

const A11yOnly = <T extends ElementType = 'span'>({
  children,
  as,
  role = 'text',
  ...props
}: A11yOnlyProps<T>) => {
  const Component = as || 'span';
  return (
    <Component css={a11yOnlyLayout} role={role} {...props}>
      {children}
    </Component>
  );
};

export default A11yOnly;
