import { categoryContainerLayout, title, subtitle } from './CategoryContainer.styled';

interface CategoryContainerProps {
  category: string;
}

const CategoryContainer = ({ category }: CategoryContainerProps) => {
  return (
    <section css={categoryContainerLayout}>
      <span css={subtitle}>카테고리</span>
      <h1 css={title}>{category}</h1>
    </section>
  );
};

export default CategoryContainer;
