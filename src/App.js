import { Fragment, useState } from "react"
import Header from "./Components/Layout/Header"
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart.js"


function App() {

  const [cartVisible, setCartVisible] = useState(false); 

  const showCart = () => {
    setCartVisible(true)
  }

  const hideCart = () => {
    setCartVisible(false)
  }

  return (
    <Fragment>
      {cartVisible && <Cart onHideCart={hideCart} />};
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
