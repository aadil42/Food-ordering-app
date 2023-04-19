import React from 'react';


// get the css
import classes from './CartItem.module.css';

const CartItem = () => {
    return (
        <li className={classes['cart-item']}>
        <div>
          <h2></h2>
          <div className={classes.summary}>
            <span className={classes.price}></span>
            <span className={classes.amount}></span>
          </div>
        </div>
        <div className={classes.actions}>
          <button>−</button>
          <button >+</button>
        </div>
      </li>
    );
}

export default CartItem;