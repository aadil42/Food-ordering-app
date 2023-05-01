import React from 'react';

// import css
import classes from './Header.module.css';

// import assets
import mealsImage from '../../assets/meals.jpg';

// import components
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton setShowCart={props.setShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!" ></img>
            </div>
        </React.Fragment>
    );
}

export default Header;