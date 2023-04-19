import React from 'react';

// get the styles
import classes from './Cart.module.css';

import CartItem from './CartItem';

const Cart = () => {
    return (
        <React.Fragment>
            <CartItem />
            <div className={classes.total}>
                <span>Total Amount</span>
                <span></span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>
                Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </React.Fragment>
    );
}

export default Cart;