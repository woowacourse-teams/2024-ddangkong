import useCategoryQueryParams from '@/hooks/useCategoryQueryParams';
import { Category, CategoryLabel, CategoryValue } from '@/types/content';
import { useState } from 'react';

const CATEGORY_INIT_DATA = {
  label: '만약에',
  value: 'IF',
} as const;

const useCategoryDropdown = () => {
  const { handleCategoryParams } = useCategoryQueryParams();
  const [category, setCategory] = useState<Category>(CATEGORY_INIT_DATA);

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategoryValue = target.value as CategoryValue;
    const clickedCategoryLabel = target.textContent as CategoryLabel;

    if (!clickedCategoryValue) return;

    setCategory({ value: clickedCategoryValue, label: clickedCategoryLabel });
    handleCategoryParams(clickedCategoryValue);
  };

  return { category, handleClickOption };
};

export default useCategoryDropdown;
