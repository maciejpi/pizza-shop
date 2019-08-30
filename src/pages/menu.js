import React from 'react';
import {
  PizzaDoughSelection,
  Ingredient,
  CreatePizzaButton,
} from '../components';
import { ingredientOptions } from '../data';

const Menu = props => {
  return (
    <>
      <h1>menu</h1>
      <h2>Select your pizza size:</h2>

      <PizzaDoughSelection />

      <h2>Select toppings:</h2>

      {ingredientOptions.map(option => (
        <Ingredient key={option.type} {...option} />
      ))}

      <div>
        <CreatePizzaButton />
      </div>
    </>
  );
};

export default Menu;
