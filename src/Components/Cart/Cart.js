import React from 'react';

// get the styles
import classes from './Cart.module.css';

import CartItem from './CartItem';

const Cart = (props) => {


    return (
        <React.Fragment>
            <CartItem 
                    // key={item.id} 
                    // name={item.name}
                    // price={item.price}
                    // quantity={item.quantity}
                />
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>
                0
                </span>
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