import React, {useContext} from 'react';

// get the styles
import classes from './Cart.module.css';

import CartItem from './CartItem';
import Card from '../UI/Card';
import Model from '../UI/Model';

// get the context
import MealContext from '../../Store/MealContext';

const Cart = (props) => {

    const ctx = useContext(MealContext);
    const hideCart = () => {
        // console.log('firing');
        // props.setShowCart(false);
        console.log('hiding');
        ctx.showCart('HIDE_CART');
    }
    return (
        <Model onClick={hideCart}>
            <Card>
            {ctx.DUMMY_MEALS.map((meal) => {
                if(meal.quantity) {
                   return <CartItem 
                    key={meal.id} 
                    name={meal.name}
                    price={meal.price}
                    quantity={meal.quantity}
                    // setOrderState={props.setOrderState}
                />
                } else {
                    return false;
                }
            })}
            <div className={classes.total}>
                <span>
                    Total
                </span>
                <span>
                {ctx.DUMMY_MEALS.reduce((acc, curr)  =>  {
                        if(curr.quantity) {
                            return acc + (curr.price * curr.quantity);
                        } else {
                            return acc;
                        }
                    },0).toFixed(2)}
                </span>
            </div>
            <div className={classes.actions}>
                <button onClick={hideCart} className={classes['button--alt']}>
                Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
            </Card>
        </Model>
    );
}

export default Cart;