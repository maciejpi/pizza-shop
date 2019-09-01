import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import Input from './input';
import { setDough } from '../store/actions';
import { colors } from '../styles/variables';
import { font } from '../styles/helpers';

const ClickArea = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 140px;
  border-radius: 4px;
  border: solid
    ${props =>
      props.isSelected ? `2px ${colors.red}` : `1px ${colors.greyDark}`};
`;

const Name = styled.span`
  font: ${font({ size: 'medium' })};
`;

const Price = styled.span`
  font: ${font({ size: 'medium', weight: 'bold' })};
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
          <Name>{label}</Name>
          <Input
            checked={size === selectedDough.size}
            type="radio"
            value={size}
            name="pizzaDough"
            onChange={() => handleDoughSelection(size, price)}
            isHidden
          />
          <Price>{price}</Price>
        </ClickArea>
      </label>
    </>
  );
};

export default DoughOption;
