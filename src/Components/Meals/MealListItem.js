import React, {useState} from 'react';

// get the components
import  Input from '../UI/Input';

// get the styles
import classes from './MealListItem.module.css';

const MealListItem = (props) => {
    const [input, setInput] = useState(0);

    const handleChange = (event) => {
        if(event.target.value > -1) {
            setInput(event.target.value);
        }
    }  
     
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!+input) { // using + because the input value can be '0' which is a truthy value
            console.log('wrong input');
            return;
        }
        setInput(0);
        props.setCartItem((preItem) => {
            return +preItem + +input; 
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