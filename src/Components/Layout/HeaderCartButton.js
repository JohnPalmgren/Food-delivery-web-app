import { useContext, useEffect, useState } from "react"
import CartButtonIcon from "../Cart/CartButtonIcon"
import classes from "../Layout/HeaderCartButton.module.css"
import cartContext from "../../Store/CartContext"


const HeaderCartButton = props => {

  const [buttonAnimation, setButtonAnimation] = useState(false)

  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return (currentNumber + item.amount)
  }, 0)

  const btnClasses = `${classes.button} ${buttonAnimation ? classes.bump : ""}`

  const { items } = cartCtx

  useEffect(() => {
    if (items === 0) {
      return
    }
    setButtonAnimation(true);
    const timer = setTimeout(() => {
      setButtonAnimation (false)},300
    )
    return () => {
      clearTimeout(timer)
    }
  }, [items])


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartButtonIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton