import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

const reducer = (state = initialState.selectedPizzas, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PIZZA:
      return [...state, action.data];
    default:
      return state;
  }
};

export default reducer;
