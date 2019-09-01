import React from 'react';
import styled from 'styled-components/macro';

import {
  OrderSummary,
  DoughOption,
  Ingredient,
  PizzaGenerator,
} from '../components';
import { ingredientOptions, doughOptions } from '../data';
import { space } from '../styles/helpers';

const DoughOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin-top: ${space(2.5)};
`;

const Menu = ({ location }) => {
  return (
    <>
      <h2>Choose your size</h2>
      <DoughOptionsWrapper>
        {doughOptions.map(option => (
          <DoughOption key={option.size} {...option} />
        ))}
      </DoughOptionsWrapper>

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
