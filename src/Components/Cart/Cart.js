import React from 'react';

// get the styles
import classes from './Cart.module.css';

import CartItem from './CartItem';
import Card from '../UI/Card';

const Cart = (props) => {


    return (
        <React.Fragment>
            <Card>
            {props.DUMMY_MEALS.map((meal) => {
                if(meal.quantity) {
                   return <CartItem 
                    key={meal.id} 
                    name={meal.name}
                    price={meal.price}
                    quantity={meal.quantity}
                />
                }
            })}
            <div className={classes.total}>
                <span>
                    Total
                </span>
                <span>
                {props.DUMMY_MEALS.reduce((acc, curr)  =>  {
                        if(curr.quantity) {
                            return acc + (curr.price * curr.quantity);
                        } else {
                            return acc;
                        }
                    },0)}
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>
                Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
            </Card>
        </React.Fragment>
    );
}

export default Cart;