import * as actionTypes from './actionTypes';

export const setDough = data => {
  return {
    type: actionTypes.SET_DOUGH,
    data,
  };
};
