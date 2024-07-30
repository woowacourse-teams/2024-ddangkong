import React from 'react';

import { categoryContainerLayout, title, subtitle } from './CategoryContainer.styled';

const CategoryContainer = () => {
  return (
    <section css={categoryContainerLayout}>
      <h2 css={subtitle}>카테고리</h2>
      <h1 css={title}>연애</h1>
    </section>
  );
};

export default CategoryContainer;
