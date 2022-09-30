import { CATEGORIES } from "../constants";

export const getCurrentPath = (currentCategory) => {
  const current = CATEGORIES.find(
    (category) => category.name === currentCategory
  );

  return current.path;
};
