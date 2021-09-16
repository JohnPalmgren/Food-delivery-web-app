import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const total = `£${cartCtx.totalAmount.toFixed(2)}`;
  const cartItems = cartCtx.items;

  const itemsInCart = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {itemsInCart && (
          <button className={classes.button} onClick={props.onHideCart}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
