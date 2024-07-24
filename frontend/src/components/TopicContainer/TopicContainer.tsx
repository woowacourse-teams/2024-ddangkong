import { categoryText, topicContainerLayout, topicText } from './TopicContainer.styled';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';

const TopicContainer = () => {
  const { balanceContent } = useBalanceContentQuery();

  return (
    <section css={topicContainerLayout}>
      <span css={categoryText}>{balanceContent?.category}</span>
      <span css={topicText}>{balanceContent?.question}</span>
    </section>
  );
};

export default TopicContainer;
