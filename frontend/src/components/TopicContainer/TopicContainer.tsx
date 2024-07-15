import { categoryText, topicLayout, topicText } from './TopicContainer.styled';

interface TopicContainerProp {
  category: string;
  title: string;
}

const TopicContainer = ({ category, title }: TopicContainerProp) => {
  return (
    <section css={topicLayout}>
      <span css={categoryText}>{category}</span>
      <span css={topicText}>{title}</span>
    </section>
  );
};

export default TopicContainer;
