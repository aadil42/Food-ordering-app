import React from 'react';

// importing compoenents
import MealListItem from './MealListItem';
import Card from '../UI/Card';

// get the styls 
import classes from './MealList.module.css';
// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];

const MealList = (props) => {
    return (
      <section className={classes.meals}>
        <Card>
          <ul>
            {props.DUMMY_MEALS.map((single_meal) => {
            return <MealListItem 
                    key={single_meal.id} 
                    name={single_meal.name}
                    description={single_meal.description}
                    price={single_meal.price}
                    setCartItem={props.setCartItem}
                    cartItem={props.cartItem}
                    setOrderState={props.setOrderState}
                    />
              })}
          </ul>
        </Card>
      </section>
    );
}

export default MealList;