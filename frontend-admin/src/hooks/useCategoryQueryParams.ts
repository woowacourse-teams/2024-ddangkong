import { useSearchParams } from "react-router-dom";

const useCategoryQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "IF";

  const handleCategoryParams = (category: string) => {
    setSearchParams({ category });
  };

  return { category, handleCategoryParams };
};

export default useCategoryQueryParams;
