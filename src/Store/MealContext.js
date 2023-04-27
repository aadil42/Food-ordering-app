import React from 'react';

// it's optional to add properties to your context object you can pass an empty object as well.
// but this is more tight way of creating a context
const MealContext = React.createContext({
    DUMMY_MEALS: [],
    updateOrder: () => {},
    showCart: () => {},
    isCart: false
});

export default MealContext;
