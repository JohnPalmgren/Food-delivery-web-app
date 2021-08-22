import React from "react"
import foodImage from "../../Assets/meals.jpg"
import classes from "../Layout/Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = () => {
    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>React Food</h1>
          <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
          <img src={foodImage} alt="A table full of food" />
        </div>
      </React.Fragment>
    );
}

export default Header