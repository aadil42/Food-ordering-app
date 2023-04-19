import React from 'react';

// components
import Header from './Components/Layout/Header';
import MealSummary from './Components/Layout/MealSummary';
import MealList from './Components/Meals/MealList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealSummary  />
      <MealList />
    </React.Fragment>
  );
}

export default App;
