import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [validInputState, setValidInputState] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    const inputNumber = +inputAmount;

    if (inputAmount.trim().length === 0 || inputNumber < 0 || inputNumber > 5) {
      setValidInputState(false);
      return;
    }
    props.onAddToCart(inputNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validInputState && <p>Enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
