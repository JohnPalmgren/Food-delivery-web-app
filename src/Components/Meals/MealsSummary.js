import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection and enjoy a delicious
        lunch or dinner at home.
      </p>
      <p>
        Enjoy cuisine from around the world all delivered from local
        restaurants. With the best food and fastest deliver, what are you
        waiting for?
      </p>
    </section>
  );
};

export default MealsSummary;
