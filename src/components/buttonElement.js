import React from 'react';
import styled from 'styled-components/macro';

import { mainSectionWidth } from '../styles/variables';
import { space } from '../styles/helpers';

const Button = styled.button`
  border: 0;
  padding: 0;
  width: ${mainSectionWidth}px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: ${space(4)};
`;

export const CustomContent = styled.span`
  display: ${props => props.isDisabled && 'none'};
`;

const ButtonElement = ({ children, isDisabled, onClick }) => (
  <Button disabled={isDisabled} onClick={onClick}>
    {children}
  </Button>
);

export default ButtonElement;
