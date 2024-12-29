import useCategoryQueryParams from '@/hooks/useCategoryQueryParams';
import useCategory from './useCategory';

const useCategoryDropdown = () => {
  const { handleCategoryParams } = useCategoryQueryParams();

  return useCategory({ handleChangeCategory: handleCategoryParams });
};

export default useCategoryDropdown;
