import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../input';
import { setDough } from '../../store/actions';
import { doughOptions } from '../../data';

const PizzaDoughSelection = () => {
  const selectedDough = useSelector(state => state.dough);
  const dispatch = useDispatch();

  const handleDoughSelection = (size, price) => {
    dispatch(setDough({ size, price }));
  };

  return (
    <>
      {doughOptions.map(({ size, price, label }) => (
        <label key={size}>
          {label}
          <Input
            checked={size === selectedDough.size}
            type="radio"
            value={size}
            name="pizzaDough"
            onChange={() => handleDoughSelection(size, price)}
          />
          {price}
        </label>
      ))}
    </>
  );
};

export default PizzaDoughSelection;
