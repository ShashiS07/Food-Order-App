import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError,setHasError]=useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-project-c68f3-default-rtdb.firebaseio.com/meals.json"
      );
      if(!response.ok){
        throw new Error('Something Went Wrong!!')
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (let key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    };
    fetchMeals().catch(error=>{
      setIsLoading(false)
      setHasError(error.message)
    });
  }, []);

  if(isLoading){
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }
  if(hasError){
    return <section className={classes.mealsHasError}>
      <p>{hasError}</p>
    </section>
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
