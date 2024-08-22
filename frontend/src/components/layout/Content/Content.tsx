import { PropsWithChildren } from 'react';

import { contentLayout } from './Content.styled';

const Content = ({ children }: PropsWithChildren) => {
  return <section css={contentLayout}>{children}</section>;
};

export default Content;
