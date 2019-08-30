import * as actionTypes from './actionTypes';

export const setDough = data => {
  return {
    type: actionTypes.SET_DOUGH,
    data,
  };
};

export const toggleIngredient = (name, price, isSelected) => {
  return {
    type: actionTypes.TOGGLE_INGREDIENT,
    name,
    price,
    isSelected,
  };
};
