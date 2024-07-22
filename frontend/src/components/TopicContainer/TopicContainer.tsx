import { categoryText, topicLayout, topicText } from './TopicContainer.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const TopicContainer = () => {
  const { balanceContent } = useBalanceContentQuery();

  return (
    <section css={topicLayout}>
      <span css={categoryText}>{balanceContent?.category}</span>
      <span css={topicText}>{balanceContent?.question}</span>
    </section>
  );
};

export default TopicContainer;
