import { ElementType, AriaRole, PropsWithChildren } from 'react';

import { a11yOnlyLayout } from './A11yOnly.styled';

interface A11yOnlyProps<T extends ElementType = 'span'> {
  as?: T;
  role?: AriaRole;
}

const A11yOnly = <T extends ElementType = 'span'>({
  as,
  role = 'text',
  children,
  ...props
}: PropsWithChildren<A11yOnlyProps<T>>) => {
  const Component = as || 'span';
  return (
    <Component css={a11yOnlyLayout} role={role} {...props}>
      {children}
    </Component>
  );
};

export default A11yOnly;
