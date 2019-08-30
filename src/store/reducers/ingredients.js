import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

const reducer = (state = initialState.ingredients, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_INGREDIENT:
      return {
        ...state,
        [action.name]: {
          isSelected: action.isSelected,
          price: action.price,
        },
      };
    default:
      return state;
  }
};

export default reducer;
