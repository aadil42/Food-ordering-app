import React, {useReducer} from "react";
import MealContext from './MealContext';
import MEAL from './MealData';

const dispatch = (preState, action) => {
  if(action.type === 'INCREAMENT') {
    return {
      ...preState,
      DUMMY_MEALS: preState.DUMMY_MEALS.map((foodItem) => {
        if(foodItem.name === action.item) {
            console.log(console.log(foodItem));
            return {
                ...foodItem,
                quantity: foodItem.quantity + 1
            }
        } else {
            return foodItem;
        }
       })
    }
    // return 
  }
  if(action.type === 'DECREAMENT') {
    return {
      ...preState,
      DUMMY_MEALS: preState.DUMMY_MEALS.map((foodItem) => {
        if(foodItem.name === action.item) {
            console.log(console.log(foodItem));
            return {
                ...foodItem,
                quantity: foodItem.quantity - 1
            }
        } else {
            return foodItem;
        }
       })
    }
  }

  if(action.type === 'INPUT') {
    return {
      ...preState,
      DUMMY_MEALS: preState.DUMMY_MEALS.map((foodItem) => {
        if(foodItem.name === action.item) {
            console.log(console.log(foodItem));
            return {
                ...foodItem,
                quantity: foodItem.quantity + action.val
            }
        } else {
            return foodItem;
        }
       })
    }
  }

  if(action.type === 'SHOW_CART') {
    // console.log('inn');
    // console.log(preState,'hh');
    return {
      ...preState,
      isCart: true
    }
  }

  if(action.type === 'HIDE_CART') {
    return {
      ...preState,
      isCart: false
    }
  }

  // default return when no condition is met. return the same state
  return preState;
}

const MealProvider = (props) => {
    const updateCart = (type, val, item) => {
      mealReducer({type: type, val: val, item: item});
    }
    
    const showCart = (type) => {
      mealReducer({type: type});
    }

    const defaultState = {
      DUMMY_MEALS: MEAL,
      isCart: false,
      showCart: showCart,
      updateCart: updateCart
    }
    
    const [Gstate, mealReducer] = useReducer(dispatch, defaultState);

  
    // this is different from MealContext check the casing of the two
    // const mealContext = {
    //   DUMMY_MEALS: Gstate.DUMMY_MEALS,
    //   isCart: Gstate.isCart,
    //   showCart: showCart,
    //   updateCart: updateCart
    // }
    // Gstate.showCart = showCart;
    // Gstate.updateCart = updateCart;
    // console.log(mealContext);

    
    return (
        <MealContext.Provider value={Gstate}>
            {props.children}
        </MealContext.Provider>
    );
}

export default MealProvider;