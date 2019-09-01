import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleIngredient } from '../../store/actions';
import Input from '../input';

const Ingredient = ({ label, type, price }) => {
  // setting the ref prevents dispatching 'toggleIngredient' on first render
  const firstUpdate = useRef(false);
  const dispatch = useDispatch();
  const [isChecked, toggleCheckbox] = useState(false);
  const isSelected = useSelector(state => state.ingredients[type].isSelected);
  const actualPrice = isChecked ? price : null;

  useEffect(() => {
    if (firstUpdate.current) {
      dispatch(toggleIngredient(type, actualPrice, isChecked));
    }

    firstUpdate.current = true;
  }, [actualPrice, dispatch, isChecked, price, type]);

  const setIngredient = useCallback(
    () => toggleCheckbox(isChecked => !isChecked),
    []
  );

  return (
    <>
      <label>
        {label}
        <Input
          checked={isSelected}
          type="checkbox"
          value={type}
          onChange={() => setIngredient()}
        />
        {price}
      </label>
    </>
  );
};

export default Ingredient;
