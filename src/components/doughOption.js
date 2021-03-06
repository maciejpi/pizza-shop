import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { setDough } from '../store/actions';
import { ClickAreaBase, ItemName, ItemPrice } from '../styles/common';
import { colors } from '../styles/variables';
import Input from './input';
import { currency } from '../helpers';

const ClickArea = styled(ClickAreaBase)`
  flex-direction: column;
  justify-content: space-around;
  width: 180px;
  height: 140px;
  border: solid
    ${props =>
      props.isSelected ? `2px ${colors.red}` : `1px ${colors.greyDark}`};
`;

const DoughOption = ({ size, price, label }) => {
  const selectedDough = useSelector(state => state.dough);
  const dispatch = useDispatch();

  const handleDoughSelection = (size, price) => {
    dispatch(setDough({ size, price }));
  };

  return (
    <>
      <label>
        <ClickArea isSelected={size === selectedDough.size}>
          <ItemName>{label}</ItemName>

          <Input
            checked={size === selectedDough.size}
            type="radio"
            value={size}
            name="pizzaDough"
            onChange={() => handleDoughSelection(size, price)}
            isHidden
          />

          <ItemPrice>{currency.format(price)}</ItemPrice>
        </ClickArea>
      </label>
    </>
  );
};

export default DoughOption;
