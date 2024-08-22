import { useEffect, useState } from 'react';

import { Category, CategoryLabel, CategoryValue } from '@/types/room';

const useCategoryDropdown = (selectedCategory?: Category) => {
  const [category, setCategory] = useState(selectedCategory);

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategoryValue = target.value as CategoryValue;
    const clickedCategoryLabel = target.textContent as CategoryLabel;

    if (!clickedCategoryValue) return;

    setCategory({ value: clickedCategoryValue, label: clickedCategoryLabel });
  };

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

  return { category, handleClickOption };
};

export default useCategoryDropdown;
