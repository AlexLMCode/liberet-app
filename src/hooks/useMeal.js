import { useEffect, useState } from "react";

export const useMeal = ({ id }) => {
  const [meal, setMeal] = useState();

  useEffect(() => {
    getMeal();
  }, []);

  const getMeal = async () => {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let categoriesResponse = await res.json();
    // console.log(categoriesResponse.categories);
    setMeal(categoriesResponse.meals);
  };

  return { meal };
};
