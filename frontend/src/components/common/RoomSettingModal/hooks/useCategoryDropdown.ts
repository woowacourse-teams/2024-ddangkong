import { useEffect, useState } from 'react';

import { Category } from '@/types/room';

const useCategoryDropdown = (selectedCategory?: Category) => {
  const [category, setCategory] = useState(selectedCategory);

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategory = target.value as Category;

    if (!clickedCategory) return;

    setCategory(clickedCategory);
  };

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

  return { category, handleClickOption };
};

export default useCategoryDropdown;
