import { DatesComponent } from "./components/DatesComponent";
import { TimePillComponent } from "./components/TimePillComponent";
import { ServicePillComponent } from "./components/ServicePillComponent";
import { PlatillosPillComponent } from "./components/PlatillosPillComponent";
import { Search } from "./components/Search";
import { PlatilloComponent } from "./components/PlatilloComponent";
import { useCategories } from "./hooks/useCategories";
import { useEffect, useState } from "react";
import "./styles/App.css";

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const { categories } = useCategories(selectedCategory);
  const [completeMeals, setCompleteMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fullMeals = [];
    // setIsLoading(true);
    getMeals(selectedCategory).then((categoryMeals) => {
      categoryMeals.forEach((categoryMeal) => {
        getMealById(categoryMeal.idMeal).then((fullMeal) => {
          fullMeals.push({
            idMeal: categoryMeal.idMeal,
            title: categoryMeal.strMeal,
            photo: categoryMeal.strMealThumb,
            strArea: fullMeal[0].strArea,
            tags: fullMeal[0].strTags?.split(",", 1)[0]
              ? fullMeal[0].strTags.split(",", 1)[0]
              : "No tag",
          });
          setCompleteMeals(fullMeals);
          // setIsLoading(false);
        });
      });
    });
    console.log(completeMeals);
  }, [selectedCategory]);

  const getMeals = async (c = "Beef") => {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`
    );
    let categoriesResponse = await res.json();
    return categoriesResponse.meals;
  };

  const getMealById = async (id) => {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let mealResponse = await res.json();
    return mealResponse.meals;
  };

  return (
    <>
      <main className="container" style={{ backgroundColor: "white" }}>
        <section>
          <Search />
        </section>
        <section>
          <DatesComponent />
        </section>
      </main>

      <div className="container-info">
        <div className="container">
          <section className="options-container">
            <div>
              <TimePillComponent />
            </div>
            <div>
              <ServicePillComponent
                categories={categories}
                setSelected={setSelectedCategory}
              />
            </div>
            <div>
              <PlatillosPillComponent />
            </div>
          </section>
          <section className="platillos-container">
            {completeMeals &&
              completeMeals.map((meal) => (
                <PlatilloComponent
                  category={meal.strArea}
                  image={meal.photo}
                  price={meal.idMeal}
                  title={meal.title}
                  key={meal.idMeal}
                />
              ))}
          </section>
        </div>
      </div>
    </>
  );
};
