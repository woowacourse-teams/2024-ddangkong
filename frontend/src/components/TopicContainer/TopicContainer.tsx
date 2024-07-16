import { categoryText, topicLayout, topicText } from './TopicContainer.styled';

import useQuestionQuery from '@/hooks/useQuestionQuery';

const TopicContainer = () => {
  const { data: question } = useQuestionQuery();

  return (
    <section css={topicLayout}>
      <span css={categoryText}>{question?.category}</span>
      <span css={topicText}>{question?.title}</span>
    </section>
  );
};

export default TopicContainer;
