import React from 'react';

// getting styles
import classes from './HeaderCartButton.module.css';

// getting assets
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {

    const displayCart = () => {
        props.setShowCart(true);
    }

    return (
        <React.Fragment>
           <button onClick={displayCart} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
             <span>Your Cart</span> 
             <span className={classes.badge}>
                {props.DUMMY_MEALS.reduce((acc, mealItem) =>  acc+mealItem.quantity,0)}    
            </span> 
           </button>
        </React.Fragment>
    );
}

export default HeaderCartButton;