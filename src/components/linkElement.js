import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

import { CallToActionStyles } from '../styles/common';
import { space } from '../styles/helpers';

const StyledLink = styled(Link)`
  ${CallToActionStyles}
  text-decoration: none;
  pointer-events: ${props => props.disabled && 'none'};

  ${props =>
    props.secondary &&
    css`
      width: auto;
      margin-top: ${space(4)}
      padding: 0 ${space(4)};
    `};
`;

const LinkElement = ({ children, linkTo, isDisabled, secondary }) => (
  <StyledLink disabled={isDisabled} to={linkTo} secondary={secondary}>
    {children}
  </StyledLink>
);

export default LinkElement;
