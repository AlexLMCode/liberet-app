import { useEffect, useState } from "react";

export const useCategories = ({category}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let categoriesResponse = await res.json();
    // console.log(categoriesResponse.categories);
    setCategories(categoriesResponse.categories);
  };

  return {categories}
};
