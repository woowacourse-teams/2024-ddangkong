import { PropsWithChildren } from 'react';

import { contentSection } from './Content.styled';

const Content = ({ children }: PropsWithChildren) => {
  return <section css={contentSection}>{children}</section>;
};

export default Content;
