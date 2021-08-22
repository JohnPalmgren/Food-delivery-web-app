import CartButtonIcon from "../Cart/CartButtonIcon"
import classes from "../Layout/HeaderCartButton.module.css"

const HeaderCartButton = props => {
  return(
    <button className={classes.button}>
      <span className={classes.icon}>
          <CartButtonIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton