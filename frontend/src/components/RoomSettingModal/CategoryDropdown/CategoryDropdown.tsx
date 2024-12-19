import React from 'react';

import { emptyLayout } from './CategoryDropdown.styled';
import useCategoryListQuery from '../hooks/useCategoryListQuery';

import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Category } from '@/types/room';

interface CategoryDropdownProps {
  category?: string;
  handleClickOption: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CategoryDropdown = ({ category, handleClickOption }: CategoryDropdownProps) => {
  const { categoryList, isLoading } = useCategoryListQuery();
  if (isLoading) return <div css={emptyLayout}></div>;
  if (!categoryList || !category) return <div>카테고리가 없습니다.</div>;

  return (
    <Dropdown<Category>
      text={category}
      optionList={categoryList}
      handleClickOption={handleClickOption}
    />
  );
};

export default CategoryDropdown;
