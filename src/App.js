import React, {useState} from 'react';

// components
import Header from './Components/Layout/Header';
import MealSummary from './Components/Layout/MealSummary';
import MealList from './Components/Meals/MealList';
import Cart from './Components/Cart/Cart';


// getting provider
import MealProvider from './Store/MealProvider';


function App() {
  // globle state of cart items
  // const [orderState, setOrderState] = useState(DUMMY_MEALS);
  const [showCart, setShowCart] = useState(false);
  
  return (
    <MealProvider>
      <Header setShowCart={setShowCart}/>
      <MealSummary  />
      <MealList />
      {showCart && <Cart setShowCart={setShowCart}/>}
    </MealProvider> 
  );
}

export default App;
