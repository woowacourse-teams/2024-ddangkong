import React from 'react';

import { emptyLayout } from './CategoryDropdown.styled';
import Dropdown from '../../Dropdown/Dropdown';
import useCategoryListQuery from '../hooks/useCategoryListQuery';

import { Category } from '@/types/room';

interface CategoryDropdownProps<T> {
  category?: string;
  handleClickOption: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CategoryDropdown = ({ category, handleClickOption }: CategoryDropdownProps<Category>) => {
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
