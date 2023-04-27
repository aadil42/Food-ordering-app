import React, {useContext} from 'react';

// getting styles
import classes from './HeaderCartButton.module.css';

// getting assets
import CartIcon from '../Cart/CartIcon';

// get the context
import MealContext from '../../Store/MealContext';

const HeaderCartButton = (props) => {

    const ctx = useContext(MealContext);
    
    const displayCart = () => {
        // props.setShowCart(true);
        ctx.showCart('SHOW_CART');
    }

    return (
        <React.Fragment>
           <button onClick={displayCart} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
             <span>Your Cart</span> 
             <span className={classes.badge}>
                    {ctx.DUMMY_MEALS.reduce((acc, mealItem) =>  acc+mealItem.quantity,0)}    
                {/* {props.DUMMY_MEALS.reduce((acc, mealItem) =>  acc+mealItem.quantity,0)}     */}
            </span> 
           </button>
        </React.Fragment>
    );
}

export default HeaderCartButton;