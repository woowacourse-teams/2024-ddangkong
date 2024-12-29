import useCategoryQueryParams from '@/hooks/useCategoryQueryParams';
import { Category, CategoryLabel, CategoryValue } from '@/types/content';
import { useState } from 'react';

interface UseCategoryOptions {
  handleChangeCategory?: (value: CategoryValue, label: CategoryLabel) => void;
}

const useCategory = ({ handleChangeCategory }: UseCategoryOptions = {}) => {
  const { category: value, label } = useCategoryQueryParams();
  const [category, setCategory] = useState<Category>({ label, value });

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategoryValue = target.value as CategoryValue;
    const clickedCategoryLabel = target.textContent as CategoryLabel;

    if (!clickedCategoryValue) return;

    setCategory({ value: clickedCategoryValue, label: clickedCategoryLabel });

    if (handleChangeCategory) {
      handleChangeCategory(clickedCategoryValue, clickedCategoryLabel);
    }
  };

  return { category, handleClickOption };
};

export default useCategory;
