import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPizza, deleteIngredients, deleteDough } from '../store/actions';
import ButtonElement, { CustomContent } from './buttonElement';
import { currency } from '../helpers';

const PizzaGenerator = () => {
  const dispatch = useDispatch();
  const doughPrice = useSelector(state => state.dough.price);
  const doughSize = useSelector(state => state.dough.size);

  const ingredients = useSelector(state => {
    let selectedIngs = [];

    Object.entries(state.ingredients).forEach(([key, val]) => {
      if (val.isSelected) {
        selectedIngs = [...selectedIngs, key];
      }
    });

    return selectedIngs;
  });

  const ingredientsPrice = useSelector(state => {
    return Object.values(state.ingredients).reduce((acc, current) => {
      return acc + current.price;
    }, 0);
  });

  const currentSelectionPrice = doughPrice + ingredientsPrice;

  const makePizza = () => {
    const pizza = {
      price: currentSelectionPrice,
      dough: doughSize,
      ingredients,
    };
    dispatch(createPizza(pizza));
    dispatch(deleteDough());
    dispatch(deleteIngredients());
  };

  return (
    <ButtonElement isDisabled={!doughPrice} onClick={makePizza} type="button">
      Add to basket
      <CustomContent isHidden={!currentSelectionPrice}>
        &nbsp;for {currency.format(currentSelectionPrice)}
      </CustomContent>
    </ButtonElement>
  );
};

export default PizzaGenerator;
