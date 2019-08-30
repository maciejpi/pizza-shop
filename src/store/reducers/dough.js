import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

export default (state = initialState.dough, action) => {
  switch (action.type) {
    case actionTypes.SET_DOUGH:
      return {
        ...state,
        size: action.data.size,
        price: action.data.price,
      };

    default:
      return state;
  }
};
