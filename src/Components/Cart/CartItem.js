import React from 'react';


// get the css
import classes from './CartItem.module.css';

const CartItem = (props) => {

  const decreament = () => {
    props.setOrderState((preState) => {
      console.log('this is running');
      console.log(props.name);
     return preState.map((foodItem) => {
      if(foodItem.name === props.name) {
          console.log(console.log(foodItem));
          return {
              ...foodItem,
              quantity: foodItem.quantity - 1
          }
      } else {
          return foodItem;
      }
     });
  });
  }
  const increament = () => {
    props.setOrderState((preState) => {
      console.log('this is running');
      console.log(props.name);
     return preState.map((foodItem) => {
      if(foodItem.name === props.name) {
          console.log(console.log(foodItem));
          return {
              ...foodItem,
              quantity: foodItem.quantity + 1
          }
      } else {
          return foodItem;
      }
     });
  });
  }

    return (
        <li className={classes['cart-item']}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{props.price}</span>
            <span className={classes.amount}>X {props.quantity}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={decreament}>−</button>
          <button onClick={increament} >+</button>
        </div>
      </li>
    );
}

export default CartItem;