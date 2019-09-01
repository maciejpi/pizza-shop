import React from 'react';
import {
  OrderSummary,
  PizzaDoughSelection,
  Ingredient,
  PizzaGenerator,
} from '../components';
import { ingredientOptions } from '../data';

const Menu = ({ location }) => {
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
        <PizzaGenerator />
      </div>

      <OrderSummary {...location}></OrderSummary>
    </>
  );
};

export default Menu;
