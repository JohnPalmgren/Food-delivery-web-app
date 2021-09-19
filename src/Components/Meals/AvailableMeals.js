import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Fresh fish served the traditional Japanese way",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 8.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Smokey quarter-pounder beef burger",
    price: 6.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "A healthy and delicious green bowl",
    price: 9.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
