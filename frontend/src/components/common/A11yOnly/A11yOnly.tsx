import { ElementType, AriaRole, PropsWithChildren } from 'react';

import { A11yOnlyLayout } from './A11yOnly.styled';

interface A11yOnlyProps<T extends ElementType = 'span'> {
  as?: T;
  role?: AriaRole;
}

const A11yOnly = <T extends ElementType = 'span'>({
  as,
  children,
  ...props
}: PropsWithChildren<A11yOnlyProps<T>>) => {
  const Component = as || 'span';
  return (
    <Component css={A11yOnlyLayout} {...props}>
      {children}
    </Component>
  );
};

export default A11yOnly;
