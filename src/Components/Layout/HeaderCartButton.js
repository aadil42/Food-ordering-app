import React from 'react';

// getting styles
import classes from './HeaderCartButton.module.css';

// getting assets
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
    return (
        <React.Fragment>
           <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
             <span>Your Cart</span> 
             <span className={classes.badge}>{props.cartItem}</span> 
           </button>
        </React.Fragment>
    );
}

export default HeaderCartButton;