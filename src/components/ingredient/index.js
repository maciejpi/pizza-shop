import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleIngredient } from '../../store/actions';
import Input from '../input';
import { ClickArea, Checkbox, CheckboxWrapper } from './style';
import { ItemName, ItemPrice } from '../../styles/common';

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

    if (firstUpdate.current === false) {
      firstUpdate.current = true;
    }
  }, [actualPrice, dispatch, isChecked, price, type]);

  const setIngredient = useCallback(
    () => toggleCheckbox(isChecked => !isChecked),
    []
  );

  return (
    <>
      <label>
        <ClickArea>
          <CheckboxWrapper>
            <Checkbox isChecked={isSelected} />
            <ItemName>{label}</ItemName>
            <Input
              checked={isSelected}
              type="checkbox"
              value={type}
              onChange={() => setIngredient()}
              isHidden
            />
          </CheckboxWrapper>
          <ItemPrice>{price}</ItemPrice>
        </ClickArea>
      </label>
    </>
  );
};

export default Ingredient;
