import React from 'react';

import { categoryContainerLayout, title, subtitle } from './CategoryContainer.styled';

interface CategoryContainerInterface {
  category: string;
}

const CategoryContainer = ({ category }: CategoryContainerInterface) => {
  return (
    <section css={categoryContainerLayout}>
      <h2 css={subtitle}>카테고리</h2>
      <h1 css={title}>{category}</h1>
    </section>
  );
};

export default CategoryContainer;
