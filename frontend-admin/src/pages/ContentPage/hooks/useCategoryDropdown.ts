import { Category, CategoryLabel, CategoryValue } from "@/types/content";
import { useState } from "react";

const useCategoryDropdown = () => {
  const [category, setCategory] = useState<Category>({
    label: "만약에",
    value: "IF",
  });

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategoryValue = target.value as CategoryValue;
    const clickedCategoryLabel = target.textContent as CategoryLabel;

    if (!clickedCategoryValue) return;

    setCategory({ value: clickedCategoryValue, label: clickedCategoryLabel });
  };

  return { category, handleClickOption };
};

export default useCategoryDropdown;
