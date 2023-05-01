import React, {useContext, useState, useEffect} from 'react';

// getting styles
import classes from './HeaderCartButton.module.css';

// getting assets
import CartIcon from '../Cart/CartIcon';

// get the context
import MealContext from '../../Store/MealContext';

const HeaderCartButton = (props) => {

    const ctx = useContext(MealContext);
    
    const displayCart = () => {
        props.setShowCart(true);
    }


    const [animation, setAnimation] = useState(false);
    const totalMealCount = ctx.DUMMY_MEALS.reduce((acc, mealItem) =>  acc+mealItem.quantity,0);

    useEffect(() => {
        console.log('this works 25');
        setAnimation(true);

        setTimeout(() => {
            setAnimation(false);
        }, 300);
    }, [totalMealCount]);

    // const buttonClasses = `classes.button`
    console.log(classes.bump,'--',classes.button);
    return (
        <React.Fragment>
           <button onClick={displayCart} className={classes.button + ' ' + (animation ? classes.bump : '')}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
             <span>Your Cart</span> 
             <span className={classes.badge}>
                    {totalMealCount}    
                {/* {props.DUMMY_MEALS.reduce((acc, mealItem) =>  acc+mealItem.quantity,0)}     */}
            </span> 
           </button>
        </React.Fragment>
    );
}

export default HeaderCartButton;