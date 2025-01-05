import { CategoryLabel, CategoryValue } from '@/types/content';
import { useSearchParams } from 'react-router-dom';

const useCategoryQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = (searchParams.get('category') as CategoryValue) || 'IF';
  const label = (searchParams.get('label') as CategoryLabel) || '만약에';

  const handleCategoryParams = (category: CategoryValue, label: CategoryLabel) => {
    setSearchParams({ category, label });
  };

  return { category, label, handleCategoryParams };
};

export default useCategoryQueryParams;
