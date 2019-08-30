import React from 'react';
import { useSelector } from 'react-redux';

const CreatePizzaButton = () => {
  const doughPrice = useSelector(state => state.dough.price);
  const ingredientsPrice = useSelector(state => {
    return Object.values(state.ingredients).reduce((acc, current) => {
      return acc + current.price;
    }, 0);
  });
  const currentSelectionPrice = doughPrice + ingredientsPrice;

  return <button>Add for {currentSelectionPrice} </button>;
};

export default CreatePizzaButton;
