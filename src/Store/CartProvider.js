import { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    const cartItemIndex = state.items.findIndex(item => item.id === action.item.id)

    const existingCartItem = state.items[cartItemIndex]
    let updatedItem;
    let updatedItems; 

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      updatedItem = {...action.item}
      updatedItems = state.items.concat(updatedItem)
    }


    // const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return ({
        items: updatedItems,
        totalAmount: updatedTotalAmount
    })
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
