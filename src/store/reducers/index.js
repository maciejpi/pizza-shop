import { combineReducers } from 'redux';

import ingredients from './ingredients';
import dough from './dough';
import selectedPizzas from './selectedPizzas';

export default combineReducers({
  ingredients,
  dough,
  selectedPizzas,
});
