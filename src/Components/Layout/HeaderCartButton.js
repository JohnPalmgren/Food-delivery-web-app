import { useContext } from "react"
import CartButtonIcon from "../Cart/CartButtonIcon"
import classes from "../Layout/HeaderCartButton.module.css"
import cartContext from "../../Store/CartContext"


const HeaderCartButton = props => {

  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return (currentNumber + item.amount)
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartButtonIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton