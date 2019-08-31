import * as actionTypes from './actionTypes';

export const setDough = data => {
  return {
    type: actionTypes.SET_DOUGH,
    data,
  };
};

export const deleteDough = () => {
  return {
    type: actionTypes.DELETE_DOUGH,
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

export const deleteIngredients = () => {
  return {
    type: actionTypes.DELETE_INGREDIENTS,
  };
};

export const createPizza = data => {
  return {
    type: actionTypes.CREATE_PIZZA,
    data,
  };
};

export const deletePizzas = () => {
  return {
    type: actionTypes.DELETE_PIZZAS,
  };
};
