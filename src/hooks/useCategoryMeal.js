import { useEffect, useState } from "react";

export const useCategoryMeal = ({ c }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`
      );
      let categoriesResponse = await res.json();
    // console.log(categoriesResponse.categories);
    setMeals(categoriesResponse.meals);
  };

  return { meals };
};
