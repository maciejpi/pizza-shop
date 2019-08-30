import { combineReducers } from 'redux';

import ingredients from './ingredients';
import dough from './dough';
import createPizza from './createPizza';

export default combineReducers({
  ingredients,
  dough,
  createPizza,
});
