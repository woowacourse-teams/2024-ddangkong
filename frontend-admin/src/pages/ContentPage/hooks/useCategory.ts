import { Category, CategoryLabel, CategoryValue } from '@/types/content';
import { useState } from 'react';

const CATEGORY_INIT_DATA = {
  label: '만약에',
  value: 'IF',
} as const;

interface UseCategoryOptions {
  handleChangeCategory?: (categoryValue: CategoryValue) => void; // 추가 동작 콜백
}

const useCategory = ({ handleChangeCategory }: UseCategoryOptions = {}) => {
  const [category, setCategory] = useState<Category>(CATEGORY_INIT_DATA);

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategoryValue = target.value as CategoryValue;
    const clickedCategoryLabel = target.textContent as CategoryLabel;

    if (!clickedCategoryValue) return;

    setCategory({ value: clickedCategoryValue, label: clickedCategoryLabel });

    if (handleChangeCategory) {
      handleChangeCategory(clickedCategoryValue);
    }
  };

  return { category, handleClickOption };
};

export default useCategory;
