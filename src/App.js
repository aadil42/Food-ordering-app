import React, {useState} from 'react';

// components
import Header from './Components/Layout/Header';
import MealSummary from './Components/Layout/MealSummary';
import MealList from './Components/Meals/MealList';
import Cart from './Components/Cart/Cart';

function App() {

  const [cartItem, setCartItem] = useState('0');

  return (
    <React.Fragment>
      <Header cartItem={cartItem} />
      <MealSummary  />
      <MealList setCartItem={setCartItem} />
      {/* <Cart /> */}
    </React.Fragment> 
  );
}

export default App;
