import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toggleIngredient } from '../../store/actions';

const Ingredient = ({ label, type, price }) => {
  // setting the ref prevents dispatching 'toggleIngredient' on first render
  const firstUpdate = useRef(false);
  const dispatch = useDispatch();
  const [isChecked, toggleCheckbox] = useState(false);

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
        <input
          checked={isChecked}
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