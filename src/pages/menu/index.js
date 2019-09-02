import React from 'react';

import {
  OrderSummary,
  DoughOption,
  Ingredient,
  PizzaGenerator,
  Header,
} from '../../components';
import { ingredientOptions, doughOptions } from '../../data';
import { DoughOptionsWrapper, IngredientOptionsWrapper } from './style';
import { Layout } from '../../styles/common';

const Menu = ({ match }) => (
  <>
    <Header />
    <Layout>
      <main>
        <h2>Choose your size</h2>
        <DoughOptionsWrapper>
          {doughOptions.map(option => (
            <DoughOption key={option.size} {...option} />
          ))}
        </DoughOptionsWrapper>

        <h2>Add ingredients</h2>
        <p>All pizzas come with tomato sauce and mozzarella</p>
        <IngredientOptionsWrapper>
          {ingredientOptions.map(option => (
            <Ingredient key={option.type} {...option} />
          ))}
        </IngredientOptionsWrapper>

        <PizzaGenerator />
      </main>

      <OrderSummary {...match} isAligned />
    </Layout>
  </>
);

export default Menu;
