import React, {useState} from 'react';

// get the components
import  Input from '../UI/Input';

// get the styles
import classes from './MealListItem.module.css';

const MealListItem = (props) => {
    const [input, setInput] = useState(0);

    const handleChange = (event) => {
        if(event.target.value > -1) {
            setInput(+event.target.value);
        }
    }  
     
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!input) { 
            console.log('wrong input');
            return;
        }

        // setting cartItem count in header
        // props.setCartItem((preItem) => {
        //     return +preItem + input; 
        // });

        // updating the cart
        props.setOrderState((preState) => {
            console.log('this is running');
            console.log(props.name);
           return preState.map((foodItem) => {
            if(foodItem.name === props.name) {
                console.log(console.log(foodItem));
                return {
                    ...foodItem,
                    quantity: foodItem.quantity + input
                }
            } else {
                return foodItem;
            }
           });
        });
    }

    return (
        <React.Fragment>
            <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>

                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {props.price}
                </div>
            </div>

            <div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Input val={input} type="number" onChange={handleChange}/>
                <button>+ Add</button>
            </form>
            </div>
            </li>        
        </React.Fragment>
    );
}

export default MealListItem;