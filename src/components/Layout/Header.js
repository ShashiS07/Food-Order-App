import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartBurron from "./HeaderCartButton";
import classes from './Header.module.css'
const Header = (props) => {
  return(
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBurron onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
