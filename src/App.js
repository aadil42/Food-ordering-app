import React, {useState, useContext} from 'react';

// components
import Header from './Components/Layout/Header';
import MealSummary from './Components/Layout/MealSummary';
import MealList from './Components/Meals/MealList';
import Cart from './Components/Cart/Cart';


// getting provider
import MealProvider from './Store/MealProvider';

// get the context
import MealContext from './Store/MealContext';

function App() {

  const ctx = useContext(MealContext);

  // globle state of cart items
  // const [orderState, setOrderState] = useState(DUMMY_MEALS);
  const [showCart, setShowCart] = useState(false);
  console.log(ctx,'from app');
  
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
