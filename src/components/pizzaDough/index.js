import React from 'react';
import { useDispatch } from 'react-redux';

import { setDough } from '../../store/actions';
import { doughOptions } from '../../data';

const PizzaDoughSelection = () => {
  const dispatch = useDispatch();

  const handleDoughSelection = (size, price) => {
    dispatch(setDough({ size, price }));
  };

  return (
    <>
      {doughOptions.map(({ size, price, label }) => (
        <label key={size}>
          {label}
          <input
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
