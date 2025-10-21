import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCategorySelect } from "./useCategorySelect";

export const useQueryHandler = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const { selectedCategory, handleCategorySelect } =
    useCategorySelect(categoryParam);

  useEffect(() => {
    if (categoryParam !== selectedCategory) {
      handleCategorySelect(categoryParam)();
    }
  }, [categoryParam]);

  const handleCategoryClick = (categoryId: string) => {
    handleCategorySelect(categoryId)();
    setSearchParams({ category: categoryId });
  };

  return { selectedCategory, handleCategoryClick };
};
