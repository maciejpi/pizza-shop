import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

const reducer = (state = initialState.dough, action) => {
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

export default reducer;
