import React, {useState} from 'react';

// components
import Header from './Components/Layout/Header';
import MealSummary from './Components/Layout/MealSummary';
import MealList from './Components/Meals/MealList';
import Cart from './Components/Cart/Cart';

function App() {
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


  // globle state of cart items
  const [cartItem, setCartItem] = useState('0');
  const [orderState, setOrderState] = useState(DUMMY_MEALS);

  return (
    <React.Fragment>
      <Header cartItem={cartItem} />
      <MealSummary  />
      <MealList DUMMY_MEALS={orderState} setOrderState={setOrderState} cartItem={cartItem} setCartItem={setCartItem} />
      {/* <Cart /> */}
    </React.Fragment> 
  );
}

export default App;
